import {
    ComponentProps,
    ReactElement,
    useRef,
    useEffect,
    useState,
    cloneElement,
    ReactNode
} from 'react';
import { cx } from 'class-variance-authority';
import { VisuallyHidden } from '@radix-ui/themes';

// Components
import {
    Container,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetPortal,
    SheetTrigger,
    SvgIcon,
    SheetOverlay,
    UtilityNavigationMobile,
    Anchor,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContentPlain,
    BUTTON_VARIANTS,
    HeaderNavigationLink,
    HeaderNavigationDropdown,
    HeaderCtaButtonLink,
    UtilityNavigationMobileDataProps,
    SheetClose,
    SheetTitle,
    SheetDescription
} from '@/components';
import * as Collapsible from '@radix-ui/react-collapsible';

// Styles
import { buttonCVA } from '@/components/atoms/Button/styles';
import styles from './GlobalNavigation.module.scss';

export const navItemColors = [
    'orange',
    'yellow',
    'purple',
    'blue',
    'green'
] as const;

export const backgroundColorOptions = ['white', 'transparent'] as const;

export type NAV_ITEM_COLOR = (typeof navItemColors)[number];

export type BACKGROUND_COLOR = (typeof backgroundColorOptions)[number];

export type GlobalNavigationStateProps = {
    isStuck?: boolean;
    isSearchBarOpen: boolean;
    setIsSearchBarOpen: (isOpen: boolean) => void;
};

const MOBILE_SHEET_ANIMATION_DURATION = 251;

export type GlobalNavigationDataProps = {
    logoUrl: string; // "/"
    logoImage: ReactElement;
    /** Displays when backgroundColor is set to 'transparent' */
    logoImageInverse?: ReactElement;
    logoTitle: string; // "Advocate Aurora Health"
    backgroundColor: BACKGROUND_COLOR;
    ariaLabel?: string; // "Main Navigation"
    navigationItems: Array<
        | (HeaderNavigationLink & { color?: NAV_ITEM_COLOR })
        | (HeaderNavigationDropdown & { color?: NAV_ITEM_COLOR })
    >;
    mobileMenuTriggerOpenLabel: string; // "MENU"
    mobileMenuTriggerCloseLabel: string; // "CLOSE"
    searchLabel: string; // "Search"
    searchPlaceholder: string; // "What can we help you find? "
    searchUrl?: string; // "/search"
    searchColor?: NAV_ITEM_COLOR;
    mobileCallLink?: ReactElement<HTMLAnchorElement>;
    utilityNavigation?: UtilityNavigationMobileDataProps;
    featuredCtaButton?: HeaderCtaButtonLink;
};

export type GlobalNavigationProps = Omit<
    ComponentProps<'div'>,
    'dir' | 'defaultValue'
> &
    GlobalNavigationDataProps &
    GlobalNavigationStateProps;

