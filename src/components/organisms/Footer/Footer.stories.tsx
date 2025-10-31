import { Meta, StoryObj } from '@storybook/react';

// Components
import { Footer } from './Footer';

// Mocks
import { mockFooter } from '@/mocks/footer';

// Tests
import { testFooter } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/N06 - MainFooter',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29616&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: {
            include: Object.keys(mockFooter.default)
        }
    },
    argTypes: {
        bottomText: textControl,
        legalSection1Text: textControl,
        legalSection2Text: textControl,
        copyRightText: textControl
    }
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: mockFooter.default,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    play: testFooter.default
};

export const Children: Story = {
    args: mockFooter.advocateChildrens,
    parameters: {
        excludeThemes: ['Corporate', 'Consumer']
    },
    play: testFooter.default
};

export const Foundations: Story = {
    args: mockFooter.foundations,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    play: testFooter.default
};

export const NoLogoLink: Story = {
    args: mockFooter.noLogoLink,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    play: testFooter.default
};

export const Research: Story = {
    args: mockFooter.research,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    play: testFooter.default
};
