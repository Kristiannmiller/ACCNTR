import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { AlertExpandable } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockAlertExpandable } from '@/mocks/alert-expandable';

// Controls
import { textControl, booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/AlertExpandable',
    component: AlertExpandable,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=3357-570&m=dev'
        },
        controls: { include: Object.keys(mockAlertExpandable.default) }
    },
    argTypes: {
        alertType: {
            control: 'select',
            options: ['info', 'warning', 'error', 'success', 'utility']
        },
        shouldHideIcon: {
            booleanControl
        },
        primaryAlertText: textControl,
        expandedAlertText: textControl,
        mobileAlertText: textControl
    }
} satisfies Meta<typeof AlertExpandable>;

type Story = StoryObj<typeof AlertExpandable>;

const test: Story['play'] = async ({ canvasElement, args }) => {
    const { queryByTestId } = within(canvasElement);
    const alertExpandable = queryByTestId('alert-expandable');

    await expect(alertExpandable).toBeInTheDocument();

    const classNames = alertExpandable!.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    const alertIcon = queryByTestId('alert-icon');
    if (args.shouldHideIcon) {
        await expect(alertIcon).not.toBeInTheDocument();
    } else {
        await expect(alertIcon).toBeInTheDocument();
    }

    const alertMobileText = queryByTestId('alert-mobile-text');
    if (alertMobileText) {
        await expect(alertMobileText).toBeInTheDocument();
    } else {
        await expect(alertMobileText).not.toBeInTheDocument();
    }

    const alertPrimaryText = queryByTestId('alert-primary-text');
    await expect(alertPrimaryText).toBeInTheDocument();

    const alertTrigger = queryByTestId('alert-trigger');
    await expect(alertTrigger).toBeInTheDocument();

    const triggerOpen = queryByTestId('trigger-open');
    await expect(triggerOpen).toBeVisible();

    const triggerClose = queryByTestId('trigger-close');
    await expect(triggerClose).not.toBeVisible();

    const getExpandedText = () => queryByTestId('alert-expanded-text');
    await expect(getExpandedText()).not.toBeVisible();

    // Open the accordion
    await userEvent.click(alertTrigger!);
    await expect(triggerOpen).not.toBeVisible();
    await expect(triggerClose).toBeVisible();
    await expect(getExpandedText()).toBeVisible();

    // Close the accordion
    await userEvent.click(alertTrigger!);
    await expect(getExpandedText()).not.toBeVisible();
};

export const Default: Story = {
    args: mockAlertExpandable.default,
    play: test
};

export const NoMobileText: Story = {
    args: mockAlertExpandable.noMobileText,
    play: test
};

export const NoIcon: Story = {
    args: mockAlertExpandable.noIcon,
    play: test
};
