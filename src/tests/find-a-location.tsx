import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { StoryObj } from '@storybook/react';

// Components
import { FindALocation } from '@/components';

// Mocks
import { mockFindALocation } from '@/mocks/find-a-location';

type Story = StoryObj<typeof FindALocation>;

const testFindALocationDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId, getByRole, getByPlaceholderText, getByTitle } =
        within(canvasElement);

    const findALocation = getByTestId('find-a-location');
    const classNames = findALocation.getAttribute('class')!;
    await expect(classNames).toMatch(/find-a-location-base/);

    // Check for select dropdown
    const selectDropdown = getByRole('combobox', {
        name: mockFindALocation.aurora.locationTypeLabel
    });
    await expect(selectDropdown).toBeInTheDocument();

    // Check for location input
    const locationInput = getByPlaceholderText(
        mockFindALocation.aurora.locationInputPlaceholder
    );

    await expect(locationInput).toBeInTheDocument();

    // Check for submit button
    const submitButton = getByRole('button', { name: /See search results/i });
    await expect(submitButton).toBeInTheDocument();
    await expect(submitButton).toBeDisabled();
};

export const testFindALocation = {
    default: testFindALocationDefault
};
