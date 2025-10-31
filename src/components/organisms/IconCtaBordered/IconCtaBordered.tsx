import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

//Components
import { ColumnGrid, ContentContainer } from '@/components';

// Styles
import styles from './IconCtaBordered.module.scss';

// Types
import { FOUR_COLUMN_TYPES, HEADLINE_TAG_TYPES } from '@/types';

export type IconCtaBorderedProps = ComponentProps<typeof ContentContainer> & {
    bottomSupportCopy?: ReactNode;
    headline?: ReactNode;
    numberOfColumns: FOUR_COLUMN_TYPES;
    supportCopy?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
};

export const IconCtaBordered = (props: IconCtaBorderedProps) => {
    const {
        bottomSupportCopy,
        children,
        className,
        headline,
        numberOfColumns = '2',
        supportCopy,
        headlineTag = 'p',
        ...rest
    } = props;

    return (
        <ContentContainer
            className={className}
            data-testid='icon-cta-bordered'
            contentAlignment='left'
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            supportCopyBottom={bottomSupportCopy}
            {...rest}>
            <ColumnGrid
                columns='1'
                columnsTablet={numberOfColumns === '1' ? '1' : '2'}
                columnsDesktop={numberOfColumns}
                className={styles['icon-cta-bordered-grid']}
                data-testid='icon-cta-bordered-grid'>
                {children}
            </ColumnGrid>
        </ContentContainer>
    );
};
