import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { CheckboxFacetItem } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof CheckboxFacetItem>;

const testCheckboxFacetItemDefault: Story['play'] = async ({
    canvasElement
}) => {
    const { getByTestId, getByText } = within(canvasElement);
    const checkboxFacetItem = getByTestId('checkbox-facet-item');
    const classNames = checkboxFacetItem.getAttribute('class')!;

    const label = getByText('Webpage');
    const count = getByText('(567)');

    await expect(label).toBeInTheDocument();
    await expect(count).toBeInTheDocument();

    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(checkboxFacetItem).toBeInTheDocument();
};

export const testCheckboxFacetItem: Record<'default', Story['play']> = {
    default: testCheckboxFacetItemDefault
};
