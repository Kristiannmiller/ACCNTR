import { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Breadcrumbs } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof Breadcrumbs>;

const testBreadcrumbsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const breadcrumbsContainer = getByTestId('breadcrumbs-container');
    const classNames = breadcrumbsContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have breadcrumbs inside container
    const breadcrumbs = within(breadcrumbsContainer).getByTestId('breadcrumbs');
    await expect(breadcrumbs).toBeInTheDocument();

    // Should have breadcrumb list inside breadcrumbs
    const breadcrumbList = within(breadcrumbs).getByTestId('breadcrumb-list');
    await expect(breadcrumbList).toBeInTheDocument();

    // Should have correct number of breadcrumb items => links + current page
    const numberOfLinks = args?.links?.length + 1 || 1;
    const breadcrumbItems =
        within(breadcrumbList).getAllByTestId('breadcrumb-item');
    await expect(breadcrumbItems).toHaveLength(numberOfLinks);

    for (const [index, breadcrumbItem] of breadcrumbItems.entries()) {
        const link = args.links[index];
        //Check for link
        if (link) {
            // Should have breadcrumb link inside breadcrumb item
            const breadcrumbLink =
                within(breadcrumbItem).getByTestId('breadcrumb-link');
            await expect(breadcrumbLink).toBeInTheDocument();

            // Breadcrumb link href should match
            await expect(breadcrumbLink).toHaveAttribute(
                'href',
                (link as ReactElement<{ href: string }>).props.href
            );

            // Should have breadcrumb separator inside breadcrumb item
            const breadcrumbSeparator = within(breadcrumbItem).getByTestId(
                'breadcrumb-separator'
            );
            await expect(breadcrumbSeparator).toBeInTheDocument();
        }
    }

    // Should have breadcrumb page inside breadcrumb list
    const breadcrumbPage =
        within(breadcrumbList).getByTestId('breadcrumb-page');
    await expect(breadcrumbPage).toBeInTheDocument();

    // Check if the element has the exact text
    await expect(breadcrumbPage).toHaveTextContent(args.currentPage);
};

export const testBreadcrumbs = {
    default: testBreadcrumbsDefault
};
