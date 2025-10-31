import {
    Text as JSSText,
    Link as JSSLink,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { TopStatisticsProps } from '@/components';

// Components
import { TopStatisticsItem } from '@/components';

// Mocks
import { mockTopStatisticsItems } from './top-statistics-item';

const mockTopStatisticsDefault: TopStatisticsProps = {
    backgroundColor: 'white',
    numberOfColumns: '3',
    contentAlignments: 'center',
    ctaAlignment: 'center',
    headline: <JSSText field={{ value: 'Top Statistics' }} />,
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
            <TopStatisticsItem {...mockTopStatisticsItems.default} />
            <TopStatisticsItem {...mockTopStatisticsItems.default} />
            <TopStatisticsItem {...mockTopStatisticsItems.default} />
        </>
    )
};

export const mockTopStatistics: Record<
    'default' | 'noOptionalProps' | 'noSupportCopy',
    TopStatisticsProps
> = {
    default: mockTopStatisticsDefault,
    noOptionalProps: {
        ...mockTopStatisticsDefault,
        backgroundColor: 'whiteSmoke',
        headline: undefined,
        supportCopy: undefined,
        supportCopyBottom: undefined,
        cta: undefined
    },
    noSupportCopy: {
        ...mockTopStatisticsDefault,
        headlineTag: 'h2',
        backgroundColor: 'denimBlue',
        supportCopy: undefined,
        supportCopyBottom: undefined,
        children: (
            <>
                <TopStatisticsItem {...mockTopStatisticsItems.default} />
                <TopStatisticsItem {...mockTopStatisticsItems.reduction} />
                <TopStatisticsItem {...mockTopStatisticsItems.increase} />
                <TopStatisticsItem {...mockTopStatisticsItems.investment} />
                <TopStatisticsItem {...mockTopStatisticsItems.default} />
                <TopStatisticsItem {...mockTopStatisticsItems.default} />
            </>
        )
    }
};
