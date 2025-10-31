import { Meta, StoryObj } from '@storybook/react';

// Components
import { Container, CtaContentCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockCtaContentCard } from '@/mocks/cta-content-card';

// Tests
import { testCtaContentCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/CtaContentCard',
    component: CtaContentCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-7272&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockCtaContentCard.default)
        }
    },
    argTypes: {
        headlineTag: {
            default: 'h2',
            description: 'Heading type for CTA Content Card',
            control: 'select',
            options: headlineTags
        },
        firstCtaStyle: {
            default: 'button',
            description: 'Style of first CTA',
            control: 'select',
            options: ['button', 'link']
        },
        secondCtaStyle: {
            default: 'button',
            description: 'Style of first CTA',
            control: 'select',
            options: ['button', 'link']
        },
        ctaAlignment: {
            default: 'center',
            description: "Alignment of Call's To Action (all)",
            control: 'select',
            options: ['center', 'left']
        },
        headline: textControl,
        bodyCopy: textControl
    },
    decorators: [
        (Story) => (
            <Container>
                <Story />
            </Container>
        )
    ]
} satisfies Meta<typeof CtaContentCard>;

type Story = StoryObj<typeof CtaContentCard>;

export const Default: Story = {
    args: mockCtaContentCard.default,
    play: testCtaContentCard.default
};

export const LongContent: Story = {
    args: mockCtaContentCard.longContent,
    play: testCtaContentCard.default
};

export const LinkStyleCtas: Story = {
    args: mockCtaContentCard.links,
    play: testCtaContentCard.default
};

export const WithoutImage: Story = {
    args: mockCtaContentCard.withoutImage,
    play: testCtaContentCard.default
};
