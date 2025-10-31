import {
    Text as JSSText,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ColumnCta, MultiColumnCtaProps } from '@/components';

// Mocks
import { loremParagraph } from './lorem-ipsum';
import { mockColumnCta } from '@/mocks/column-cta';

const mockMuliColumnCtaDefault: MultiColumnCtaProps = {
    backgroundColor: 'white',
    textAlignment: 'left',
    headline: <JSSText field={{ value: 'Multi Column CTA' }} />,
    headlineTag: 'p',
    columns: '2',
    supportingCopy: (
        <JSSRichText field={{ value: `<p>${loremParagraph.long}</p>` }} />
    ),
    ctas: (
        <>
            <ColumnCta {...mockColumnCta.default} />
            <ColumnCta {...mockColumnCta.covid} />
            <ColumnCta {...mockColumnCta.livewell} />
            <ColumnCta {...mockColumnCta.short} />
        </>
    )
};

export const mockMultiColumnCta: Record<'default', MultiColumnCtaProps> = {
    default: mockMuliColumnCtaDefault
};
