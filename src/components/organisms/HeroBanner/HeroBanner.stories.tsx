import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeroBanner } from '@/components';

// Mocks
import { mockHeroBanner } from '@/mocks/hero-banner';

//Static
import { opacities } from '@/static';

// Tests
import { testHeroBanner } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/B01 - HeroBanner',
    component: HeroBanner,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17670-28762&t=Z2Jsx023hDgDEBbL-4'
        },
        controls: {
            include: Object.keys(mockHeroBanner.default)
        },
        excludeThemes: ['Corporate']
    },
    argTypes: {
        backgroundGradientLevel: {
            control: {
                type: 'select',
                options: opacities
            }
        },
        headline: textControl,
        supportingCopy: textControl
    }
} satisfies Meta<typeof HeroBanner>;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {
    args: mockHeroBanner.default,
    play: testHeroBanner.default
};

export const WithoutMobileFallBack: Story = {
    args: mockHeroBanner.withoutMobileFallBack,
    play: testHeroBanner.default
};

export const AdvocateChildrens: Story = {
    args: mockHeroBanner.advocateChildrens,
    play: testHeroBanner.default,
    parameters: {
        excludeThemes: ['Corporate', 'Consumer']
    }
};

export const AdvocateHealthCare: Story = {
    args: mockHeroBanner.advocateHealthCare,
    play: testHeroBanner.default,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    }
};
