import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ReverseRow } from '@/components';

// Utils
import {
    classNameRegex,
    getTextFieldValue,
    getLinkFieldValue,
    getImageFieldValue
} from '@/utils';

type Story = StoryObj<typeof ReverseRow>;

const testReverseRowDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const reverseRow = getByTestId('reverse-row-base');
    const classNames = reverseRow.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(reverseRow).toBeInTheDocument();

    const heading = getByTestId('reverse-row-heading');
    // Should have heading
    await expect(heading).toBeInTheDocument();

    // Should render the correct heading tag
    const headlineTag = heading.tagName.toLowerCase();
    await expect(headlineTag).toBe(args.headlineTag);

    // Check if the element has the exact text
    await expect(heading).toHaveTextContent(getTextFieldValue(args.headline));

    const supportingCopy = getByTestId('reverse-row-supporting-copy');
    // Should have supportingCopy
    await expect(supportingCopy).toBeInTheDocument();

    if (args.firstCta) {
        const firstCta = getByTestId('reverse-row-first-cta');
        // Should have first Cta
        await expect(firstCta).toBeInTheDocument();

        // Should have same href
        await expect(firstCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCta)
        );

        // Should have correct styles applied to first Cta
        if (args.ctaStyle === 'button') {
            await expect(firstCta).toHaveClass('r-btn-solid1');
        }
    }

    if (args.secondCta) {
        const secondCta = getByTestId('reverse-row-second-cta');
        // Should have second Cta
        await expect(secondCta).toBeInTheDocument();

        // Should have same href
        await expect(secondCta).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCta)
        );

        // Should have correct styles applied to second Cta
        if (args.ctaStyle === 'button') {
            await expect(secondCta).toHaveClass('r-btn-solid1');
        }
    }

    if (args.videoId) {
        const youtubeEmbed = getByTestId('reverse-row-youtube-embed');
        // Should have video
        await expect(youtubeEmbed).toBeInTheDocument();
    }

    if (args.image && !args.videoId) {
        const image = getByTestId('reverse-row-image');
        // Should have image
        await expect(image).toBeInTheDocument();

        // Should have same image src
        await expect(image).toHaveAttribute(
            'src',
            getImageFieldValue(args.image)
        );
    }
};

export const testReverseRow = {
    default: testReverseRowDefault
};
