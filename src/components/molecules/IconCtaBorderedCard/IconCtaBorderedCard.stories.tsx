import { Meta, StoryObj } from '@storybook/react';

// Components
import { allFontAwesomeIcons, IconCtaBorderedCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockIconCtaBorderedCard } from '@/mocks/icon-cta-bordered-card';

// Tests
import { testIconCtaBorderedCard } from '@/tests';

// Types
import { ctaStyle, colorBarColors } from '@/static';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/IconCtaBorderedCard',
    component: IconCtaBorderedCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-25357&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockIconCtaBorderedCard.default)
        }
    },
    argTypes: {
        firstCTAStyle: {
            control: 'select',
            options: ctaStyle
        },
        secondCTAStyle: {
            control: 'select',
            options: ctaStyle
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        headline: textControl,
        supportCopy: textControl,
        topColorBar: {
            control: 'select',
            options: ['none', ...colorBarColors]
        },
        icon: {
            control: 'select',
            options: allFontAwesomeIcons
        }
    }
} satisfies Meta<typeof IconCtaBorderedCard>;

type Story = StoryObj<typeof IconCtaBorderedCard>;

export const Default: Story = {
    args: mockIconCtaBorderedCard.default,
    play: testIconCtaBorderedCard.default
};
