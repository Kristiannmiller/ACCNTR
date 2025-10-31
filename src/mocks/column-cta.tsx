import {
    Text as JSSText,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ColumnCtaProps } from '@/components';

// Mocks
import {
    columnCtaCovidCopy,
    columnCtaLivewellCopy,
    columnCtaSingleColumnCopy,
    mockSitecoreLink
} from './sitecore';

const mockColumnCtaDefault: ColumnCtaProps = {
    headlineTag: 'p',
    headline: <JSSText field={{ value: 'Contact in Illinois' }} />,
    bodyCopy: <JSSRichText field={columnCtaSingleColumnCopy} />,
    textAlignment: 'left',
    extraCTA: (
        <JSSLink
            field={{ ...mockSitecoreLink.value, text: 'More for Illinois' }}
        />
    )
};

const mockColumnCtaCovid: ColumnCtaProps = {
    headlineTag: 'p',
    headline: <JSSText field={{ value: 'COVID help and info' }} />,
    bodyCopy: <JSSRichText field={columnCtaCovidCopy} />,
    textAlignment: 'left',
    extraCTA: undefined
};

const mockColumnCtaLiveWell: ColumnCtaProps = {
    headline: <JSSText field={{ value: 'LiveWell help' }} />,
    headlineTag: 'p',
    bodyCopy: <JSSRichText field={columnCtaLivewellCopy} />,
    textAlignment: 'left',
    extraCTA: undefined
};

const mockColumnCtaShort: ColumnCtaProps = {
    headlineTag: 'p',
    headline: <JSSText field={{ value: 'Short subheading' }} />,
    bodyCopy: <JSSRichText field={columnCtaLivewellCopy} />,
    textAlignment: 'left',
    extraCTA: undefined
};

export const mockColumnCta: Record<
    'default' | 'covid' | 'livewell' | 'short',
    ColumnCtaProps
> = {
    default: mockColumnCtaDefault,
    covid: mockColumnCtaCovid,
    livewell: mockColumnCtaLiveWell,
    short: mockColumnCtaShort
};
