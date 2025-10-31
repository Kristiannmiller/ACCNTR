import { Meta, StoryObj } from '@storybook/react';

// Components
import { Container, TestimonialCard } from '@/components';

// Mocks
import { mockTestimonialCard } from '@/mocks/testimonial-card';

// Tests
import { testTestimonialCard } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/TestimonialCard',
    component: TestimonialCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-23965&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockTestimonialCard.default) }
    },
    argTypes: {
        testimonialText: textControl,
        testimonialAuthor: textControl,
        testimonialAuthorTitle: textControl
    },
    decorators: [
        (Story) => (
            <Container>
                <Story />
            </Container>
        )
    ]
} satisfies Meta<typeof TestimonialCard>;

type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
    args: mockTestimonialCard.default,
    play: testTestimonialCard.default
};

export const WithoutAuthorTitle: Story = {
    args: mockTestimonialCard.withoutAuthorTitle,
    play: testTestimonialCard.default
};
