import { ComponentProps, ReactNode, cloneElement, ReactElement } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Container,
    Text,
    RichText,
    Picture,
    Image,
    Anchor,
    SvgIcon,
    SvgIconType
} from '@/components';

// Styles
import styles from './HeroFeaturedBanner.module.scss';
import { heroFeaturedBannerCVA } from './styles';

// Types
import { ImageType, OPACITY_TYPES } from '@/types';

type HeroFeaturedBannerIcons = Extract<
    SvgIconType,
    | 'arrowRightLong'
    | 'arrowUpRightFromSquare'
    | 'youtube'
    | 'play'
    | 'download'
>;
export const iconList = [
    'arrowRightLong',
    'arrowUpRightFromSquare',
    'youtube',
    'play',
    'download'
] as const;

export type HeroFeaturedBannerProps = ComponentProps<typeof Container> & {
    backgroundGradientLevel?: OPACITY_TYPES;
    backgroundImage: ImageType;
    firstCTAIcon?: HeroFeaturedBannerIcons;
    firstCTALink?: ReactElement;
    headline: ReactNode;
    mobileBackgroundImage?: string;
    secondCTAIcon?: HeroFeaturedBannerIcons;
    secondCTALink?: ReactElement;
    taglineBottom?: ReactNode;
    taglineTop?: ReactNode;
};

export const HeroFeaturedBanner = (props: HeroFeaturedBannerProps) => {
    const {
        backgroundGradientLevel,
        backgroundImage,
        className,
        firstCTAIcon,
        firstCTALink,
        headline,
        mobileBackgroundImage,
        secondCTAIcon,
        secondCTALink,
        taglineBottom,
        taglineTop,
        ...rest
    } = props;

    return (
        <Container
            variant='containedLarge'
            className={cx(styles['hero-featured-banner'], className)}
            data-testid='hero-featured-banner'
            {...rest}>
            <Image
                ratio='golden-ratio-landscape'
                className={styles['bg-img']}>
                <Picture
                    data-testid='hero-featured-banner-image'
                    image={backgroundImage}
                    mobileSrc={mobileBackgroundImage}
                    tabletLgSrc={backgroundImage.src}
                    tabletSrc={mobileBackgroundImage}
                />
            </Image>
            <div
                className={cx(
                    styles['hero-gradient-overlay'],
                    heroFeaturedBannerCVA({ backgroundGradientLevel })
                )}
            />
            <Container className={styles['content-wrapper']}>
                <div className={styles['content']}>
                    <div className={styles['text-content']}>
                        {taglineTop && (
                            <Text
                                data-testid='hero-featured-banner-tagline-top'
                                className={styles['tagline-top']}
                                tag='p'>
                                {taglineTop}
                            </Text>
                        )}

                        <RichText
                            data-testid='hero-featured-banner-headline'
                            className={styles['headline']}
                            as='h1'>
                            {headline}
                        </RichText>

                        {taglineBottom && (
                            <Text
                                data-testid='hero-featured-banner-tagline-bottom'
                                className={styles['tagline-bottom']}
                                tag='p'>
                                {taglineBottom}
                            </Text>
                        )}
                    </div>
                    {(firstCTALink || secondCTALink) && (
                        <div className={styles['cta-wrapper']}>
                            {firstCTALink && (
                                <Anchor
                                    variant='solid1'
                                    size='large'
                                    data-testid='hero-featured-banner-first-link'>
                                    {cloneElement(firstCTALink, {
                                        children: (
                                            <>
                                                {
                                                    firstCTALink?.props?.field
                                                        ?.value?.text
                                                }
                                                {firstCTAIcon && (
                                                    <SvgIcon
                                                        className={
                                                            styles[
                                                                'hero-link-icon'
                                                            ]
                                                        }
                                                        data-testid='hero-featured-banner-first-link-icon'
                                                        icon={firstCTAIcon}
                                                    />
                                                )}
                                            </>
                                        )
                                    })}
                                </Anchor>
                            )}
                            {secondCTALink && (
                                <Anchor
                                    variant='solid1'
                                    size='large'
                                    data-testid='hero-featured-banner-second-link'>
                                    {cloneElement(secondCTALink, {
                                        children: (
                                            <>
                                                {
                                                    secondCTALink?.props?.field
                                                        ?.value?.text
                                                }
                                                {secondCTAIcon && (
                                                    <SvgIcon
                                                        className={
                                                            styles[
                                                                'hero-link-icon'
                                                            ]
                                                        }
                                                        data-testid='hero-featured-banner-second-link-icon'
                                                        icon={secondCTAIcon}
                                                    />
                                                )}
                                            </>
                                        )
                                    })}
                                </Anchor>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </Container>
    );
};
