import { Meta, StoryObj } from '@storybook/react';

// Components
import { LinkList } from '@/components';

// Mocks
import { mockLinkList } from '@/mocks/link-list';

// Static
import { fourColumns, headlineTags, ctaStyle } from '@/static';

// Tests
import { testLinkList } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C08 - LinkList',
    component: LinkList,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17770-40559&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockLinkList.default)
        }
    },
    argTypes: {
        columnAlignment: {
            default: 'left',
            description: 'Controls alignment of link grid to be center or left',
            control: 'select',
            options: ['left', 'center']
        },
        headlineAlignment: {
            default: 'left',
            control: 'select',
            options: ['left', 'center']
        },
        supportCopyAlignment: {
            default: 'left',
            control: 'select',
            options: ['left', 'center']
        },
        backgroundColor: {
            default: 'whiteSmoke',
            description:
                'Controls background color of Links list. | White | White Smoke ',
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        numColumns: {
            default: '4',
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
        ctaStyle: {
            default: 'button',
            description:
                'Changes type of CTA (button or link). anchor | button',
            control: 'select',
            options: ctaStyle
        },
        ctaAlignment: {
            default: 'left',
            control: 'select',
            options: ['left', 'center']
        },
        headline: textControl,
        supportingCopy: textControl
    }
} satisfies Meta<typeof LinkList>;

type Story = StoryObj<typeof LinkList>;

export const Default: Story = {
    args: mockLinkList.default,
    play: testLinkList.default
};

export const NoBottomCta: Story = {
    args: mockLinkList.noBottomCta,
    play: testLinkList.default
};
