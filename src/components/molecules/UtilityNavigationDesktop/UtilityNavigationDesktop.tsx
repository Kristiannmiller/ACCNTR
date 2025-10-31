import { ComponentProps, useRef } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    BUTTON_VARIANTS,
    Container,
    HeaderCtaButtons,
    HeaderNavigationDropdown,
    HeaderNavigationLink,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components';

// Styles
import styles from './UtilityNavigationDesktop.module.scss';
import { buttonCVA } from '@/components/atoms/Button/styles';

export type UtilityNavigationDesktopDataProps = {
    ariaLabel?: string; // "Utility Navigation"
    navigationItems: (HeaderNavigationLink | HeaderNavigationDropdown)[];
    ctaButtons?: HeaderCtaButtons;
};

export type UtilityNavigationDesktopProps = ComponentProps<'div'> &
    UtilityNavigationDesktopDataProps;

export const UtilityNavigationDesktop = (
    props: UtilityNavigationDesktopProps
) => {
    const {
        className,
        navigationItems,
        ctaButtons,
        ariaLabel = 'Utility Navigation'
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Container
            customRef={ref}
            className={cx(styles['container'], {
                [styles['up']]: true
            })}>
            <NavigationMenu
                className={cx(styles['utility-navigation-base'], className)}
                aria-label={ariaLabel}
                data-testid='utility-navigation'>
                <NavigationMenuList>
                    {/* Utility Nav Items */}
                    {navigationItems?.map((item, idx) => {
                        if ('title' in item) {
                            const { title, links } = item;
                            return (
                                <NavigationMenuItem
                                    className={styles['nav-item']}
                                    key={idx}
                                    value={idx.toString() as string}>
                                    <NavigationMenuTrigger
                                        className={cx(styles['trigger'])}>
                                        {title}
                                        <div
                                            role='presentation'
                                            className={styles['content-border']}
                                        />
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        {links.map((link, idx) => {
                                            return (
                                                <NavigationMenuLink
                                                    className={cx(
                                                        styles['menu-link']
                                                    )}
                                                    underline='none'
                                                    asInherited
                                                    key={idx}>
                                                    {link.link}
                                                </NavigationMenuLink>
                                            );
                                        })}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            );
                        }
                        return (
                            <NavigationMenuItem
                                className={styles['nav-item']}
                                key={idx}>
                                <NavigationMenuLink
                                    asInherited
                                    underline='none'>
                                    {item.link}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}

                    {/* CTA Buttons */}
                    {ctaButtons && (
                        <>
                            {ctaButtons.map((ctaButton, idx) => {
                                return (
                                    <NavigationMenuItem key={idx}>
                                        <NavigationMenuLink
                                            data-testid='cta-button'
                                            className={cx(
                                                buttonCVA({
                                                    variant:
                                                        ctaButton.color as BUTTON_VARIANTS
                                                }),
                                                styles['cta-button']
                                            )}
                                            underline='none'>
                                            {ctaButton.link}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </>
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </Container>
    );
};
