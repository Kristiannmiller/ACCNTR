import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './CtaContentCards.module.scss';
import childStyles from '@/components/molecules/CtaContentCard/CtaContentCard.module.scss';

// Types
import { BOOLEAN_TYPE } from '@/types';
import { CTA_CONTENT_CARDS_ALIGNMENT_TYPE } from '@/components';

export const ctaContentCardsCVA = cva(styles['cta-content-cards-base'], {
    variants: {
        hasDropShadows: createCvaOptions<BOOLEAN_TYPE>({
            true: childStyles['with-shadow'],
            false: ''
        }),
        contentAlignment: createCvaOptions<CTA_CONTENT_CARDS_ALIGNMENT_TYPE>({
            left: styles['content-copy-container-left'],
            center: styles['content-copy-container-center']
        })
    }
});
