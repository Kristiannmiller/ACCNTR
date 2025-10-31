import {
    Image as JSSImage,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { LocationCardProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockLocationData } from '@/mocks/location-data';

const mockLocationCardDefault: LocationCardProps = {
    location: mockLocationData.oakLawnCampus,
    firstCta: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'Learn about this location'
            }}
        />
    ),
    secondCta: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'Learn about this location'
            }}
        />
    ),
    shouldDisplayImageOverlay: true,
    animalIcon: (
        <JSSImage
            field={{
                value: {
                    src: '/images/childrens-footer/piggie.png',
                    alt: 'piggie'
                }
            }}
        />
    ),
    firstCtaStyle: 'solid',
    secondCtaStyle: 'link',
    threeSixtyImage: (
        <JSSImage
            field={{
                value: {
                    src: '/images/misc/virtual_tour.png',
                    alt: '360 watermark'
                }
            }}
        />
    ),
    emergencyPhoneLabel: 'ED'
};

export const mockLocationCard: Record<
    | 'default'
    | 'noImageLinkAndOverlay'
    | 'imageLinkWitoutOverlay'
    | 'noOptionalProps',
    LocationCardProps
> = {
    default: mockLocationCardDefault,
    noImageLinkAndOverlay: {
        ...mockLocationCardDefault,
        firstCtaStyle: 'link',
        location: {
            ...mockLocationCardDefault.location,
            locationTour: undefined
        }
    },
    imageLinkWitoutOverlay: {
        ...mockLocationCardDefault,
        secondCtaStyle: 'link',
        shouldDisplayImageOverlay: false,
        location: {
            ...mockLocationCardDefault.location
        }
    },
    noOptionalProps: {
        location: {
            locationName: mockLocationCardDefault.location.locationName,
            addressLine1: mockLocationCardDefault.location.addressLine1
        }
    }
};
