import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { AlertExpandableProps } from '@/components';

const mockAlertExpandableDefault: AlertExpandableProps = {
    alertType: 'info',
    shouldHideIcon: false,
    showMoreLabel: 'Show More',
    showLessLabel: 'Show Less',
    primaryAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Alert Expandable</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    ),
    expandedAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Alert Expandable</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    ),
    mobileAlertText: (
        <JSSRichText
            field={{
                value: '<p><b>Alert Expandable</b> lorem ipsum <a href="#">Link Text</a> etc etc.</p>'
            }}
        />
    )
};

export const mockAlertExpandable: Record<
    'default' | 'noMobileText' | 'noIcon',
    AlertExpandableProps
> = {
    default: mockAlertExpandableDefault,
    noMobileText: {
        ...mockAlertExpandableDefault,
        mobileAlertText: undefined
    },
    noIcon: {
        ...mockAlertExpandableDefault,
        alertType: 'utility',
        shouldHideIcon: true
    }
};
