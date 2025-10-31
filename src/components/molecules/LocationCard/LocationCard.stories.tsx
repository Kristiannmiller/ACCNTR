import { Meta, StoryObj } from '@storybook/react';

// Components
import { LocationCard } from '@/components';

// Mocks
import { mockLocationCard } from '@/mocks/location-card';

// Tests
import { testLocationCard } from '@/tests';

export default {
    title: 'Design System/molecules/LocationCard',
    component: LocationCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=480-158&m=dev'
        },
        controls: { include: Object.keys(mockLocationCard.default) }
    },
    argTypes: {
        firstCtaStyle: {
            control: 'select',
            options: ['solid', 'link']
        },
        secondCtaStyle: {
            control: 'select',
            options: ['solid', 'link']
        }
    }
} satisfies Meta<typeof LocationCard>;

type Story = StoryObj<typeof LocationCard>;

export const Default: Story = {
    args: mockLocationCard.default,
    play: testLocationCard.default
};

export const NoImageLinkAndOverlay: Story = {
    args: mockLocationCard.noImageLinkAndOverlay,
    play: testLocationCard.default
};

export const ImageLinkWithoutOverlay: Story = {
    args: mockLocationCard.imageLinkWitoutOverlay,
    play: testLocationCard.default
};

export const NoOptionalProps: Story = {
    args: mockLocationCard.noOptionalProps,
    play: testLocationCard.default
};
