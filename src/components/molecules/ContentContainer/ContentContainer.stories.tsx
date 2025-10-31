import { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentContainer } from '@/components';

// Static
import { allFontAwesomeIcons } from '@/components';
import { containerVariants, headlineTags } from '@/static';

// Mocks
import { mockContentContainer } from '@/mocks/content-container';

// Tests
import { testContentContainer } from '@/tests';

export default {
    title: 'Design System/molecules/ContentContainer',
    component: ContentContainer,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?m=auto&node-id=10183-32918'
        },
        controls: { include: Object.keys(mockContentContainer.default) }
    },
    argTypes: {
        contentAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaStyle: {
            control: 'select',
            options: ['solid', 'outlined', 'link']
        },
        headline: {
            control: 'text'
        },
        headlineAlignment: {
            control: 'select',
            options: ['center', 'left', undefined]
        },
        headlineIcon: {
            control: 'select',
            options: [...allFontAwesomeIcons, undefined]
        },
        headlineIconPlacement: {
            control: 'select',
            options: ['top', 'left', undefined]
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        spacing: {
            control: 'select',
            options: ['40-24', '64-40', '72-24', '72-48']
        },
        supportCopy: {
            control: 'text'
        },
        supportCopyAlignment: {
            control: 'select',
            options: ['center', 'left', undefined]
        },
        supportCopyBottom: {
            control: 'text'
        },
        supportCopyBottomAlignment: {
            control: 'select',
            options: ['center', 'left', undefined]
        },
        variant: {
            control: 'select',
            options: containerVariants
        }
    }
} satisfies Meta<typeof ContentContainer>;

type Story = StoryObj<typeof ContentContainer>;

export const Default: Story = {
    args: mockContentContainer.default,
    play: testContentContainer.default
};

export const WithoutSupportCopyBottom: Story = {
    args: mockContentContainer.withoutSupportCopyBottom,
    play: testContentContainer.default
};

export const WithContent: Story = {
    args: mockContentContainer.withContent,
    play: testContentContainer.default
};

export const WithIcon: Story = {
    args: mockContentContainer.withIcon,
    play: testContentContainer.default
};
