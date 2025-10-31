import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LocationInfo } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof LocationInfo>;

const testLocationInfoDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, queryByTestId } = within(canvasElement);
    const content = getByTestId('location-info-container');
    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    const mapWrapper = queryByTestId('location-info-map-wrapper');
    const infoWrapper = queryByTestId('location-info-wrapper');
    const locationName = queryByTestId('location-info-name');
    const locationNameLink = queryByTestId('location-info-name-link');
    const address = queryByTestId('location-info-address');
    const directions = queryByTestId('location-info-directions');
    const hoursTerm = queryByTestId('location-info-hours-term');
    const hoursDefinition = queryByTestId('location-info-hours-definition');
    const servicesTerm = queryByTestId('location-info-services-term');
    const servicesDefinition = queryByTestId(
        'location-info-services-definition'
    );
    const phone = queryByTestId('location-info-phone');

    if (args.isMapShowing) {
        await expect(mapWrapper).not.toBeNull();
        await expect(directions).not.toBeNull();
    } else {
        await expect(mapWrapper).toBeNull();
        await expect(directions).toBeNull();
    }

    await expect(infoWrapper).not.toBeNull();

    await expect(address).not.toBeNull();

    if (args.detailPageLink) {
        await expect(locationNameLink).not.toBeNull();
        await expect(locationName).toBeNull();
    } else {
        await expect(locationNameLink).toBeNull();
        await expect(locationName).not.toBeNull();
    }

    if (args.showHoursOfOperation) {
        await expect(hoursTerm).not.toBeNull();
        await expect(hoursDefinition).not.toBeNull();
    } else {
        await expect(hoursTerm).toBeNull();
        await expect(hoursDefinition).toBeNull();
    }

    if (args.showServicesAvailable) {
        await expect(servicesTerm).not.toBeNull();
        await expect(servicesDefinition).not.toBeNull();
    } else {
        await expect(servicesTerm).toBeNull();
        await expect(servicesDefinition).toBeNull();
    }

    if (args.location.defaultPhone) {
        await expect(phone).not.toBeNull();
    } else {
        await expect(phone).toBeNull();
    }
};

export const testLocationInfo: Record<'default', Story['play']> = {
    default: testLocationInfoDefault
};
