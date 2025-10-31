import { Text as JSSText } from '@sitecore-jss/sitecore-jss-react';

import { HeroStatisticsItemProps } from '@/components';

export const mockHeroStatisticsItems: Record<
    | 'noOptionalProps'
    | 'teammates'
    | 'doctors'
    | 'nurses'
    | 'patients'
    | 'hospitals'
    | 'sitesOfCare'
    | 'communityBenefit'
    | 'annualRevenue'
    | 'sizeRanking',
    HeroStatisticsItemProps
> = {
    noOptionalProps: {
        statisticsNumber: <JSSText field={{ value: '0' }} />
    },
    teammates: {
        topText: <JSSText field={{ value: 'nearly' }} />,
        statisticsNumber: <JSSText field={{ value: '155' }} />,
        suffix: <JSSText field={{ value: 'K' }} />,
        bottomText: <JSSText field={{ value: 'teammates' }} />
    },
    doctors: {
        topText: <JSSText field={{ value: 'more than' }} />,
        statisticsNumber: <JSSText field={{ value: '21' }} />,
        suffix: <JSSText field={{ value: 'K' }} />,
        bottomText: <JSSText field={{ value: 'doctors' }} />
    },
    nurses: {
        topText: <JSSText field={{ value: 'nearly' }} />,
        statisticsNumber: <JSSText field={{ value: '42' }} />,
        suffix: <JSSText field={{ value: 'K' }} />,
        bottomText: <JSSText field={{ value: 'nurses' }} />
    },
    patients: {
        topText: <JSSText field={{ value: 'serving nearly' }} />,
        statisticsNumber: <JSSText field={{ value: '6' }} />,
        suffix: <JSSText field={{ value: 'M' }} />,
        bottomText: <JSSText field={{ value: 'patients' }} />
    },
    hospitals: {
        statisticsNumber: <JSSText field={{ value: '69' }} />,
        bottomText: <JSSText field={{ value: 'hospitals' }} />
    },
    sitesOfCare: {
        topText: <JSSText field={{ value: 'more than' }} />,
        statisticsNumber: <JSSText field={{ value: '1' }} />,
        suffix: <JSSText field={{ value: 'K' }} />,
        bottomText: <JSSText field={{ value: 'sites of care' }} />
    },
    communityBenefit: {
        topText: <JSSText field={{ value: 'delivering approximately' }} />,
        prefix: <JSSText field={{ value: '$' }} />,
        statisticsNumber: <JSSText field={{ value: '6' }} />,
        suffix: <JSSText field={{ value: 'B' }} />,
        bottomText: <JSSText field={{ value: 'in community benefit' }} />
    },
    annualRevenue: {
        topText: <JSSText field={{ value: 'more than' }} />,
        prefix: <JSSText field={{ value: '$' }} />,
        statisticsNumber: <JSSText field={{ value: '28' }} />,
        suffix: <JSSText field={{ value: 'B' }} />,
        bottomText: <JSSText field={{ value: 'in annual revenue' }} />
    },
    sizeRanking: {
        statisticsNumber: <JSSText field={{ value: '3' }} />,
        superscriptSuffix: <JSSText field={{ value: 'rd' }} />,
        bottomText: (
            <JSSText field={{ value: 'largest nonprofit in the nation' }} />
        )
    }
};
