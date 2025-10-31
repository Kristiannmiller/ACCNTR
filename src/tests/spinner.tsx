import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Spinner } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof Spinner>;

const testSpinnerDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('spinner');
    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(content).toBeInTheDocument();
};

export const testSpinner: Record<'default', Story['play']> = {
    default: testSpinnerDefault
};
