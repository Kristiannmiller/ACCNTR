import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { PromoCarousel } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof PromoCarousel>;

const testPromoCarouselDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const content = getByTestId('promo-carousel');
    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should render the Promo Carousel
    await expect(content).toBeInTheDocument();

    // Should have correct number of slides
    const promoCalloutSlides = getAllByTestId('promo-callout');
    const numberOfSlides = args.slides?.length || 0;
    if (numberOfSlides > 0) {
        await expect(promoCalloutSlides).toHaveLength(numberOfSlides);
    }

    // Each slide should have a bg-wellness-blue class
    promoCalloutSlides.forEach((slide) => {
        const slideClassNames = slide.getAttribute('class')!;
        expect(slideClassNames).toMatch(/bg-wellness-blue/);
    });

    // Should have previousSlideBtn
    const previousSlideBtn = getByTestId('carousel-previous-slide-btn');
    await expect(previousSlideBtn).toBeInTheDocument();

    // Should have pausePlayBtn
    const pausePlayBtn = getByTestId('carousel-pause-play-btn');
    await expect(pausePlayBtn).toBeInTheDocument();

    // Should have nextSlideBtn
    const nextSlideBtn = getByTestId('carousel-next-slide-btn');
    await expect(nextSlideBtn).toBeInTheDocument();
};

export const testPromoCarousel = {
    default: testPromoCarouselDefault
};
