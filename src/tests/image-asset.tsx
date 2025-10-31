import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ImageAsset } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof ImageAsset>;

const testImageAssetDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const caption = getByTestId('image-asset-caption');
    const imageAsset = getByTestId('image-asset');
    const containerClasses = imageAsset.getAttribute('class');

    if (args.imageAlignment === 'left') {
        await expect(containerClasses).toMatch(
            classNameRegex('image-asset-left')
        );
    }

    if (args.imageAlignment === 'right') {
        await expect(containerClasses).toMatch(
            classNameRegex('image-asset-right')
        );
    }

    if (args.caption) {
        await expect(caption).toBeInTheDocument();
    }

    if (args.isImageBorderOn) {
        await expect(containerClasses).toMatch(classNameRegex('image-border'));
    }
};

export const testImageAsset: Record<'default', Story['play']> = {
    default: testImageAssetDefault
};
