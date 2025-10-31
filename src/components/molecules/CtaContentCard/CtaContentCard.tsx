import { ComponentProps, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Components
import { Anchor, Image, Text, Card, RichText } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    Expand,
    HEADLINE_TAG_TYPES,
    CTA_STYLE_TYPES,
    BACKGROUND_COLOR_TYPES
} from '@/types';

// Styles
import { ctaContentCardCVA } from './styles';
import styles from './CtaContentCard.module.scss';

export type CTA_CONTENT_CARD_CTA_ALIGNMENT_TYPE = Extract<
    ALIGNMENT_TYPES,
    'left' | 'center'
>;

export type CtaContentCardProps = ComponentProps<typeof Card> &
    Expand<VariantProps<typeof ctaContentCardCVA>> & {
        bodyCopy?: ReactNode;
        backgroundColor?: Extract<
            BACKGROUND_COLOR_TYPES,
            'white' | 'transparent'
        >;
        ctaAlignment?: CTA_CONTENT_CARD_CTA_ALIGNMENT_TYPE;
        firstCta?: ReactNode;
        firstCtaStyle?: CTA_STYLE_TYPES;
        headlineTag?: HEADLINE_TAG_TYPES;
        headline?: ReactNode;
        image?: ReactNode;
        secondCta?: ReactNode;
        secondCtaStyle?: CTA_STYLE_TYPES;
        thirdCta?: ReactNode;
    };

export const CtaContentCard = (props: CtaContentCardProps) => {
    const {
        backgroundColor = 'white',
        bodyCopy,
        className,
        ctaAlignment = 'center',
        firstCta,
        firstCtaStyle = 'button',
        headlineTag = 'p',
        headline,
        image,
        secondCta,
        secondCtaStyle = 'button',
        thirdCta,
        ...rest
    } = props;

    return (
        <Card
            elevation={'none'}
            data-testid='cta-content-card'
            className={cx(
                styles['cta-content-card'],
                {
                    [styles['bg-white']]: backgroundColor === 'white',
                    [styles['bg-transparent']]:
                        backgroundColor === 'transparent'
                },
                className
            )}
            {...rest}>
            {image && (
                <div className={styles['image-container']}>
                    <Image
                        ratio='16:9'
                        className={styles['image']}
                        data-testid='cta-card-image'>
                        {image}
                    </Image>
                </div>
            )}
            <div className={styles['bottom-section']}>
                <div className={styles['copy-section']}>
                    {headline && (
                        <Text
                            tag={headlineTag}
                            data-testid='cta-card-headline'
                            className={styles['headline']}>
                            {headline}
                        </Text>
                    )}
                    {bodyCopy && (
                        <RichText data-testid='cta-card-body-copy'>
                            {bodyCopy}
                        </RichText>
                    )}
                </div>
                <div
                    className={cx(
                        ctaContentCardCVA({ ctaAlignment }),
                        styles['cta-section']
                    )}>
                    {firstCta &&
                        (firstCtaStyle === 'button' ? (
                            <Anchor
                                data-testid='content-card-first-cta'
                                size='responsive'
                                variant='solid1'
                                className={styles['cta-button']}>
                                {firstCta}
                            </Anchor>
                        ) : (
                            <Anchor
                                data-testid='content-card-first-cta'
                                className={styles['cta-link-top']}>
                                {firstCta}
                            </Anchor>
                        ))}
                    {secondCta &&
                        (secondCtaStyle === 'button' ? (
                            <Anchor
                                data-testid='content-card-second-cta'
                                size='responsive'
                                variant='solid1'
                                className={styles['cta-button']}>
                                {secondCta}
                            </Anchor>
                        ) : (
                            <Anchor
                                data-testid='content-card-second-cta'
                                className={styles['cta-link-bottom']}>
                                {secondCta}
                            </Anchor>
                        ))}
                    {thirdCta && (
                        <Anchor
                            data-testid='content-card-third-cta'
                            className={styles['cta-link']}>
                            {thirdCta}
                        </Anchor>
                    )}
                </div>
            </div>
        </Card>
    );
};
