import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Card.module.scss';

// Types
import { COLOR_BAR_TYPES, ELEVATION_TYPES } from '@/types';

export const cardCVA = cva('', {
    variants: {
        elevation: createCvaOptions<ELEVATION_TYPES | 'none'>({
            none: '',
            elevation1: styles['elevation-1'],
            elevation2: styles['elevation-2'],
            elevation3: styles['elevation-3']
        }),
        topColorBar: createCvaOptions<COLOR_BAR_TYPES | 'none'>({
            none: '',
            denimBlue: [styles['color-bar'], styles['denim-blue']],
            wellnessBlue: [styles['color-bar'], styles['wellness-blue']],
            childrensBlue: [styles['color-bar'], styles['childrens-blue']],
            childrensGreen: [styles['color-bar'], styles['childrens-green']],
            childrensOrange: [styles['color-bar'], styles['childrens-orange']],
            childrensPurple: [styles['color-bar'], styles['childrens-purple']],
            childrensYellow: [styles['color-bar'], styles['childrens-yellow']],
            childrensAlliance: [
                styles['color-bar'],
                styles['childrens-alliance']
            ]
        })
    }
});
