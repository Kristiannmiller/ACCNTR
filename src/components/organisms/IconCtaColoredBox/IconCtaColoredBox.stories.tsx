import { Meta, StoryObj } from '@storybook/react';

// Components
import { IconCtaColoredBox } from '@/components';

// Mocks
import { mockIconCTAColorBox } from '@/mocks/icon-cta-color-box';

// Static
import { fourColumns, headlineTags } from '@/static';

// Tests
import { testIconCtaColoredBox } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C32 - IconCtaColoredBox',
    component: IconCtaColoredBox,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-26601&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCTAColorBox.default)
        }
    },
    argTypes: {
        columns: {
            control: 'select',
            options: fourColumns
        },
        headlineTag: {
            default: 'p',
            control: 'select',
            options: headlineTags
        },
        headlineAlignment: {
            default: 'center',
            control: 'select',
            options: ['left', 'center']
        },
        supportCopyAlignment: {
            default: 'center',
            control: 'select',
            options: ['left', 'center']
        },
        headline: textControl,
        supportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof IconCtaColoredBox>;

type Story = StoryObj<typeof IconCtaColoredBox>;

export const Default: Story = {
    args: mockIconCTAColorBox.default,
    play: testIconCtaColoredBox.default
};

export const IconCtaColoredBoxWithoutCTACard: Story = {
    args: mockIconCTAColorBox.mockIconCTAColorBoxWithoutCTACard,
    play: testIconCtaColoredBox.default
};
