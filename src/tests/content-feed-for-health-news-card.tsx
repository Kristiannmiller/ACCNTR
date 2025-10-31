import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ContentFeedForHealthNewsCard } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ContentFeedForHealthNewsCard>;

const testContentFeedForHealthNewsCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, queryByTestId } = within(canvasElement);
    const content = getByTestId('content-feed-for-health-news-card');
    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    const image = queryByTestId('content-feed-for-health-news-card-image');
    const link = queryByTestId('content-feed-for-health-news-card-link');
    const excerpt = queryByTestId('content-feed-for-health-news-card-excerpt');

    await expect(image).toBeInTheDocument();

    if (args.shouldHideImagesOnMobile) {
        await expect(image?.getAttribute('class')).toMatch('hide-card-img');
    }

    await expect(link).toBeInTheDocument();

    if (args.shouldHideSupportCopyOnCards) {
        await expect(excerpt).toBeNull();
    } else {
        await expect(excerpt).toBeInTheDocument();
    }
};

export const testContentFeedForHealthNewsCard: Record<
    'default',
    Story['play']
> = {
    default: testContentFeedForHealthNewsCardDefault
};
