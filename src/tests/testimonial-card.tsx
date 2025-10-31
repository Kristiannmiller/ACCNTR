import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { TestimonialCard } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof TestimonialCard>;

const testTestimonialCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const testimonialCard = getByTestId('testimonial-card');
    const classNames = testimonialCard.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have testimonial card
    await expect(testimonialCard).toBeInTheDocument();

    // Should have quote circle
    const quoteCircle = getByTestId('testimonial-quote-circle');
    await expect(quoteCircle).toBeInTheDocument();

    // Should have the testimonial text
    const testimonialText = getByTestId('testimonial-text');
    await expect(testimonialText).toBeInTheDocument();

    // Should have the about testimonial author section
    const aboutTestimonialAuthor = getByTestId('about-testimonial-author');
    await expect(aboutTestimonialAuthor).toBeInTheDocument();

    // Should have the testimonial author
    const testimonialAuthor = getByTestId('testimonial-author');
    await expect(testimonialAuthor).toBeInTheDocument();
    // Should have the exact text
    await expect(testimonialAuthor).toHaveTextContent(
        getTextFieldValue(args.testimonialAuthor)
    );

    if (args.testimonialAuthorTitle) {
        // Should have the testimonial author title
        const testimonialAuthorTitle = getByTestId('testimonial-author-title');
        await expect(testimonialAuthorTitle).toBeInTheDocument();

        // Should have the exact text
        await expect(testimonialAuthorTitle).toHaveTextContent(
            getTextFieldValue(args.testimonialAuthorTitle)
        );
    }
};

export const testTestimonialCard = {
    default: testTestimonialCardDefault
};
