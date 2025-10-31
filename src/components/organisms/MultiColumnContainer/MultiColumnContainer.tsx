import { ComponentProps, ReactElement } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { ColumnGrid, Container } from '@/components';

// Styles
import styles from './MultiColumnContainer.module.scss';

// Types
import { FOUR_COLUMN_TYPES } from '@/types';

export type MultiColumnContainerProps = ComponentProps<typeof Container> & {
    numberOfColumns: Extract<FOUR_COLUMN_TYPES, '2' | '3' | '4'>;
    columnContents: ReactElement;
};

export const MultiColumnContainer = (props: MultiColumnContainerProps) => {
    const { className, numberOfColumns = '2', columnContents, ...rest } = props;

    return (
        <Container
            className={cx(styles['multi-column-grid-base'], className)}
            data-testid='multi-column-container'
            {...rest}>
            <ColumnGrid
                className={styles['multi-column-grid']}
                columns='1'
                columnsTablet='2'
                columnsDesktop={numberOfColumns}
                data-testid='multi-column-container-grid'>
                {columnContents}
            </ColumnGrid>
        </Container>
    );
};
