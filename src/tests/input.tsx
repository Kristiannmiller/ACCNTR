import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Input } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof Input>;

const testInputDefault: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);
    const input = getByTestId('input');
    const label = getByTestId('label');
    const inputBox = getByTestId('input-box');

    // Should have input
    await expect(input).toBeInTheDocument();

    // Should have label
    await expect(label).toBeInTheDocument();

    // Should have input box
    await expect(inputBox).toBeInTheDocument();

    // input box placeholder value should match
    await expect(inputBox).toHaveAttribute('placeholder', args.placeholder);

    // input box type value should match
    await expect(inputBox).toHaveAttribute('type', args.type);

    if (args.hasError) {
        // Should have error message
        const errorMessage = getByTestId('input-error-message');
        await expect(errorMessage).toBeInTheDocument();

        // error class should be added if hasError is true
        const labelClass = label.getAttribute('class')!;
        await expect(labelClass).toMatch(classNameRegex('show-error'));

        // error class should be added if hasError is true
        const errorMessageClass = errorMessage.getAttribute('class')!;
        await expect(errorMessageClass).toMatch(classNameRegex('show-error'));
    }
};

export const testInput = {
    default: testInputDefault
};
