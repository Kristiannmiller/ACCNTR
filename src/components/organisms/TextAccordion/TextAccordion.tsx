import { ComponentProps, ReactElement, useRef, useState } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { ContentContainer, SvgIcon, RichText, Anchor } from '@/components';

// Styles
import styles from './TextAccordion.module.scss';

// Types
import { ALIGNMENT_TYPES, HEADLINE_TAG_TYPES } from '@/types';

// Utils
import { getHeaderHeight } from '@/utils/getHeaderHeight';

export type TextAccordionProps = ComponentProps<typeof ContentContainer> & {
    alwaysVisibleText?: ReactElement;
    bodyCopyAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headline?: ReactElement;
    headlineAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headlineTag?: HEADLINE_TAG_TYPES;
    hiddenText?: ReactElement;
    showLessText?: string;
    showMoreText?: string;
};

export const TextAccordion = (props: TextAccordionProps) => {
    const {
        alwaysVisibleText,
        bodyCopyAlignment = 'left',
        className,
        headline,
        headlineAlignment = 'left',
        headlineTag = 'p',
        hiddenText,
        showLessText = 'View less',
        showMoreText = 'View more',
        ...rest
    } = props;

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const topRef = useRef<HTMLDivElement>(null);

    const handleAccordionClick = () => {
        setIsExpanded(!isExpanded);
        if (isExpanded && topRef.current && typeof window !== 'undefined') {
            setTimeout(() => {
                // Scroll to the top of the accordion
                topRef.current!.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Calculate the offset considering the header height
                const headerHeight = getHeaderHeight().asPxWithUtilityNav;
                const offset =
                    topRef.current!.getBoundingClientRect().top - headerHeight;

                // Scroll by the calculated offset
                window.scrollBy({ top: offset, behavior: 'smooth' });
            }, 150);
        }
    };

    return (
        <ContentContainer
            className={className}
            headline={headline}
            headlineAlignment={headlineAlignment}
            headlineTag={headlineTag}
            spacing='40-24'
            {...rest}>
            <div
                ref={topRef}
                className={styles['text-accordion-base']}
                data-testid='text-accordion'>
                <div
                    className={cx(styles['text-accordion-content'], {
                        [styles['text-accordion-content-open']]: isExpanded,
                        [styles['text-accordion-content-center']]:
                            bodyCopyAlignment === 'center'
                    })}>
                    {/* Always visible text */}
                    <RichText
                        className={cx({
                            [styles['always-visible-text']]: !isExpanded,
                            [styles['always-visible-text-expanded']]: isExpanded
                        })}>
                        {alwaysVisibleText}
                    </RichText>

                    {/* Hidden text */}
                    <RichText
                        className={cx({
                            [styles['hidden-text']]: !isExpanded,
                            [styles['hidden-text-expanded']]: isExpanded
                        })}>
                        {hiddenText}
                    </RichText>

                    <div className={styles['button-wrapper']}>
                        {/* Button */}
                        <Anchor>
                            <button
                                type='button'
                                onClick={handleAccordionClick}>
                                {isExpanded ? (
                                    <>
                                        {showLessText} <SvgIcon icon='minus' />
                                    </>
                                ) : (
                                    <>
                                        {showMoreText} <SvgIcon icon='plus' />
                                    </>
                                )}
                            </button>
                        </Anchor>
                    </div>
                </div>
            </div>
        </ContentContainer>
    );
};
