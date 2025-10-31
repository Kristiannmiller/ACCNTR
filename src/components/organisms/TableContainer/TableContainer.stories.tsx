import { Meta, StoryObj } from '@storybook/react';

// Components
import { TableContainer } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockTableContainer } from '@/mocks/table-container';

// Tests
import { testTableContainer } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C41 - Table',
    component: TableContainer,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-29883&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockTableContainer.default)
        }
    },
    argTypes: {
        tableStyle: {
            control: 'select',
            options: ['standard', 'custom']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        cellAlignment: {
            control: 'select',
            options: ['left', 'center', 'right']
        },
        contentAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        headline: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof TableContainer>;

type Story = StoryObj<typeof TableContainer>;

export const Default: Story = {
    args: mockTableContainer.default,
    play: testTableContainer.default
};

export const Custom: Story = {
    args: mockTableContainer.custom,
    play: testTableContainer.default
};

export const FirstCellRightAlignment: Story = {
    args: mockTableContainer.firstCellRightAlignment,
    play: testTableContainer.default
};

export const HeaderOverideLeftAlignment: Story = {
    args: mockTableContainer.headerOveRideLeftAlignment,
    play: testTableContainer.default
};
