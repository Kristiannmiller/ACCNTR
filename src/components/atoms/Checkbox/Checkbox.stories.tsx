import { Meta, StoryObj } from '@storybook/react';

// Components
import { Checkbox } from '@/components';

// Tests
import { testCheckbox } from '@/tests';

// Tools
import { disabledControl } from '@/sb-tools';

export default {
    title: 'Design System/atoms/Checkbox',
    component: Checkbox,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=398-15408'
        },
        argTypes: {
            asChild: disabledControl
        },
        layout: 'centered'
    }
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    play: testCheckbox.default
};

export const ToggleChecked: Story = {
    play: testCheckbox.toggle
};

export const Checked: Story = {
    render: () => <Checkbox defaultChecked />,
    play: testCheckbox.withIcon
};
