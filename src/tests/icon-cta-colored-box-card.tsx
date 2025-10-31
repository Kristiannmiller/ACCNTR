import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaColoredBoxCard } from '@/components';

// Utils
import { getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaColoredBoxCard>;

const testIconCtaColoredBoxCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    if (args.headline) {
        const headline = getByTestId('icon-cta-headline');
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId('icon-cta-support-copy');
        // Should have support copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.icon) {
        const icon = getByTestId('icon-cta-icon');
        // Should have icon
        await expect(icon).toBeInTheDocument();
    }

    if (args.cardCTA) {
        const card = getByTestId('icon-cta-card');
        // Should be a clickable link
        await expect(card).toBeInTheDocument();
    }
};

export const testIconCtaColoredBoxCard = {
    default: testIconCtaColoredBoxCardDefault
};
