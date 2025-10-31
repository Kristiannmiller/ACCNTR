import { StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Checkbox } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof Checkbox>;

const testCheckboxDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const checkbox = getByTestId('checkbox');
    const classNames = checkbox.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(checkbox).toBeInTheDocument();
};

const testCheckboxWithCustomClass: Story['play'] = async ({
    canvasElement
}) => {
    const { getByTestId } = within(canvasElement);
    const checkbox = getByTestId('checkbox');
    await expect(checkbox).toHaveClass('custom-class');
};

const testCheckboxToggle: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const checkbox = getByTestId('checkbox');
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
};

const testCheckboxWithIcon: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const icon = getByTestId('checkbox').querySelector('svg');
    await expect(icon).toBeInTheDocument();
};

export const testCheckbox: Record<
    'default' | 'withCustomClass' | 'toggle' | 'withIcon',
    Story['play']
> = {
    default: testCheckboxDefault,
    withCustomClass: testCheckboxWithCustomClass,
    toggle: testCheckboxToggle,
    withIcon: testCheckboxWithIcon
};
