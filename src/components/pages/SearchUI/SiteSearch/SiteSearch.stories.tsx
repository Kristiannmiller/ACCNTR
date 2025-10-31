import { Fragment } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import {
    CheckboxFacets,
    Column,
    ColumnGrid,
    Container,
    ContentContainer,
    Footer,
    Header,
    NewsListing,
    SearchBoxForm,
    SearchPagination,
    SearchResultSummary,
    Text
} from '@/components';

// Mocks
import {
    mockCheckboxFacets,
    mockFooter,
    mockHeader,
    mockNewsListing,
    mockSearchBoxForm,
    mockSearchPagination,
    mockSearchResultSummary
} from '@/mocks';

export default {
    title: 'Design System/pages/SearchUI/SiteSearch',
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

export const SiteSearch: Story = {
    render: () => {
        return (
            <>
                <Header {...mockHeader.advocateHealthCare} />
                <Container>
                    <div>
                        <Text fontStyle='xlHeading'>Site search</Text>
                    </div>
                </Container>
                <br />
                <br />
                <br />
                <>
                    <Container style={{ position: 'relative', zIndex: '1' }}>
                        <ColumnGrid>
                            {/* Search Input */}
                            <Column span='4'>
                                <Container>
                                    <SearchBoxForm
                                        {...{
                                            ...mockSearchBoxForm.default,
                                            labelText:
                                                'Search by keyword or phrase'
                                        }}
                                    />
                                </Container>
                            </Column>

                            {/* Facet Filters */}
                            <Column
                                span='4'
                                spanDesktop='4'>
                                <Container>
                                    <div>
                                        <CheckboxFacets
                                            {...mockCheckboxFacets.default}
                                        />
                                    </div>
                                </Container>
                            </Column>

                            {/* Search Results and Pagination */}
                            <Column
                                span='4'
                                spanDesktop='8'>
                                <Container>
                                    {/* Results Summary */}
                                    <SearchResultSummary
                                        {...mockSearchResultSummary.default}
                                    />
                                </Container>

                                {/* Result cards */}
                                <NewsListing {...mockNewsListing.default} />

                                {/* Pagination */}
                                <ContentContainer>
                                    <SearchPagination
                                        style={{ marginBlock: '0px' }}
                                        {...mockSearchPagination.threePages}
                                    />
                                </ContentContainer>
                            </Column>
                        </ColumnGrid>
                    </Container>
                </>
                <Footer {...mockFooter.advocateHealthCare} />
            </>
        );
    }
};
