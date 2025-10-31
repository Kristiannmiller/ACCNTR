import { Meta, StoryObj } from '@storybook/react';

// Components
import { Testimonials } from '@/components';

// Mocks
import { mockTestimonials } from '@/mocks/testimonials';

// Static
import { threeColumns, headlineTags } from '@/static';

// Tests
import { testTestimonials } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C44 - Testimonials',
    component: Testimonials,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-23965&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockTestimonials.default) }
    },
    argTypes: {
        numberOfColumns: {
            description:
                'Changes number of testimonial cards rendered in a row. 1 | 2 | 3',
            control: 'select',
            options: threeColumns
        },

        headlineTag: {
            description:
                'Changes rendered HTML tag for headline. h2 | h3 | h4 | p',
            control: 'select',
            options: headlineTags
        },
        contentAlignment: {
            description: 'Headline & support copy alignment',
            control: 'select',
            options: ['center', 'left']
        },
        backgroundColor: {
            description:
                'Controls background color of molecule. White | White Smoke',
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        expandButtonAlignment: {
            description: 'Expand button alignment only',
            control: 'select',
            options: ['center', 'left']
        },
        headline: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof Testimonials>;

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
    args: mockTestimonials.default,
    play: testTestimonials.default
};

export const ShowOnlyFirstRowOnLoad: Story = {
    args: mockTestimonials.showOnlyFirstRowOnLoad,
    play: testTestimonials.default
};
