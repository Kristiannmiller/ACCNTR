import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    Container,
    RichText,
    SvgIcon,
    SvgIconType
} from '@/components';

// Styles
import styles from './CorporateFooter.module.scss';

export type CorporateFooterProps = ComponentProps<'footer'> & {
    footerBody: ReactNode;
    socialMediaLinks?: {
        link: ReactNode;
        iconName: SvgIconType;
    }[];
    copyRightText: ReactNode;
    legalPrivacyLink: ReactNode;
};

export const CorporateFooter = (props: CorporateFooterProps) => {
    const {
        className,
        copyRightText,
        footerBody,
        legalPrivacyLink,
        socialMediaLinks,
        ...rest
    } = props;
    return (
        <footer
            className={cx(styles['corporate-footer-base'], className)}
            data-testid='corporate-footer'
            {...rest}>
            {/* Top Footer Body*/}
            <Container
                className={styles['top-footer-container']}
                backgroundColor='transparent'
                data-testid='corp-footer-body'
                variant='containedSmall'>
                <div className={styles['top-footer']}>{footerBody}</div>
            </Container>

            {/* Bottom Footer Content */}
            <Container className={styles['sub-footer-container']}>
                <div className={styles['sub-footer']}>
                    {socialMediaLinks && (
                        <div className={styles['social-media-links']}>
                            {socialMediaLinks?.map((icon, index) => {
                                return (
                                    <Anchor
                                        key={index}
                                        data-testid='corporate-footer-link'>
                                        {cloneElement(
                                            icon.link as ReactElement,
                                            {
                                                title: icon.iconName,
                                                children: (
                                                    <SvgIcon
                                                        data-testid={`corporate-footer-link-${icon.iconName}`}
                                                        className={
                                                            styles[
                                                                'social-icon'
                                                            ]
                                                        }
                                                        icon={icon.iconName}
                                                    />
                                                )
                                            }
                                        )}
                                    </Anchor>
                                );
                            })}
                        </div>
                    )}

                    {/* Copyright Text */}
                    <RichText
                        className={styles['copy-right-text']}
                        data-testid='corporate-footer-copyright-text'>
                        {copyRightText}
                    </RichText>

                    {/* Legal Privacy Link */}
                    <Anchor
                        data-testid='corporate-footer-legal-privacy-link'
                        asInherited
                        underline='none'
                        className={styles['legal-privacy-text']}>
                        {legalPrivacyLink}
                    </Anchor>
                </div>
            </Container>
        </footer>
    );
};
