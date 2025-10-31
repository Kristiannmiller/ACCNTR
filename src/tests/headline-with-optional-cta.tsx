import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeadlineWithOptionalCta } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof HeadlineWithOptionalCta>;

const testHeadlineWithOptionalCtaDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getByRole, queryByRole } = within(canvasElement);

    const content = getByTestId('headline-with-optional-cta');
    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(content).toBeInTheDocument();

    if (args.headline) {
        const headline = getByRole('heading', { level: 1 });
        // Should have headline
        await expect(headline).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(headline).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    const cta = queryByRole('link');
    if (args.cta) {
        // Expect the CTA to be visible
        await expect(cta).toBeVisible();
    } else {
        // Assert that the CTA is not in the DOM
        await expect(cta).toBeNull();
    }
};

export const testHeadlineWithOptionalCta = {
    default: testHeadlineWithOptionalCtaDefault
};
