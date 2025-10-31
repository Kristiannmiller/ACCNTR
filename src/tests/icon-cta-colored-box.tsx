import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaColoredBox } from '@/components';

// Utils
import { getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaColoredBox>;

const testIconCtaColoredBoxDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    if (args.headline) {
        const headline = getByTestId('content-container-headline');
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId('content-container-support-copy');
        // Should have support copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.bottomSupportCopy) {
        const bottomSupportCopy = getByTestId(
            'content-container-support-copy-bottom'
        );

        // Should have bottomSupportCopy
        expect(bottomSupportCopy).toBeInTheDocument();
    }

    if (args.children) {
        const card = getAllByTestId('icon-cta-card');
        // Should have four cards
        expect(card).toHaveLength(4);
    }
};

export const testIconCtaColoredBox = {
    default: testIconCtaColoredBoxDefault
};
