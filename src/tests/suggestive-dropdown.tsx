import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SuggestiveDropdown } from '@/components';

// Mocks
import { mockSuggestiveDropdown } from '@/mocks';

type Story = StoryObj<typeof SuggestiveDropdown>;

const testSuggestiveDropdownDefault: Story['play'] = async ({
    canvasElement
}) => {
    const { getByTestId, getByRole, getByPlaceholderText } =
        within(canvasElement);

    const suggestiveDropdown = getByTestId('suggestive-dropdown');
    await expect(suggestiveDropdown).toBeInTheDocument();

    const input = getByPlaceholderText(
        mockSuggestiveDropdown.default.placeholderText
    );
    await expect(input).toBeInTheDocument();

    const submitButton = getByRole('button', { name: /find now/i });
    await expect(submitButton).toBeInTheDocument();
    await expect(submitButton).toBeDisabled();
};

export const testSuggestiveDropdown: Record<'default', Story['play']> = {
    default: testSuggestiveDropdownDefault
};
