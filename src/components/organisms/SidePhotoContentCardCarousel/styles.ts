import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './SidePhotoContentCardCarousel.module.scss';

// Types
import { SidePhotoContentCardCarouselAlignmentTypes } from '@/components';

export const sidePhotoContentCardCarouselCarouselControlsCva = cva('', {
    variants: {
        imageSide: {
            left: styles['image-left'],
            right: styles['image-right']
        },
        layout: {
            fifty: styles['layout-fifty'],
            forty: styles['layout-forty']
        }
    }
});

export const sidePhotoContentCardCarouselAlignmentCva = cva('', {
    variants: {
        contentAlignment:
            createCvaOptions<SidePhotoContentCardCarouselAlignmentTypes>({
                center: styles['center'],
                left: styles['left']
            })
    }
});
