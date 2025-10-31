import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { StorybookOnlySimpleSignup } from '@/components/organisms/SimpleSignup/StorybookOnlySimpleSignup';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof StorybookOnlySimpleSignup>;

const testSimpleSignupDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const simpleSignup = getByTestId('simple-signup');
    const classNames = simpleSignup.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(simpleSignup).toBeInTheDocument();

    const headline = getByTestId('simple-signup-headline');
    // Should have headline
    await expect(headline).toBeInTheDocument();

    // Should render the correct headline tag
    const headlineTag = headline.tagName.toLowerCase();
    await expect(headlineTag).toBe('h2');

    // Check if the element has the exact text
    await expect(headline).toHaveTextContent(getTextFieldValue(args.headline));

    if (args.supportCopy) {
        const supportCopy = getByTestId('simple-signup-support-copy');
        // Should have subHeading
        await expect(supportCopy).toBeInTheDocument();

        // Should render the correct headline tag
        const headlineTag = supportCopy.tagName.toLowerCase();
        await expect(headlineTag).toBe('div');

        // Check if the element has the exact text
        await expect(supportCopy).toContainHTML(
            getTextFieldValue(args.supportCopy)
        );
    }

    if (args.cta) {
        const cta = getByTestId('simple-signup-cta');
        await expect(cta).toBeInTheDocument();
    }
};

export const testSimpleSignup: Record<'default', Story['play']> = {
    default: testSimpleSignupDefault
};
