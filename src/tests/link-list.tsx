import { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LinkList } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof LinkList>;

const testLinkListDefault: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);

    const linkListContainer = getByTestId('link-list');
    const classNames = linkListContainer.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(linkListContainer).toBeInTheDocument();

    if (args.headline) {
        const headline = getByTestId('content-container-headline');
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = headline.tagName.toLowerCase();
        await expect(headlineTag).toBe(args.headlineTag);

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportingCopy) {
        const containerSupportCopy = getByTestId(
            'content-container-support-copy'
        );
        // Should have containerSupportCopy
        await expect(containerSupportCopy).toBeInTheDocument();
    }

    if (args.bottomCta) {
        const bottomCta = getByTestId('content-container-cta');
        // Should have bottomCta
        await expect(bottomCta).toBeInTheDocument();

        // Should have same href
        await expect(bottomCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.bottomCta)
        );

        // Should have correct styles applied to bottomCta
        if (args.ctaStyle === 'button' || !args.ctaStyle) {
            await expect(bottomCta).toHaveClass('r-btn-solid1');
        }
    }

    // Should have link list column grid
    const linkListColumnGrid = getByTestId('link-list-column-grid');
    await expect(linkListColumnGrid).toBeInTheDocument();

    // Should have correct number of links
    const numberOfLinks =
        (args.links as ReactElement)?.props?.children?.length || 0;
    const links = within(linkListColumnGrid).getAllByRole('link');
    await expect(links).toHaveLength(numberOfLinks);
};

export const testLinkList = {
    default: testLinkListDefault
};
