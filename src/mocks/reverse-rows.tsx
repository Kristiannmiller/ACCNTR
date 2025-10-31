import {
    Text as JSSText,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockReverseRow } from '@/mocks/reverse-row';

// Types
import { ReverseRow, ReverseRowsProps } from '@/components';

const defaultMockReverseRows: ReverseRowsProps = {
    shouldRemovePaddingBetweenRows: false,
    headlineTag: 'h2',
    headline: <JSSText field={{ value: 'Reverse Rows' }} />,
    topSupportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
            }}
        />
    ),
    bottomSupportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
            }}
        />
    ),
    rows: (
        <>
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow {...mockReverseRow.noVideo} />
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow {...mockReverseRow.noVideo} />
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow {...mockReverseRow.default} />
        </>
    ),
    bottomCta: <JSSLink field={mockSitecoreLink} />
};

const alternatingMockReverseRows: ReverseRowsProps = {
    ...defaultMockReverseRows,
    rows: (
        <>
            <ReverseRow
                {...mockReverseRow.default}
                mediaSide='right'
            />
            <ReverseRow {...mockReverseRow.noVideo} />
            <ReverseRow
                {...mockReverseRow.default}
                mediaSide='right'
            />
            <ReverseRow {...mockReverseRow.default} />
            <ReverseRow
                {...mockReverseRow.default}
                mediaSide='right'
            />
            <ReverseRow {...mockReverseRow.noVideo} />
            <ReverseRow
                {...mockReverseRow.default}
                mediaSide='right'
            />
            <ReverseRow {...mockReverseRow.default} />
        </>
    )
};

export const mockReverseRows: Record<
    'default' | 'alternatingMedia',
    ReverseRowsProps
> = {
    default: defaultMockReverseRows,
    alternatingMedia: alternatingMockReverseRows
};
