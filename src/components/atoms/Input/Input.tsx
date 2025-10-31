import {
    ComponentPropsWithRef,
    forwardRef,
    Dispatch,
    ReactNode,
    SetStateAction,
    FocusEventHandler
} from 'react';
import { cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// Components
import { RichText, Text } from '@/components';

// Styles
import styles from './Input.module.scss';

// Types
import { BOOLEAN_TYPE } from '@/types';

export type InputProps = ComponentPropsWithRef<'input'> & {
    ariaLabel?: string;
    ariaRequired: BOOLEAN_TYPE;
    errorMessage?: ReactNode;
    errorMessageId?: string;
    hasError?: boolean;
    inputId: string;
    label?: ReactNode;
    setHasError?: Dispatch<SetStateAction<boolean>>;
    inlineButton?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        ariaLabel,
        ariaRequired,
        className,
        errorMessage,
        errorMessageId,
        hasError,
        inputId,
        label,
        placeholder,
        setHasError,
        inlineButton,
        onFocus,
        ...rest
    } = props;

    const handleInputFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        if (hasError) {
            setHasError?.(false);
        }
        onFocus?.(e);
    };

    const shouldShowError = !!hasError && !!errorMessage && !!errorMessageId;

    return (
        <div
            className={cx(styles['input'], className)}
            data-testid='input'>
            {/* Input Label */}
            {label && (
                <Text
                    data-testid='label'
                    className={cx(styles['label'], {
                        [styles['show-error']]: shouldShowError
                    })}
                    tag='label'
                    htmlFor={inputId}>
                    {label}
                </Text>
            )}

            {/* Input Box */}
            <div className={styles['input-container']}>
                <input
                    id={inputId}
                    data-testid='input-box'
                    className={styles['input-box']}
                    ref={ref}
                    placeholder={placeholder}
                    aria-invalid={shouldShowError}
                    aria-required={ariaRequired}
                    aria-label={ariaLabel}
                    aria-describedby={
                        shouldShowError ? errorMessageId : undefined
                    }
                    onFocus={handleInputFocus}
                    {...rest}
                />

                {inlineButton && (
                    <Slot className={styles['inline-btn']}>{inlineButton}</Slot>
                )}
            </div>

            {/* Error Message */}
            {shouldShowError && (
                <RichText
                    aria-live='polite'
                    id={errorMessageId}
                    data-testid='input-error-message'
                    className={cx(styles['error-message'], {
                        [styles['show-error']]: hasError
                    })}>
                    {errorMessage}
                </RichText>
            )}
        </div>
    );
});
