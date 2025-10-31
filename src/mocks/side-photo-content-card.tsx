// 3rd-party imports
import {
    Text as JSSText,
    RichText as JSSRichText,
    Image as JSSImage,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { SidePhotoContentCardDataProps } from '@/components';

// Mocks
import { mockImages } from '@/mocks/images';

import { Sites } from '@/types';

type SidePhotoContentCardSites = Extract<Sites, 'advocateHealthCare'>;

const mockSidePhotoContentCardDefault: SidePhotoContentCardDataProps = {
    headline: <JSSText field={{ value: 'Side Photo Content Card' }} />,
    headlineTag: 'p',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>'
            }}
        />
    ),
    primaryCtaButton: (
        <JSSLink field={{ value: { text: 'Button 1', url: '/', href: '/' } }} />
    ),
    secondaryCtaButton: (
        <JSSLink field={{ value: { text: 'Button 2', url: '/', href: '/' } }} />
    ),
    primaryLink: (
        <JSSLink
            field={{
                value: { text: 'Primary Link', url: '/unique', href: '/unique' }
            }}
        />
    ),
    secondaryLink: (
        <JSSLink
            field={{
                value: {
                    text: 'Secondary Link',
                    url: '/unique',
                    href: '/unique'
                }
            }}
        />
    ),
    image: (
        <JSSImage
            field={{
                value: mockImages[2]
            }}
        />
    ),
    secondaryCtaStyle: 'solid1',
    layout: 'fifty',
    imageSide: 'left'
};

export const mockSidePhotoContentCards: Record<
    'default' | 'right6040' | 'noOptionalProps' | SidePhotoContentCardSites,
    SidePhotoContentCardDataProps
> = {
    default: mockSidePhotoContentCardDefault,
    right6040: {
        ...mockSidePhotoContentCardDefault,
        headlineTag: 'h2',
        imageSide: 'right',
        layout: 'forty',
        secondaryCtaButton: undefined
    },
    noOptionalProps: {
        ...mockSidePhotoContentCardDefault,
        supportCopy: undefined,
        secondaryCtaButton: undefined,
        primaryLink: undefined,
        secondaryLink: undefined
    },
    advocateHealthCare: {
        headline: <JSSText field={{ value: 'Put your heart to the test' }} />,
        headlineTag: 'h3',
        image: (
            <JSSImage
                field={{
                    value: {
                        alt: 'We care about your experience',
                        src: '/images/ctas/heart-scan-promo-2.webp'
                    }
                }}
            />
        ),
        imageSide: 'right',
        layout: 'forty',
        primaryCtaButton: (
            <JSSLink
                field={{
                    value: {
                        href: '/',
                        text: 'Schedule your $49 scan now',
                        url: '/'
                    }
                }}
            />
        ),
        secondaryCtaStyle: 'solid1',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Living well starts with a healthy heart. Our 15-minute heart scan is a simple test that reveals your risk of heart disease and helps prevent heart attacks.</p>'
                }}
            />
        )
    }
};
