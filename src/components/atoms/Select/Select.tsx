import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    Dispatch,
    ElementRef,
    forwardRef,
    ReactNode,
    SetStateAction
} from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cx } from 'class-variance-authority';

// Components
import { RichText, SvgIcon, Text } from '@/components';

// Styles
import styles from './Select.module.scss';

// Types
import { BOOLEAN_TYPE } from '@/types';
import { SelectProps } from '@radix-ui/react-select';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

/**
 * SelectTrigger
 */
const SelectTrigger = forwardRef<
    ElementRef<typeof SelectPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <SelectPrimitive.Trigger
            ref={ref}
            className={cx(styles['select-trigger'], className)}
            {...rest}>
            {children}
            <SelectPrimitive.Icon asChild>
                <SvgIcon icon='chevronDown' />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

/**
 * SelectScrollUpButton
 */
const SelectScrollUpButton = forwardRef<
    ElementRef<typeof SelectPrimitive.ScrollUpButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <SelectPrimitive.ScrollUpButton
            ref={ref}
            className={cx(styles['select-scroll-btn'], className)}
            {...rest}>
            <SvgIcon icon='chevronUp' />
        </SelectPrimitive.ScrollUpButton>
    );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

/**
 * SelectScrollDownButton
 */
const SelectScrollDownButton = forwardRef<
    ElementRef<typeof SelectPrimitive.ScrollDownButton>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <SelectPrimitive.ScrollDownButton
            ref={ref}
            className={cx(styles['select-scroll-btn'], className)}
            {...rest}>
            <SvgIcon icon='chevronDown' />
        </SelectPrimitive.ScrollDownButton>
    );
});
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;

/**
 * SelectContent
 */
const SelectContent = forwardRef<
    ElementRef<typeof SelectPrimitive.Content>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>((props, ref) => {
    const { className, children, position = 'popper', ...rest } = props;

    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cx(
                    styles['select-content'],
                    {
                        [styles['popper']]: position === 'popper'
                    },
                    className
                )}
                position={position}
                {...rest}>
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cx(styles['viewport'], {
                        [styles['popper']]: position === 'popper'
                    })}>
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

/**
 * SelectLabel
 */
const SelectLabel = forwardRef<
    ElementRef<typeof SelectPrimitive.Label>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <SelectPrimitive.Label
            ref={ref}
            className={cx(styles['select-label'], className)}
            {...rest}
        />
    );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

/**
 * SelectItem
 */
const SelectItem = forwardRef<
    ElementRef<typeof SelectPrimitive.Item>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <SelectPrimitive.Item
            ref={ref}
            className={cx(styles['select-item'], className)}
            {...rest}>
            <SelectPrimitive.ItemText>
                <span className={styles['icon']}>
                    <SelectPrimitive.ItemIndicator>
                        <SvgIcon icon='check' />
                    </SelectPrimitive.ItemIndicator>
                </span>
                {children}
            </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

/**
 * SelectSeparator
 */
const SelectSeparator = forwardRef<
    ElementRef<typeof SelectPrimitive.Separator>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <SelectPrimitive.Separator
            ref={ref}
            className={cx(styles['separator'], className)}
            {...rest}
        />
    );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/**
 * SelectDropdown with error handling and label
 */
type SelectDropdownProps = ComponentPropsWithRef<'select'> &
    SelectProps & {
        ariaRequired: BOOLEAN_TYPE;
        errorMessage?: ReactNode;
        errorMessageId?: string;
        ariaLabel: string;
        label?: ReactNode;
        inputId: string;
        hasError?: boolean;
        setHasError?: Dispatch<SetStateAction<boolean>>;
        placeholder: string;
    };

export const SelectDropdown = (props: SelectDropdownProps) => {
    const {
        ariaLabel,
        ariaRequired,
        children,
        errorMessage,
        errorMessageId,
        hasError,
        inputId,
        label,
        onValueChange,
        placeholder,
        setHasError
    } = props;

    const handleInputFocus = () => {
        if (hasError) {
            setHasError?.(false);
        }
    };

    return (
        <div className={styles['select-dropdown']}>
            {/* Select Input Label */}
            {label && (
                <Text
                    data-testid='label'
                    className={cx(styles['label'], {
                        [styles['show-error']]: hasError
                    })}
                    tag='label'
                    htmlFor={inputId}>
                    {label}
                </Text>
            )}

            {/* Select Dropdown */}
            <Select onValueChange={onValueChange}>
                <SelectTrigger
                    aria-describedby={hasError ? errorMessageId : undefined}
                    aria-invalid={hasError}
                    aria-label={ariaLabel}
                    aria-required={ariaRequired}
                    className={styles['select-box']}
                    data-testid='select-box'
                    id={inputId}
                    onFocus={handleInputFocus}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>{children}</SelectContent>
            </Select>

            {/* Error Message */}
            {hasError && errorMessageId && (
                <RichText
                    aria-live='polite'
                    className={cx(styles['error-message'], {
                        [styles['show-error']]: hasError
                    })}
                    data-testid='input-error-message'
                    id={errorMessageId}>
                    {errorMessage}
                </RichText>
            )}
        </div>
    );
};

export {
    Select,
    SelectValue,
    SelectLabel,
    SelectGroup,
    SelectTrigger,
    SelectContent,
    SelectItem
};
