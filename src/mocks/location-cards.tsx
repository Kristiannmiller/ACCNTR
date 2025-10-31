import {
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { LocationCardsProps, LocationCard } from '@/components';

// Mocks
import { mockSitecoreRichTextSmall, mockSitecoreLink } from '@/mocks/sitecore';

import { mockLocationCard } from '@/mocks/location-card';

const mockLocationCardsDefault: LocationCardsProps = {
    headline: <JSSText field={{ value: 'Location Cards' }} />,
    supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    bottomSupportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    headlineTag: 'p',
    contentAlignment: 'center',
    backgroundColor: 'whiteSmoke',
    cta: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'Learn about this location'
            }}
        />
    ),
    numberOfColumns: '3',
    children: (
        <>
            <LocationCard {...mockLocationCard.default} />
            <LocationCard {...mockLocationCard.default} />
            <LocationCard {...mockLocationCard.default} />
            <LocationCard {...mockLocationCard.noImageLinkAndOverlay} />
            <LocationCard {...mockLocationCard.noImageLinkAndOverlay} />
            <LocationCard {...mockLocationCard.imageLinkWitoutOverlay} />
        </>
    )
};

export const mockLocationCards: Record<
    'default' | 'emptyCards' | 'noOptionalProps',
    LocationCardsProps
> = {
    default: mockLocationCardsDefault,
    emptyCards: {
        ...mockLocationCardsDefault,
        children: (
            <>
                <LocationCard {...mockLocationCard.noOptionalProps} />
                <LocationCard {...mockLocationCard.noOptionalProps} />
                <LocationCard {...mockLocationCard.noOptionalProps} />
            </>
        )
    },
    noOptionalProps: {
        children: (
            <>
                <LocationCard {...mockLocationCard.noOptionalProps} />
                <LocationCard {...mockLocationCard.noOptionalProps} />
                <LocationCard {...mockLocationCard.noOptionalProps} />
            </>
        )
    }
};
