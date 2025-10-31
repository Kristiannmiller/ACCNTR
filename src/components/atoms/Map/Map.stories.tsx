import { Meta, StoryObj } from '@storybook/react';

// Components
import { Map } from '@/components';

// Mocks
import { mockMap } from '@/mocks/map';

// Tests
import { testMap } from '@/tests';

export default {
    title: 'Design System/atoms/Map',
    component: Map,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-40862'
        },
        controls: { include: Object.keys(mockMap.default) }
    }
} satisfies Meta<typeof Map>;

type Story = StoryObj<typeof Map>;

export const Default: Story = {
    args: mockMap.default,
    play: testMap.default
};
