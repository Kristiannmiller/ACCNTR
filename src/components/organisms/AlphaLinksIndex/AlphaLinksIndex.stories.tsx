import { Meta, StoryObj } from '@storybook/react';

// Components
import { AlphaLinksIndex } from './AlphaLinksIndex';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockAlphaLinksIndex } from '@/mocks/alpha-links';

// Tests
import { testAlphaLinksIndex } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C09 - AZIndex',
    component: AlphaLinksIndex,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17770-40585&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockAlphaLinksIndex.default)
        }
    },
    argTypes: {
        headlineTag: {
            default: 'p',
            description:
                'Changes rendered HTML tag for heading. h2 | h3 | h4 | p',
            control: 'select',
            options: headlineTags
        },
        topContentAlignment: {
            default: 'center',
            description: 'Headline alignment only',
            control: 'select',
            options: ['center', 'left']
        },
        backgroundTheme: {
            default: 'whiteSmoke',
            description:
                'Controls background color of molecule. | White | White Smoke ',
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        headline: textControl,
        topSupportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof AlphaLinksIndex>;

type Story = StoryObj<typeof AlphaLinksIndex>;

export const Default: Story = {
    args: mockAlphaLinksIndex.default,
    play: testAlphaLinksIndex.default
};

export const NoOptionalFields: Story = {
    args: mockAlphaLinksIndex.noOptionalFields,
    play: testAlphaLinksIndex.default
};

export const BottomRichTextLink: Story = {
    args: mockAlphaLinksIndex.linkInBottomCopy,
    play: testAlphaLinksIndex.default
};
