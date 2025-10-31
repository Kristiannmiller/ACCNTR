import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaSimplified } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaSimplified>;

const testIconCtaSimplifiedDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const iconCtaSimplifiedContainer = getByTestId('icon-cta-simplified');
    const classNames = iconCtaSimplifiedContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have Icon Cta Simplified grid
    const iconCtaSimplified = getByTestId('icon-cta-simplified-grid');
    await expect(iconCtaSimplified).toBeInTheDocument();

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

    if (args.supportCopy) {
        const supportCopy = getByTestId('content-container-support-copy');
        // Should have Support Copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.bottomSupportCopy) {
        const containerBottomSupportCopy = getByTestId(
            'content-container-support-copy-bottom'
        );
        // Should have Bottom Support Copy
        await expect(containerBottomSupportCopy).toBeInTheDocument();
    }

    // Should have correct number of cards
    const numberOfCards = args.iconCtas?.props?.children?.length ?? 0;
    const cards = getAllByTestId('icon-cta-simplified-card');
    await expect(cards).toHaveLength(numberOfCards);
};

export const testIconCtaSimplified = {
    default: testIconCtaSimplifiedDefault
};
