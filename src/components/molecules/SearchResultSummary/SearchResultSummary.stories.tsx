import { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchResultSummary } from '@/components';

// Mocks
import { mockSearchResultSummary } from '@/mocks/search-result-summary';

// Tests
import { testSearchResultSummary } from '@/tests';

export default {
    title: 'Design System/molecules/SearchResultSummary',
    component: SearchResultSummary,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=6918-15939&t=MtJl5mbLUyMC0X3F-0'
        },
        controls: { include: Object.keys(mockSearchResultSummary.default) }
    }
} satisfies Meta<typeof SearchResultSummary>;

type Story = StoryObj<typeof SearchResultSummary>;

export const Default: Story = {
    args: mockSearchResultSummary.default,
    play: testSearchResultSummary.default
};
