import { Meta, StoryObj } from '@storybook/react';

// Components
import { Container, FindADoctor } from '@/components';

// Mocks
import { mockFindADoctor } from '@/mocks/find-a-doctor';

// Tests
import { testFindADoctor } from '@/tests';

export default {
    title: 'Design System/molecules/S1 - FindADoctor',
    component: FindADoctor,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35405&t=jiOZXG7EZFh57onk-4'
        },
        controls: {
            include: Object.keys(mockFindADoctor.advocateHealth),
            exclude: ['googleMapsAPIKey']
        }
    },
    decorators: [
        (Story) => (
            <Container>
                <Story />
            </Container>
        )
    ],
    argTypes: {
        filterType: {
            control: 'select'
        }
    }
} satisfies Meta<typeof FindADoctor>;

type Story = StoryObj<typeof FindADoctor>;

export const AdvocateHealth: Story = {
    args: mockFindADoctor.advocateHealth,
    play: testFindADoctor.default
};

export const Aurora: Story = {
    args: mockFindADoctor.aurora,
    play: testFindADoctor.default
};
