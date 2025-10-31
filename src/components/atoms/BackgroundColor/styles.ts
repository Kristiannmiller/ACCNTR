import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './BackgroundColor.module.scss';

// Types
import { BACKGROUND_COLOR_TYPES } from '@/types';

export const backgroundColorCVA = cva('', {
    variants: {
        backgroundColor: createCvaOptions<BACKGROUND_COLOR_TYPES>({
            white: styles['bg-white'],
            wellnessBlue: styles['bg-wellness-blue'],
            denimBlue: styles['bg-denim-blue'],
            whiteSmoke: styles['bg-white-smoke'],
            achOrange: styles['bg-ach-orange'],
            cchaPurple: styles['bg-ccha-purple'],
            utilityInfo: styles['bg-utility-info'],
            utilityWarning: styles['bg-utility-warning'],
            utilityNegative: styles['bg-utility-negative'],
            utilityPositive: styles['bg-utility-positive'],
            utilityUtility: styles['bg-utility-utility'],
            transparent: styles['bg-transparent']
        })
    }
});
