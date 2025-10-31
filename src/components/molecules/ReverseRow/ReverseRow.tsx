import { ComponentProps, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Types
import {
    ALIGNMENT_TYPES,
    Expand,
    PLACEMENT_TYPES,
    HEADLINE_TAG_TYPES,
    CTA_STYLE_TYPES
} from '@/types';

// Styles
import { reverseRowCVA } from './styles';
import styles from './ReverseRow.module.scss';

// Components
import {
    ColumnGrid,
    Column,
    Container,
    Text,
    Image,
    Anchor,
    YouTubeEmbed,
    YouTubeEmbedProps,
    RichText
} from '@/components';

export type REVERSE_ROW_IMAGE_SIDE_TYPE = Extract<
    ALIGNMENT_TYPES,
    'left' | 'right'
>;

export type REVERSE_ROW_CONTENT_ALIGNMENT_TYPE = Extract<
    PLACEMENT_TYPES,
    'center' | 'top'
>;

export type ReverseRowProps = ComponentProps<typeof Container> &
    Expand<VariantProps<typeof reverseRowCVA>> & {
        headline: ReactNode;
        firstCta?: ReactNode;
        secondCta?: ReactNode;
        ctaStyle: CTA_STYLE_TYPES;
        mediaSide: REVERSE_ROW_IMAGE_SIDE_TYPE;
        headlineTag?: HEADLINE_TAG_TYPES;
        supportingCopy?: ReactNode;
        image?: ReactNode;
        contentAlignment?: REVERSE_ROW_CONTENT_ALIGNMENT_TYPE;
    } & YouTubeEmbedProps;

export const ReverseRow = (props: ReverseRowProps) => {
    const {
        className,
        contentAlignment = 'top',
        ctaStyle,
        firstCta,
        headline,
        headlineTag = 'h2',
        image,
        mediaSide = 'left',
        secondCta,
        supportingCopy,
        videoId,
        ...rest
    } = props;
    return (
        <Container
            data-testid='reverse-row-base'
            className={cx(styles['reverse-row-base'], className)}
            {...rest}>
            <ColumnGrid
                className={styles['reverse-row-card']}
                reverse={mediaSide === 'left' ? 'tablet' : undefined}>
                <Column
                    span='4'
                    spanTabletLg='6'
                    className={cx(
                        styles['copy-column'],
                        mediaSide === 'right' && styles['copy-column-reverse'],
                        reverseRowCVA({ contentAlignment })
                    )}>
                    <div className={styles['copy-container']}>
                        <Text
                            tag={headlineTag}
                            data-testid='reverse-row-heading'
                            className={styles['heading']}>
                            {headline}
                        </Text>
                        {supportingCopy && (
                            <RichText
                                data-testid='reverse-row-supporting-copy'
                                className={styles['supporting-copy']}>
                                {supportingCopy}
                            </RichText>
                        )}
                    </div>
                    {ctaStyle === 'button' ? (
                        <div className={styles['call-to-action-div']}>
                            {firstCta && (
                                <Anchor
                                    data-testid='reverse-row-first-cta'
                                    size='responsive'
                                    variant='solid1'
                                    className={styles['button']}>
                                    {firstCta}
                                </Anchor>
                            )}
                            {secondCta && (
                                <Anchor
                                    data-testid='reverse-row-second-cta'
                                    size='responsive'
                                    variant='solid1'
                                    className={styles['button']}>
                                    {secondCta}
                                </Anchor>
                            )}
                        </div>
                    ) : (
                        <div className={styles['anchor-links']}>
                            {firstCta && (
                                <Anchor data-testid='reverse-row-first-cta'>
                                    {firstCta}
                                </Anchor>
                            )}
                            {secondCta && (
                                <Anchor data-testid='reverse-row-second-cta'>
                                    {secondCta}
                                </Anchor>
                            )}
                        </div>
                    )}
                </Column>
                <Column
                    span='4'
                    spanTabletLg='6'
                    className={
                        mediaSide === 'left'
                            ? styles['media-container-left']
                            : styles['media-container-right']
                    }>
                    {image && !videoId && (
                        <Image
                            ratio='8:5'
                            data-testid='reverse-row-image'>
                            {image}
                        </Image>
                    )}
                    {videoId && (
                        <YouTubeEmbed
                            data-testid='reverse-row-youtube-embed'
                            videoId={videoId}
                        />
                    )}
                </Column>
            </ColumnGrid>
        </Container>
    );
};
