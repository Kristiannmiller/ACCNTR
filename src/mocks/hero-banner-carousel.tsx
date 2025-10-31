import {
    Text as JSSText,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { HeroBanner, HeroBannerCarouselProps } from '@/components';

// Mocks
import { mockHeroBanner } from '@/mocks/hero-banner';
import { mockSitecoreImageWide2 } from '@/mocks/sitecore';

import { Sites } from '@/types';

type HeroBannerCarouselSites = Extract<Sites, 'advocateHealthCare'>;

export const mockHeroBannerSlides = [
    <HeroBanner {...mockHeroBanner.default} />,
    <HeroBanner
        {...mockHeroBanner.default}
        backgroundImage={mockSitecoreImageWide2.value}
        headline={<JSSText field={{ value: 'This is a different headline' }} />}
        supportingCopy={
            <JSSRichText
                field={{
                    value: '<p>This is a different supporting copy. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</p>'
                }}
            />
        }
    />
];

const mockHeroBannerCarouselDefault: HeroBannerCarouselProps = {
    slideTimingSeconds: 6,
    slides: mockHeroBannerSlides,
    shouldLeftAlignOnMobile: true
};

export const mockHeroBannerCarousel: Record<
    'default' | HeroBannerCarouselSites,
    HeroBannerCarouselProps
> = {
    default: mockHeroBannerCarouselDefault,
    advocateHealthCare: {
        shouldLeftAlignOnMobile: true,
        slideTimingSeconds: 6,
        slides: [
            <HeroBanner
                backgroundGradientLevel='80'
                backgroundImage={{
                    src: '/images/hero-banners/advocatehealth-merger-consumer.webp',
                    alt: 'Two people hugging and smiling'
                }}
                headline={
                    <JSSText
                        field={{
                            value: 'Hero Banner Carousel'
                        }}
                    />
                }
                supportingCopy={
                    <JSSRichText
                        field={{
                            value: 'Advocate Health Care now is a part of Advocate Health, a new health system designed to do more, be better and go faster.'
                        }}
                    />
                }
                firstCTALink={
                    <JSSLink
                        field={{
                            anchor: '',
                            class: 'custom-class',
                            href: '/learn-more',
                            id: '{64DDFEB8-2924-4CDD-8D6B-F89B19FD2223}',
                            linktype: 'internal',
                            querystring: '',
                            target: '|Custom',
                            text: 'Learn More about us',
                            title: 'custom-title',
                            url: '/test-link'
                        }}
                    />
                }
            />,
            <HeroBanner
                backgroundGradientLevel='80'
                backgroundImage={{
                    src: 'https://www.advocatehealth.com/_widgets/banners/easset_upload_file27331_451449_e.webp',
                    alt: 'A couple living purposefully'
                }}
                headline='Hero Banner Carousel'
                supportingCopy="Whether it's a wellness exam or expert advice to get you back to feeling your best, we're committed to helping you live fully."
                firstCTALink={
                    <JSSLink
                        field={{
                            anchor: '',
                            class: 'custom-class',
                            href: '/learn-more',
                            id: '{64DDFEB8-2924-4CDD-8D6B-F89B19FD2223}',
                            linktype: 'internal',
                            querystring: '',
                            target: '|Custom',
                            text: 'Start with primary care',
                            title: 'custom-title',
                            url: '/test-link'
                        }}
                    />
                }
            />,
            <HeroBanner
                backgroundGradientLevel='80'
                backgroundImage={{
                    src: '/images/hero-banners/Livewell_familyBeach.webp',
                    alt: 'Family smiling on the beach'
                }}
                headline='Hero Banner Carousel'
                supportingCopy='Manage your health and wellness, virtually anywhere.'
                firstCTALink={
                    <JSSLink
                        field={{
                            anchor: '',
                            class: 'custom-class',
                            href: '/learn-more',
                            id: '{64DDFEB8-2924-4CDD-8D6B-F89B19FD2223}',
                            linktype: 'internal',
                            querystring: '',
                            target: '|Custom',
                            text: 'Download the LiveWell app',
                            title: 'custom-title',
                            url: '/test-link'
                        }}
                    />
                }
            />
        ]
    }
};
