import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './CtaContentCard.module.scss';

// Types
import { BOOLEAN_TYPE } from '@/types';
import { CTA_CONTENT_CARD_CTA_ALIGNMENT_TYPE } from './CtaContentCard';

export const ctaContentCardCVA = cva('', {
    variants: {
        hasDropShadow: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['with-shadow'],
            false: ''
        }),
        ctaAlignment: createCvaOptions<CTA_CONTENT_CARD_CTA_ALIGNMENT_TYPE>({
            center: styles['cta-section-center'],
            left: styles['cta-section-left']
        })
    }
});
