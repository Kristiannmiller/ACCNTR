import React, { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaBordered } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaBordered>;

const testIconCtaBorderedDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, queryByTestId, getAllByTestId } =
        within(canvasElement);

    const iconCTABorderedContainer = getByTestId('icon-cta-bordered');
    const classNames = iconCTABorderedContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have iconCTABordered grid
    const iconCTABordered = getByTestId('icon-cta-bordered-grid');
    await expect(iconCTABordered).toBeInTheDocument();

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
        // Should have supportCopy
        await expect(supportCopy).toBeInTheDocument();
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
    const cards = getAllByTestId('icon-cta-bordered-card');
    await expect(cards).toHaveLength(numberOfCards);

    const searchForm = queryByTestId('reputation-schedule-cta-search-form');
    const searchInput = queryByTestId('reputation-schedule-cta-search-input');
    const searchButton = queryByTestId('reputation-schedule-cta-search-button');
    if (searchForm) {
        // Should have searchForm
        await expect(searchForm).toBeInTheDocument();
    }

    if (searchInput) {
        // Should have searchInput
        await expect(searchInput).toBeInTheDocument();
    }

    if (searchButton) {
        // Should have searchButton
        await expect(searchButton).toBeInTheDocument();
    }
};

export const testIconCtaBordered = {
    default: testIconCtaBorderedDefault
};
