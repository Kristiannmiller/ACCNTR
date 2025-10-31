import { Meta, StoryObj } from '@storybook/react';

// Components
import { CtaContentCards } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockCtaContentCards } from '@/mocks/cta-content-cards';

// Tests
import { testCtaContentCards } from '@/tests';

// Types
import { fourColumns } from '@/static';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C20 - CtaContentCards',
    component: CtaContentCards,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-7272&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockCtaContentCards.default)
        }
    },
    argTypes: {
        backgroundColor: {
            default: 'white',
            description:
                'Controls background color of Links list. | White | White Smoke ',
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        numColumns: {
            default: '2',
            description:
                'Controls how many columns should be rendered in desktop mode. 1 | 2 | 3 | 4 ',
            control: 'select',
            options: fourColumns
        },
        headlineTag: {
            default: 'h2',
            description: 'Changes rendered HTML tag for heading. h2 | h3 | p',
            control: 'select',
            options: headlineTags
        },
        contentAlignment: {
            default: 'left',
            description: 'Controls alignment of link grid to be center or left',
            control: 'select',
            options: ['left', 'center']
        },
        headline: textControl,
        supportingCopy: textControl,
        bottomSupportingCopy: textControl
    }
} satisfies Meta<typeof CtaContentCards>;

type Story = StoryObj<typeof CtaContentCards>;

export const Default: Story = {
    args: mockCtaContentCards.default,
    play: testCtaContentCards.default
};

export const WithBackgroundAndElevation: Story = {
    args: mockCtaContentCards.smoke,
    play: testCtaContentCards.default
};

export const WithLinksCtaStyling: Story = {
    args: mockCtaContentCards.links,
    play: testCtaContentCards.default
};
