import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { AlertProps } from '@/components';

const mockAlertDefault: AlertProps = {
    alertFunction: 'expanding',
    alertType: 'info',
    shouldHideIcon: false,
    showMoreLabel: 'Show More',
    showLessLabel: 'Show Less',
    primaryAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Primary alert text</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    ),
    expandedAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Expanded alert text</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    ),
    mobileAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Mobile alert text</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    )
};

export const mockAlert: Record<AlertProps['alertType'], AlertProps> = {
    info: mockAlertDefault,
    success: {
        ...mockAlertDefault,
        alertType: 'success',
        alertFunction: 'dismissible'
    },
    warning: {
        ...mockAlertDefault,
        alertType: 'warning',
        expandedAlertText: undefined
    },
    error: {
        ...mockAlertDefault,
        alertType: 'error',
        alertFunction: 'dismissible'
    },
    utility: {
        ...mockAlertDefault,
        alertType: 'utility'
    }
};
