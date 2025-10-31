import { Meta, StoryObj } from '@storybook/react';

// Components
import { promoCalloutBackgroundColors, PromoCarousel } from '@/components';

// Mocks
import { mockPromoCarousel } from '@/mocks/promo-carousel';

// Tests
import { testPromoCarousel } from '@/tests';

export default {
    title: 'Design System/organisms/C06 - Promo Carousel CTA',
    component: PromoCarousel,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17770-39206&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockPromoCarousel.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: promoCalloutBackgroundColors,
            defaultValue: 'wellnessBlue'
        },
        imageSide: {
            control: 'select',
            options: ['left', 'right'],
            defaultValue: 'left'
        },
        secondCTAStyle: {
            control: 'select',
            options: ['solid', 'outlined', 'link'],
            defaultValue: 'solid'
        },
        slideTimingSeconds: {
            control: 'number',
            defaultValue: 6
        },
        textAlignment: {
            control: 'select',
            options: ['left', 'center'],
            defaultValue: 'left'
        }
    }
} satisfies Meta<typeof PromoCarousel>;

type Story = StoryObj<typeof PromoCarousel>;

export const Default: Story = {
    args: mockPromoCarousel.default,
    play: testPromoCarousel.default
};

export const NoMedia: Story = {
    args: mockPromoCarousel.noMedia,
    play: testPromoCarousel.default
};
