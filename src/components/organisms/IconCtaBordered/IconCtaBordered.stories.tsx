import { Meta, StoryObj } from '@storybook/react';

// Components
import { IconCtaBordered } from '@/components';

// Mocks
import { mockIconCtaBordered } from '@/mocks/icon-cta-bordered';

// Static
import { fourColumns, headlineTags } from '@/static';

// Tests
import { testIconCtaBordered } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C31 - IconCtaBordered',
    component: IconCtaBordered,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-25357&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaBordered.default)
        }
    },
    argTypes: {
        numberOfColumns: {
            control: 'select',
            options: fourColumns
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headline: textControl,
        supportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof IconCtaBordered>;

type Story = StoryObj<typeof IconCtaBordered>;

export const Default: Story = {
    args: mockIconCtaBordered.default,
    play: testIconCtaBordered.default
};

export const SixCards: Story = {
    args: mockIconCtaBordered.sixCards,
    play: testIconCtaBordered.default
};

export const WithReputationScheduleCta: Story = {
    args: mockIconCtaBordered.withReputationScheduleCta,
    play: testIconCtaBordered.default
};
