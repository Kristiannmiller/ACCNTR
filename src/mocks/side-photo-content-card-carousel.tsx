import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import {
    SidePhotoContentCard,
    SidePhotoContentCardCarouselProps
} from '@/components';

// Mocks
import { mockSitecoreRichTextSmall } from '@/mocks/sitecore';
import { mockSidePhotoContentCards } from '@/mocks/side-photo-content-card';

const mockSidePhotoContentCardCarouselDefault: SidePhotoContentCardCarouselProps =
    {
        supportCopy: <JSSRichText field={{ value: '<p>Support copy</p>' }} />,
        bottomSupportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
        headline: (
            <JSSText field={{ value: 'Side Photo Content Card Carousel' }} />
        ),
        cta: (
            <JSSLink field={{ value: { text: 'CTA', url: '/', href: '/' } }} />
        ),
        backgroundColor: 'whiteSmoke',
        slides: [
            <SidePhotoContentCard {...mockSidePhotoContentCards.default} />,
            <SidePhotoContentCard
                {...mockSidePhotoContentCards.noOptionalProps}
                layout='forty'
            />,
            <SidePhotoContentCard
                {...mockSidePhotoContentCards.noOptionalProps}
                imageSide='right'
            />
        ],
        layout: 'fifty',
        imageSide: 'left',
        slideTimingSeconds: 6,
        contentAlignment: 'center',
        headlineTag: 'p',
        ctaStyle: 'solid'
    };

export const mockSidePhotoContentCardCarousel: Record<
    string,
    SidePhotoContentCardCarouselProps
> = {
    default: mockSidePhotoContentCardCarouselDefault,
    imagesRight: {
        ...mockSidePhotoContentCardCarouselDefault,
        imageSide: 'right'
    },
    layoutForty: {
        ...mockSidePhotoContentCardCarouselDefault,
        layout: 'forty'
    }
};