export const GlobalNavigation = (props: GlobalNavigationProps) => {
    const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
    const navMenuRef = useRef<HTMLDivElement>(null);
    const desktopSearchRef = useRef<HTMLInputElement>(null);
    const [isMobileSearchClicked, setIsMobileSearchClicked] = useState(false);
    const {
        className,
        isStuck,
        isSearchBarOpen,
        setIsSearchBarOpen,
        logoUrl,
        logoTitle,
        logoImage,
        logoImageInverse,
        ariaLabel = 'Main Navigation',
        navigationItems,
        mobileMenuTriggerOpenLabel,
        mobileMenuTriggerCloseLabel,
        searchLabel,
        searchPlaceholder,
        searchUrl,
        searchColor,
        mobileCallLink,
        utilityNavigation,
        featuredCtaButton,
        backgroundColor
    } = props;

    useEffect(() => {
        if (isSearchBarOpen && desktopSearchRef.current) {
            desktopSearchRef.current.focus();
        }
    }, [isSearchBarOpen, desktopSearchRef.current]);

    // Allow users to interact with the main nav when the mobile menu is open.
    // Overrides radix's default behavior of disabling pointer events on the body when a sheet is open.
    useEffect(() => {
        if (!document.body) return;
        // Wait for the animation to finish.
        setTimeout(() => {
            if (isMobileSheetOpen) {
                document.body.style.pointerEvents = 'initial';
            } else {
                document.body.style.pointerEvents = '';
            }
        }, MOBILE_SHEET_ANIMATION_DURATION);
    }, [isMobileSheetOpen]);

    useEffect(() => {
        if (!isMobileSheetOpen) {
            setIsMobileSearchClicked(false);
        }
    }, [isMobileSheetOpen]);

    return (
        <Sheet
            open={isMobileSheetOpen}
            onOpenChange={setIsMobileSheetOpen}>
            <Collapsible.Root
                asChild
                open={isSearchBarOpen}
                onOpenChange={setIsSearchBarOpen}>
                <Container
                    customRef={navMenuRef}
                    className={cx(styles['container'], {
                        [styles['stuck']]: isStuck,
                        [styles['bg-transparent']]:
                            backgroundColor === 'transparent'
                    })}>
                    <NavigationMenu
                        data-testid='global-navigation'
                        aria-label={ariaLabel}
                        className={cx(
                            styles['nav-menu'],
                            isStuck && styles['stuck'],
                            className
                        )}>
                        {logoImageInverse &&
                            backgroundColor === 'transparent' && (
                                <a
                                    href={logoUrl}
                                    title={logoTitle}
                                    className={cx(
                                        styles['logo'],
                                        styles['logo-inverse']
                                    )}>
                                    {logoImageInverse}
                                </a>
                            )}
                        <a
                            href={logoUrl}
                            title={logoTitle}
                            className={cx(
                                styles['logo'],
                                styles['logo-default']
                            )}>
                            {logoImage}
                        </a>
                        {/* Desktop */}
                        <DesktopMenuList
                            navigationItems={navigationItems}
                            searchLabel={searchLabel}
                            searchUrl={searchUrl}
                            searchColor={searchColor}
                        />
                        {/* Mobile */}
                        <MobileMenuList
                            isMobileSheetOpen={isMobileSheetOpen}
                            mobileMenuTriggerOpenLabel={
                                mobileMenuTriggerOpenLabel
                            }
                            mobileMenuTriggerCloseLabel={
                                mobileMenuTriggerCloseLabel
                            }
                            searchLabel={searchLabel}
                            mobileCallLink={mobileCallLink}
                            searchUrl={searchUrl}
                            featuredCtaButton={featuredCtaButton}
                            setIsMobileSearchClicked={setIsMobileSearchClicked}
                        />
                    </NavigationMenu>

                    {/* Search bar */}
                    {searchUrl && (
                        <Collapsible.Content
                            data-testid='desktop-search'
                            className={styles['desktop-search']}>
                            <form
                                action={searchUrl}
                                className={styles['desktop-search-form']}>
                                <input
                                    ref={desktopSearchRef}
                                    name='q'
                                    type='search'
                                    placeholder={searchPlaceholder}
                                />
                                <button
                                    type='submit'
                                    aria-label={searchLabel}>
                                    <SvgIcon icon='magnifyingGlass' />
                                </button>
                            </form>
                        </Collapsible.Content>
                    )}
                </Container>
            </Collapsible.Root>
            {/* Mobile Menu Sheet */}
            <SheetPortal>
                <VisuallyHidden>
                    <SheetTitle>{ariaLabel}</SheetTitle>
                </VisuallyHidden>
                <SheetContent
                    data-mobile-menu
                    direction='top'
                    className={styles['sheet-content']}>
                    <VisuallyHidden>
                        <SheetDescription>{ariaLabel}</SheetDescription>
                    </VisuallyHidden>
                    {/* Todo - find a way to avoid this duplication. */}
                    <SheetHeader className={styles['sheet-header']}>
                        <Container>
                            <NavigationMenu
                                data-testid='global-navigation-mobile'
                                aria-label={ariaLabel}
                                className={cx(
                                    styles['nav-menu'],
                                    isStuck && styles['stuck'],
                                    className
                                )}>
                                {logoImageInverse &&
                                    backgroundColor === 'transparent' && (
                                        <a
                                            href={logoUrl}
                                            title={logoTitle}
                                            className={cx(
                                                styles['logo'],
                                                styles['logo-inverse']
                                            )}>
                                            {logoImageInverse}
                                        </a>
                                    )}
                                <a
                                    href={logoUrl}
                                    title={logoTitle}
                                    className={cx(
                                        styles['logo'],
                                        styles['logo-default']
                                    )}>
                                    {logoImage}
                                </a>
                                <MobileMenuList
                                    isMobileSheetOpen={isMobileSheetOpen}
                                    mobileMenuTriggerOpenLabel={
                                        mobileMenuTriggerOpenLabel
                                    }
                                    mobileMenuTriggerCloseLabel={
                                        mobileMenuTriggerCloseLabel
                                    }
                                    searchLabel={searchLabel}
                                    mobileCallLink={mobileCallLink}
                                    searchUrl={searchUrl}
                                    featuredCtaButton={featuredCtaButton}
                                    setIsMobileSearchClicked={
                                        setIsMobileSearchClicked
                                    }
                                />
                            </NavigationMenu>
                        </Container>
                    </SheetHeader>
                    <MobileSheetContent
                        navigationItems={navigationItems}
                        searchPlaceholder={searchPlaceholder}
                        searchUrl={searchUrl}
                        searchLabel={searchLabel}
                        utilityNavigation={utilityNavigation}
                        isMobileSearchClicked={isMobileSearchClicked}
                        setIsMobileSheetOpen={setIsMobileSheetOpen}
                    />
                </SheetContent>
                <SheetOverlay className={styles['sheet-overlay']} />
            </SheetPortal>
        </Sheet>
    );
};

