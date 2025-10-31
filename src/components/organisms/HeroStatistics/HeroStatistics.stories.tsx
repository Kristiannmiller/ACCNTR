import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeroStatistics } from './HeroStatistics';

// Mocks
import { mockHeroStatistics } from '@/mocks/hero-statistics';

// Static
import { twoColumns, fourColumns, headlineTags } from '@/static';

// Controls
import { textControl, booleanControl } from '@/sb-tools';

// Tests
import { testHeroStatistics } from '@/tests';

export default {
    title: 'Design System/organisms/C52 - HeroStatistics',
    component: HeroStatistics,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17788-493&t=l820mFm22Xpvkz9N-4'
        },
        controls: {
            include: Object.keys(mockHeroStatistics.default)
        }
    },
    argTypes: {
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        contentAlignments: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke', 'denimBlue']
        },
        numberOfColumnsMobile: {
            control: 'select',
            options: twoColumns
        },
        numberOfColumns: {
            control: 'select',
            options: fourColumns
        },
        shouldShowColumnDividers: {
            booleanControl
        },
        headline: textControl,
        supportCopy: textControl,
        supportCopyBottom: textControl
    }
} satisfies Meta<typeof HeroStatistics>;

type Story = StoryObj<typeof HeroStatistics>;

export const Default: Story = {
    args: mockHeroStatistics.default,
    play: testHeroStatistics.default
};

export const NoOptionalProps: Story = {
    args: mockHeroStatistics.noOptionalProps,
    play: testHeroStatistics.default
};

export const NoSupportCopy: Story = {
    args: mockHeroStatistics.noSupportCopy,
    play: testHeroStatistics.default
};
