import { ComponentProps, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    Column,
    ColumnGrid,
    ContentContainer,
    MediaGalleryCarousel,
    MediaGalleryCarouselProps,
    MediaItem,
    RichText,
    Text
} from '@/components';

// Types
import { Expand, HEADLINE_TAG_TYPES } from '@/types';

// Styles
import styles from './MediaGallery.module.scss';
import {
    MediaGalleryBackgroundColors,
    MediaGalleryContentAlignments,
    mediaGalleryCVA
} from './styles';

export type MediaGalleryProps = ComponentProps<typeof ContentContainer> &
    Expand<VariantProps<typeof mediaGalleryCVA>> &
    MediaGalleryCarouselProps & {
        backgroundColor?: MediaGalleryBackgroundColors;
        contentAlignment?: MediaGalleryContentAlignments;
        cta?: ReactNode;
        headline?: ReactNode;
        headlineTag: HEADLINE_TAG_TYPES;
        slides: MediaItem[];
        supportCopy?: ReactNode;
    };

export const MediaGallery = (props: MediaGalleryProps) => {
    const {
        backgroundColor = 'white',
        className,
        contentAlignment = 'left',
        cta,
        headline,
        headlineTag = 'p',
        shouldHideNavigation,
        shouldHideThumbnails,
        slides,
        supportCopy,
        ...rest
    } = props;

    // Filter out empty slides
    const filteredSlides = slides.filter(
        ({ image, videoId }) => image || videoId
    );

    return (
        <ContentContainer
            variant='containedSmall'
            className={cx(styles['media-gallery-base'], className)}
            backgroundColor={backgroundColor}
            data-testid='media-gallery'
            {...rest}>
            <ColumnGrid>
                <Column
                    span='4'
                    offsetTablet='1'
                    spanTablet='10'
                    offsetDesktop='0'
                    spanDesktop='12'>
                    <div
                        className={cx(
                            styles['copy'],
                            mediaGalleryCVA({ alignment: contentAlignment })
                        )}>
                        {/* Headline */}
                        {headline && (
                            <Text
                                tag={headlineTag}
                                data-testid='media-gallery-headline'
                                className={styles['headline']}>
                                {headline}
                            </Text>
                        )}

                        {/* Support Copy */}
                        {supportCopy && (
                            <RichText
                                data-testid='media-gallery-support-copy'
                                className={styles['support-copy']}>
                                {supportCopy}
                            </RichText>
                        )}
                    </div>

                    {/* Media Gallery Carousel */}
                    <MediaGalleryCarousel
                        slides={filteredSlides}
                        shouldHideNavigation={shouldHideNavigation}
                        shouldHideThumbnails={shouldHideThumbnails}
                    />

                    {/* CTA */}
                    {cta && (
                        <div className={cx(styles['copy'])}>
                            <div
                                className={cx(styles['cta-container'], {
                                    [styles['cta-container-no-margin']]:
                                        !!shouldHideThumbnails
                                })}>
                                <Anchor
                                    data-testid='media-gallery-cta'
                                    buttonStyle='outlined'
                                    size='responsive'
                                    className={styles['cta']}>
                                    {cta}
                                </Anchor>
                            </div>
                        </div>
                    )}
                </Column>
            </ColumnGrid>
        </ContentContainer>
    );
};
