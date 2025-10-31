import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MediaGalleryCarousel } from '@/components';

// Utils
import { classNameRegex } from '@/utils';
import { mockMediaGalleryCarousel } from '@/mocks/media-gallery-carousel';

export default {
    title: 'Design System/molecules/MediaGalleryCarousel',
    component: MediaGalleryCarousel,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=8584-22513&m=dev'
        },
        controls: { include: Object.keys(mockMediaGalleryCarousel.default) }
    }
} satisfies Meta<typeof MediaGalleryCarousel>;

type Story = StoryObj<typeof MediaGalleryCarousel>;

const unitTests: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);
    const content = getByTestId('media-gallery-carousel');
    const leftArrows = getAllByTestId('media-gallery-carousel-arrow-left');
    const rightArrows = getAllByTestId('media-gallery-carousel-arrow-right');
    const slideHeadline = getAllByTestId(
        'media-gallery-carousel-slide-headline'
    );
    const slideSupportCopy = getAllByTestId(
        'media-gallery-carousel-slide-support-copy'
    );

    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have left arrows for navigation
    await expect(leftArrows[0]).toBeInTheDocument();

    // Should have right arrows for navigation
    await expect(rightArrows[0]).toBeInTheDocument();

    // Should have a headline
    await expect(slideHeadline[0]).toBeInTheDocument();

    // Should have a support copy
    await expect(slideSupportCopy[0]).toBeInTheDocument();
};

export const Default: Story = {
    args: mockMediaGalleryCarousel.default,
    play: unitTests
};

export const SixSlides: Story = {
    args: mockMediaGalleryCarousel['6-items'],
    play: unitTests
};
