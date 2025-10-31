import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './MediaGallery.module.scss';
import { ALIGNMENT_TYPES, COLOR_TYPES } from '@/types';

// -- Options
export type MediaGalleryBackgroundColors = Extract<
    COLOR_TYPES,
    'white' | 'whiteSmoke'
>;
export type MediaGalleryContentAlignments = Extract<
    ALIGNMENT_TYPES,
    'left' | 'center'
>;

export const mediaGalleryCVA = cva('', {
    variants: {
        alignment: createCvaOptions<MediaGalleryContentAlignments>({
            left: '',
            center: styles['copy-center']
        })
    }
});
