import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './SideStatistics.module.scss';

// Components
import { ContentContainer } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type SideStatisticsProps = ComponentProps<typeof ContentContainer> & {
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
    cta?: ReactNode;
};

export const SideStatistics = (props: SideStatisticsProps) => {
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
        children,
        ...rest
    } = props;

    return (
        <ContentContainer
            data-testid='side-statistics'
            variant={'containedSmall'}
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            contentAlignment={contentAlignments}
            backgroundColor={backgroundColor}
            supportCopyBottom={supportCopyBottom}
            cta={cta}
            ctaAlignment={ctaAlignment}
            className={className}
            {...rest}>
            <ul className={styles['stats-list']}>{children}</ul>
        </ContentContainer>
    );
};
