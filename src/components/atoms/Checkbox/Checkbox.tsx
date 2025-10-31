import {
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    ChangeEvent
} from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cx } from 'class-variance-authority';

// Components
import { SvgIcon } from '@/components';

// Styles
import styles from './Checkbox.module.scss';

// Types
type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};

const Checkbox = forwardRef<
    ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>((props: CheckboxProps, ref) => {
    const { className, checked, onCheckedChange, ...rest } = props;
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            data-testid='checkbox'
            className={cx(styles['checkbox-base'], className)}
            checked={checked}
            title={checked ? 'Uncheck' : 'Check'}
            onCheckedChange={(checked) => onCheckedChange?.(checked)}
            {...rest}>
            <CheckboxPrimitive.Indicator
                className={styles['checkbox-indicator']}>
                <SvgIcon
                    icon='check'
                    className={styles['checkbox-icon']}
                />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
