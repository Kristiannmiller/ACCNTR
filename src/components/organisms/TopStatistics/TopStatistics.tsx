import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './TopStatistics.module.scss';

// Components
import { ContentContainer } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    FOUR_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type TopStatisticsProps = ComponentProps<typeof ContentContainer> & {
    backgroundColor: Extract<
        BACKGROUND_COLOR_TYPES,
        'white' | 'whiteSmoke' | 'denimBlue'
    >;
    numberOfColumns: FOUR_COLUMN_TYPES;
    contentAlignments: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    ctaAlignment: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactNode;
    supportCopyBottom?: ReactNode;
    cta?: ReactNode;
};

export const TopStatistics = (props: TopStatisticsProps) => {
    const {
        className,
        backgroundColor = 'white',
        numberOfColumns = '4',
        contentAlignments = 'center',
        ctaAlignment = 'center',
        headline,
        headlineTag = 'p',
        supportCopy,
        supportCopyBottom,
        cta,
        children,
        ...rest
    } = props;

    return (
        <ContentContainer
            data-testid='top-statistics'
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            contentAlignment={contentAlignments}
            supportCopyBottom={supportCopyBottom}
            cta={cta}
            ctaAlignment={ctaAlignment}
            variant='containedSmall'
            backgroundColor={backgroundColor}
            className={className}
            {...rest}>
            <div
                data-testid='top-statistics-column-grid'
                className={cx(styles['grid'], {
                    [styles['grid-2']]: numberOfColumns === '2',
                    [styles['grid-3']]: numberOfColumns === '3',
                    [styles['grid-4']]: numberOfColumns === '4'
                })}>
                {children}
            </div>
        </ContentContainer>
    );
};
