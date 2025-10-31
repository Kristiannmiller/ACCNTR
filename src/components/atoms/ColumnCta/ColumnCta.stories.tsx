import { Meta, StoryObj } from '@storybook/react';

// Components
import { ColumnCta } from './ColumnCta';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockColumnCta } from '@/mocks/column-cta';

// Tests
import { testColumnCta } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/atoms/ColumnCta',
    component: ColumnCta,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17770-23468&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockColumnCta.default)
        }
    },
    argTypes: {
        textAlignment: { control: 'select', options: ['left', 'center'] },
        headline: textControl,
        bodyCopy: textControl,
        headlineTag: {
            control: 'select',
            options: headlineTags
        }
    }
} satisfies Meta<typeof ColumnCta>;

type Story = StoryObj<typeof ColumnCta>;

export const SingleColumn: Story = {
    args: mockColumnCta.default,
    play: testColumnCta.default
};

export const CovidColumn: Story = {
    args: mockColumnCta.covid,
    play: testColumnCta.default
};

export const ShortSubheading: Story = {
    args: mockColumnCta.short,
    play: testColumnCta.default
};
