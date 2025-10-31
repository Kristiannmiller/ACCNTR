import { Meta, StoryObj } from '@storybook/react';

// Components
import { NewsListingCard, Container } from '@/components';

// Mocks
import { mockNewsListingCard } from '@/mocks/news-listing-card';

// Tests
import { testNewsListingCard } from '@/tests';

// Styles
import styles from './NewsListingCard.module.scss';

// Utils
import { disabledControl, textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/S04 - NewsListingCard',
    component: NewsListingCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35775&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: { include: Object.keys(mockNewsListingCard.default) }
    },
    argTypes: {
        headline: textControl,
        supportCopyText: textControl,
        href: textControl,
        image: disabledControl,
        categoryName: textControl
    },
    decorators: [
        (Story) => (
            <Container className={styles['news-listing-container']}>
                <Story />
            </Container>
        )
    ]
} satisfies Meta<typeof NewsListingCard>;

type Story = StoryObj<typeof NewsListingCard>;

export const Default: Story = {
    args: mockNewsListingCard.default,
    play: testNewsListingCard.default
};

export const NewsListingCardWithoutImage: Story = {
    args: mockNewsListingCard.mockNewsListingCardWithoutImage,
    play: testNewsListingCard.default
};

export const NewsListingCardTruncateText: Story = {
    args: mockNewsListingCard.mockNewsListingCardTruncateText,
    play: testNewsListingCard.default
};

export const NewsListingCardIsFeatured: Story = {
    args: mockNewsListingCard.mockNewsListingCardIsFeatured,
    play: testNewsListingCard.isFeatured
};

export const NewsListingCardWithCategory: Story = {
    args: mockNewsListingCard.mockNewsListingCardWithCategory,
    play: testNewsListingCard.withCategory
};
