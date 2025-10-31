import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ContentFeedForHealthNews } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ContentFeedForHealthNews>;

const testContentFeedForHealthNewsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, queryByTestId } = within(canvasElement);
    const content = getByTestId('content-feed-for-health-news-container');
    const classNames = content.getAttribute('class')!;
    const grid = queryByTestId('content-feed-for-health-news-grid');
    const carousel = queryByTestId('content-feed-for-health-news-carousel');

    await expect(classNames).toMatch(classNameRegex(classNames));

    await expect(grid).toBeInTheDocument();

    await expect(grid?.childNodes.length).toBe(args.cards.length);

    if (args.enableCarouselOnMobile) {
        await expect(carousel).toBeInTheDocument();
    } else {
        await expect(carousel).toBeNull();
    }
};

export const testContentFeedForHealthNews: Record<'default', Story['play']> = {
    default: testContentFeedForHealthNewsDefault
};
