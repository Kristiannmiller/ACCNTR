import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './Alert.module.scss';

// Components
import { AlertDismissible, AlertExpandable } from '@/components';

// Types
import { SvgIconType } from '@/components';
import { BACKGROUND_COLOR_TYPES } from '@/types';

/** Map of alertType to BACKGROUND_COLOR_TYPES to be leveraged by all alert components. */
export const alertBgColorMap: Record<
    AlertDataProps['alertType'],
    BACKGROUND_COLOR_TYPES
> = {
    info: 'utilityInfo',
    warning: 'utilityWarning',
    error: 'utilityNegative',
    success: 'utilityPositive',
    utility: 'utilityUtility'
};

/** Map of alertType to SvgIconType to be leveraged by all alert components. */
export const alertIconMap: Record<AlertDataProps['alertType'], SvgIconType> = {
    info: 'circleInfoSolid',
    warning: 'circleExclamation',
    error: 'circleXmark',
    success: 'circleCheck',
    utility: 'wrench'
};

export type AlertDataProps = {
    alertType: 'info' | 'warning' | 'error' | 'success' | 'utility';
    alertFunction: 'dismissible' | 'expanding';
    shouldHideIcon: boolean;
    primaryAlertText: ReactNode;
    mobileAlertText?: ReactNode;
    expandedAlertText?: ReactNode;
    showMoreLabel?: string;
    showLessLabel?: string;
    dismissButtonTitle?: string;
    /** If `true`, the component will not render. Use in conjunction with `onDismiss` to save persistent "dismissed" states. */
    isDismissed?: boolean;
    /** Optional callback that triggers onDismiss. Use to set cookie for how long the alert should be dismissed. */
    onDismiss?: () => void;
};

export type AlertProps = ComponentProps<
    typeof AlertExpandable | typeof AlertDismissible
> &
    AlertDataProps;

export const Alert = (props: AlertProps) => {
    const {
        className,
        alertType = 'info',
        alertFunction,
        shouldHideIcon = false,
        primaryAlertText,
        mobileAlertText,
        expandedAlertText,
        showMoreLabel = 'Show More',
        showLessLabel = 'Show Less',
        dismissButtonTitle = 'Dismiss alert',
        isDismissed,
        onDismiss,
        ...rest
    } = props;

    const alertClasses = cx(styles['alert'], className);

    // Only render AlertExpandable if there is expandedAlertText.
    if (alertFunction === 'expanding' && !!expandedAlertText) {
        return (
            <AlertExpandable
                className={alertClasses}
                alertType={alertType}
                primaryAlertText={primaryAlertText}
                mobileAlertText={mobileAlertText}
                shouldHideIcon={shouldHideIcon}
                expandedAlertText={expandedAlertText}
                showMoreLabel={showMoreLabel}
                showLessLabel={showLessLabel}
                {...rest}
            />
        );
    }

    // Otherwise, render AlertDismissible and toggle the dismiss button based on alertFunction.
    return (
        <AlertDismissible
            className={alertClasses}
            alertType={alertType}
            primaryAlertText={primaryAlertText}
            mobileAlertText={mobileAlertText}
            shouldHideIcon={shouldHideIcon}
            dismissButtonTitle={dismissButtonTitle}
            isDismissed={isDismissed}
            onDismiss={onDismiss}
            isDismissible={alertFunction === 'dismissible'}
            {...rest}
        />
    );
};
