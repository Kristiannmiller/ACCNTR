import { Meta, StoryObj } from '@storybook/react';

// Components
import { MultiColumnCta } from '@/components';

// Mocks
import { mockMultiColumnCta } from '@/mocks/multi-column-cta';

// Static
import { fourColumns, headlineTags } from '@/static';

// Tests
import { testMultiColumnCta } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C05 - MultiColumnCta',
    component: MultiColumnCta,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17770-23468&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockMultiColumnCta.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        textAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        columns: {
            control: 'select',
            options: fourColumns
        },
        headline: textControl,
        supportingCopy: textControl
    }
} satisfies Meta<typeof MultiColumnCta>;

type Story = StoryObj<typeof MultiColumnCta>;

export const Default: Story = {
    args: mockMultiColumnCta.default,
    play: testMultiColumnCta.default
};
