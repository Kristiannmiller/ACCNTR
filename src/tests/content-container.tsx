import { expect } from '@storybook/jest';
import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// Components
import { ContentContainer } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ContentContainer>;

const testContentContainerDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { queryByTestId } = within(canvasElement);
    const content = queryByTestId('content-container');

    const classNames = content?.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    const headline = queryByTestId('content-container-headline');

    if (args.headline) {
        await expect(headline).not.toBeNull();
    } else {
        await expect(headline).toBeNull();
    }

    const supportCopy = queryByTestId('content-container-support-copy');

    if (args.supportCopy) {
        await expect(supportCopy).not.toBeNull();
    } else {
        await expect(supportCopy).toBeNull();
    }

    const supportCopyBottom = queryByTestId(
        'content-container-support-copy-bottom'
    );

    if (args.supportCopyBottom) {
        await expect(supportCopyBottom).not.toBeNull();
    } else {
        await expect(supportCopyBottom).toBeNull();
    }

    const cta = queryByTestId('content-container-cta');

    if (args.cta) {
        await expect(cta).not.toBeNull();
    } else {
        await expect(cta).toBeNull();
    }
};

export const testContentContainer: Record<'default', Story['play']> = {
    default: testContentContainerDefault
};
