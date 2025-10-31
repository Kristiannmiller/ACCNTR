import { ComponentProps, useState } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './AlertDismissible.module.scss';

// Components
import { AlertDataProps, Container, RichText, SvgIcon } from '@/components';

// Static
import { alertBgColorMap, alertIconMap } from '@/components';

export type AlertDismissibleDataProps = Pick<
    AlertDataProps,
    | 'alertType'
    | 'dismissButtonTitle'
    | 'isDismissed'
    | 'mobileAlertText'
    | 'onDismiss'
    | 'primaryAlertText'
    | 'shouldHideIcon'
> & {
    /** If `false`, the dismiss X button will not render. */
    isDismissible: boolean;
};

export type AlertDismissibleProps = ComponentProps<typeof Container> &
    AlertDismissibleDataProps;

export const AlertDismissible = (props: AlertDismissibleProps) => {
    const {
        className,
        primaryAlertText,
        mobileAlertText,
        alertType = 'info',
        isDismissible = true,
        shouldHideIcon = false,
        isDismissed: isDismissedProp,
        dismissButtonTitle = 'Dismiss',
        onDismiss,
        ...rest
    } = props;

    const [isDismissed, setIsDismissed] = useState<boolean>(
        isDismissedProp ?? false
    );

    const handleDismiss = () => {
        setIsDismissed(true);
        onDismiss?.();
    };

    if (isDismissed) {
        return null;
    }

    return (
        <Container
            className={cx(styles['container'], className)}
            data-testid='alert-dismissible'
            backgroundColor={alertBgColorMap[alertType]}
            {...rest}>
            <div className={styles['alert']}>
                {isDismissible && (
                    <button
                        type='button'
                        title={dismissButtonTitle}
                        data-testid='alert-dismiss-button'
                        className={styles['alert-dismiss-button']}
                        onClick={handleDismiss}>
                        <SvgIcon icon='xmark' />
                    </button>
                )}

                {!shouldHideIcon && (
                    <SvgIcon
                        data-testid='alert-icon'
                        className={styles['alert-icon']}
                        icon={alertIconMap[alertType]}
                    />
                )}

                {mobileAlertText && (
                    <RichText
                        data-testid='alert-mobile-text'
                        className={styles['alert-mobile-text']}>
                        {mobileAlertText}
                    </RichText>
                )}

                <RichText
                    data-testid='alert-primary-text'
                    className={styles['alert-primary-text']}>
                    {primaryAlertText}
                </RichText>
            </div>
        </Container>
    );
};
