import { Meta, StoryObj } from '@storybook/react';

// Components
import { AccordionWrapper } from '@/components';

// Mocks
import { mockAccordionWrapper } from '@/mocks/accordion-wrapper';

// Controls
import { textControl } from '@/sb-tools';

// Tests
import { testAccordionWrapper } from '@/tests';

export default {
    title: 'Design System/organisms/C01 - Accordion',
    component: AccordionWrapper,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=428-11962&t=Z2Jsx023hDgDEBbL-4'
        },
        layout: 'fullscreen',
        controls: {
            include: Object.keys(mockAccordionWrapper.default)
        }
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['single', 'multiple'],
            defaultValue: 'multiple'
        },
        topDescription: textControl,
        bottomDescription: textControl
    }
} satisfies Meta<typeof AccordionWrapper>;

type Story = StoryObj<typeof AccordionWrapper>;

export const Default: Story = {
    args: mockAccordionWrapper.default,
    play: testAccordionWrapper.default
};

export const IconPlacementTop: Story = {
    args: mockAccordionWrapper.iconPlacementTop,
    play: testAccordionWrapper.default
};

export const TitlePlacementCenter: Story = {
    args: mockAccordionWrapper.titlePlacementCenter,
    play: testAccordionWrapper.default
};

export const DefaultFirstItemOpen: Story = {
    args: mockAccordionWrapper.defaultFirstItemOpen,
    play: testAccordionWrapper.default
};

export const AccordionWithMultipleJumpLink: Story = {
    args: mockAccordionWrapper.accordionWithMultipleJumpLink,
    play: testAccordionWrapper.default
};
