import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { BioCardGrid } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof BioCardGrid>;

const testBioCardGridDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const bioCardGrid = getByTestId('bio-card-grid');
    const classNames = bioCardGrid.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have correct number of cards
    const numberOfCards = args.bios?.length ?? 0;
    const cards = getAllByTestId('bio-card-grid-item');
    await expect(cards).toHaveLength(numberOfCards);

    for (const [index, card] of cards.entries()) {
        const bio = args.bios[index];

        // Check for image
        if (bio.image) {
            const bioImage = within(card).getByTestId('bio-card-grid-image');
            await expect(bioImage).toBeInTheDocument();
        }

        //Check for name
        const name = getTextFieldValue(bio.name);
        if (name) {
            //Check if bio name is available
            const bioName = within(card).getByTestId('bio-name');
            await expect(bioName).toBeInTheDocument();

            //Check if name is an anchor or not
            if (bio.optionalLink) {
                await expect(bioName).toHaveAttribute(
                    'href',
                    getLinkFieldValue(bio.optionalLink)
                );
            }
        }

        // Check for title
        const title = getTextFieldValue(bio.title);
        if (title) {
            const bioTitle = within(card).getByTestId('bio-title');
            await expect(bioTitle).toHaveTextContent(title);
        }
    }
};

export const testBioCardGrid = {
    default: testBioCardGridDefault
};
