import {
    Image as JSSImage,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { NewsListingCardProps } from '@/components';

// Mocks
import { mockImages } from '@/mocks/images';

const mockNewsListingCardDefault: NewsListingCardProps = {
    image: (
        <JSSImage field={{ src: mockImages[1].src, alt: mockImages[1].alt }} />
    ),
    headline: (
        <JSSLink
            field={{
                href: '#',
                text: 'Headline for search result'
            }}
        />
    ),
    supportCopyText: (
        <JSSRichText
            field={{
                value: 'Body copy for search result. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.. Lorem Ipsum'
            }}
        />
    ),
    href: undefined,
    isFeatured: false,
    categoryName: undefined
};

const mockNewsListingCardWithoutImage: NewsListingCardProps = {
    ...mockNewsListingCardDefault,
    image: undefined
};

const mockNewsListingCardTruncateText: NewsListingCardProps = {
    ...mockNewsListingCardDefault,
    headline: (
        <JSSLink
            field={{
                href: '#',
                text: 'Headline for search result Headline for search result Headline for search result Headline for search result'
            }}
        />
    ),
    image: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    )
};

const mockNewsListingCardIsFeatured: NewsListingCardProps = {
    ...mockNewsListingCardDefault,
    image: (
        <JSSImage field={{ src: mockImages[2].src, alt: mockImages[2].alt }} />
    ),
    isFeatured: true
};

const mockNewsListingCardWithCategory: NewsListingCardProps = {
    ...mockNewsListingCardDefault,
    headline: 'Headline for search result',
    href: '#',
    categoryName: 'Webpage'
};

export const mockNewsListingCard: Record<
    | 'default'
    | 'mockNewsListingCardWithoutImage'
    | 'mockNewsListingCardTruncateText'
    | 'mockNewsListingCardIsFeatured'
    | 'mockNewsListingCardWithCategory',
    NewsListingCardProps
> = {
    default: mockNewsListingCardDefault,
    mockNewsListingCardWithoutImage,
    mockNewsListingCardTruncateText,
    mockNewsListingCardIsFeatured,
    mockNewsListingCardWithCategory
};
