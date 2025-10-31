import { Meta, StoryObj } from '@storybook/react';

// Components
import { CheckboxFacetItem } from '@/components';

// Mocks
import { mockCheckboxFacetItem } from '@/mocks';

// Tests
import { testCheckboxFacetItem } from '@/tests';

// Utils
import { disabledControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/CheckboxFacetItem',
    component: CheckboxFacetItem,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-35400'
        },
        controls: { include: Object.keys(mockCheckboxFacetItem.default) },
        layout: 'centered'
    }
} satisfies Meta<typeof CheckboxFacetItem>;

type Story = StoryObj<typeof CheckboxFacetItem>;

export const Default: Story = {
    argTypes: {
        onCheckedChange: disabledControl
    },
    args: mockCheckboxFacetItem.default,
    play: testCheckboxFacetItem.default
};
