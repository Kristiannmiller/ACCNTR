import { ComponentProps, ReactNode } from 'react';

//Components
import { ContentContainer, ColumnGrid } from '@/components';

// Styles
import styles from './IconCtaLeftAligned.module.scss';

// Types
import {
    ALIGNMENT_TYPES,
    FOUR_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type IconCtaLeftAlignedProps = ComponentProps<
    typeof ContentContainer
> & {
    bottomSupportCopy?: ReactNode;
    headline?: ReactNode;
    headlineAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headlineTag: HEADLINE_TAG_TYPES;
    numberOfColumns: FOUR_COLUMN_TYPES;
    supportCopy?: ReactNode;
    supportCopyAlignment?: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
};

export const IconCtaLeftAligned = (props: IconCtaLeftAlignedProps) => {
    const {
        bottomSupportCopy,
        children,
        className,
        headline,
        headlineAlignment = 'center',
        headlineTag = 'p',
        numberOfColumns = '2',
        supportCopy,
        supportCopyAlignment = 'center',
        ...rest
    } = props;

    return (
        <ContentContainer
            className={className}
            data-testid='icon-cta-left-aligned'
            headline={headline}
            headlineAlignment={headlineAlignment}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            supportCopyAlignment={supportCopyAlignment}
            supportCopyBottom={bottomSupportCopy}
            supportCopyBottomAlignment={supportCopyAlignment}
            {...rest}>
            <ColumnGrid
                columns='1'
                columnsTablet={numberOfColumns === '1' ? '1' : '2'}
                columnsDesktop={numberOfColumns}
                className={styles['icon-cta-left-aligned-grid']}
                data-testid='icon-cta-left-aligned-grid'>
                {children}
            </ColumnGrid>
        </ContentContainer>
    );
};
