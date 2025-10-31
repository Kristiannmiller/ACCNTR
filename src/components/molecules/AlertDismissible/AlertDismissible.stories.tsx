import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { AlertDismissible } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Controls
import { textControl } from '@/sb-tools';

// Mocks
import { mockAlertDismissible } from '@/mocks/alert-dismissible';

export default {
    title: 'Design System/molecules/AlertDismissible',
    component: AlertDismissible,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=3357-570&m=dev'
        },
        controls: { include: Object.keys(mockAlertDismissible.default) }
    },
    argTypes: {
        alertType: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success', 'utility']
        },
        primaryAlertText: textControl,
        mobileAlertText: textControl
    }
} satisfies Meta<typeof AlertDismissible>;

type Story = StoryObj<typeof AlertDismissible>;

const test: Story['play'] = async ({ canvasElement, args }) => {
    const { queryByTestId } = within(canvasElement);

    const alertDismissible = queryByTestId('alert-dismissible');
    if (args.isDismissed) {
        await expect(alertDismissible).not.toBeInTheDocument();
        return;
    } else {
        await expect(alertDismissible).toBeInTheDocument();
    }

    const classNames = alertDismissible!.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    const dismissButton = queryByTestId('alert-dismiss-button');
    if (args.isDismissible) {
        await expect(dismissButton).toBeInTheDocument();
    } else {
        await expect(dismissButton).not.toBeInTheDocument();
    }

    const alertIcon = queryByTestId('alert-icon');
    if (args.shouldHideIcon) {
        await expect(alertIcon).toBeNull();
    } else {
        await expect(alertIcon).toBeInTheDocument();
    }

    const mobileText = queryByTestId('alert-mobile-text');
    if (args.mobileAlertText) {
        await expect(mobileText).toBeInTheDocument();
    } else {
        await expect(mobileText).toBeNull();
    }

    const primaryText = queryByTestId('alert-primary-text');
    await expect(primaryText).toBeInTheDocument();
};

export const Default: Story = {
    args: mockAlertDismissible.default,
    play: test
};

export const NoIcon: Story = {
    args: mockAlertDismissible.noIcon,
    play: test
};

export const NoDismissButton: Story = {
    args: mockAlertDismissible.noDismissButton,
    play: test
};

export const NoMobileText: Story = {
    args: mockAlertDismissible.noMobileText,
    play: test
};

export const DismissTest: Story = {
    args: mockAlertDismissible.dismissTest,
    play: async (options) => {
        test(options);
        const { canvasElement, args } = options;
        const { queryByTestId } = within(canvasElement);

        if (args.isDismissible) {
            // Alert is in the document.
            const alertDismissible = queryByTestId('alert-dismissible');
            await expect(alertDismissible).toBeInTheDocument();

            // Dismiss button is in the document.
            const dismissButton = queryByTestId('alert-dismiss-button');
            await expect(dismissButton).toBeInTheDocument();

            // Dismiss the alert.
            await userEvent.click(dismissButton!);

            // Alert is removed from the document.
            await expect(alertDismissible).not.toBeInTheDocument();
        }
    }
};
