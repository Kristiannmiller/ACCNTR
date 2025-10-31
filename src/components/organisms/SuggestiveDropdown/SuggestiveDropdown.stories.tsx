import { Meta, StoryObj } from '@storybook/react';

// Components
import { SuggestiveDropdown } from '@/components';

// Mocks
import { mockSuggestiveDropdown } from '@/mocks/suggestive-dropdown';

// Tests
import { testSuggestiveDropdown } from '@/tests';

export default {
    title: 'Design System/organisms/C10 - SuggestiveDropdownList',
    component: SuggestiveDropdown,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=15862-208&t=oljJbFC1z3BYRxnO-4'
        },
        controls: { include: Object.keys(mockSuggestiveDropdown.default) },
        excludeThemes: ['Corporate', 'Childrens']
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        contentAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        headlineTag: {
            control: 'select',
            options: ['h2', 'h3', 'h4', 'p']
        },
        headline: {
            control: 'text'
        },
        supportCopy: {
            control: 'text'
        }
    }
} satisfies Meta<typeof SuggestiveDropdown>;

type Story = StoryObj<typeof SuggestiveDropdown>;

export const Default: Story = {
    args: mockSuggestiveDropdown.default,
    play: testSuggestiveDropdown.default
};
