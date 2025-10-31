import { ComponentProps, useEffect, useState } from 'react';

import ScrollspyNav from 'react-scrollspy-nav';

// Component
import {
    Anchor,
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuList,
    DropdownMenuListItem,
    DropdownMenuMobile,
    DropdownMenuTrigger,
    SvgIcon,
    DropdownMenuSingle
} from '@/components';

import { cx } from 'class-variance-authority';

// Styles
import styles from './LeftSideNavigationAnchorLinks.module.scss';

// Types
export type NavigationElement = {
    children?: NavigationElement[];
    navigationTitle: string;
    url: string;
};

type NavigationElementType = {
    item: NavigationElement;
};
const NavigationElement = (props: NavigationElementType) => {
    const { item } = props;
    const { url, navigationTitle, children } = item;

    return (
        <DropdownMenuItem value={navigationTitle}>
            <DropdownMenuListItem>
                <Anchor
                    href={url}
                    underline='always'
                    asInherited
                    title={navigationTitle}>
                    {navigationTitle}
                </Anchor>
                {children && !!children?.length && (
                    <NestedChildrenList listItems={children} />
                )}
            </DropdownMenuListItem>
        </DropdownMenuItem>
    );
};

type FirstListType = {
    navigations: NavigationElement;
};
const FirstList = (props: FirstListType) => {
    const { navigations } = props;

    return (
        <DropdownMenuSingle>
            <DropdownMenuList data-testid='left-side-navigation-anchor-links-list'>
                {navigations?.children?.map((item, index) => (
                    <NavigationElement
                        key={index}
                        item={item}
                    />
                ))}
            </DropdownMenuList>
        </DropdownMenuSingle>
    );
};

type NestedChildrenList = {
    listItems: NavigationElement[];
};
const NestedChildrenList = (props: NestedChildrenList) => {
    const { listItems } = props;

    return (
        <DropdownMenuSingle>
            <DropdownMenuList>
                {listItems.map((item, index) => (
                    <NavigationElement
                        key={index}
                        item={item}
                    />
                ))}
            </DropdownMenuList>
        </DropdownMenuSingle>
    );
};

export type LeftSideNavigationAnchorLinksProps = ComponentProps<
    typeof DropdownMenuContent
> & {
    navigations: NavigationElement;
};

export const LeftSideNavigationAnchorLinksContent = (
    props: LeftSideNavigationAnchorLinksProps
) => {
    const { navigations } = props;

    return (
        <DropdownMenuContent title={navigations.navigationTitle}>
            {/* The main items */}
            <FirstList {...props} />
        </DropdownMenuContent>
    );
};

export const LeftSideNavigationAnchorLinks = (
    props: LeftSideNavigationAnchorLinksProps
) => {
    const { navigations, ...rest } = props;
    const flattenNavigations = (navigations: NavigationElement[]): string[] => {
        let result: string[] = [];

        for (const navigation of navigations) {
            result.push(navigation.url.slice(1)); // Add the current navigation

            if (navigation.children) {
                // Recursively add children
                result = result.concat(flattenNavigations(navigation.children));
            }
        }

        return result;
    };

    const getLinkTargets = flattenNavigations(navigations.children || []);

    return (
        <div {...rest}>
            {/* Desktop */}
            <div className={styles['left-side-navigation-anchor-links-base']}>
                <ScrollspyNav
                    scrollTargetIds={getLinkTargets}
                    activeNavClass={cx(styles['active-scroll-spy'])}
                    offset={55}>
                    <DropdownMenu
                        className={cx(
                            styles['left-side-navigation-anchor-links-base'],
                            styles['left-side-navigation-anchor-desktop']
                        )}
                        type={'multiple'}
                        defaultValue={['item-1']}
                        id='radix-:r0:'
                        data-testid='left-side-navigation-anchor-links'>
                        <DropdownMenuItem value='item-1'>
                            <LeftSideNavigationAnchorLinksContent {...props} />
                        </DropdownMenuItem>
                    </DropdownMenu>
                </ScrollspyNav>
            </div>

            {/* Mobile */}
            <DropdownMenuMobile
                className={cx(
                    styles['left-side-navigation-anchor-links-base'],
                    styles['left-side-navigation-anchor-mobile']
                )}
                type='multiple'>
                <DropdownMenuItem
                    value='item-1'
                    id='radix-:r0:'>
                    <DropdownMenuTrigger title='Page navigation'>
                        <span>Page navigation </span>
                        <SvgIcon icon='bars' />
                        <SvgIcon icon='close' />
                    </DropdownMenuTrigger>
                    <LeftSideNavigationAnchorLinksContent {...props} />
                </DropdownMenuItem>
            </DropdownMenuMobile>
        </div>
    );
};

type NavigationBackToTopAnchor = {
    className?: string;
};
export const LeftSideNavigationBackToTopAnchor = (
    props: NavigationBackToTopAnchor
) => {
    const { className } = props;
    const [isShowing, setIsShowing] = useState<boolean>(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const onScroll = () => {
                setIsShowing(window.scrollY > 200);
            };

            window.addEventListener('scroll', onScroll);

            return () => window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // for smoothly scrolling
            });
        }
    };

    return (
        <div
            className={cx(styles['anchor-back'], className)}
            data-hide={`${isShowing ? 'show' : 'hide'}`}>
            <a
                title='Jump to Start of Content'
                onClick={scrollToTop}>
                <SvgIcon icon={'arrowUp'} />
            </a>
        </div>
    );
};
