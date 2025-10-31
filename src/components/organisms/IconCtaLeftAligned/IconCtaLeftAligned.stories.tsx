import { Meta, StoryObj } from '@storybook/react';

// Components
import { IconCtaLeftAligned } from '@/components';

// Mocks
import { mockIconCtaLeftAligned } from '@/mocks/icon-cta-left-aligned';

// Static
import { fourColumns, headlineTags } from '@/static';

// Tests
import { testIconCtaLeftAligned } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C33 - IconCtaLeftAligned',
    component: IconCtaLeftAligned,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=15134-7711&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaLeftAligned.default)
        }
    },
    argTypes: {
        numberOfColumns: {
            control: 'select',
            options: fourColumns
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headlineAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        supportCopyAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        headline: textControl,
        supportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof IconCtaLeftAligned>;

type Story = StoryObj<typeof IconCtaLeftAligned>;

export const Default: Story = {
    args: mockIconCtaLeftAligned.default,
    play: testIconCtaLeftAligned.default
};

export const SixCards: Story = {
    args: mockIconCtaLeftAligned.sixCards,
    play: testIconCtaLeftAligned.default
};
