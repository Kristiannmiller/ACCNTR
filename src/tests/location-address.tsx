import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LocationAddress } from '@/components';

type Story = StoryObj<typeof LocationAddress>;

const testLocationAddressDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { queryByTestId } = within(canvasElement);

    const link = queryByTestId('location-address-link');
    const detailPageLink = queryByTestId('location-address-detail-page');
    const text = queryByTestId('location-address-text');

    if (args.href) {
        await expect(link).not.toBeNull();
    } else {
        await expect(link).toBeNull();
    }

    if (args.location.locationDetailPage && !args.href) {
        await expect(detailPageLink).not.toBeNull();
    } else {
        await expect(detailPageLink).toBeNull();
    }

    if (!args.href && !args.location.locationDetailPage) {
        await expect(text).not.toBeNull();
    } else {
        await expect(text).toBeNull();
    }
};

export const testLocationAddress: Record<'default', Story['play']> = {
    default: testLocationAddressDefault
};
