import { ComponentProps, useState } from 'react';

// Component
import {
    Anchor,
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuList,
    DropdownMenuListItem,
    DropdownMenuMobile,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    SvgIcon,
    DropdownMenuSingle
} from '@/components';

import { cx } from 'class-variance-authority';

// Styles
import styles from './LeftNavigation.module.scss';

// Types
export type NavigationItem = {
    children?: NavigationItem[];
    id: string;
    isActive: boolean;
    navigationTitle: string;
    url: string;
    target?: string;
};

export type LeftNavigationProps = ComponentProps<'div'> & {
    navigations: NavigationItem;
};

const numberOfLinksBeforeShowMore = 10;

const ShowHideButton = (props: {
    isShowingMore: boolean;
    setIsShowingMore(x: boolean): void;
}) => {
    const { isShowingMore, setIsShowingMore } = props;

    const title = isShowingMore ? 'Show less' : 'Show more';

    return (
        <button
            type='button'
            className={cx(styles['left-navigation-button'])}
            onClick={() => {
                setIsShowingMore(!isShowingMore);
            }}
            title={title}>
            {title}
        </button>
    );
};

type NavigationItemType = {
    item: NavigationItem;
    isShowingMore: boolean;
};
const NavigationItem = (props: NavigationItemType) => {
    const { item, isShowingMore } = props;
    const { id, url, isActive, navigationTitle, target, children } = item;

    if (!children || children.length === 0) {
        return (
            <DropdownMenuItem value={id}>
                <DropdownMenuListItem>
                    <Anchor
                        href={url}
                        target={target}
                        underline='hover'
                        data-isactive={isActive}
                        asInherited
                        title={navigationTitle}>
                        {navigationTitle}
                    </Anchor>
                </DropdownMenuListItem>
            </DropdownMenuItem>
        );
    }

    return (
        <DropdownMenuItem value={id}>
            <DropdownMenuListItem>
                <div>
                    <Anchor
                        href={url}
                        underline='hover'
                        data-isactive={isActive}
                        asInherited
                        title={navigationTitle}>
                        {navigationTitle}
                    </Anchor>
                    {children && (
                        <DropdownMenuSubTrigger
                            title={
                                isShowingMore
                                    ? `See less ${navigationTitle}`
                                    : `See more ${navigationTitle}`
                            }
                        />
                    )}
                </div>
                {children && (
                    <DropdownMenuContent title={navigationTitle}>
                        <NestedChildrenList listItems={children} />
                    </DropdownMenuContent>
                )}
            </DropdownMenuListItem>
        </DropdownMenuItem>
    );
};

type FirstListType = {
    navigations: NavigationItem;
};
const FirstList = (props: FirstListType) => {
    const { navigations } = props;
    const [isShowingMore, setIsShowingMore] = useState<boolean>(false);
    const firstLinks =
        navigations?.children?.slice(0, numberOfLinksBeforeShowMore) ?? [];
    const additionalLinks =
        navigations?.children?.slice(numberOfLinksBeforeShowMore) ?? [];

    return (
        <DropdownMenuSingle>
            <DropdownMenuList data-testid='left-navigation-list'>
                {firstLinks.map((item, index) => (
                    <NavigationItem
                        key={index}
                        item={item}
                        isShowingMore={isShowingMore}
                    />
                ))}
                {additionalLinks.length > 0 && (
                    <>
                        {isShowingMore &&
                            additionalLinks.map((item, index) => (
                                <NavigationItem
                                    key={index}
                                    item={item}
                                    isShowingMore={isShowingMore}
                                />
                            ))}
                        <ShowHideButton
                            isShowingMore={isShowingMore}
                            setIsShowingMore={setIsShowingMore}
                        />
                    </>
                )}
            </DropdownMenuList>
        </DropdownMenuSingle>
    );
};

type NestedChildrenList = {
    listItems: NavigationItem[];
};
const NestedChildrenList = (props: NestedChildrenList) => {
    const { listItems } = props;
    const [isShowingMore, setIsShowingMore] = useState<boolean>(false);
    const firstLinks = listItems.slice(0, numberOfLinksBeforeShowMore) ?? [];
    const additionalLinks = listItems.slice(numberOfLinksBeforeShowMore) ?? [];

    return (
        <DropdownMenuSingle>
            <DropdownMenuList>
                {firstLinks.map((item, index) => (
                    <NavigationItem
                        key={index}
                        item={item}
                        isShowingMore={isShowingMore}
                    />
                ))}
                {additionalLinks.length > 0 && (
                    <>
                        {isShowingMore &&
                            additionalLinks.map((item, index) => (
                                <NavigationItem
                                    key={index}
                                    item={item}
                                    isShowingMore={isShowingMore}
                                />
                            ))}
                        <ShowHideButton
                            isShowingMore={isShowingMore}
                            setIsShowingMore={setIsShowingMore}
                        />
                    </>
                )}
            </DropdownMenuList>
        </DropdownMenuSingle>
    );
};

export const LeftNavigationContent = (props: LeftNavigationProps) => {
    const { navigations } = props;

    return (
        <DropdownMenuContent title={navigations.navigationTitle}>
            <DropdownMenuSeparator>
                <SvgIcon icon='angleLeft' />
                <Anchor
                    href={navigations.url}
                    className={styles['left-navigation-title']}
                    asInherited>
                    {navigations.navigationTitle}
                </Anchor>
            </DropdownMenuSeparator>

            {/* The main items */}
            <FirstList {...props} />
        </DropdownMenuContent>
    );
};

export const LeftNavigation = (props: LeftNavigationProps) => {
    const { navigations, ...rest } = props;

    return (
        <div {...rest}>
            {/* Desktop */}
            <DropdownMenu
                className={styles['left-navigation-desktop']}
                type={'multiple'}
                defaultValue={['item-1']}
                id='radix-:r0:'
                data-testid='left-navigation'>
                <DropdownMenuItem value='item-1'>
                    <LeftNavigationContent navigations={navigations} />
                </DropdownMenuItem>
            </DropdownMenu>

            {/* Mobile */}
            <DropdownMenuMobile
                className={styles['left-navigation-mobile']}
                type='multiple'>
                <DropdownMenuItem
                    value='item-1'
                    id='radix-:r0:'>
                    <DropdownMenuTrigger title='Page navigation'>
                        <span>Page navigation </span>
                        <SvgIcon icon='bars' />
                        <SvgIcon icon='close' />
                    </DropdownMenuTrigger>
                    <LeftNavigationContent navigations={navigations} />
                </DropdownMenuItem>
            </DropdownMenuMobile>
        </div>
    );
};
