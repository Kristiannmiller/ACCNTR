import { Meta, StoryObj } from '@storybook/react';

// Components
import { CheckboxFacets, Column, ColumnGrid, Container } from '@/components';

// Mocks
import { mockCheckboxFacets } from '@/mocks';

// Tests
import { testCheckboxFacets } from '@/tests';

// Utils
import { disabledControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/S03 - CheckboxFacets',
    component: CheckboxFacets,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35704&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: { include: Object.keys(mockCheckboxFacets.default) }
    }
} satisfies Meta<typeof CheckboxFacets>;

type Story = StoryObj<typeof CheckboxFacets>;

export const Default: Story = {
    render: (args) => (
        <Container>
            <ColumnGrid>
                <Column
                    span='4'
                    spanDesktop='4'>
                    <Container>
                        <div style={{ marginTop: '10px' }}>
                            {/* Search Facets */}
                            <CheckboxFacets {...args} />
                        </div>
                    </Container>
                </Column>
            </ColumnGrid>
        </Container>
    ),
    argTypes: {
        onFilterChange: disabledControl
    },
    args: mockCheckboxFacets.default,
    play: testCheckboxFacets.default
};
