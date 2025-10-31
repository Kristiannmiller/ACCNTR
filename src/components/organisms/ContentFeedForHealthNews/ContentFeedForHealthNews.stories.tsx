import { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentFeedForHealthNews } from '@/components';

// Controls
import { booleanControl, textControl } from '@/sb-tools';

// Mocks
import { mockContentFeedForHealthNews } from '@/mocks';

// Static
import { headlineTags } from '@/static';

// Tests
import { testContentFeedForHealthNews } from '@/tests';

export default {
    title: 'Design System/organisms/C21 - ContentFeedForHealthNews',
    component: ContentFeedForHealthNews,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=480-158&m=dev'
        },
        controls: { include: Object.keys(mockContentFeedForHealthNews.default) }
    },
    argTypes: {
        backgroundColor: {
            default: 'white',
            description:
                'Controls background color of this component. | White | White Smoke ',
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        contentAlignment: {
            default: 'left',
            description:
                'Controls alignment of this component. | center | left',
            control: 'select',
            options: ['left', 'center']
        },
        enableCarouselOnMobile: booleanControl,
        headline: textControl,
        headlineTag: {
            default: 'h2',
            description: 'Changes rendered HTML tag for heading. h2 | h3 | p',
            control: 'select',
            options: headlineTags
        },
        shouldHideImagesOnMobile: booleanControl,
        shouldHideSupportCopyOnCards: booleanControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof ContentFeedForHealthNews>;

type Story = StoryObj<typeof ContentFeedForHealthNews>;

export const Default: Story = {
    args: mockContentFeedForHealthNews.default,
    play: testContentFeedForHealthNews.default
};

export const NoOptionalProps: Story = {
    args: mockContentFeedForHealthNews.noOptionalProps,
    play: testContentFeedForHealthNews.default
};

export const EnableCarouselOnMobile: Story = {
    args: mockContentFeedForHealthNews.enableCarouselOnMobile,
    play: testContentFeedForHealthNews.default
};

export const ShouldHideImagesOnMobile: Story = {
    args: mockContentFeedForHealthNews.shouldHideImagesOnMobile,
    play: testContentFeedForHealthNews.default
};

export const ShouldHideSupportCopyOnCards: Story = {
    args: mockContentFeedForHealthNews.shouldHideSupportCopyOnCards,
    play: testContentFeedForHealthNews.default
};
