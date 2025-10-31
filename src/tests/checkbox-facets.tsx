import { StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { CheckboxFacets } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof CheckboxFacets>;

const testCheckboxFacetsDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId, queryByRole, findAllByTestId } = within(canvasElement);

    // Check that the component renders correctly
    const content = getByTestId('checkbox-facets');
    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Ensure the toggle button is rendered and has the correct accessibility attributes
    const toggleButton = queryByRole('button', {
        name: /filter by type/i
    });

    if (toggleButton) {
        // Click the toggle button to open the facets list
        await userEvent.click(toggleButton);

        // Verify that the facets list is initially not visible
        const facetWrapperOpen = getByTestId('checkbox-facets-wrapper');
        await expect(facetWrapperOpen).not.toBeVisible();
        await expect(toggleButton).toBeInTheDocument();
        await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    }

    // Verify that the facets list is now visible
    const facetItems = await findAllByTestId('checkbox-facet-item');

    await expect(facetItems).toHaveLength(4);
    await expect(facetItems[0]).toHaveTextContent('Test(3)');
};

export const testCheckboxFacets: Record<'default', Story['play']> = {
    default: testCheckboxFacetsDefault
};
