import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { IconCtaSimplifiedCard } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof IconCtaSimplifiedCard>;

const testIconCtaSimplifiedCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const simplifiedCard = getByTestId('icon-cta-simplified-card');
    const classNames = simplifiedCard.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have Icon Cta Simplified Card
    await expect(simplifiedCard).toBeInTheDocument();

    if (args.icon) {
        const icon = getByTestId('icon-cta-simplified-card-icon');
        // Should have icon
        await expect(icon).toBeInTheDocument();
    }

    if (args.headline) {
        const headline = getByTestId('icon-cta-simplified-card-headline');
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
        const supportCopy = getByTestId(
            'icon-cta-simplified-card-support-copy'
        );
        // Should have Support Copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.cta) {
        const cta = getByTestId('icon-cta-simplified-card-link');
        // Should have cta
        await expect(cta).toBeInTheDocument();

        // Should have same href
        await expect(cta).toHaveAttribute('href', getLinkFieldValue(args.cta));

        // Should have correct styles applied
        if (args.ctaStyle === 'button' || !args.ctaStyle) {
            await expect(cta).toHaveClass('r-btn-solid1');
        }
    }
};

export const testIconCtaSimplifiedCard = {
    default: testIconCtaSimplifiedCardDefault
};
