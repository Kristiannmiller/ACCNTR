import React, { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaLeftAligned } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaLeftAligned>;

const testIconCtaLeftAlignedDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const iconCTALeftAlignedContainer = getByTestId('icon-cta-left-aligned');
    const classNames = iconCTALeftAlignedContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have iconCTALeftAligned grid
    const iconCTALeftAligned = getByTestId('icon-cta-left-aligned-grid');
    await expect(iconCTALeftAligned).toBeInTheDocument();

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
        const containerSupportCopy = getByTestId(
            'content-container-support-copy'
        );
        // Should have containerSupportCopy
        await expect(containerSupportCopy).toBeInTheDocument();
    }

    if (args.bottomSupportCopy) {
        const containerBottomSupportCopy = getByTestId(
            'content-container-support-copy-bottom'
        );
        // Should have containerBottomSupportCopy
        await expect(containerBottomSupportCopy).toBeInTheDocument();
    }

    // Should have correct number of cards
    const numberOfCards = args.children
        ? React.Children.count((args.children as ReactElement).props?.children)
        : 0;
    const cards = getAllByTestId('icon-cta-left-aligned-card');
    await expect(cards).toHaveLength(numberOfCards);
};

export const testIconCtaLeftAligned = {
    default: testIconCtaLeftAlignedDefault
};
