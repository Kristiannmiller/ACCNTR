import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './PromoCallout.module.scss';

// Components
import { Anchor, Container, Image, RichText, Text } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    BUTTON_STYLE_TYPES,
    HEADLINE_TAG_TYPES,
    LAYOUT_RATIO_TYPES
} from '@/types';

// TODO: normalize the background color types to use the `childrens` prefix
export type PROMO_CALLOUT_BACKGROUND_COLOR_TYPES = Extract<
    BACKGROUND_COLOR_TYPES,
    'wellnessBlue' | 'denimBlue' | 'whiteSmoke' | 'achOrange' | 'cchaPurple'
>;

export const promoCalloutBackgroundColors: PROMO_CALLOUT_BACKGROUND_COLOR_TYPES[] =
    ['wellnessBlue', 'denimBlue', 'whiteSmoke', 'achOrange', 'cchaPurple'];

export type PromoCalloutProps = ComponentProps<'article'> & {
    backgroundColor?: PROMO_CALLOUT_BACKGROUND_COLOR_TYPES;
    firstCTALink?: ReactNode;
    hasCarouselControls?: boolean;
    headline: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    image?: ReactNode;
    imageSide?: Extract<ALIGNMENT_TYPES, 'left' | 'right'>;
    layout?: Extract<
        LAYOUT_RATIO_TYPES,
        'thirty' | 'forty' | 'fifty' | 'hundred'
    >;
    secondCTALink?: ReactNode;
    secondCTAStyle?: BUTTON_STYLE_TYPES;
    supportingCopy?: ReactNode;
    textAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
};

export const PromoCallout = (props: PromoCalloutProps) => {
    const {
        backgroundColor = 'wellnessBlue',
        className,
        firstCTALink,
        hasCarouselControls,
        headline,
        headlineTag = 'p',
        image,
        imageSide = 'left',
        layout = 'thirty',
        secondCTALink,
        secondCTAStyle = 'solid',
        supportingCopy,
        textAlignment = 'left',
        ...rest
    } = props;

    return (
        <Container
            className={className}
            backgroundColor={backgroundColor}
            variant='containedSmall'
            data-testid='promo-callout'
            {...rest}>
            <div
                className={cx(styles['promo-callout'], {
                    [styles['with-controls']]: hasCarouselControls,
                    [styles['content-center']]: textAlignment === 'center',
                    // Force alignment left on desktop when image is visible.
                    [styles['content-left-desktop']]:
                        textAlignment === 'center' &&
                        image &&
                        layout !== 'hundred'
                })}>
                {image && (
                    <div
                        data-testid='promo-callout-image-wrapper'
                        className={cx(styles['image-wrapper'], {
                            [styles['thirty']]: layout === 'thirty',
                            [styles['forty']]: layout === 'forty',
                            [styles['fifty']]: layout === 'fifty',
                            [styles['hundred']]: layout === 'hundred',
                            [styles['image-side-right']]: imageSide === 'right'
                        })}>
                        <Image
                            ratio='8:5'
                            data-testid='promo-callout-image'>
                            {image}
                        </Image>
                    </div>
                )}
                <div className={styles['text-wrapper']}>
                    {/* Headline */}
                    <Text
                        tag={headlineTag}
                        data-testid='promo-callout-headline'
                        className={styles['headline']}>
                        {headline}
                    </Text>

                    {/* Supporting Copy */}
                    {supportingCopy && (
                        <RichText
                            className={styles['supporting-copy']}
                            data-testid='promo-callout-support-copy'>
                            {supportingCopy}
                        </RichText>
                    )}

                    {/* CTA Buttons */}
                    {(firstCTALink || secondCTALink) && (
                        <div className={styles['anchor-wrapper']}>
                            {firstCTALink && (
                                <Anchor
                                    buttonStyle='solid'
                                    size='responsive'
                                    data-testid='promo-callout-first-cta'>
                                    {firstCTALink}
                                </Anchor>
                            )}
                            {secondCTALink && (
                                <Anchor
                                    buttonStyle={secondCTAStyle}
                                    size='responsive'
                                    data-testid='promo-callout-second-cta'>
                                    {secondCTALink}
                                </Anchor>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};
