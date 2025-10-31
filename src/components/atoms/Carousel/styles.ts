import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Carousel.module.scss';

// Types
import { BOOLEAN_TYPE } from '@/types';

export const carouselControlsCVA = cva(styles['carousel-controls'], {
    variants: {
        isInverse: createCvaOptions<BOOLEAN_TYPE>({
            true: [styles['inverse']],
            false: ''
        })
    }
});
