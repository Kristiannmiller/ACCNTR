import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import {
    imageCaption,
    mediaGalleryCarouselImageHeadline
} from '@/mocks/sitecore';

// Types
import { MediaGalleryCarouselProps } from '@/components';

const mockMediaGalleryCarouselDefault: MediaGalleryCarouselProps = {
    slides: [
        {
            image: (
                <JSSImage
                    field={{
                        src: '/images/hero-banners/advocatehealth-merger-kids.webp',
                        alt: 'Advocate Health Care Merger'
                    }}
                />
            ),
            headline: <JSSText field={mediaGalleryCarouselImageHeadline} />,
            supportCopy: <JSSRichText field={imageCaption} />
        },
        {
            image: (
                <JSSImage
                    field={{
                        src: 'https://www.advocatechildrenshospital.com/_widgets/banners/easset_upload_file71272_456927_e.webp',
                        alt: "Advocate Children's Hospital"
                    }}
                />
            )
        },
        {
            videoId: 'kjmrWe8rsAY'
        }
    ],
    shouldHideNavigation: false,
    shouldHideThumbnails: false
};

export const mockMediaGalleryCarousel: Record<
    'default' | '6-items',
    MediaGalleryCarouselProps
> = {
    default: mockMediaGalleryCarouselDefault,
    '6-items': {
        slides: [
            {
                videoId: 'N5N_65O_u04'
            },
            ...mockMediaGalleryCarouselDefault.slides,
            {
                image: (
                    <JSSImage
                        field={{
                            src: '/images/hero-banners/about_us_for_placement_only.jpg',
                            alt: 'About Us'
                        }}
                    />
                )
            },
            {
                image: (
                    <JSSImage
                        field={{
                            src: '/images/ctas/workforce-connection.webp',
                            alt: 'Workforce Connection'
                        }}
                    />
                )
            },
            {
                videoId: 'nPbLlbbordU'
            }
        ]
    }
};
