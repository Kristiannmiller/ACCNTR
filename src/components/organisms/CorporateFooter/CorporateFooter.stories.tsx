import { Meta, StoryObj } from '@storybook/react';

// Components
import { CorporateFooter } from '@/components';

// Mocks
import { mockCorporateFooter } from '@/mocks/footer';

// Controls
import { textControl } from '@/sb-tools';

// Tests
import { testCorporateFooter } from '@/tests';

export default {
    title: 'Design System/organisms/N07 - CorporateFooter',
    component: CorporateFooter,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29628&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: {
            include: Object.keys(mockCorporateFooter.default)
        },
        excludeThemes: ['Consumer', 'Childrens']
    },
    argTypes: {
        legalPrivacyLink: textControl
    }
} satisfies Meta<typeof CorporateFooter>;

type Story = StoryObj<typeof CorporateFooter>;

export const Default: Story = {
    args: mockCorporateFooter.default,
    play: testCorporateFooter.default
};
