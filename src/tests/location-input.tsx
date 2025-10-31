import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { StoryObj } from '@storybook/react';

// Components
import { LocationInput } from '@/components';

type Story = StoryObj<typeof LocationInput>;

const testLocationInputDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByPlaceholderText, getByTestId } = within(canvasElement);
    const input = getByPlaceholderText('Enter your location');
    const button = getByTestId('location-btn');

    // Should have input field
    expect(input).toBeInTheDocument();

    // Should have location button
    expect(button).toBeInTheDocument();
};

const testLocationInputWithError: Story['play'] = async ({ canvasElement }) => {
    const { getByPlaceholderText, getByTestId } = within(canvasElement);
    const input = getByPlaceholderText('Enter your location');
    const button = getByTestId('location-btn');
    const errorMsg = getByTestId('input-error-message');

    // Should have input field
    await expect(input).toBeInTheDocument();

    // Should have location button
    await expect(button).toBeInTheDocument();

    // Should have error message
    await expect(errorMsg).toBeInTheDocument();
};

export const testLocationInput = {
    default: testLocationInputDefault,
    withError: testLocationInputWithError
};
