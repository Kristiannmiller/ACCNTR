import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ColumnCta } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof ColumnCta>;

const testColumnCtaDefault: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);

    const columnCTA = getByTestId('column-cta');
    const classNames = columnCTA.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(columnCTA).toBeInTheDocument();

    const headline = getByTestId('column-cta-headline');
    // Should have headline
    await expect(headline).toBeInTheDocument();

    // Should render the correct headline tag
    const headlineTag = headline.tagName.toLowerCase();
    await expect(headlineTag).toBe(args.headlineTag);

    // Check if the element has the exact text
    await expect(headline).toHaveTextContent(getTextFieldValue(args.headline));

    const supportCopy = getByTestId('column-cta-body-copy');
    // Should have supportCopy
    await expect(supportCopy).toBeInTheDocument();

    if (args.extraCTA) {
        const extraCTA = getByTestId('column-cta-link');
        // Should have extraCTA
        await expect(extraCTA).toBeInTheDocument();

        // Should have same href
        await expect(extraCTA).toHaveAttribute(
            'href',
            getLinkFieldValue(args.extraCTA)
        );

        // Should have correct styles applied to bottomCta
        await expect(extraCTA).toHaveClass('r-btn-solid1');
    }
};

export const testColumnCta = {
    default: testColumnCtaDefault
};
