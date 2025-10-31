import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './ReverseRow.module.scss';

import { REVERSE_ROW_CONTENT_ALIGNMENT_TYPE } from '.';

export const reverseRowCVA = cva(styles['reverse-row-base'], {
    variants: {
        contentAlignment: createCvaOptions<REVERSE_ROW_CONTENT_ALIGNMENT_TYPE>({
            center: styles['content-center-align'],
            top: styles['content-top-align']
        })
    }
});
