import { Meta, StoryObj } from '@storybook/react';

// Components
import { Spinner } from '@/components';

// Mocks
import { mockSpinner } from '@/mocks';

// Tests
import { testSpinner } from '@/tests';

export default {
    title: 'Design System/atoms/Spinner',
    component: Spinner,
    parameters: {
        controls: { include: Object.keys(mockSpinner.default) }
    }
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: mockSpinner.default,
    play: testSpinner.default
};
