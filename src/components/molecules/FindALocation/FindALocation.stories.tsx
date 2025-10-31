import { Meta, StoryObj } from '@storybook/react';

// Components
import { Container, FindALocation } from '@/components';

// Mocks
import { mockFindALocation } from '@/mocks/find-a-location';

// Tests
import { testFindALocation } from '@/tests';

export default {
    title: 'Design System/molecules/S02 - FindALocation',
    component: FindALocation,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17839-2424&t=jiOZXG7EZFh57onk-4'
        },
        controls: {
            include: Object.keys(mockFindALocation.advocateHealth),
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
} satisfies Meta<typeof FindALocation>;

type Story = StoryObj<typeof FindALocation>;

export const AdvocateHealth: Story = {
    args: mockFindALocation.advocateHealth,
    play: testFindALocation.default
};

export const Auorora: Story = {
    args: mockFindALocation.aurora,
    play: testFindALocation.default
};
