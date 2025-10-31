import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LocationCards } from '@/components';

type Story = StoryObj<typeof LocationCards>;

const testLocationCardsDefault: (options: { cards: number }) => Story['play'] =
    (options) =>
    async ({ canvasElement }) => {
        const { queryByTestId } = within(canvasElement);

        const containerEl = queryByTestId('location-cards-container');
        const gridEl = queryByTestId('location-cards-grid');

        await expect(containerEl).toBeInTheDocument();

        await expect(gridEl).toBeInTheDocument();
        await expect(gridEl?.childNodes).toHaveLength(options.cards);
    };

export const testLocationCards: Record<
    'default' | 'threeCards',
    Story['play']
> = {
    default: testLocationCardsDefault({ cards: 6 }),
    threeCards: testLocationCardsDefault({ cards: 3 })
};
