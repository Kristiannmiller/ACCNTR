import {
    Image as JSSImage,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ContentFeedCardProps, ContentFeedGridProps } from '@/components';

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
    date: `September ${cardIdx * 7 + 1}, 2024`,
    image: <JSSImage field={{ value: mockImages[cardIdx] }} />,
    link: (
        <JSSLink
            field={{
                value: {
                    ...mockSitecoreLink.value,
                    text: `News Headline ${
                        cardIdx * 17 + 1
                    } Goes here and can wrap`
                }
            }}
        />
    ),
    excerpt: <JSSRichText field={mockSitecoreRichTextSmall} />
});

const mockContentFeedGridDefault: ContentFeedGridProps = {
    cards: [card({ cardIdx: 0 }), card({ cardIdx: 1 }), card({ cardIdx: 2 })]
};

export const mockContentFeedGrid: Record<
    'default' | 'oneCard' | 'twoCards' | 'manyCards',
    ContentFeedGridProps
> = {
    default: mockContentFeedGridDefault,
    oneCard: {
        ...mockContentFeedGridDefault,
        cards: [card({ cardIdx: 0 })]
    },
    twoCards: {
        ...mockContentFeedGridDefault,
        cards: [card({ cardIdx: 1 }), card({ cardIdx: 0 })]
    },
    manyCards: {
        ...mockContentFeedGridDefault,
        cards: [
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 }),
            card({ cardIdx: 0 }),
            card({ cardIdx: 1 }),
            card({ cardIdx: 2 })
        ]
    }
};
