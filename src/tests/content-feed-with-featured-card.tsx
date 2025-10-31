import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ContentFeedWithFeaturedCard } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ContentFeedWithFeaturedCard>;

const testContentFeedWithFeaturedCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { queryByTestId } = within(canvasElement);
    const content = queryByTestId('content-feed-with-featured-card-container');
    const classNames = content?.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    const headline = queryByTestId('content-feed-with-featured-card-headline');
    const supportCopy = queryByTestId(
        'content-feed-with-featured-card-support-copy'
    );
    const cta = queryByTestId('content-feed-with-featured-card-cta');

    if (args.headline) {
        await expect(headline).not.toBeNull();
        await expect(headline?.nodeName).toBe(args.headlineTag.toUpperCase());
    } else {
        await expect(headline).toBeNull();
    }

    if (args.supportCopy) {
        await expect(supportCopy).not.toBeNull();
    } else {
        await expect(supportCopy).toBeNull();
    }

    if (args.cta) {
        await expect(cta).not.toBeNull();
    } else {
        await expect(cta).toBeNull();
    }
};

export const testContentFeedWithFeaturedCard: Record<'default', Story['play']> =
    {
        default: testContentFeedWithFeaturedCardDefault
    };
