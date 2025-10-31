import { Link as JSSLink } from '@sitecore-jss/sitecore-jss-react';

// Components
import { LocationInfoProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockLocationData } from '@/mocks/location-data';

const mockLocationInfoDefault: LocationInfoProps = {
    location: mockLocationData.advocateMemoryCenter,
    isMapShowing: true,
    showHoursOfOperation: true,
    showServicesAvailable: true,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
};

export const mockLocationInfo: Record<
    'default' | 'withDetailPage' | 'noMapOrInfo' | 'shortHours',
    LocationInfoProps
> = {
    default: mockLocationInfoDefault,
    withDetailPage: {
        ...mockLocationInfoDefault,
        detailPageLink: <JSSLink field={mockSitecoreLink} />
    },
    noMapOrInfo: {
        ...mockLocationInfoDefault,
        location: mockLocationData.advocateMemoryCenterNoDetailPage,
        isMapShowing: false,
        showHoursOfOperation: false,
        showServicesAvailable: false
    },
    shortHours: {
        ...mockLocationInfoDefault,
        location: mockLocationData.advocateMemoryCenterNoDetailPage
    }
};
