import { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentFeedWithFeaturedCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockContentFeedWithFeaturedCard } from '@/mocks/content-feed-with-featured-card';

// Tests
import { testContentFeedWithFeaturedCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C23, C61 -  Content Feed for Local Site',
    component: ContentFeedWithFeaturedCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-24240'
        },
        controls: {
            include: Object.keys(mockContentFeedWithFeaturedCard.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['whiteSmoke', 'white']
        },
        contentAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headline: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof ContentFeedWithFeaturedCard>;

type Story = StoryObj<typeof ContentFeedWithFeaturedCard>;

export const Default: Story = {
    args: mockContentFeedWithFeaturedCard.default,
    play: testContentFeedWithFeaturedCard.default
};

export const OneCard: Story = {
    args: mockContentFeedWithFeaturedCard.oneCard,
    play: testContentFeedWithFeaturedCard.default
};

export const TwoCards: Story = {
    args: mockContentFeedWithFeaturedCard.twoCards,
    play: testContentFeedWithFeaturedCard.default
};

export const NoOptionalProps: Story = {
    args: mockContentFeedWithFeaturedCard.noOptionalProps,
    play: testContentFeedWithFeaturedCard.default
};
