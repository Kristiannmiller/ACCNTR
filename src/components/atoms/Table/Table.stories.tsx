import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Table, TableProps } from '@/components';

// Mocks
import { mockTableStandard, mockTableCustom } from '@/mocks/table';

// Utils
import { booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/atoms/Table',
    component: Table,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-29883&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: ['isStriped', 'isSticky']
        }
    },
    argTypes: {
        isStriped: {
            booleanControl,
            defaultValue: true,
            name: 'isStriped',
            type: { name: 'boolean' },
            description:
                'Adds zebra-striping to any table row within the table.',
            table: {
                type: { summary: 'boolean' }
            }
        },
        isSticky: {
            booleanControl,
            defaultValue: false,
            name: 'isSticky',
            type: { name: 'boolean' },
            description: 'Adds sticky table header.',
            table: {
                type: { summary: 'boolean' }
            }
        }
    }
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        isStriped: true,
        isSticky: false
    },

    render: (args: TableProps) => {
        return mockTableStandard(args);
    },

    play: async ({ canvasElement }) => {
        const { getAllByTestId, getByTestId } = within(canvasElement);
        const tableCells = getAllByTestId('table-cell');
        const tableHeader = getByTestId('table-header');
        const tableRows = getAllByTestId('table-row');

        // Should have twenty-one table cells
        expect(tableCells).toHaveLength(21);

        // Should have table header
        expect(tableHeader).toBeInTheDocument();

        // Should have eight row
        expect(tableRows).toHaveLength(8);
    }
};

export const Custom: Story = {
    args: {
        isStriped: true,
        isSticky: false
    },
    render: (args: TableProps) => {
        return mockTableCustom(args);
    },
    play: async ({ canvasElement }) => {
        const { getAllByTestId, getByTestId } = within(canvasElement);
        const tableCells = getAllByTestId('table-cell');
        const tableHeader = getByTestId('table-header');
        const tableRows = getAllByTestId('table-row');

        // Should have thirty-two table cells
        expect(tableCells).toHaveLength(32);

        // Should have table header
        expect(tableHeader).toBeInTheDocument();

        // Should have nine row
        expect(tableRows).toHaveLength(9);
    }
};
