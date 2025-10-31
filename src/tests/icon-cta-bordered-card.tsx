import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaBorderedCard } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaBorderedCard>;

const testIconCtaBorderedCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const borderedCard = getByTestId('icon-cta-bordered-card');
    const classNames = borderedCard.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    if (args.headline) {
        const headline = getByTestId('icon-cta-bordered-card-headline');
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = headline.tagName.toLowerCase();
        await expect(headlineTag).toBe(args.headlineTag);

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId('icon-cta-bordered-card-support-copy');
        // Should have supportCopy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.firstCTA) {
        const firstCta = getByTestId('icon-cta-bordered-card-first-cta');
        // Should have firstCta
        await expect(firstCta).toBeInTheDocument();

        // Should have same href
        await expect(firstCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCTA)
        );

        // Should have correct styles applied to firstCta
        if (args.firstCTAStyle === 'button' || !args.firstCTAStyle) {
            await expect(firstCta).toHaveClass('r-btn-solid1');
        }
    }

    if (args.secondCTA) {
        const secondCta = getByTestId('icon-cta-bordered-card-second-cta');
        // Should have secondCta
        await expect(secondCta).toBeInTheDocument();

        // Should have same href
        await expect(secondCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCTA)
        );

        // Should have correct styles applied to secondCta
        if (args.secondCTAStyle === 'button' || !args.secondCTAStyle) {
            await expect(secondCta).toHaveClass('r-btn-solid1');
        }
    }
};

export const testIconCtaBorderedCard = {
    default: testIconCtaBorderedCardDefault
};
