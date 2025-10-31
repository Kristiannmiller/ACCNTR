import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './GlobalNavigation.module.scss';

export const globalNavigationCVA = cva(styles['global-navigation-base'], {
    variants: {
        variant: createCvaOptions<'primary' | 'secondary'>({
            primary: styles['global-navigation-primary'],
            secondary: styles['global-navigation-secondary']
        })
    }
});
