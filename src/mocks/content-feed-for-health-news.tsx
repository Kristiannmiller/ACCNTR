import {
    RichText as JSSRichText,
    Text as JSSText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ContentFeedForHealthNewsProps } from '@/components';

// Mocks
import { mockSitecoreLink, mockSitecoreRichTextSmall } from '@/mocks/sitecore';
import { mockContentFeedForHealthNewsCard } from './content-feed-for-health-news-card';

const mockContentFeedForHealthNewsDefault: ContentFeedForHealthNewsProps = {
    backgroundColor: 'white',
    cards: [
        mockContentFeedForHealthNewsCard.one,
        mockContentFeedForHealthNewsCard.two,
        mockContentFeedForHealthNewsCard.three,
        mockContentFeedForHealthNewsCard.four
    ],
    contentAlignment: 'center',
    cta: <JSSLink field={mockSitecoreLink} />,
    enableCarouselOnMobile: false,
    headline: <JSSText field={{ value: 'Content Feed For Health News' }} />,
    headlineTag: 'p',
    shouldHideImagesOnMobile: false,
    shouldHideSupportCopyOnCards: false,
    supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />
};

export const mockContentFeedForHealthNews: Record<
    | 'default'
    | 'noOptionalProps'
    | 'enableCarouselOnMobile'
    | 'shouldHideImagesOnMobile'
    | 'shouldHideSupportCopyOnCards',
    ContentFeedForHealthNewsProps
> = {
    default: mockContentFeedForHealthNewsDefault,
    noOptionalProps: {
        ...mockContentFeedForHealthNewsDefault,
        cta: undefined,
        headline: undefined,
        supportCopy: undefined
    },
    enableCarouselOnMobile: {
        ...mockContentFeedForHealthNewsDefault,
        enableCarouselOnMobile: true
    },
    shouldHideImagesOnMobile: {
        ...mockContentFeedForHealthNewsDefault,
        shouldHideImagesOnMobile: true
    },
    shouldHideSupportCopyOnCards: {
        ...mockContentFeedForHealthNewsDefault,
        shouldHideSupportCopyOnCards: true
    }
};
