// 3rd-party imports
import { Text as JSSText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { Anchor, HeadlineWithOptionalCtaProps } from '@/components';

import { Sites } from '@/types';

type HeadlineWithOptionalCtaSites = Extract<Sites, 'advocateHealthCare'>;

const mockHeadlineWithOptionalCtaDefault: HeadlineWithOptionalCtaProps = {
    headline: <JSSText field={{ value: 'Headline With Optional CTA' }} />,
    cta: (
        <Anchor
            href='#'
            variant='solid1'
            size='medium'>
            Click me
        </Anchor>
    )
};

export const mockHeadlineWithOptionalCtas: Record<
    'default' | 'withoutCTA' | HeadlineWithOptionalCtaSites,
    HeadlineWithOptionalCtaProps
> = {
    default: mockHeadlineWithOptionalCtaDefault,
    withoutCTA: {
        ...mockHeadlineWithOptionalCtaDefault,
        cta: null
    },
    advocateHealthCare: {
        headline: <JSSText field={{ value: 'Headline With Optional CTA' }} />,
        cta: (
            <Anchor
                href='#'
                variant='solid1'
                size='medium'>
                Find a neuro specialist
            </Anchor>
        )
    }
};
