import {
    Text as JSSText,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

import { TopStatisticsItemProps } from '@/components';

const mockTopStatisticsItemDefault: TopStatisticsItemProps = {
    topStatistic: <JSSText field={{ value: '100%' }} />,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Top Statistics Item</p>'
            }}
        />
    )
};

export const mockTopStatisticsItems: Record<
    'default' | 'reduction' | 'increase' | 'investment',
    TopStatisticsItemProps
> = {
    default: mockTopStatisticsItemDefault,
    reduction: {
        ...mockTopStatisticsItemDefault,
        topStatistic: (
            <JSSText field={{ value: '13% reduction in etc etc etc' }} />
        ),
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Top Statistics Item</p>'
                }}
            />
        )
    },
    increase: {
        ...mockTopStatisticsItemDefault,
        topStatistic: <JSSText field={{ value: '124% increase' }} />,
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Top Statistics Item</p>'
                }}
            />
        )
    },
    investment: {
        ...mockTopStatisticsItemDefault,
        topStatistic: <JSSText field={{ value: '$4M investment' }} />
    }
};
