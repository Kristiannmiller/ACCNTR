import {
    Link as JSSLink,
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { MediaGalleryProps } from '@/components';

import { mockMediaGalleryCarousel } from '@/mocks/media-gallery-carousel';

const mockMediaGalleryDefault: MediaGalleryProps = {
    headline: <JSSText field={{ value: 'Media Gallery' }} />,
    headlineTag: 'p',
    supportCopy: <JSSRichText field={{ value: '<p>Support Copy</p>' }} />,
    cta: <JSSLink field={{ value: { href: '#', text: 'CTA' } }} />,
    contentAlignment: 'left',
    backgroundColor: 'white',
    shouldHideThumbnails: false,
    shouldHideNavigation: false,
    slides: mockMediaGalleryCarousel.default.slides
};

export const mockMediaGallery: Record<
    'default' | '6-items' | 'withEmptySlide',
    MediaGalleryProps
> = {
    default: mockMediaGalleryDefault,
    '6-items': {
        ...mockMediaGalleryDefault,
        slides: mockMediaGalleryCarousel['6-items'].slides
    },
    withEmptySlide: {
        ...mockMediaGalleryDefault,
        slides: [
            mockMediaGalleryCarousel.default.slides[0],

            {
                image: false,
                headline: false,
                supportCopy: false,
                videoId: '',
                videoIdField: false
            },
            mockMediaGalleryCarousel.default.slides[1]
        ]
    }
};
