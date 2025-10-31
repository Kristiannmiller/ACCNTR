import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Container.module.scss';

// Types
import { BOOLEAN_TYPE, CONTAINER_VARIANT_TYPES } from '@/types';

export const containerCVA = cva(styles['container'], {
    variants: {
        variant: createCvaOptions<CONTAINER_VARIANT_TYPES>({
            full: '',
            containedSmall: styles['contained-small'],
            contained: styles['contained'],
            containedLarge: styles['contained-large']
        }),
        isPadded: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['padded'],
            false: ''
        }),
        verticalSpacing: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['vertical-spacing'],
            false: ''
        })
    }
});
