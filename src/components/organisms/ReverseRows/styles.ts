import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

import { BOOLEAN_TYPE } from '@/types';

// Styles
import styles from './ReverseRows.module.scss';
import childStyles from '@/components/molecules/ReverseRow/ReverseRow.module.scss';

export const reverseRowsCVA = cva('', {
    variants: {
        shouldRemovePaddingBetweenRows: createCvaOptions<BOOLEAN_TYPE>({
            true: '',
            false: [styles['with-padding'], childStyles['media-side-padding']]
        })
    }
});
