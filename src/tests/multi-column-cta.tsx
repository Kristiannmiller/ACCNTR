import { ReactElement } from 'react';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MultiColumnCta } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof MultiColumnCta>;

const testMultiColumnCtaDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const multiColumnCta = getByTestId('multi-column-cta');
    const classNames = multiColumnCta.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(multiColumnCta).toBeInTheDocument();

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

    // Should have column grid
    const multiColumnCtaColumnGrid = getByTestId(
        'multi-column-cta-column-grid'
    );
    await expect(multiColumnCtaColumnGrid).toBeInTheDocument();

    // Should have correct number of column ctas
    const numberOfColumnCtas =
        (args.ctas as ReactElement)?.props?.children?.length || 0;
    const columnCtas = within(multiColumnCtaColumnGrid).getAllByTestId(
        'column-cta'
    );
    await expect(columnCtas).toHaveLength(numberOfColumnCtas);
};

export const testMultiColumnCta = {
    default: testMultiColumnCtaDefault
};
