import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaLeftAlignedCard } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaLeftAlignedCard>;

const testIconCtaLeftAlignedCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const leftAlignedCard = getByTestId('icon-cta-left-aligned-card');
    const classNames = leftAlignedCard.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    if (args.headline) {
        const headline = getByTestId('icon-cta-left-aligned-card-headline');
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = headline.tagName.toLowerCase();
        await expect(headlineTag).toBe(args.headlineTag);

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId(
            'icon-cta-left-aligned-card-support-copy'
        );
        // Should have supportCopy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.cardCTA) {
        const cardCTA = getByTestId('icon-cta-left-aligned-card-card-cta');
        // Should have cardCTA
        await expect(cardCTA).toBeInTheDocument();

        // Should have same href
        await expect(cardCTA).toHaveAttribute(
            'href',
            getLinkFieldValue(args.cardCTA)
        );
    }
};

export const testIconCtaLeftAlignedCard = {
    default: testIconCtaLeftAlignedCardDefault
};
