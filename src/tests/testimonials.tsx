import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Testimonials } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof Testimonials>;

const testTestimonialsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const testimonials = getByTestId('testimonials');
    const classNames = testimonials.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should render the testimonials
    await expect(testimonials).toBeInTheDocument();

    if (args.headline) {
        const headline = getByTestId('content-container-headline');
        // Should render the headline
        await expect(headline).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = headline.tagName.toLowerCase();
        await expect(headlineTag).toBe(args.headlineTag);

        // Should have the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportCopy) {
        // Should have support copy
        const supportCopy = getByTestId('content-container-support-copy');
        await expect(supportCopy).toBeInTheDocument();
    }

    if (args.testimonialCards?.length > 0) {
        // Should have the testimonials grid rendered
        const testimonialsGrid = getByTestId('testimonials-grid');
        await expect(testimonialsGrid).toBeInTheDocument();

        const totalCardCount = args.testimonialCards.length;
        const visibleCardCount = +args.numberOfColumns;

        if (args.showOnlyFirstRowOnLoad) {
            // Check if the expand button is rendered
            if (visibleCardCount < totalCardCount) {
                const expandButton = getByTestId('testimonials-expand-button');
                await expect(expandButton).toBeInTheDocument();
            }
        }

        // Should have correct number of cards
        const testimonialCards = getAllByTestId('testimonial-card');
        await expect(testimonialCards).toHaveLength(
            args.showOnlyFirstRowOnLoad ? visibleCardCount : totalCardCount
        );
    }
};

export const testTestimonials = {
    default: testTestimonialsDefault
};
