import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { AlertDismissibleProps } from '@/components';

const mockAlertDismissibleDefault: AlertDismissibleProps = {
    alertType: 'info',
    shouldHideIcon: false,
    isDismissible: true,
    isDismissed: false,
    primaryAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Alert dismissible</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    ),
    mobileAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Alert dismissible</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    )
};

export const mockAlertDismissible: Record<
    'default' | 'noIcon' | 'noDismissButton' | 'noMobileText' | 'dismissTest',
    AlertDismissibleProps
> = {
    default: mockAlertDismissibleDefault,
    noIcon: {
        ...mockAlertDismissibleDefault,
        alertType: 'utility',
        shouldHideIcon: true
    },
    noDismissButton: {
        ...mockAlertDismissibleDefault,
        alertType: 'error',
        isDismissible: false
    },
    noMobileText: {
        ...mockAlertDismissibleDefault,
        mobileAlertText: undefined
    },
    dismissTest: {
        ...mockAlertDismissibleDefault,
        alertType: 'success',
        isDismissible: true,
        onDismiss: () =>
            console.log(
                'This is a test function that should be called when the alert is dismissed.'
            )
    }
};
