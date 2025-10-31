import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from './Accordion';

// Mocks
import { loremLabel, loremParagraph, loremSentence } from '@/mocks/lorem-ipsum';

const meta: Meta<typeof Accordion> = {
    title: 'Design System/atoms/Accordion',
    component: Accordion,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?type=design&node-id=163-5292&mode=design&t=31OlyL1a9VpOmQ0P-0'
        }
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['single', 'multiple'],
            defaultValue: 'multiple'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        type: 'multiple'
    },
    render: ({ type }) => {
        return (
            <Accordion
                type={type}
                collapsible
                className='w-full'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>{loremLabel.medium}</AccordionTrigger>
                    <AccordionContent>{loremParagraph.short}</AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger>{loremSentence.medium}</AccordionTrigger>
                    <AccordionContent>{loremLabel.extraLong}</AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger>{loremLabel.extraLong}</AccordionTrigger>
                    <AccordionContent>{loremParagraph.medium}</AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    },
    play: async ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const accordionItems = getAllByTestId('accordion-item');
        const accordionTrigger = getAllByTestId('accordion-trigger');
        const accordionContent = getAllByTestId('accordion-content');
        const accordionSvgPlus =
            accordionItems[0].getElementsByClassName('fa-plus')[0];
        const accordionSvgMinus =
            accordionItems[0].getElementsByClassName('fa-minus')[0];
        // Should have three items
        expect(accordionItems).toHaveLength(3);

        // Should have a plus icon when closed
        expect(accordionSvgPlus).toHaveStyle({ display: 'block' });

        // Should not display a minus icon when closed
        expect(accordionSvgMinus).toHaveStyle({ display: 'none' });

        // Should have aria-expanded false when closed
        expect(accordionTrigger[0].closest('button')).toHaveAttribute(
            'aria-expanded',
            'false'
        );

        // Should not render closed accordion content
        expect(accordionContent[0]).toHaveAttribute('data-state', 'closed');
    }
};
