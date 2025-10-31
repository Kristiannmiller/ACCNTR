import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeroBannerCarousel } from '@/components';

// Mocks
import { mockHeroBannerCarousel } from '@/mocks/hero-banner-carousel';

// Utils
import { booleanControl } from '@/sb-tools';

// Tests
import { testHeroBannerCarousel } from '@/tests';

export default {
    title: 'Design System/organisms/B02 - HeroBannerCarousel',
    component: HeroBannerCarousel,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17714-24866&t=QZPXlsBQxxPF8Pel-4'
        },
        controls: {
            include: Object.keys(mockHeroBannerCarousel.default)
        },
        excludeThemes: ['Corporate']
    },
    argTypes: {
        slideTimingSeconds: {
            control: 'number',
            defaultValue: 6
        },
        shouldLeftAlignOnMobile: {
            booleanControl,
            defaultValue: false
        }
    }
} satisfies Meta<typeof HeroBannerCarousel>;

type Story = StoryObj<typeof HeroBannerCarousel>;

export const Default: Story = {
    args: mockHeroBannerCarousel.default,
    play: testHeroBannerCarousel.default
};
