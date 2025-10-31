import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeroFeaturedBanner, iconList } from '@/components';

// Mocks
import { mockHeroFeaturedBanner } from '@/mocks/hero-featured-banner';

// Utils
import { opacities } from '@/static';

// Tests
import { testHeroFeaturedBanner } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/B03 - HeroFeaturedBanner',
    component: HeroFeaturedBanner,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=4517-5938&t=QZPXlsBQxxPF8Pel-4'
        },
        controls: {
            include: Object.keys(mockHeroFeaturedBanner.default)
        },
        excludeThemes: ['Consumer', 'Childrens']
    },
    argTypes: {
        backgroundGradientLevel: {
            control: 'select',
            options: opacities
        },
        firstCTAIcon: {
            control: 'select',
            options: iconList
        },
        secondCTAIcon: {
            control: 'select',
            options: iconList
        },
        headline: textControl,
        taglineTop: textControl
    }
} satisfies Meta<typeof HeroFeaturedBanner>;

type Story = StoryObj<typeof HeroFeaturedBanner>;

export const Default: Story = {
    args: mockHeroFeaturedBanner.default,
    play: testHeroFeaturedBanner.default
};

export const WithBottomTagline: Story = {
    args: mockHeroFeaturedBanner.withBottomTagline,
    play: testHeroFeaturedBanner.default
};

export const WithoutMobileFallBack: Story = {
    args: mockHeroFeaturedBanner.withoutMobileFallBack,
    play: testHeroFeaturedBanner.default
};
