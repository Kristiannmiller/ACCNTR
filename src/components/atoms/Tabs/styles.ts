import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './Tabs.module.scss';

// Types
import { TAB_SIZES } from '@/components';

export const tabCVA = cva([styles['tabs-base']], {
    variants: {
        size: createCvaOptions<TAB_SIZES>({
            small: styles['small-text'],
            large: styles['large-text']
        })
    }
});
