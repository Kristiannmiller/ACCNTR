import { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ReverseRows } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof ReverseRows>;

const testReverseRowsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const reverseRows = getByTestId('reverse-rows');
    const classNames = reverseRows.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(reverseRows).toBeInTheDocument();

    const headline = getByTestId('reverse-rows-heading');
    // Should have headline
    await expect(headline).toBeInTheDocument();

    // Should render the correct headline tag
    const headlineTag = headline.tagName.toLowerCase();
    await expect(headlineTag).toBe(args.headlineTag);

    // Check if the element has the exact text
    await expect(headline).toHaveTextContent(getTextFieldValue(args.headline));

    const topSupportCopy = getByTestId('reverse-rows-supporting-copy-top');
    // Should have topSupportCopy
    await expect(topSupportCopy).toBeInTheDocument();

    const bottomSupportCopy = getByTestId(
        'reverse-rows-supporting-copy-bottom'
    );
    // Should have bottomSupportCopy
    await expect(bottomSupportCopy).toBeInTheDocument();

    // Should have correct number of rows
    const numberOfRows =
        (args.rows as ReactElement)?.props?.children?.length || 0;
    const rows = getAllByTestId('reverse-row-base');
    await expect(rows).toHaveLength(numberOfRows);
};

export const testReverseRows = {
    default: testReverseRowsDefault
};
