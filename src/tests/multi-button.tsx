import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MultiButton } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof MultiButton>;

const testMultiButtonDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const multiButton = getByTestId('multi-button');
    const classNames = multiButton.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(multiButton).toBeInTheDocument();

    const headline = getByTestId('multi-button-heading');
    // Should have headline
    await expect(headline).toBeInTheDocument();

    // Should render the correct headline tag
    const headlineTag = headline.tagName.toLowerCase();
    await expect(headlineTag).toBe('h2');

    // Check if the element has the exact text
    await expect(headline).toHaveTextContent(getTextFieldValue(args.headline));

    if (args.subHeading) {
        const subHeading = getByTestId('multi-button-subHeading');
        // Should have subHeading
        await expect(subHeading).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = subHeading.tagName.toLowerCase();
        await expect(headlineTag).toBe('p');

        // Check if the element has the exact text
        await expect(subHeading).toHaveTextContent(
            getTextFieldValue(args.subHeading)
        );
    }

    const ctas = [
        args.firstCTA,
        args.secondCTA,
        args.thirdCTA,
        args.fourthCTA
    ].filter(Boolean);
    for (let index = 0; index < ctas.length; index++) {
        const cta = getByTestId(`multi-button-${index + 1}`);
        // Should have cta
        await expect(cta).toBeInTheDocument();

        // Should have same href
        await expect(cta).toHaveAttribute(
            'href',
            getLinkFieldValue(ctas[index])
        );

        // Should have correct styles applied to cta
        await expect(cta).toHaveClass('r-btn-solid1');
    }
};

export const testMultiButton = {
    default: testMultiButtonDefault
};
