import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { CtaContentCard } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof CtaContentCard>;

const testCtaContentCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const ctaContentCard = getByTestId('cta-content-card');
    const classNames = ctaContentCard.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(ctaContentCard).toBeInTheDocument();

    if (args.image) {
        const image = getByTestId('cta-card-image');
        // Should image
        await expect(image).toBeInTheDocument();
    }

    if (args.headline) {
        const headline = getByTestId('cta-card-headline');
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

    if (args.bodyCopy) {
        const bodyCopy = getByTestId('cta-card-body-copy');
        // Should have Body Copy
        await expect(bodyCopy).toBeInTheDocument();
    }

    if (args.firstCta) {
        const firstCta = getByTestId('content-card-first-cta');
        // Should have first Cta
        await expect(firstCta).toBeInTheDocument();

        // Should have same href
        await expect(firstCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCta)
        );

        // Should have correct styles applied to first Cta
        if (args.firstCtaStyle === 'button' || !args.firstCtaStyle) {
            await expect(firstCta).toHaveClass('r-btn-solid1');
        }
    }

    if (args.secondCta) {
        const secondCta = getByTestId('content-card-second-cta');
        // Should have second Cta
        await expect(secondCta).toBeInTheDocument();

        // Should have same href
        await expect(secondCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCta)
        );

        // Should have correct styles applied to second Cta
        if (args.secondCtaStyle === 'button' || !args.secondCtaStyle) {
            await expect(secondCta).toHaveClass('r-btn-solid1');
        }
    }

    if (args.thirdCta) {
        const thirdCta = getByTestId('content-card-third-cta');
        // Should have third Cta
        await expect(thirdCta).toBeInTheDocument();

        // Should have same href
        await expect(thirdCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.thirdCta)
        );
    }
};

export const testCtaContentCard = {
    default: testCtaContentCardDefault
};
