import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Table.module.scss';

// Types
import { TABLE_CELL_ALIGNMENTS, BOOLEAN_TYPE, TABLE_STYLES } from '@/types';

export const tableCVA = cva(styles['table-base'], {
    variants: {
        isStriped: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['striped'],
            false: ''
        }),
        isSticky: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['sticky'],
            false: ''
        }),
        tableStyle: createCvaOptions<TABLE_STYLES>({
            standard: '',
            custom: styles['table-custom']
        })
    }
});

export const tableCellCVA = cva(styles['table-cell-base'], {
    variants: {
        cellAlignment: createCvaOptions<TABLE_CELL_ALIGNMENTS>({
            default: '',
            left: styles['left'],
            right: styles['right'],
            center: styles['center']
        })
    }
});
