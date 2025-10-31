import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Sheet.module.scss';

// Types
type DIRECTION_TYPES = 'top' | 'bottom' | 'left' | 'right';

export const sheetContentCVA = cva(styles['sheet-content'], {
    variants: {
        direction: createCvaOptions<DIRECTION_TYPES>({
            top: [styles['side-top']],
            bottom: [styles['side-bottom']],
            left: [styles['side-left']],
            right: [styles['side-right']]
        })
    },
    defaultVariants: {
        direction: 'right'
    }
});
