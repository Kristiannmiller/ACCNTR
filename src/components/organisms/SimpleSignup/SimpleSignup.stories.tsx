import { Meta, StoryObj } from '@storybook/react';

// Components
import { StorybookOnlySimpleSignup } from './StorybookOnlySimpleSignup';

// Mocks
import { mockSimpleSignup } from '@/mocks';

// Controls
import { textControl } from '@/sb-tools';

// Tests
import { testSimpleSignup } from '@/tests';

// Static
import { headlineTags } from '@/static';

export default {
    title: 'Design System/organisms/C40 - SimpleSignUp',
    component: StorybookOnlySimpleSignup,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=4514-8645&node-type=section&m=dev'
        },
        controls: { include: Object.keys(mockSimpleSignup.default) }
    },
    argTypes: {
        headline: textControl,
        supportCopy: textControl,
        alignment: {
            control: 'select',
            options: ['center', 'left']
        },
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        }
    }
} satisfies Meta<typeof StorybookOnlySimpleSignup>;

type Story = StoryObj<typeof StorybookOnlySimpleSignup>;

export const Default: Story = {
    args: mockSimpleSignup.default,
    play: testSimpleSignup.default
};
