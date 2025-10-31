import { Meta, StoryObj } from '@storybook/react';

// Components
import { LocationInfo } from '@/components';

// Mocks
import { mockLocationInfo } from '@/mocks/location-info';

// Tests
import { testLocationInfo } from '@/tests';

export default {
    title: 'Design System/organisms/C25 - LocationInfo',
    component: LocationInfo,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-40863&t=oljJbFC1z3BYRxnO-4'
        },
        controls: { include: Object.keys(mockLocationInfo.default) }
    }
} satisfies Meta<typeof LocationInfo>;

type Story = StoryObj<typeof LocationInfo>;

export const Default: Story = {
    args: mockLocationInfo.default,
    play: testLocationInfo.default
};

export const NoMapOrInfo: Story = {
    args: mockLocationInfo.noMapOrInfo,
    play: testLocationInfo.default
};

export const WithDetailPage: Story = {
    args: mockLocationInfo.withDetailPage,
    play: testLocationInfo.default
};

export const ShortHoursOfOperations: Story = {
    args: mockLocationInfo.shortHours,
    play: testLocationInfo.default
};
