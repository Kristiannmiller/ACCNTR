import React, { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Container,
    RichText,
    Text,
    Picture,
    Image,
    Anchor
} from '@/components';

// Styles
import styles from './HeroBanner.module.scss';
import { heroBannerCVA } from './styles';

// Types
import { ImageType, OPACITY_TYPES } from '@/types';

export type HeroBannerProps = ComponentProps<typeof Container> & {
    backgroundGradientLevel?: OPACITY_TYPES;
    backgroundImage: ImageType;
    firstCTALink?: ReactNode;
    hasCarouselControls?: boolean;
    headline: ReactNode;
    mobileBackgroundImage?: string;
    secondCTALink?: ReactNode;
    shouldHideImgOnMobile?: boolean;
    shouldLeftAlignOnMobile?: boolean;
    supportingCopy?: ReactNode;
};

export const HeroBannerDesktop = (props: HeroBannerProps) => {
    const {
        backgroundGradientLevel,
        backgroundImage,
        className,
        firstCTALink,
        hasCarouselControls,
        headline,
        mobileBackgroundImage,
        secondCTALink,
        supportingCopy,
        ...rest
    } = props;

    return (
        <Container
            variant='containedLarge'
            className={cx(styles['hero-banner-desktop'], className)}
            data-testid='hero-banner-desktop'
            {...rest}>
            <Image
                ratio='golden-ratio-landscape'
                className={cx(styles['bg-img'])}>
                <Picture
                    image={backgroundImage}
                    mobileSrc={mobileBackgroundImage}
                    tabletLgSrc={backgroundImage.src}
                    tabletSrc={mobileBackgroundImage}
                    data-testid='hero-banner-image-desktop'
                />
            </Image>
            <div
                className={cx(
                    styles['hero-gradient-overlay'],
                    heroBannerCVA({ backgroundGradientLevel })
                )}
            />
            <div className={cx(styles['content-wrapper'], className)}>
                <Container className={styles['content-container']}>
                    <div
                        className={cx(styles['content'], {
                            [styles['with-controls']]: hasCarouselControls
                        })}>
                        <div className={cx(styles['text-content'])}>
                            <Text
                                fontStyle='lgHeading'
                                fontStyleTablet='xlHeading'
                                data-testid='hero-banner-heading-desktop'
                                className={styles['heading']}
                                tag='h1'>
                                {headline}
                            </Text>
                            <RichText
                                data-testid='hero-banner-supporting-copy-desktop'
                                className={styles['rich-text']}>
                                {supportingCopy}
                            </RichText>
                        </div>
                        {(firstCTALink || secondCTALink) && (
                            <div className={styles['cta-wrapper']}>
                                {firstCTALink && (
                                    <Anchor
                                        variant='solid1'
                                        size='large'
                                        data-testid='hero-banner-first-link-desktop'>
                                        {firstCTALink}
                                    </Anchor>
                                )}
                                {secondCTALink && (
                                    <Anchor
                                        variant='light-inverse'
                                        size='large'
                                        data-testid='hero-banner-second-link-desktop'>
                                        {secondCTALink}
                                    </Anchor>
                                )}
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </Container>
    );
};

export const HeroBannerMobile = (props: HeroBannerProps) => {
    const {
        backgroundImage,
        className,
        firstCTALink,
        hasCarouselControls,
        headline,
        mobileBackgroundImage,
        secondCTALink,
        shouldHideImgOnMobile,
        shouldLeftAlignOnMobile = false,
        supportingCopy,
        ...rest
    } = props;

    return (
        <Container
            className={cx(styles['hero-banner-mobile'], className)}
            data-testid='hero-banner-mobile'
            {...rest}>
            <div
                className={cx(
                    styles['bg-img'],
                    shouldHideImgOnMobile ? styles['hidden'] : ''
                )}>
                <Image ratio='golden-ratio-landscape'>
                    <Picture
                        image={backgroundImage}
                        mobileSrc={mobileBackgroundImage}
                        tabletLgSrc={backgroundImage.src}
                        tabletSrc={mobileBackgroundImage}
                        data-testid='hero-banner-image-mobile'
                    />
                </Image>
            </div>

            <div
                className={cx(styles['content'], {
                    [styles['with-controls']]: hasCarouselControls
                })}>
                <div
                    className={cx(
                        styles['text-content'],
                        shouldLeftAlignOnMobile ? styles['left-align'] : ''
                    )}>
                    <Text
                        fontStyle='lgHeadingMobile'
                        className={styles['heading']}
                        data-testid='hero-banner-heading-mobile'
                        tag='h1'>
                        {headline}
                    </Text>
                    <RichText
                        className={styles['rich-text']}
                        data-testid='hero-banner-supporting-copy-mobile'>
                        {supportingCopy}
                    </RichText>
                </div>

                {(firstCTALink || secondCTALink) && (
                    <div className={styles['cta-wrapper']}>
                        {firstCTALink && (
                            <Anchor
                                variant='light1'
                                size='medium'
                                data-testid='hero-banner-first-link-mobile'>
                                {firstCTALink}
                            </Anchor>
                        )}
                        {secondCTALink && (
                            <Anchor
                                variant='light1'
                                size='medium'
                                data-testid='hero-banner-second-link-mobile'>
                                {secondCTALink}
                            </Anchor>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};

export const HeroBanner = (props: HeroBannerProps) => {
    const {
        shouldHideImgOnMobile,
        shouldLeftAlignOnMobile,
        backgroundGradientLevel,
        ...rest
    } = props;

    return (
        <>
            <HeroBannerDesktop
                backgroundGradientLevel={backgroundGradientLevel}
                {...rest}
            />
            <HeroBannerMobile
                shouldHideImgOnMobile={shouldHideImgOnMobile}
                shouldLeftAlignOnMobile={shouldLeftAlignOnMobile}
                {...rest}
            />
        </>
    );
};
