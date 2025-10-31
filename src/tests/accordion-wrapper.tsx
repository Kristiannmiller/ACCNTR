import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { AccordionWrapper } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof AccordionWrapper>;

const testAccordionWrapperDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const accordionWrapperContainer = getByTestId('accordion-wrapper');
    const classNames = accordionWrapperContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(accordionWrapperContainer).toBeInTheDocument();

    const accordionItems = getAllByTestId('accordion-item');
    const accordionSvgPlus =
        accordionItems[0].getElementsByClassName('fa-plus')[0];
    const accordionSvgMinus =
        accordionItems[0].getElementsByClassName('fa-minus')[0];

    // Should have the accordion item
    expect(accordionItems).toHaveLength(4);

    if (args.title) {
        const accordionWrapperTitle = getByTestId('content-container-headline');
        // Should have title
        await expect(accordionWrapperTitle).toBeInTheDocument();

        // Should render the correct headline tag
        const titleTag = accordionWrapperTitle.tagName.toLowerCase();
        await expect(titleTag).toBe(args.title.tag);

        const svgElement = accordionWrapperTitle.querySelector('svg');

        if (args.icon) {
            // Should have icon
            await expect(svgElement).toBeInTheDocument();
        }
    }

    if (args.topDescription) {
        const accordionWrapperTopDescription = getByTestId(
            'content-container-support-copy'
        );
        //Should have top description
        expect(accordionWrapperTopDescription).toBeInTheDocument();
    }

    if (args.bottomDescription) {
        const accordionWrapperBottomDescription = getByTestId(
            'content-container-support-copy-bottom'
        );
        //Should have bottom description
        expect(accordionWrapperBottomDescription).toBeInTheDocument();
    }

    if (args.shouldOpenFirstItem && args.defaultOpenItem) {
        expect(accordionSvgPlus).toHaveStyle({ display: 'none' });
        expect(accordionSvgMinus).toHaveStyle({ display: 'block' });
    } else {
        expect(accordionSvgPlus).toHaveStyle({ display: 'block' });
        expect(accordionSvgMinus).toHaveStyle({ display: 'none' });
    }
};

export const testAccordionWrapper = {
    default: testAccordionWrapperDefault
};
