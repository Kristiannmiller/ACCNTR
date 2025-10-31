import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Map } from '@/components';

type Story = StoryObj<typeof Map>;

const testMapDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('map');

    await expect(content).toBeInTheDocument();
};

export const testMap: Record<'default', Story['play']> = {
    default: testMapDefault
};
