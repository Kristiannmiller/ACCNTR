import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    Container,
    ContentContainer,
    ContentFeedGrid,
    Footer,
    Header,
    HeadlineWithOptionalCta,
    SearchBoxForm,
    SearchPagination,
    SearchResultSummary
} from '@/components';

// Mocks
import {
    mockContentFeedWithFeaturedCard,
    mockFooter,
    mockHeader,
    mockSearchBoxForm,
    mockSearchPagination,
    mockSearchResultSummary
} from '@/mocks';

export default {
    title: 'Design System/pages/SearchUI/BlogSearch',
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

export const BlogSearch: Story = {
    render: () => {
        return (
            <>
                <Header {...mockHeader.advocateHealthCare} />
                <HeadlineWithOptionalCta headline='Blog Search' />
                {/* Search Input */}
                <Container style={{ position: 'relative', zIndex: '1' }}>
                    <SearchBoxForm
                        {...{
                            ...mockSearchBoxForm.default,
                            labelText: 'Search by keyword or phrase'
                        }}
                    />
                </Container>
                <SearchResultSummary
                    style={{ marginTop: '1.5rem' }}
                    {...mockSearchResultSummary.default}
                />
                <ContentContainer
                    spacing='40-24'
                    style={{ marginTop: '2rem' }}>
                    <ContentFeedGrid
                        {...mockContentFeedWithFeaturedCard.default}
                    />
                </ContentContainer>
                <ContentContainer>
                    <SearchPagination
                        style={{ marginBlock: '0px' }}
                        {...mockSearchPagination.default}
                    />
                </ContentContainer>
                <Footer {...mockFooter.default} />
            </>
        );
    }
};
