import { Meta, StoryObj } from '@storybook/react';

// Components
import { ReverseRows } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockReverseRows } from '@/mocks/reverse-rows';

// Tests
import { testReverseRows } from '@/tests';

// Controls
import { textControl, booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C11 - ReverseRowStories',
    component: ReverseRows,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-40805&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockReverseRows.default)
        }
    },
    argTypes: {
        headlineTag: {
            default: 'h2',
            defaultValue: 'h2',
            description: 'controls tag type of title',
            control: 'select',
            options: headlineTags
        },
        shouldRemovePaddingBetweenRows: {
            defaultValue: false,
            description:
                'controls padding between rows. false === padding; true === no padding',
            booleanControl
        },
        headline: textControl,
        topSupportingCopy: textControl,
        bottomSupportingCopy: textControl
    }
} satisfies Meta<typeof ReverseRows>;

type Story = StoryObj<typeof ReverseRows>;

export const Default: Story = {
    args: mockReverseRows.default,
    play: testReverseRows.default
};

export const Alternating: Story = {
    args: mockReverseRows.alternatingMedia,
    play: testReverseRows.default
};
