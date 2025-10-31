import {
    ComponentProps,
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementRef,
    forwardRef
} from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cx } from 'class-variance-authority';

// Components
import { Anchor, AnchorTextType } from '@/components';

// Styles
import styles from './NavigationMenu.module.scss';

/**
 * Navigation Menu
 */
const NavigationMenu = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Root>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
        hasIndicator?: boolean;
    }
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <NavigationMenuPrimitive.Root
            className={cx(styles['navigation-menu-base'], className)}
            data-testid='navigation-menu'
            ref={ref}
            {...rest}
        />
    );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

/**
 * Navigation Menu List
 */
const NavigationMenuList = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.List>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <NavigationMenuPrimitive.List
            className={cx(styles['navigation-menu-list'], className)}
            data-testid='navigation-menu-list'
            ref={ref}
            {...rest}
        />
    );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

/**
 * Navigation Menu Item
 */
type NavigationMenuItemProps = ComponentProps<
    typeof NavigationMenuPrimitive.Item
>;

const NavigationMenuItem = (props: NavigationMenuItemProps) => {
    const { className, ...rest } = props;
    return (
        <NavigationMenuPrimitive.Item
            data-testid='navigation-menu-item'
            className={cx(styles['navigation-menu-item'], className)}
            {...rest}
        />
    );
};

/**
 * Navigation Menu Trigger
 */
const NavigationMenuTrigger = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <NavigationMenuPrimitive.Trigger
            data-testid='navigation-menu-trigger'
            ref={ref}
            className={cx(styles['navigation-menu-trigger'], className)}
            {...rest}>
            {children}
        </NavigationMenuPrimitive.Trigger>
    );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

/**
 * Navigation Menu Content
 */
const NavigationMenuContent = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Content>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <NavigationMenuPrimitive.Content
            className={cx(styles['navigation-menu-content'], className)}
            data-testid='navigation-menu-content'
            ref={ref}
            {...rest}
        />
    );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

/**
 * Navigation Menu Link
 */
const NavigationMenuLink = forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithRef<'a'> & AnchorTextType
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <Anchor
            fontStyle={null}
            ref={ref}
            underline='hover'
            asInherited
            className={cx(styles['navigation-menu-item-link'], className)}
            {...rest}
        />
    );
});

/**
 * Navigation Menu Viewport
 */
const NavigationMenuViewport = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <div
            className={cx(styles['navigation-menu-viewport-wrapper'])}
            data-tesid='navigation-menu-viewport-wrapper'>
            <NavigationMenuPrimitive.Viewport
                className={cx(styles['navigation-menu-viewport'], className)}
                data-testid='navigation-menu-viewport'
                ref={ref}
                {...rest}
            />
        </div>
    );
});
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;

/**
 * Navigation Menu Indicator
 */
const NavigationMenuIndicator = forwardRef<
    ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <NavigationMenuPrimitive.Indicator
            className={cx(styles['navigation-menu-indicator'], className)}
            data-testid='navigation-menu-indicator'
            ref={ref}
            {...rest}>
            <div className={styles['navigation-menu-indicator-inner']} />
        </NavigationMenuPrimitive.Indicator>
    );
});
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport
};
