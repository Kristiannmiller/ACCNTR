import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeadlineWithOptionalCta } from '@/components';

// Utils
import { mockHeadlineWithOptionalCtas } from '@/mocks/headline-with-optional-cta';

// Tests
import { testHeadlineWithOptionalCta } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C03 - HeadlineWithOptionalCta',
    component: HeadlineWithOptionalCta,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=535-396&t=QZPXlsBQxxPF8Pel-4'
        },
        controls: {
            include: Object.keys(mockHeadlineWithOptionalCtas.default)
        }
    },
    argTypes: {
        headline: textControl
    }
} satisfies Meta<typeof HeadlineWithOptionalCta>;

type Story = StoryObj<typeof HeadlineWithOptionalCta>;

export const Default: Story = {
    args: mockHeadlineWithOptionalCtas.default,
    play: testHeadlineWithOptionalCta.default
};

export const WithoutCTA: Story = {
    args: mockHeadlineWithOptionalCtas.withoutCTA,
    play: testHeadlineWithOptionalCta.default
};
