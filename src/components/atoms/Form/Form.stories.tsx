import { Meta, StoryObj } from '@storybook/react';

// Components
import { StorybookOnlyForm } from './StorybookOnlyForm';

// Tests
import { testForm } from '@/tests';

// Mocks
import { mockForm } from '@/mocks';

export default {
    title: 'Design System/atoms/F01 - Form',
    component: StorybookOnlyForm,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=599-6757&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockForm.default)
        }
    }
} satisfies Meta<typeof StorybookOnlyForm>;

type Story = StoryObj<typeof StorybookOnlyForm>;

export const Default: Story = {
    args: mockForm.default,
    play: testForm.default
};
