import { ComponentProps, ReactNode, useState } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    Button,
    ContentContainer,
    ColumnGrid,
    TestimonialCard,
    TestimonialCardProps
} from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    COLOR_TYPES,
    HEADLINE_TAG_TYPES,
    THREE_COLUMN_TYPES
} from '@/types';

// Styles
import styles from './Testimonials.module.scss';

export type TestimonialsProps = ComponentProps<typeof ContentContainer> & {
    backgroundColor: Extract<COLOR_TYPES, 'white' | 'whiteSmoke'>;
    contentAlignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    expandButtonText: string;
    expandButtonAlignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    numberOfColumns: THREE_COLUMN_TYPES;
    showOnlyFirstRowOnLoad?: boolean;
    supportCopy?: ReactNode;
    testimonialCards: TestimonialCardProps[];
};

export const Testimonials = (props: TestimonialsProps) => {
    const {
        backgroundColor = 'whiteSmoke',
        className,
        contentAlignment = 'center',
        expandButtonText,
        expandButtonAlignment = 'center',
        headline,
        headlineTag = 'p',
        numberOfColumns = '1',
        showOnlyFirstRowOnLoad,
        supportCopy,
        testimonialCards = [],
        ...rest
    } = props;

    const totalCardCount = testimonialCards.length;
    const columnCount = parseInt(numberOfColumns);

    const [visibleCardCount, setVisibleCardCount] = useState<number>(
        showOnlyFirstRowOnLoad ? columnCount : totalCardCount
    );

    const handleExpandButtonClick = () => {
        setVisibleCardCount(totalCardCount);
    };

    return (
        <ContentContainer
            className={cx(styles['testimonials'], className)}
            backgroundColor={backgroundColor}
            data-testid='testimonials'
            contentAlignment={contentAlignment}
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            {...rest}>
            {/* Testimonial Cards */}
            {totalCardCount > 0 && (
                <ColumnGrid
                    columns={'1'}
                    columnsTablet={columnCount > 2 ? '2' : numberOfColumns}
                    columnsDesktop={numberOfColumns}
                    className={styles['testimonials-grid']}
                    data-testid='testimonials-grid'>
                    {testimonialCards
                        .slice(0, visibleCardCount)
                        .map((testimonialCardProp, index) => (
                            <TestimonialCard
                                key={index}
                                {...testimonialCardProp}
                            />
                        ))}
                </ColumnGrid>
            )}

            {/* Show More Button */}
            {visibleCardCount < totalCardCount && (
                <Button
                    variant='solid1'
                    size='responsive'
                    data-testid='testimonials-expand-button'
                    className={cx(styles['expand-button'], {
                        [styles['expand-button-center']]:
                            expandButtonAlignment === 'center'
                    })}
                    onClick={handleExpandButtonClick}>
                    {expandButtonText}
                </Button>
            )}
        </ContentContainer>
    );
};
