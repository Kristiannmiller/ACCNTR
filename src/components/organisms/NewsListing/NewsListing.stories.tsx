import { Meta, StoryObj } from '@storybook/react';

// Components
import { NewsListing } from '@/components';

// Mocks
import { mockNewsListing } from '@/mocks/news-listing';

// Tests
import { testNewsListing } from '@/tests';

export default {
    title: 'Design System/organisms/S04 - NewsListing',
    component: NewsListing,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35775&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: { include: Object.keys(mockNewsListing.default) }
    }
} satisfies Meta<typeof NewsListing>;

type Story = StoryObj<typeof NewsListing>;

export const Default: Story = {
    args: mockNewsListing.default,
    play: testNewsListing.default
};
