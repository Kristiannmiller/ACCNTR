import {
    cloneElement,
    ComponentProps,
    isValidElement,
    PropsWithChildren,
    ReactElement,
    ReactNode
} from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    Container,
    RichText,
    SvgIcon,
    SvgIconType,
    Text
} from '@/components';

// Styles
import styles from './Footer.module.scss';

export type FooterProps = ComponentProps<'footer'> & {
    logo: ReactNode;
    logoLink?: ReactNode;
    socialMediaLinks?: {
        link: ReactNode;
        iconName: SvgIconType;
    }[];
    bottomText?: ReactNode;
    legalSection1Text?: ReactNode;
    copyRightText?: ReactNode;
    legalSection2Text?: ReactNode;
    footerColumn: {
        headline: ReactNode;
        footerLinkItems: ReactNode[];
    }[];
};

export const Footer = (props: FooterProps) => {
    const {
        bottomText,
        className,
        copyRightText,
        footerColumn,
        legalSection1Text,
        legalSection2Text,
        logo,
        logoLink,
        socialMediaLinks,
        ...rest
    } = props;

    const isFourColumnLayout = footerColumn.length === 4;
    const columnCount = footerColumn.length;

    return (
        <Container
            tag='footer'
            className={cx(styles['footer'], className)}
            data-testid='footer'
            {...rest}>
            <div
                className={cx(styles['content-grid'], {
                    [styles['grid-row']]: columnCount < 3
                })}>
                <div
                    className={cx(styles['footer-logo'], {
                        [styles['footer-column2']]: !isFourColumnLayout,
                        [styles['footer-column2-max-width']]: columnCount < 3
                    })}
                    data-testid='footer-logo'>
                    {isValidElement<PropsWithChildren>(logoLink) ? (
                        <Anchor>
                            {cloneElement(logoLink, {
                                children: logo
                            })}
                        </Anchor>
                    ) : (
                        logo
                    )}
                </div>
                <div
                    className={cx(styles['content-container'], {
                        [styles[`content-container-${columnCount}`]]: true
                    })}>
                    {footerColumn.map((column, index) => {
                        return (
                            <div
                                className={styles['column']}
                                key={index}>
                                <Text
                                    tag='p'
                                    className={styles['column-heading']}>
                                    {column.headline}
                                </Text>
                                <ul className={styles['column-list']}>
                                    {column.footerLinkItems.map(
                                        (link, index) => {
                                            return (
                                                <li key={index}>
                                                    <Anchor>{link}</Anchor>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>

                                {index === 0 && (
                                    <div
                                        className={styles['social-media-link']}>
                                        {socialMediaLinks?.map(
                                            (icon, index) => {
                                                return (
                                                    <Anchor key={index}>
                                                        {cloneElement(
                                                            icon.link as ReactElement,
                                                            {
                                                                children: (
                                                                    <SvgIcon
                                                                        className={
                                                                            styles[
                                                                                'social-icon'
                                                                            ]
                                                                        }
                                                                        icon={
                                                                            icon.iconName
                                                                        }
                                                                    />
                                                                )
                                                            }
                                                        )}
                                                    </Anchor>
                                                );
                                            }
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {bottomText && (
                <RichText
                    data-testid='bottom-text'
                    className={styles['bottom-text']}>
                    {bottomText}
                </RichText>
            )}
            <div>
                <div className={styles['border-separator']} />
            </div>
            <div className={styles['language']}>
                {legalSection1Text && (
                    <RichText
                        data-testid='legal-section1'
                        className={styles['legal-section1']}>
                        {legalSection1Text}
                    </RichText>
                )}

                {copyRightText && (
                    <RichText className={styles['copyright-text']}>
                        {copyRightText}
                    </RichText>
                )}

                {legalSection2Text && (
                    <RichText
                        data-testid='legal-section2'
                        className={styles['legal-section2']}>
                        {legalSection2Text}
                    </RichText>
                )}
            </div>
        </Container>
    );
};
