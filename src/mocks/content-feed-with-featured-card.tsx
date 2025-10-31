import {
    Image as JSSImage,
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import {
    ContentFeedCardProps,
    ContentFeedWithFeaturedCardProps
} from '@/components';

// Mocks
import { mockSitecoreLink, mockSitecoreRichTextSmall } from '@/mocks/sitecore';
import { mockImages } from '@/mocks/images';

const card: ({
    cardIdx,
    isFeatured
}: {
    cardIdx: 0 | 1 | 2;
    isFeatured?: boolean;
}) => ContentFeedCardProps = ({ cardIdx, isFeatured = false }) => ({
    isFeatured,
    date: 'September 22, 2024',
    image: <JSSImage field={{ value: mockImages[cardIdx] }} />,
    link: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: 'News Headline Goes here and can wrap'
                }
            }}
        />
    ),
    excerpt: <JSSRichText field={mockSitecoreRichTextSmall} />
});

const mockContentFeedWithFeaturedCardDefault: ContentFeedWithFeaturedCardProps =
    {
        backgroundColor: 'whiteSmoke',
        cards: [
            card({ cardIdx: 0, isFeatured: true }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 })
        ],
        contentAlignment: 'center',
        cta: <JSSLink field={mockSitecoreLink} />,
        ctaAlignment: 'center',
        headline: (
            <JSSText field={{ value: 'Content Feed with Featured Card' }} />
        ),
        headlineTag: 'p',
        supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />
    };

export const mockContentFeedWithFeaturedCard: Record<
    'default' | 'oneCard' | 'twoCards' | 'noOptionalProps',
    ContentFeedWithFeaturedCardProps
> = {
    default: mockContentFeedWithFeaturedCardDefault,
    oneCard: {
        ...mockContentFeedWithFeaturedCardDefault,
        cards: [card({ cardIdx: 0 })]
    },
    twoCards: {
        ...mockContentFeedWithFeaturedCardDefault,
        cards: [card({ cardIdx: 1 }), card({ cardIdx: 0 })]
    },
    noOptionalProps: {
        ...mockContentFeedWithFeaturedCardDefault,
        cta: undefined,
        headline: undefined,
        supportCopy: undefined
    }
};
