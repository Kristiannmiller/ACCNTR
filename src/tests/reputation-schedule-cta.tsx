import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ReputationScheduleCta } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ReputationScheduleCta>;

const testReputationScheduleCtaDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    // Should have searchForm
    const searchForm = getByTestId('reputation-schedule-cta-search-form');
    const classNames = searchForm.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(searchForm).toBeInTheDocument();

    // Should have searchInput
    const searchInput = getByTestId('reputation-schedule-cta-search-input');
    await expect(searchInput).toBeInTheDocument();

    // Should have searchButton
    const searchButton = getByTestId('reputation-schedule-cta-search-button');
    await expect(searchButton).toBeInTheDocument();

    // Search button should have solid1 style
    await expect(searchButton).toHaveClass('r-btn-solid1');
};

export const testReputationScheduleCta = {
    default: testReputationScheduleCtaDefault
};
