import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { BackgroundColor, Card, Text, RichText } from '@/components';

// Styles
import styles from './TestimonialCard.module.scss';

// Types
export type TestimonialCardProps = ComponentProps<typeof Card> & {
    testimonialText: ReactNode;
    testimonialAuthor: ReactNode;
    testimonialAuthorTitle?: ReactNode;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
    const {
        className,
        testimonialText,
        testimonialAuthor,
        testimonialAuthorTitle,
        ...rest
    } = props;
    return (
        <BackgroundColor>
            <Card
                elevation='elevation1'
                className={cx(styles['testimonial-card'], className)}
                data-testid='testimonial-card'
                {...rest}>
                {/* Svg icon */}
                <BackgroundColor backgroundColor='wellnessBlue'>
                    <div
                        data-testid='testimonial-quote-circle'
                        className={styles['quote-circle']}>
                        <Text
                            tag='span'
                            children='“'
                        />
                    </div>
                </BackgroundColor>

                <figure
                    data-testid='testimonial-card-content'
                    className={styles['testimonial-card-content']}>
                    {/* Testimonial Text */}
                    <RichText
                        as='blockquote'
                        data-testid='testimonial-text'
                        className={styles['testimonial-text']}>
                        {testimonialText}
                    </RichText>

                    <figcaption
                        data-testid='about-testimonial-author'
                        className={styles['about-testimonial-author']}>
                        {/* Testimonial Author */}
                        <Text
                            data-testid='testimonial-author'
                            className={styles['testimonial-author']}
                            tag='p'>
                            {testimonialAuthor}
                        </Text>

                        {/* Testimonial Author Title */}
                        {testimonialAuthorTitle && (
                            <Text
                                data-testid='testimonial-author-title'
                                className={styles['testimonial-author-title']}
                                tag='p'>
                                {testimonialAuthorTitle}
                            </Text>
                        )}
                    </figcaption>
                </figure>
            </Card>
        </BackgroundColor>
    );
};
