import { Meta, StoryObj } from '@storybook/react';

// Components
import { Breadcrumbs } from './';

// Utils
import { booleanControl } from '@/sb-tools';

//Mocks
import { mockBreadcrumbs } from '@/mocks/breadcrumbs';

// Tests
import { testBreadcrumbs } from '@/tests';

export default {
    title: 'Design System/organisms/N05 - Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29550&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: {
            include: Object.keys(mockBreadcrumbs.default)
        }
    },
    argTypes: {
        links: {
            description: 'The links to be displayed in the breadcrumbs.',
            control: {
                type: 'object'
            }
        },
        currentPage: {
            description: 'The current page.',
            control: {
                type: 'text'
            }
        },
        showOnMobile: {
            description: 'Toggle whether the breadcrumbs show on mobile.',
            ...booleanControl
        }
    }
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    args: mockBreadcrumbs.default,
    play: testBreadcrumbs.default
};

export const ShowOnMobile: Story = {
    args: mockBreadcrumbs.showOnMobile,
    play: testBreadcrumbs.default
};

export const AdvocateHealthCare: Story = {
    args: mockBreadcrumbs.advocateHealthCare,
    play: testBreadcrumbs.default
};

export const AuroraHealthCare: Story = {
    args: mockBreadcrumbs.auroraHealthCare,
    play: testBreadcrumbs.default
};
