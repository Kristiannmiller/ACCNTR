import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';
import { Meta, StoryObj } from '@storybook/react';

// Utils

// Components
import {
    Container,
    ContentContainer,
    Footer,
    Header,
    HeadlineWithOptionalCta,
    NewsListing,
    RichTextRendering,
    SearchBoxForm,
    SearchPagination,
    SearchResultSummary
} from '@/components';

// Mocks
import { mockFooter } from '@/mocks/footer';
import { mockHeader } from '@/mocks/header';
import { mockHeadlineWithOptionalCtas } from '@/mocks/headline-with-optional-cta';
import { mockNewsListing } from '@/mocks/news-listing';
import { mockSearchBoxForm } from '@/mocks/search-box-form';
import { mockSearchPagination } from '@/mocks/search-pagination';
import { mockSearchResultSummary } from '@/mocks/search-result-summary';
import { mockSitecoreRichTextSmall } from '@/mocks/sitecore';
import { Fragment } from 'react';

export default {
    title: 'Design System/pages/SearchUI/NewsSearch',
    component: Fragment,
    parameters: {
        excludeThemes: ['Corporate'],
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=9440-30968&t=Hc5Wl6KZq9AZThnW-4'
        }
    }
} satisfies Meta<typeof Fragment>;

type Story = StoryObj<typeof Fragment>;

export const NewsSearch: Story = {
    render: () => {
        return (
            <>
                <Header {...mockHeader.advocateHealthCare} />
                <HeadlineWithOptionalCta
                    {...mockHeadlineWithOptionalCtas.advocateHealthCare}
                    headline='News Search'
                />
                <RichTextRendering>
                    <JSSRichText field={mockSitecoreRichTextSmall} />
                </RichTextRendering>
                <Container style={{ position: 'relative', zIndex: '1' }}>
                    <SearchBoxForm {...mockSearchBoxForm.default} />
                </Container>
                <SearchResultSummary
                    style={{ marginTop: '1.5rem' }}
                    {...mockSearchResultSummary.default}
                />
                <NewsListing
                    style={{ marginTop: '2rem' }}
                    {...mockNewsListing.default}
                />
                <ContentContainer>
                    <SearchPagination
                        style={{ marginBlock: '0px' }}
                        {...mockSearchPagination.default}
                    />
                </ContentContainer>

                <Footer {...mockFooter.advocateHealthCare} />
            </>
        );
    }
};
