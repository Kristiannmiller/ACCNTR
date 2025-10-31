import { Meta, StoryObj } from '@storybook/react';

// Components
import { allFontAwesomeIcons, IconCtaColoredBoxCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockIconCTAColorBoxCard } from '@/mocks/icon-cta-color-box-card';

// Tests
import { testIconCtaColoredBoxCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/IconCtaColoredBoxCard',
    component: IconCtaColoredBoxCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-26601&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCTAColorBoxCard.default)
        }
    },
    argTypes: {
        headline: textControl,
        supportCopy: textControl,
        icon: {
            control: 'select',
            options: allFontAwesomeIcons
        },
        headlineTag: {
            default: 'p',
            control: 'select',
            options: headlineTags
        }
    }
} satisfies Meta<typeof IconCtaColoredBoxCard>;

type Story = StoryObj<typeof IconCtaColoredBoxCard>;
export const Default: Story = {
    args: mockIconCTAColorBoxCard.default,
    play: testIconCtaColoredBoxCard.default
};

export const WithoutCardCTA: Story = {
    args: mockIconCTAColorBoxCard.mockIconCTAColorBoxCardWithoutCTA,
    play: testIconCtaColoredBoxCard.default
};
