import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { TableContainer } from '@/components';

type Story = StoryObj<typeof TableContainer>;

const testTableContainerDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const table = getByTestId('table');

    if (args.headline) {
        const headline = getByTestId('content-container-headline');

        // Should have headline
        await expect(headline).toBeInTheDocument();
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId('content-container-support-copy');

        // Should have supportCopy
        await expect(supportCopy).toBeInTheDocument();
    }

    // Should have table
    await expect(table).toBeInTheDocument();
};

export const testTableContainer: Record<'default', Story['play']> = {
    default: testTableContainerDefault
};
