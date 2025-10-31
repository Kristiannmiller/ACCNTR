import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './ColumnCta.module.scss';
import { ALIGNMENT_TYPES } from '@/types';

export const columnCtaCVA = cva(styles['column-cta'], {
    variants: {
        textAlignment: createCvaOptions<
            Extract<ALIGNMENT_TYPES, 'left' | 'center'>
        >({
            left: '',
            center: styles['column-cta-center']
        })
    }
});
