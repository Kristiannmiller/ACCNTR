import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './HeroBanner.module.scss';

// Types
import { OPACITY_TYPES } from '@/types';

export const heroBannerCVA = cva('', {
    variants: {
        backgroundGradientLevel: createCvaOptions<OPACITY_TYPES>({
            '0': styles['gradient-level-0'],
            '20': styles['gradient-level-20'],
            '40': styles['gradient-level-40'],
            '60': styles['gradient-level-60'],
            '80': styles['gradient-level-80']
        })
    }
});
