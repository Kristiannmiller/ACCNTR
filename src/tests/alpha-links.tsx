import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { AlphaLinksIndex } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof AlphaLinksIndex>;

const testAlphaLinksIndexDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const alphaLinksIndexContainer = getByTestId('alpha-links-index');
    const classNames = alphaLinksIndexContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have Alpha Links Index container
    await expect(alphaLinksIndexContainer).toBeInTheDocument();

    if (args.headline) {
        const headline = getByTestId('content-container-headline');
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

    if (args.topSupportCopy) {
        const topSupportCopy = getByTestId('content-container-support-copy');
        // Should have Top Support Copy
        await expect(topSupportCopy).toBeInTheDocument();
    }

    if (args.bottomSupportCopy) {
        const containerBottomSupportCopy = getByTestId(
            'content-container-support-copy-bottom'
        );
        // Should have containerBottomSupportCopy
        await expect(containerBottomSupportCopy).toBeInTheDocument();
    }
};

export const testAlphaLinksIndex = {
    default: testAlphaLinksIndexDefault
};
