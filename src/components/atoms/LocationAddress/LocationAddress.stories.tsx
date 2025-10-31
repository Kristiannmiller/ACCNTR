import { Meta, StoryObj } from '@storybook/react';

// Components
import { LocationAddress } from '@/components';

// Mocks
import { mockLocationAddress } from '@/mocks/location-address';

// Tests
import { testLocationAddress } from '@/tests';

export default {
    title: 'Design System/atoms/LocationAddress',
    component: LocationAddress,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-40862'
        },
        layout: 'centered',
        controls: { include: Object.keys(mockLocationAddress.link) }
    }
} satisfies Meta<typeof LocationAddress>;

type Story = StoryObj<typeof LocationAddress>;

export const Link: Story = {
    args: mockLocationAddress.link,
    play: testLocationAddress.default
};

export const DetailPage: Story = {
    args: mockLocationAddress.detailPage,
    play: testLocationAddress.default
};

export const Text: Story = {
    args: mockLocationAddress.text,
    play: testLocationAddress.default
};

export const NoCityStateZip: Story = {
    args: mockLocationAddress.noCityStateZip,
    play: testLocationAddress.default
};
