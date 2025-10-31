// Types
import { LocationAddressProps } from '@/components';

// Mocks
import { mockLocationData } from '@/mocks/location-data';

const mockLocationAddressDefault: LocationAddressProps = {
    location: mockLocationData.oakLawnCampus
};

export const mockLocationAddress: Record<
    'link' | 'detailPage' | 'text' | 'noCityStateZip',
    LocationAddressProps
> = {
    link: {
        location: mockLocationData.advocateMemoryCenter,
        href: 'https://www.google.com/'
    },
    detailPage: mockLocationAddressDefault,
    text: {
        location: mockLocationData.advocateMemoryCenterNoDetailPage
    },
    noCityStateZip: {
        location: {
            ...mockLocationData.advocateMemoryCenter,
            addressLine2: '',
            city: '',
            state: '',
            zip: ''
        }
    }
};
