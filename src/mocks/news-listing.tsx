// Components
import { NewsListingCard } from '@/components';

// Mocks
import { mockNewsListingCard } from './news-listing-card';

// Types
import { NewsListingProps } from '@/components';

const mockNewsListingDefault: NewsListingProps = {
    children: (
        <>
            <NewsListingCard
                {...mockNewsListingCard.mockNewsListingCardIsFeatured}
            />
            <NewsListingCard {...mockNewsListingCard.default} />
            <NewsListingCard
                {...mockNewsListingCard.mockNewsListingCardWithoutImage}
            />
            <NewsListingCard
                {...mockNewsListingCard.mockNewsListingCardTruncateText}
            />
            <NewsListingCard {...mockNewsListingCard.default} />
            <NewsListingCard {...mockNewsListingCard.default} />
        </>
    )
};

export const mockNewsListing: Record<'default', NewsListingProps> = {
    default: mockNewsListingDefault
};
