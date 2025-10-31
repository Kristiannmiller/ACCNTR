import { cloneElement } from 'react';

// Components
import { Carousel, Container } from '@/components';

// Types
import type { CarouselProps, PromoCalloutProps } from '@/components';

export type PromoCarouselProps = Omit<
    CarouselProps<PromoCalloutProps>,
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
> &
    Pick<
        PromoCalloutProps,
        'backgroundColor' | 'imageSide' | 'secondCTAStyle' | 'textAlignment'
    >;

export const PromoCarousel = (props: PromoCarouselProps) => {
    const {
        backgroundColor = 'wellnessBlue',
        imageSide = 'left',
        secondCTAStyle = 'solid',
        slides = [],
        slideTimingSeconds = 6,
        textAlignment = 'left',
        ...rest
    } = props;

    const normalizedSlides = slides.map((slide) => {
        // Override the backgroundColor in each slide.props with the one passed in the props.
        const slideProps = {
            ...slide.props,
            backgroundColor,
            hasCarouselControls: true,
            imageSide,
            secondCTAStyle,
            textAlignment
        };
        return cloneElement(slide, slideProps);
    });

    return (
        <Container
            backgroundColor={backgroundColor}
            {...rest}>
            <Carousel
                data-testid='promo-carousel'
                slides={normalizedSlides}
                slideTimingSeconds={slideTimingSeconds}
            />
        </Container>
    );
};
