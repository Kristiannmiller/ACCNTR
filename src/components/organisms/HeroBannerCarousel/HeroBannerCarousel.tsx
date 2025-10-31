import { cloneElement, ReactElement } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Carousel } from '@/components';

// Styles
import styles from './HeroBannerCarousel.module.scss';

// Types
import type { CarouselProps, HeroBannerProps } from '@/components';

export type HeroBannerCarouselProps = CarouselProps<HeroBannerProps> &
    Pick<HeroBannerProps, 'shouldLeftAlignOnMobile'>;

export const HeroBannerCarousel = (props: HeroBannerCarouselProps) => {
    const {
        className,
        slides = [],
        slideTimingSeconds = 6,
        shouldLeftAlignOnMobile,
        ...rest
    } = props;

    const normalizedSlides: ReactElement[] = slides.map((slide) => {
        // Override the shouldLeftAlignOnMobile in each slide.props with the one passed in the props.
        const slideProps = {
            ...slide.props,
            shouldLeftAlignOnMobile,
            hasCarouselControls: true
        };
        return cloneElement(slide, slideProps);
    });

    return (
        <Carousel
            data-testid='hero-banner-carousel'
            className={cx(styles['hero-banner-carousel'], className)}
            controlsClass={styles['carousel-controls']}
            slides={normalizedSlides}
            slideTimingSeconds={slideTimingSeconds}
            {...rest}
        />
    );
};
