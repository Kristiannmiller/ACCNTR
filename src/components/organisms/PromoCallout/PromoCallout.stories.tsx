import { Meta, StoryObj } from '@storybook/react';

// Components
import { PromoCallout, promoCalloutBackgroundColors } from '@/components';

// Mocks
import { mockPromoCallout } from '@/mocks/promo-callout';

// Static
import { headlineTags } from '@/static';

// Tests
import { testPromoCallout } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C07 - Promo CTA',
    component: PromoCallout,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=5682-9637&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockPromoCallout.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: promoCalloutBackgroundColors
        },
        layout: {
            control: 'select',
            options: ['thirty', 'forty', 'fifty', 'hundred']
        },
        textAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        imageSide: {
            control: 'select',
            options: ['left', 'right']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        secondCTAStyle: {
            control: 'select',
            options: ['solid', 'outlined', 'link']
        },
        headline: textControl,
        supportingCopy: textControl
    }
} satisfies Meta<typeof PromoCallout>;

type Story = StoryObj<typeof PromoCallout>;

export const Default: Story = {
    args: mockPromoCallout.default,
    play: testPromoCallout.default
};

export const NoImage: Story = {
    args: mockPromoCallout.noImage,
    play: testPromoCallout.default
};

export const NoButtons: Story = {
    args: mockPromoCallout.noButtons,
    play: testPromoCallout.default
};

export const NoOptionalProps: Story = {
    args: mockPromoCallout.noOptionalProps,
    play: testPromoCallout.default
};

export const LayoutFiftyRight: Story = {
    args: mockPromoCallout.layoutFiftyRight,
    play: testPromoCallout.default
};

export const CenterText: Story = {
    args: mockPromoCallout.centerText,
    play: testPromoCallout.default
};
