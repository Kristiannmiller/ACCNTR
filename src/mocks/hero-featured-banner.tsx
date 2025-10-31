// Import necessary modules
import React from 'react';
import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { HeroFeaturedBannerProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';

const mockHeroFeaturedBannerDefault: HeroFeaturedBannerProps = {
    backgroundGradientLevel: '80',
    backgroundImage: {
        src: '/images/hero-banners/hero-couple-sun.webp',
        alt: 'hero couple sun desktop'
    },
    mobileBackgroundImage:
        'https://images.unsplash.com/photo-1510908072721-6fbd31199630?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: <JSSRichText field={{ value: '<span>Advocate</span> Health' }} />,
    taglineTop: (
        <JSSText
            field={{
                value: 'Hero Feature Banner'
            }}
        />
    ),
    firstCTAIcon: 'arrowUpRightFromSquare',
    firstCTALink: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: "See where we're going"
                }
            }}
        />
    ),
    secondCTAIcon: 'arrowUpRightFromSquare',
    secondCTALink: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: 'See what we’ve accomplished'
                }
            }}
        />
    )
};

export const mockHeroFeaturedBanner: Record<
    'default' | 'withBottomTagline' | 'withoutMobileFallBack',
    HeroFeaturedBannerProps
> = {
    default: mockHeroFeaturedBannerDefault,
    withBottomTagline: {
        ...mockHeroFeaturedBannerDefault,
        taglineTop: null,
        taglineBottom: (
            <JSSText
                field={{
                    value: 'Doing more. Better. Faster. Together.'
                }}
            />
        )
    },
    withoutMobileFallBack: {
        ...mockHeroFeaturedBannerDefault,
        mobileBackgroundImage: ''
    }
};
