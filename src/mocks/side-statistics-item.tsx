import {
    Text as JSSText,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

import { SideStatisticsItemProps } from '@/components';

const mockSideStatisticsItemDefault: SideStatisticsItemProps = {
    statistic: <JSSText field={{ value: '360' }} />,
    prefix: <JSSText field={{ value: '$' }} />,
    suffix: <JSSText field={{ value: 'M' }} />,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Side statistics item</p>'
            }}
        />
    )
};

export const mockSideStatisticsItems: Record<
    'default' | 'withPrefix' | 'withSuffix' | 'numberOnly',
    SideStatisticsItemProps
> = {
    default: mockSideStatisticsItemDefault,
    withPrefix: {
        ...mockSideStatisticsItemDefault,
        prefix: <JSSText field={{ value: '$' }} />,
        statistic: <JSSText field={{ value: '2' }} />,
        suffix: undefined
    },
    withSuffix: {
        ...mockSideStatisticsItemDefault,
        prefix: undefined,
        statistic: <JSSText field={{ value: '50' }} />,
        suffix: <JSSText field={{ value: 'B' }} />
    },
    numberOnly: {
        ...mockSideStatisticsItemDefault,
        prefix: undefined,
        statistic: <JSSText field={{ value: '100' }} />,
        suffix: undefined
    }
};
