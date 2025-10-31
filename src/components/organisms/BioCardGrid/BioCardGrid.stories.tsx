import { Meta, StoryObj } from '@storybook/react';

// Components
import { BioCardGrid } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { columnsDesktopControl } from '@/components/atoms/ColumnGrid/columnGridArgTypes';

//Mocks
import { mockBioCardGrid } from '@/mocks/bio-card-grid';

// Tests
import { testBioCardGrid } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C56 - BioCardGrid',
    component: BioCardGrid,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-49522&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockBioCardGrid.default)
        }
    },
    argTypes: {
        columnsDesktop: columnsDesktopControl,
        headline: textControl,
        headlineTag: {
            default: 'p',
            description:
                'Changes rendered HTML tag for heading. h2 | h3 | h4 | p',
            control: 'select',
            options: headlineTags
        }
    }
} satisfies Meta<typeof BioCardGrid>;

type Story = StoryObj<typeof BioCardGrid>;

export const Default: Story = {
    args: mockBioCardGrid.default,
    play: testBioCardGrid.default
};
