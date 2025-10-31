import { ComponentProps, ReactNode, createContext } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './HeroStatistics.module.scss';

// Components
import { ContentContainer } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    TWO_COLUMN_TYPES,
    FOUR_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

// Utils
import { shouldUseInverseText } from '@/utils';

export type HeroStatisticsProps = ComponentProps<typeof ContentContainer> & {
    backgroundColor: Extract<
        BACKGROUND_COLOR_TYPES,
        'white' | 'whiteSmoke' | 'denimBlue'
    >;
    contentAlignments: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    ctaAlignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactNode;
    supportCopyBottom?: ReactNode;
    numberOfColumnsMobile: TWO_COLUMN_TYPES;
    numberOfColumns: FOUR_COLUMN_TYPES;
    shouldShowColumnDividers: boolean;
    cta?: ReactNode;
};

/** Reserve space when top/bottom text of a statistic is missing to help center-align the statistic.
    However, if the content is stacking (1 column), the empty space should be hidden.
*/
export const HeroStatisticsContext = createContext<{
    isStackedMobile: boolean;
    isStackedDesktop: boolean;
}>({
    isStackedMobile: true,
    isStackedDesktop: false
});

export const HeroStatistics = (props: HeroStatisticsProps) => {
    const {
        className,
        backgroundColor = 'white',
        contentAlignments = 'center',
        ctaAlignment = 'center',
        headline,
        headlineTag = 'p',
        supportCopy,
        supportCopyBottom,
        cta,
        numberOfColumnsMobile = '1',
        numberOfColumns = '3',
        shouldShowColumnDividers = false,
        children,
        ...rest
    } = props;

    const isInverse = shouldUseInverseText(backgroundColor);

    return (
        <HeroStatisticsContext.Provider
            value={{
                isStackedMobile: numberOfColumnsMobile === '1',
                isStackedDesktop: numberOfColumns === '1'
            }}>
            <ContentContainer
                data-testid='hero-statistics'
                backgroundColor={backgroundColor}
                headline={headline}
                headlineTag={headlineTag}
                supportCopy={supportCopy}
                variant='containedSmall'
                supportCopyBottom={supportCopyBottom}
                contentAlignment={contentAlignments}
                cta={cta}
                ctaAlignment={ctaAlignment}
                className={cx(
                    className,
                    isInverse && styles['content-inverse']
                )}
                {...rest}>
                <div
                    data-testid='hero-statistics-column-grid'
                    className={cx(styles['grid'], {
                        [styles['grid-dividers']]: shouldShowColumnDividers,
                        [styles['grid-2-m']]: numberOfColumnsMobile === '2',
                        [styles['grid-1']]: numberOfColumns === '1',
                        [styles['grid-2']]: numberOfColumns === '2',
                        [styles['grid-3']]: numberOfColumns === '3',
                        [styles['grid-4']]: numberOfColumns === '4'
                    })}>
                    {children}
                </div>
            </ContentContainer>
        </HeroStatisticsContext.Provider>
    );
};