const DesktopMenuList = (
    props: Pick<
        GlobalNavigationProps,
        'navigationItems' | 'searchUrl' | 'searchLabel' | 'searchColor'
    >
) => {
    const { navigationItems, searchUrl, searchLabel, searchColor } = props;

    return (
        <NavigationMenuList
            className={cx(styles['nav-list'], styles['nav-list-desktop'])}>
            {navigationItems?.map((item, idx) => {
                const { color } = item;
                if (item.type === 'dropdown') {
                    const { title, links } = item;

                    return (
                        <NavigationMenuItem
                            key={`nav-item-${idx}`}
                            value={`nav-item-${idx}`}>
                            <NavigationMenuTrigger
                                className={cx(
                                    styles['nav-item-link'],
                                    color ? styles['color'] : '',
                                    color ? styles[color] : ''
                                )}>
                                <span data-text={title}>{title}</span>
                            </NavigationMenuTrigger>

                            <NavigationMenuContent
                                className={styles['nav-item-menu']}>
                                {links.map((link, idx) => (
                                    <NavigationMenuLink
                                        className={cx(
                                            styles['nav-item-menu-link']
                                        )}
                                        underline='none'
                                        asInherited
                                        key={idx}>
                                        {link.link}
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    );
                }
                return (
                    <NavigationMenuItem key={idx}>
                        <NavigationMenuLink
                            asInherited
                            underline='none'
                            className={cx(
                                styles['nav-item-link'],
                                color ? styles['color'] : '',
                                color ? styles[color] : ''
                            )}>
                            {item.link}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                );
            })}
            {searchUrl && (
                <NavigationMenuItem value='nav-item-search'>
                    <Collapsible.Trigger
                        className={cx(
                            styles['nav-item-link'],
                            searchColor ? styles['color'] : '',
                            searchColor ? styles[searchColor] : ''
                        )}>
                        <span>{searchLabel}</span>
                        <SvgIcon icon='magnifyingGlass' />
                    </Collapsible.Trigger>
                </NavigationMenuItem>
            )}
        </NavigationMenuList>
    );
};

const MobileMenuList = (
    props: Pick<
        GlobalNavigationProps,
        | 'searchUrl'
        | 'searchLabel'
        | 'mobileCallLink'
        | 'mobileMenuTriggerOpenLabel'
        | 'mobileMenuTriggerCloseLabel'
        | 'featuredCtaButton'
    > & {
        isMobileSheetOpen: boolean;
        setIsMobileSearchClicked: (value: boolean) => void;
    }
) => {
    const {
        isMobileSheetOpen,
        searchUrl,
        searchLabel,
        mobileCallLink,
        mobileMenuTriggerOpenLabel,
        mobileMenuTriggerCloseLabel,
        featuredCtaButton,
        setIsMobileSearchClicked
    } = props;

    return (
        <NavigationMenuList
            className={cx(styles['nav-list'], styles['nav-list-mobile'])}>
            {featuredCtaButton ? (
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cx(
                            styles['featured-cta'],
                            buttonCVA({
                                variant:
                                    featuredCtaButton.color as BUTTON_VARIANTS
                            })
                        )}>
                        {featuredCtaButton.link}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ) : mobileCallLink ? (
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={styles['nav-item-link']}
                        asInherited
                        underline='none'>
                        {cloneElement(mobileCallLink as ReactElement, {
                            children: (
                                <>
                                    <span
                                        className={
                                            styles['nav-item-link-text']
                                        }>
                                        {
                                            mobileCallLink.props
                                                .children as ReactNode
                                        }
                                    </span>
                                    <SvgIcon
                                        icon='phone'
                                        flip='horizontal'
                                    />
                                </>
                            )
                        })}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ) : (
                searchUrl && (
                    <NavigationMenuItem
                        className={cx(isMobileSheetOpen && styles['invisible'])}
                        aria-hidden={isMobileSheetOpen ? 'true' : 'false'}>
                        <SheetTrigger
                            className={cx(styles['nav-item-link'])}
                            onClick={() => setIsMobileSearchClicked(true)}>
                            <span className={cx(styles['nav-item-link-text'])}>
                                {searchLabel?.toUpperCase()}
                            </span>
                            <SvgIcon icon='magnifyingGlass' />
                        </SheetTrigger>
                    </NavigationMenuItem>
                )
            )}

            <NavigationMenuItem>
                {isMobileSheetOpen ? (
                    <SheetClose className={styles['nav-item-link']}>
                        <span
                            className={cx(styles['nav-item-link-text'])}
                            data-text={mobileMenuTriggerCloseLabel}>
                            {mobileMenuTriggerCloseLabel}
                        </span>
                        <SvgIcon icon='xmark' />
                    </SheetClose>
                ) : (
                    <SheetTrigger className={styles['nav-item-link']}>
                        <span
                            className={cx(styles['nav-item-link-text'])}
                            data-text={mobileMenuTriggerCloseLabel}>
                            {mobileMenuTriggerOpenLabel}
                        </span>
                        <SvgIcon icon='bars' />
                    </SheetTrigger>
                )}
            </NavigationMenuItem>
        </NavigationMenuList>
    );
};

const MobileSheetContent = (
    props: Pick<
        GlobalNavigationDataProps,
        | 'navigationItems'
        | 'searchPlaceholder'
        | 'searchUrl'
        | 'searchLabel'
        | 'utilityNavigation'
    > & {
        isMobileSearchClicked: boolean;
        setIsMobileSheetOpen: (value: boolean) => void;
    }
) => {
    const {
        navigationItems,
        searchPlaceholder,
        searchUrl,
        searchLabel,
        utilityNavigation,
        isMobileSearchClicked,
        setIsMobileSheetOpen
    } = props;

    return (
        <div className={styles['mobile-menu']}>
            {searchUrl && (
                <Container backgroundColor='whiteSmoke'>
                    <form
                        action={searchUrl}
                        className={styles['mobile-search-form']}>
                        <input
                            name='q'
                            type='search'
                            placeholder={searchPlaceholder}
                            autoFocus={isMobileSearchClicked}
                        />
                        <button
                            type='submit'
                            aria-label={searchLabel}>
                            <SvgIcon icon='magnifyingGlass' />
                        </button>
                    </form>
                </Container>
            )}

            <div className={styles['mobile-nav-items']}>
                {navigationItems.map((item, idx) => {
                    if (item.type === 'dropdown') {
                        return (
                            <Accordion
                                type='single'
                                key={idx}
                                collapsible
                                className={styles['mobile-accordion']}>
                                <AccordionItem
                                    value={item.title}
                                    className={styles['mobile-accordion-item']}>
                                    <AccordionTrigger
                                        className={
                                            styles['mobile-accordion-trigger']
                                        }>
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContentPlain
                                        className={
                                            styles['mobile-accordion-content']
                                        }>
                                        {item.links.map((link, idx) => (
                                            <Anchor
                                                key={idx}
                                                asInherited
                                                className={
                                                    styles['mobile-link']
                                                }
                                                onClick={() => {
                                                    setIsMobileSheetOpen(false);
                                                }}>
                                                {link.mobileLink ?? link.link}
                                            </Anchor>
                                        ))}
                                    </AccordionContentPlain>
                                </AccordionItem>
                            </Accordion>
                        );
                    }
                    if (item.type === 'link') {
                        return (
                            <Anchor
                                asInherited
                                className={styles['mobile-link']}
                                key={idx}
                                onClick={() => {
                                    setIsMobileSheetOpen(false);
                                }}>
                                {item.mobileLink ?? item.link}
                            </Anchor>
                        );
                    }
                })}
            </div>

            {utilityNavigation && (
                <Container backgroundColor='whiteSmoke'>
                    <UtilityNavigationMobile
                        className={styles['mobile-menu-utility']}
                        {...utilityNavigation}
                    />
                </Container>
            )}
        </div>
    );
};
