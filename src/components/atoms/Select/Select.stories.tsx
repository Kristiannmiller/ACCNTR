import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components';

export default {
    title: 'Design System/atoms/Select',
    component: Select,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=599-6757&m=dev'
        },
        layout: 'centered'
    }
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: () => {
        return (
            <Select>
                <SelectTrigger style={{ minWidth: '200px' }}>
                    <SelectValue placeholder='Theme' />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='light'>Light</SelectItem>
                    <SelectItem value='dark'>Dark</SelectItem>
                    <SelectItem value='system'>System</SelectItem>
                </SelectContent>
            </Select>
        );
    }
};
