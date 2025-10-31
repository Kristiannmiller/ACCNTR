import { Meta, StoryObj } from '@storybook/react';

// Components
import { IconCtaSimplified } from '@/components';

// Mocks
import { mockIconCtaSimplified } from '@/mocks/icon-cta-simplified';

// Static
import { fourColumns, headlineTags } from '@/static';

// Tests
import { testIconCtaSimplified } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C30 - IconCtaSimplified',
    component: IconCtaSimplified,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-24895&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaSimplified.default)
        }
    },
    argTypes: {
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        numberOfColumns: { control: 'select', options: fourColumns },
        mobileBehavior: {
            control: 'select',
            options: ['stacked', '2-up Grid']
        },
        headline: textControl,
        supportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof IconCtaSimplified>;

type Story = StoryObj<typeof IconCtaSimplified>;

export const IconMobileStackedWithButtons: Story = {
    args: mockIconCtaSimplified.default,
    play: testIconCtaSimplified.default
};

export const IconMobileTwoUpGridWithButtons: Story = {
    args: mockIconCtaSimplified.twoUpGrid,
    play: testIconCtaSimplified.default
};

export const IconMobileStackedWithLinks: Story = {
    args: mockIconCtaSimplified.iconAndLink,
    play: testIconCtaSimplified.default
};

export const IconMobileTwoUpGridWithLinks: Story = {
    args: mockIconCtaSimplified.twoUpWithLink,
    play: testIconCtaSimplified.default
};

export const Short: Story = {
    args: mockIconCtaSimplified.short,
    play: testIconCtaSimplified.default
};
