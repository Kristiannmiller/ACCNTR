import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ContentFeedGrid } from '@/components';

// Utils
import { classNameRegex, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof ContentFeedGrid>;

const testContentFeedGridDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const content = getByTestId('content-feed-grid');
    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(content).toBeInTheDocument();

    // Should have correct number of cards
    const numberOfCards = args.cards?.length ?? 0;
    const cards = getAllByTestId('content-feed-grid-card');
    await expect(cards).toHaveLength(numberOfCards);

    for (const [index, card] of cards.entries()) {
        const cardData = args.cards[index];

        //Check for date
        if (cardData.date) {
            //Check if blog date is available
            const date = within(card).getByTestId(
                'content-feed-grid-card-date'
            );
            await expect(date).toBeInTheDocument();

            // Should render the correct tag
            const tag = date.tagName.toLowerCase();
            await expect(tag).toBe('p');

            // Check if the element has the exact date
            await expect(date).toHaveTextContent(cardData.date);
        }

        //Check for link
        if (cardData.link) {
            const link = within(card).getByTestId(
                'content-feed-grid-card-link'
            );
            // Should have link
            await expect(link).toBeInTheDocument();

            // Should have same href
            await expect(link).toHaveAttribute(
                'href',
                getLinkFieldValue(cardData.link)
            );
        }

        //Check for featured card excerpt
        if (cardData.excerpt && index === 0) {
            //Check if featured card excerpt is available
            const excerpt = within(card).getByTestId(
                'content-feed-grid-card-excerpt'
            );
            await expect(excerpt).toBeInTheDocument();
        }
    }
};

export const testContentFeedGrid: Record<'default', Story['play']> = {
    default: testContentFeedGridDefault
};
