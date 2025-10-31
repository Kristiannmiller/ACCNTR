import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SearchResultSummary } from '@/components';

type Story = StoryObj<typeof SearchResultSummary>;

const testSearchResultSummaryDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    if (args.resultText) {
        const resultText = getByTestId('result-text');
        await expect(resultText).toBeInTheDocument();
    }

    if (args.numberOfResult) {
        const numberOfResult = getByTestId('number-of-result');
        await expect(numberOfResult).toBeInTheDocument();
    }

    if (args.totalNumberOfResult) {
        const totalNumberOfResult = getByTestId('total-result');
        await expect(totalNumberOfResult).toBeInTheDocument();
    }

    if (args.searchText) {
        const searchText = getByTestId('search-text');
        await expect(searchText).toBeInTheDocument();
    }
};

export const testSearchResultSummary: Record<'default', Story['play']> = {
    default: testSearchResultSummaryDefault
};
