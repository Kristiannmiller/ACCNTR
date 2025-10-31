import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    Container,
    IconCtaLeftAlignedCard,
    allFontAwesomeIcons
} from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockIconCtaLeftAlignedCard } from '@/mocks/icon-cta-left-aligned-card';

// Tests
import { testIconCtaLeftAlignedCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/IconCtaLeftAlignedCard',
    component: IconCtaLeftAlignedCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=15134-7711&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaLeftAlignedCard.default)
        }
    },
    argTypes: {
        icon: {
            control: 'select',
            options: allFontAwesomeIcons
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headline: textControl,
        supportCopy: textControl
    },
    decorators: [
        (Story) => (
            <Container>
                <Story />
            </Container>
        )
    ]
} satisfies Meta<typeof IconCtaLeftAlignedCard>;

type Story = StoryObj<typeof IconCtaLeftAlignedCard>;

export const Default: Story = {
    args: mockIconCtaLeftAlignedCard.default,
    play: testIconCtaLeftAlignedCard.default
};
