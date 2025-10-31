import { Meta, StoryObj } from '@storybook/react';

// Components
import { LocationInput } from '@/components';

// Tests
import { testLocationInput } from '@/tests';

export default {
    title: 'Design System/molecules/LocationInput',
    component: LocationInput,
    parameters: {
        controls: { include: ['placeholder', 'value', 'error'] },
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35399'
        }
    },
    argTypes: {
        placeholder: {
            control: 'text'
        },
        value: {
            control: 'text'
        }
    }
} satisfies Meta<typeof LocationInput>;

type Story = StoryObj<typeof LocationInput>;

const Template: Story['render'] = (args) => {
    return <LocationInput {...args} />;
};

export const Default: Story = {
    args: {
        placeholder: 'Enter your location',
        value: ''
    },
    render: Template,
    play: testLocationInput.default
};

export const WithError: Story = {
    args: {
        placeholder: 'Enter your location',
        value: ''
    },
    render: Template,
    play: testLocationInput.withError
};
