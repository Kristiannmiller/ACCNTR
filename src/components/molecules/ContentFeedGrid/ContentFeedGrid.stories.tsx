import { Meta, StoryObj } from '@storybook/react';

// Components
import { Container, ContentFeedGrid } from '@/components';

// Mocks
import { mockContentFeedGrid } from '@/mocks';

// Tests
import { testContentFeedGrid } from '@/tests';

export default {
    title: 'Design System/molecules/C21 - ContentFeedGrid',
    component: ContentFeedGrid,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-23489&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockContentFeedGrid.default) }
    },
    decorators: [
        (Story) => {
            return (
                <Container>
                    <Story />
                </Container>
            );
        }
    ]
} satisfies Meta<typeof ContentFeedGrid>;

type Story = StoryObj<typeof ContentFeedGrid>;

export const Default: Story = {
    args: mockContentFeedGrid.default,
    play: testContentFeedGrid.default
};

export const OneCard: Story = {
    args: mockContentFeedGrid.oneCard,
    play: testContentFeedGrid.default
};

export const TwoCards: Story = {
    args: mockContentFeedGrid.twoCards,
    play: testContentFeedGrid.default
};

export const ManyCards: Story = {
    args: mockContentFeedGrid.manyCards,
    play: testContentFeedGrid.default
};
