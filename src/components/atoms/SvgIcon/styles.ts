import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './SvgIcon.module.scss';

// Types
import { COLOR_TYPES } from '@/types';

export const svgIconCVA = cva(styles['svg-icon-base'], {
    variants: {
        color: createCvaOptions<Exclude<COLOR_TYPES, 'transparent'>>({
            wellnessBlue: styles['wellness-blue'],
            white: styles['white'],
            denimBlue: styles['denim-blue'],
            achOrange: styles['ach-orange'],
            cchaPurple: styles['ccha-purple'],
            whiteSmoke: styles['white-smoke'],
            childrensBlue: styles['childrens-blue'],
            childrensGreen: styles['childrens-green'],
            childrensOrange: styles['childrens-orange'],
            childrensPurple: styles['childrens-purple'],
            childrensYellow: styles['childrens-yellow'],
            childrensAlliance: styles['childrens-alliance'],
            utilityInfo: styles['utility-info'],
            utilityWarning: styles['utility-warning'],
            utilityNegative: styles['utility-negative'],
            utilityPositive: styles['utility-positive'],
            utilityUtility: styles['utility-utility']
        })
    }
});
