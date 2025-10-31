import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { PromoCallout } from '@/components';

// Utils
import {
    classNameRegex,
    getTextFieldValue,
    getLinkFieldValue,
    getImageFieldValue
} from '@/utils';

type Story = StoryObj<typeof PromoCallout>;

const testPromoCalloutDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const promoCallout = getByTestId('promo-callout');
    const classNamesDesktop = promoCallout.getAttribute('class')!;
    await expect(classNamesDesktop).toMatch(classNameRegex(classNamesDesktop));
    await expect(promoCallout).toBeInTheDocument();

    if (args.image) {
        // Should have image wrapper
        const imageWrapper = getByTestId('promo-callout-image-wrapper');
        await expect(imageWrapper).toBeInTheDocument();

        // Should have image
        const image = getByTestId('promo-callout-image');
        await expect(image).toBeInTheDocument();

        // Should have same image src
        await expect(image).toHaveAttribute(
            'src',
            getImageFieldValue(args.image)
        );
    }

    // Should have headline
    const headline = getByTestId('promo-callout-headline');
    await expect(headline).toBeInTheDocument();

    // Should render the correct headline tag
    const headlineTag = headline.tagName.toLowerCase();
    await expect(headlineTag).toBe(args.headlineTag);

    // Check if the element has the exact text
    await expect(headline).toHaveTextContent(getTextFieldValue(args.headline));

    if (args.supportingCopy) {
        const supportCopy = getByTestId('promo-callout-support-copy');
        // Should have Support Copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.firstCTALink) {
        const firstCTALink = getByTestId('promo-callout-first-cta');
        // Should have first cta
        await expect(firstCTALink).toBeInTheDocument();

        // Should have same href
        await expect(firstCTALink).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCTALink)
        );

        // Should have responsive class added
        await expect(firstCTALink).toHaveClass('r-btn-responsive');
    }

    if (args.secondCTALink) {
        const secondCTALink = getByTestId('promo-callout-second-cta');
        // Should have second cta
        await expect(secondCTALink).toBeInTheDocument();

        // Should have same href
        await expect(secondCTALink).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCTALink)
        );

        // Should have responsive class added
        await expect(secondCTALink).toHaveClass('r-btn-responsive');
    }
};

export const testPromoCallout = {
    default: testPromoCalloutDefault
};
