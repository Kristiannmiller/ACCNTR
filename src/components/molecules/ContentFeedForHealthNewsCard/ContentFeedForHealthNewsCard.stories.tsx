import { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentFeedForHealthNewsCard } from '@/components';

// Controls
import { booleanControl, textControl } from '@/sb-tools';

// Mocks
import { mockContentFeedForHealthNewsCard } from '@/mocks';

// Tests
import { testContentFeedForHealthNewsCard } from '@/tests';

export default {
    title: 'Design System/molecules/C21 - ContentFeedForHealthNewsCard',
    component: ContentFeedForHealthNewsCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-23489&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockContentFeedForHealthNewsCard.one)
        }
    },
    argTypes: {
        headline: textControl,
        excerpt: textControl,
        shouldHideImagesOnMobile: booleanControl,
        shouldHideSupportCopyOnCards: booleanControl
    },
    decorators: [
        (Story) => (
            <div style={{ width: 360, margin: '0 auto' }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof ContentFeedForHealthNewsCard>;

type Story = StoryObj<typeof ContentFeedForHealthNewsCard>;

export const One: Story = {
    args: mockContentFeedForHealthNewsCard.one,
    play: testContentFeedForHealthNewsCard.default
};

export const Two: Story = {
    args: mockContentFeedForHealthNewsCard.two,
    play: testContentFeedForHealthNewsCard.default
};

export const Three: Story = {
    args: mockContentFeedForHealthNewsCard.three,
    play: testContentFeedForHealthNewsCard.default
};

export const Four: Story = {
    args: mockContentFeedForHealthNewsCard.four,
    play: testContentFeedForHealthNewsCard.default
};

export const Five: Story = {
    args: mockContentFeedForHealthNewsCard.five,
    play: testContentFeedForHealthNewsCard.default
};
