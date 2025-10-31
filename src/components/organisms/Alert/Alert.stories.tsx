import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Alert } from '@/components';

// Mocks
import { mockAlert } from '@/mocks/alert';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/A01- Alert',
    component: Alert,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=3357-570&t=Z2Jsx023hDgDEBbL-4'
        },
        controls: { include: Object.keys(mockAlert.info) }
    },
    argTypes: {
        alertFunction: {
            control: 'select',
            options: ['expanding', 'dismissible']
        },
        alertType: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success', 'utility']
        },
        primaryAlertText: textControl,
        expandedAlertText: textControl,
        mobileAlertText: textControl
    }
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

const test: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);

    // In-depth testing of AlertDismissible and AlertExpandable is done in their respective stories.
    if (args.alertFunction === 'expanding' && !!args.expandedAlertText) {
        const alertExpandable = getByTestId('alert-expandable');
        await expect(alertExpandable).toBeInTheDocument();
    } else {
        const alertDismissible = getByTestId('alert-dismissible');
        await expect(alertDismissible).toBeInTheDocument();
    }
};

export const Info: Story = {
    args: mockAlert.info,
    play: test
};

export const Success: Story = {
    args: mockAlert.success,
    play: test
};

export const Warning: Story = {
    args: mockAlert.warning,
    play: test
};

export const Error: Story = {
    args: mockAlert.error,
    play: test
};

export const Utility: Story = {
    args: mockAlert.utility,
    play: test
};
