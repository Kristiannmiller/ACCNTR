// Import necessary modules
import React from 'react';
import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { HeroBannerProps } from '@/components';

// Mocks
import {
    mockSitecoreImageWide2,
    mockSitecoreImageWideAlt,
    mockSitecoreLink
} from '@/mocks/sitecore';

export const mockHeroBannerDefault: HeroBannerProps = {
    backgroundGradientLevel: '80',
    backgroundImage: mockSitecoreImageWideAlt.value,
    mobileBackgroundImage: mockSitecoreImageWide2.value.src,
    headline: <JSSText field={{ value: 'Hero Banner' }} />,
    supportingCopy: (
        <JSSRichText
            field={{
                value: 'This is a supporting copy that will go under the headline.'
            }}
        />
    ),
    firstCTALink: (
        <JSSLink field={{ ...mockSitecoreLink.value, text: 'Learn More' }} />
    ),
    secondCTALink: (
        <JSSLink field={{ ...mockSitecoreLink.value, text: 'Contact Us' }} />
    ),
    shouldHideImgOnMobile: false,
    shouldLeftAlignOnMobile: false
};

export const mockHeroBanner: Record<
    | 'default'
    | 'withoutMobileFallBack'
    | 'advocateChildrens'
    | 'advocateHealthCare',
    HeroBannerProps
> = {
    default: mockHeroBannerDefault,
    withoutMobileFallBack: {
        ...mockHeroBannerDefault,
        backgroundImage: mockSitecoreImageWideAlt.value,
        mobileBackgroundImage: ''
    },
    advocateChildrens: {
        backgroundGradientLevel: '80',
        backgroundImage: {
            src: '/images/hero-banners/CancerCare-ACH-Banner.webp',
            alt: 'Cancer care'
        },
        headline: <JSSText field={{ value: "Children's cancer care" }} />,
        firstCTALink: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Find a cancer specialist'
                }}
            />
        ),
        shouldHideImgOnMobile: false,
        shouldLeftAlignOnMobile: false
    },
    advocateHealthCare: {
        backgroundGradientLevel: '80',
        backgroundImage: {
            src: '/images/hero-banners/OrthopedicCenter-Banner.webp',
            alt: 'orthopedic'
        },
        headline: <JSSText field={{ value: 'Hero Banner' }} />,
        firstCTALink: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Find an ortho specialist'
                }}
            />
        )
    }
};
