import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './TableContainer.module.scss';

// Types
import { ALIGNMENT_TYPES } from '@/types';

export const tableContainerCVA = cva(styles['table-base'], {
    variants: {
        cellAlignment: createCvaOptions<ALIGNMENT_TYPES>({
            left: styles['text-left'],
            center: styles['text-center'],
            right: styles['text-right']
        })
    }
});
