import { ComponentProps } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    BUTTON_VARIANTS,
    HeaderCtaButtons,
    HeaderNavigationDropdown,
    HeaderNavigationLink
} from '@/components';

// Styles
import styles from './UtilityNavigationMobile.module.scss';

// Types
export type UtilityNavigationMobileDataProps = {
    navigationItems: (HeaderNavigationLink | HeaderNavigationDropdown)[];
    ctaButtons?: HeaderCtaButtons;
};

export type UtilityNavigationMobileProps = ComponentProps<'div'> &
    UtilityNavigationMobileDataProps;

export const UtilityNavigationMobile = (
    props: UtilityNavigationMobileProps
) => {
    const { className, navigationItems, ctaButtons } = props;
    return (
        <div className={styles['utility-navigation-mobile-base']}>
            <ul
                className={cx(
                    styles['utility-navigation-mobile-list'],
                    className
                )}>
                {navigationItems?.map((item, idx) => {
                    if ('title' in item) {
                        const { title, links } = item;
                        return (
                            <li key={idx}>
                                <details>
                                    <summary>{title}</summary>
                                    <ul>
                                        {links.map((link, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <Anchor
                                                        underline='none'
                                                        asInherited>
                                                        {link.mobileLink ??
                                                            link.link}
                                                    </Anchor>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </details>
                            </li>
                        );
                    } else {
                        return (
                            <li key={idx}>
                                <Anchor
                                    underline='none'
                                    asInherited>
                                    {item.link}
                                </Anchor>
                            </li>
                        );
                    }
                })}
            </ul>

            {ctaButtons?.map((ctaButton, idx) => {
                const { color, link } = ctaButton;
                return (
                    <Anchor
                        key={idx}
                        className={styles['cta-button']}
                        variant={color as BUTTON_VARIANTS}
                        size='large'>
                        {link}
                    </Anchor>
                );
            })}
        </div>
    );
};
