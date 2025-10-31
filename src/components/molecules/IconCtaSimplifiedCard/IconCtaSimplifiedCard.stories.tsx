import { Meta, StoryObj } from '@storybook/react';

// Components
import { IconCtaSimplifiedCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { ctaStyleControl, iconControl } from './IconCtaSimplifiedCardArgTypes';

// Mocks
import { mockIconCtaSimplifiedCard } from '@/mocks/icon-cta-simplified-card';

// Tests
import { testIconCtaSimplifiedCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/IconCtaSimplifiedCard',
    component: IconCtaSimplifiedCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-24895&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaSimplifiedCard.default)
        }
    },
    argTypes: {
        icon: iconControl,
        ctaStyle: ctaStyleControl,
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headline: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof IconCtaSimplifiedCard>;

type Story = StoryObj<typeof IconCtaSimplifiedCard>;

export const Default: Story = {
    args: mockIconCtaSimplifiedCard.default,
    play: testIconCtaSimplifiedCard.default
};

export const IconWithLink: Story = {
    args: mockIconCtaSimplifiedCard.iconWithLink,
    play: testIconCtaSimplifiedCard.default
};

export const NoIcon: Story = {
    args: mockIconCtaSimplifiedCard.noIcon,
    play: testIconCtaSimplifiedCard.default
};

export const NoIconWithLink: Story = {
    args: mockIconCtaSimplifiedCard.noIconWithLink,
    play: testIconCtaSimplifiedCard.default
};
