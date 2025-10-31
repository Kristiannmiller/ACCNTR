import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Utils
import { classNameRegex } from '@/utils';

// Components
import { NewsListingCard } from '@/components';

type Story = StoryObj<typeof NewsListingCard>;

const testNewsListingCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { queryByTestId, getByAltText } = within(canvasElement);

    const headline = queryByTestId('news-listing-card-headline');
    const supportCopy = queryByTestId('news-listing-card-support-copy');

    await expect(headline).toBeInTheDocument();

    await expect(supportCopy).toBeInTheDocument();

    if (args.image) {
        const cardImage = getByAltText(/A man with a walker and a nurse/i);
        await expect(cardImage).toBeInTheDocument();
    }
};

const testNewsListingCardFeatured: Story['play'] = async ({
    canvasElement
}) => {
    const { queryByTestId } = within(canvasElement);

    const card = queryByTestId('news-listing-card');

    // Should have the is-featured class
    if (card) {
        const classNames = card.getAttribute('class')!;
        await expect(classNames).toMatch(classNameRegex('is-featured'));
    }
};

const testNewsListingCardWithCategory: Story['play'] = async ({
    canvasElement
}): Promise<void> => {
    const { queryByTestId } = within(canvasElement);
    const categoryName = queryByTestId('news-listing-card-category-name');

    // Should have a category name
    await expect(categoryName).toBeInTheDocument();
};

export const testNewsListingCard: Record<
    'default' | 'isFeatured' | 'withCategory',
    Story['play']
> = {
    default: testNewsListingCardDefault,
    isFeatured: testNewsListingCardFeatured,
    withCategory: testNewsListingCardWithCategory
};
