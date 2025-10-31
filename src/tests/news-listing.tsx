import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { NewsListing } from '@/components';

type Story = StoryObj<typeof NewsListing>;

const testNewsListingDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getAllByTestId } = within(canvasElement);

    if (args.children) {
        const cards = getAllByTestId('news-listing-card');
        await expect(cards).toHaveLength(6);
    }
};

export const testNewsListing: Record<'default', Story['play']> = {
    default: testNewsListingDefault
};
