import {
    Text as JSSText,
    Link as JSSLink,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { SideStatisticsProps } from '@/components';

// Components
import { SideStatisticsItem } from '@/components';

// Mocks
import { mockSideStatisticsItems } from './side-statistics-item';

const mockSideStatisticsDefault: SideStatisticsProps = {
    backgroundColor: 'white',
    contentAlignments: 'center',
    ctaAlignment: 'center',
    headline: <JSSText field={{ value: 'Side Statistics' }} />,
    headlineTag: 'p',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    supportCopyBottom: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    cta: <JSSLink field={{ href: '#', text: 'Learn More' }} />,
    children: (
        <>
            <SideStatisticsItem {...mockSideStatisticsItems.withPrefix} />
            <SideStatisticsItem {...mockSideStatisticsItems.withSuffix} />
            <SideStatisticsItem {...mockSideStatisticsItems.default} />
            <SideStatisticsItem {...mockSideStatisticsItems.numberOnly} />
        </>
    )
};

export const mockSideStatistics: Record<
    'default' | 'noOptionalProps' | 'noSupportCopy',
    SideStatisticsProps
> = {
    default: mockSideStatisticsDefault,
    noOptionalProps: {
        ...mockSideStatisticsDefault,
        backgroundColor: 'whiteSmoke',
        headline: undefined,
        supportCopy: undefined,
        supportCopyBottom: undefined,
        cta: undefined
    },
    noSupportCopy: {
        ...mockSideStatisticsDefault,
        headlineTag: 'h2',
        backgroundColor: 'denimBlue',
        supportCopy: undefined,
        supportCopyBottom: undefined
    }
};
