import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SearchPagination } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof SearchPagination>;

const testSearchPaginationDefault: Story['play'] = async ({
    canvasElement
}) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('search-pagination');
    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    // Verify initial state
    const previousPageButton = content.querySelector(
        'button[title="Go to previous page"]'
    );
    const nextPageButton = content.querySelector(
        'button[title="Go to next page"]'
    );

    expect(previousPageButton).toBeDisabled();
    expect(nextPageButton).not.toBeDisabled();
};

export const testSearchPagination: Record<'default', Story['play']> = {
    default: testSearchPaginationDefault
};
