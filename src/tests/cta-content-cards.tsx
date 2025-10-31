import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { CtaContentCards } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof CtaContentCards>;

const testCtaContentCardsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const ctaContentCards = getByTestId('cta-content-cards');
    expect(ctaContentCards).toBeInTheDocument();
    const classNames = ctaContentCards.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(ctaContentCards).toBeInTheDocument();

    if (args.headline) {
        const headline = getByTestId('cta-cards-container-headline');
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

    if (args.supportingCopy) {
        const supportCopy = getByTestId('cta-cards-top-copy');
        // Should have Top Support Copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.bottomSupportingCopy) {
        const supportCopy = getByTestId('cta-cards-bottom-copy');
        // Should have Bottom Support Copy
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.cta) {
        const cta = getByTestId('cta-cards-container-cta');
        // Should have cta
        await expect(cta).toBeInTheDocument();

        // Should have same href
        await expect(cta).toHaveAttribute('href', getLinkFieldValue(args.cta));

        // Should have correct styles applied to cta
        await expect(cta).toHaveClass('r-btn-solid1');
    }

    // Should have correct number of cards
    const numberOfCards = args.contentCards?.props?.children?.length || 0;
    const cards = getAllByTestId('cta-content-card');
    await expect(cards).toHaveLength(numberOfCards);
};

export const testCtaContentCards = {
    default: testCtaContentCardsDefault
};
