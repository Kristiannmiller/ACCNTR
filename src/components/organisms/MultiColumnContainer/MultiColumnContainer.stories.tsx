import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MultiColumnContainer } from './MultiColumnContainer';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockMultiColumnContainer } from '@/mocks/multi-column-container';

export default {
    title: 'Design System/organisms/C47 - MultiColumnContainer',
    component: MultiColumnContainer,
    parameters: {
        controls: { include: Object.keys(mockMultiColumnContainer.default) }
    },
    argTypes: {
        numberOfColumns: { control: 'select', options: ['2', '3', '4'] }
    }
} satisfies Meta<typeof MultiColumnContainer>;

type Story = StoryObj<typeof MultiColumnContainer>;

export const Default: Story = {
    args: mockMultiColumnContainer.default,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('multi-column-container');
        const grid = getByTestId('multi-column-container-grid');
        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(grid).toBeInTheDocument();
    }
};

// This story shows the map hiding by default when the Location info component is used in a Multi column container
export const WithLocationInfo: Story = {
    args: mockMultiColumnContainer.withLocationInfo,
    play: async ({ canvasElement }) => {
        const { getByTestId, queryAllByTestId } = within(canvasElement);
        const content = getByTestId('multi-column-container');
        const grid = getByTestId('multi-column-container-grid');
        const map = queryAllByTestId('location-info-map-wrapper');
        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(grid).toBeInTheDocument();

        // The map should not be rendered in the Multi column container
        await expect(map).toHaveLength(0);
    }
};

export const FourColumn: Story = {
    args: mockMultiColumnContainer.fourUp,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('multi-column-container');
        const grid = getByTestId('multi-column-container-grid');
        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(grid).toBeInTheDocument();
    }
};
