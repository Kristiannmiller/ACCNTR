import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeroBannerCarousel } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof HeroBannerCarousel>;

const testHeroBannerCarouselDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const content = getByTestId('hero-banner-carousel');
    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should render the HeroBannerCarousel
    await expect(content).toBeInTheDocument();

    // Should have correct number of slides
    const numberOfSlides = args.slides?.length || 0;
    if (numberOfSlides > 0) {
        const slides = getAllByTestId('carousel-slide');
        await expect(slides).toHaveLength(numberOfSlides);
    }

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

export const testHeroBannerCarousel = {
    default: testHeroBannerCarouselDefault
};
