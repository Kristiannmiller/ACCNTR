import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Anchor,
    Carousel,
    CarouselProps,
    Container,
    RichText,
    SidePhotoContentCardProps,
    Text
} from '@/components';

// Styles
import styles from './SidePhotoContentCardCarousel.module.scss';
import {
    sidePhotoContentCardCarouselAlignmentCva,
    sidePhotoContentCardCarouselCarouselControlsCva
} from './styles';

// Types
import {
    ALIGNMENT_TYPES,
    BUTTON_STYLE_TYPES,
    COLOR_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type SidePhotoContentCardCarouselBackgroundTypes = Extract<
    COLOR_TYPES,
    'white' | 'whiteSmoke'
>;
export type SidePhotoContentCardCarouselAlignmentTypes = Extract<
    ALIGNMENT_TYPES,
    'center' | 'left'
>;

// TODO: Refactor this to rename 'outline' to 'outlined' so the global BUTTON_STYLE_TYPES can be used directly.
type BUTTON_TYPES = Exclude<BUTTON_STYLE_TYPES, 'outlined'> | 'outline';

const ctaVariantMap: Record<BUTTON_TYPES, BUTTON_STYLE_TYPES> = {
    solid: 'solid',
    outline: 'outlined',
    link: 'link'
};

export type SidePhotoContentCardCarouselProps = ComponentProps<'div'> &
    Omit<
        CarouselProps<SidePhotoContentCardProps>,
        | 'tag'
        | 'height'
        | 'width'
        | 'onKeyPress'
        | 'onProgress'
        | 'onResize'
        | 'onClick'
        | 'onDoubleClick'
        | 'onTouchEnd'
        | 'onTouchMove'
        | 'onTouchStart'
        | 'onScroll'
        | 'onTransitionEnd'
    > & {
        backgroundColor?: SidePhotoContentCardCarouselBackgroundTypes;
        bottomSupportCopy?: ReactNode;
        contentAlignment?: SidePhotoContentCardCarouselAlignmentTypes;
        cta?: ReactNode;
        ctaStyle?: BUTTON_TYPES;
        headline?: ReactNode;
        headlineTag?: HEADLINE_TAG_TYPES;
        slideTimingSeconds?: number;
        supportCopy?: ReactNode;
    } & Pick<SidePhotoContentCardProps, 'imageSide' | 'layout'>;

export const SidePhotoContentCardCarousel = (
    props: SidePhotoContentCardCarouselProps
) => {
    const {
        backgroundColor = 'whiteSmoke',
        bottomSupportCopy,
        className,
        cta,
        contentAlignment = 'center',
        ctaStyle = 'solid',
        headline,
        headlineTag = 'p',
        imageSide,
        layout,
        slides,
        slideTimingSeconds = 6,
        supportCopy,
        ...rest
    } = props;

    const normalizedSlides: ReactElement[] = slides.map((slide) => {
        // Override each SidePhotoCard's imageSide and layout.
        // This makes each of them the same and controlled by the carousel level.
        const slideProps = {
            ...slide.props,
            imageSide,
            layout,
            backgroundColor,
            hasCarouselControls: true,
            isPadded: false
        };
        return cloneElement(slide, slideProps);
    });

    return (
        <Container
            backgroundColor={backgroundColor}
            className={cx(
                styles['side-photo-content-card-carousel-base'],
                className
            )}
            data-testid='side-photo-content-card-carousel'
            {...rest}>
            {/* Top Content */}

            <div className={styles['top-content']}>
                {headline && (
                    <Text
                        className={cx(
                            styles['headline'],
                            sidePhotoContentCardCarouselAlignmentCva({
                                contentAlignment
                            })
                        )}
                        tag={headlineTag}>
                        {headline}
                    </Text>
                )}
                {supportCopy && (
                    <RichText
                        className={sidePhotoContentCardCarouselAlignmentCva({
                            contentAlignment
                        })}>
                        {supportCopy}
                    </RichText>
                )}
            </div>

            {/* Carousel */}
            <Carousel
                backgroundColor={backgroundColor}
                className={cx(
                    styles['side-photo-content-card-carousel'],
                    sidePhotoContentCardCarouselCarouselControlsCva({
                        imageSide,
                        layout
                    })
                )}
                controlsClass={styles['carousel-controls']}
                slides={normalizedSlides}
                slideTimingSeconds={slideTimingSeconds}
            />

            {/* Bottom Content */}
            <div
                className={cx(
                    styles['bottom-content'],
                    sidePhotoContentCardCarouselAlignmentCva({
                        contentAlignment
                    })
                )}>
                {bottomSupportCopy && (
                    <RichText
                        className={sidePhotoContentCardCarouselAlignmentCva({
                            contentAlignment
                        })}>
                        {bottomSupportCopy}
                    </RichText>
                )}
                {cta && (
                    <Anchor
                        className={sidePhotoContentCardCarouselAlignmentCva({
                            contentAlignment
                        })}
                        buttonStyle={ctaVariantMap[ctaStyle ?? 'solid']}
                        size='responsive'>
                        {cta}
                    </Anchor>
                )}
            </div>
        </Container>
    );
};
