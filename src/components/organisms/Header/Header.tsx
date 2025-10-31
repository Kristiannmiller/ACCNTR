import {
    ComponentProps,
    ReactElement,
    useEffect,
    useRef,
    useState
} from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    GlobalNavigation,
    GlobalNavigationDataProps,
    UtilityNavigationDesktop,
    UtilityNavigationDesktopDataProps
} from '@/components';

// Styles
import styles from './Header.module.scss';

// Hooks
import { useScrollYDirection } from '@/hooks';

// Types
import { VARIANT_TYPES } from '@/types';

export type HeaderNavigationLink = {
    type: 'link';
    link: ReactElement<HTMLAnchorElement>;
    mobileLink?: ReactElement<HTMLAnchorElement>;
};

export type HeaderNavigationDropdown = {
    type: 'dropdown';
    title: string;
    links: {
        link: ReactElement<HTMLAnchorElement>;
        mobileLink?: ReactElement<HTMLAnchorElement>;
    }[];
};

export type HeaderCtaButtonLink = {
    link: ReactElement;
    color: Extract<VARIANT_TYPES, 'light2' | 'solid1' | 'solid2'>;
};

export type HeaderCtaButtons =
    | undefined
    | [HeaderCtaButtonLink]
    | [HeaderCtaButtonLink, HeaderCtaButtonLink];

export type HeaderProps = {
    utilityNavigation?: UtilityNavigationDesktopDataProps;
    globalNavigation: GlobalNavigationDataProps;
    /** Which of the two ctaButtons in the utilityNavigation should be featured in the main navigation on mobile. \
     * `undefined` = neither button \
     * `1` = first button \
     * `2` = second button
     */
    featuredUtilityCtaNumber?: 1 | 2;
};

export type AllHeaderProps = ComponentProps<'header'> & HeaderProps;

export const Header = (props: AllHeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const searchBarHeight = 96;
    const scrollDir = useScrollYDirection({ threshold: searchBarHeight });
    const [isStuck, setIsStuck] = useState<boolean | undefined>();
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

    const {
        className,
        utilityNavigation,
        globalNavigation,
        featuredUtilityCtaNumber,
        ...rest
    } = props;

    // Observe when the navigation menu is stuck.
    useEffect(() => {
        if (!sentinelRef.current) {
            return;
        }

        // Set the initial state of the navigation menu.
        // - Ensures initial 'isStuck' state is correct if the page loads scrolled down before the observer kicks in.
        setIsStuck((sentinelRef.current?.getBoundingClientRect().top ?? 0) < 0);

        let isAnimationPlaying = false;

        /** Wait for the animation to finish
         * to prevent an issue where the sentinal ref bounces in and out of the viewport */
        const isWaitingForAnimation = () => {
            if (isAnimationPlaying) {
                return true;
            }

            isAnimationPlaying = true;

            setTimeout(() => {
                isAnimationPlaying = false;
            }, 200);

            return false;
        };

        const observer = new IntersectionObserver((entries) => {
            if (!isWaitingForAnimation()) {
                setIsStuck(!entries.some((e) => e.isIntersecting));
            }
        });

        observer.observe(sentinelRef.current);

        return () => {
            observer.disconnect();
        };
    }, [sentinelRef.current]);

    /** Whether the header is slid down to reveal the utility nav. \
     * If there is no utility nav, the header is always "slid down", (e.g. `top: 0px`).
     */
    const isSlidDown =
        (isStuck &&
            scrollDir === 'up' &&
            window.scrollY > (headerRef.current?.offsetHeight ?? 0)) ||
        !utilityNavigation;

    useEffect(() => {
        if (!window) {
            return;
        }

        const setHeaderHeight = () => {
            if (!document.body || !headerRef.current) {
                return;
            }

            const convertValueToRem =
                headerRef.current.getBoundingClientRect().bottom / 16;

            document.body.style.setProperty(
                '--header-height',
                `${convertValueToRem}rem`
            );
        };

        setTimeout(setHeaderHeight, 201);
    }, [headerRef.current, isStuck, isSlidDown, isSearchBarOpen]);

    const featuredCtaButton = featuredUtilityCtaNumber
        ? utilityNavigation?.ctaButtons?.[featuredUtilityCtaNumber - 1]
        : undefined;

    return (
        <>
            <div
                className={cx(styles['sentinel'], {
                    [styles['stuck']]: isStuck
                })}
                ref={sentinelRef}></div>
            <header
                data-testid='header'
                ref={headerRef}
                className={cx(styles['header'], {
                    // Transparent background must be fixed to allow the components below to slide up behind the header.
                    [styles['fixed']]:
                        globalNavigation.backgroundColor === 'transparent',
                    [styles['slide-down']]: isSlidDown,
                    className
                })}
                {...rest}>
                {utilityNavigation && (
                    <UtilityNavigationDesktop {...utilityNavigation} />
                )}
                <GlobalNavigation
                    isStuck={isStuck}
                    utilityNavigation={utilityNavigation}
                    featuredCtaButton={featuredCtaButton}
                    isSearchBarOpen={isSearchBarOpen}
                    setIsSearchBarOpen={setIsSearchBarOpen}
                    {...globalNavigation}
                />
            </header>
        </>
    );
};
