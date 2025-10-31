import { Meta, StoryObj } from '@storybook/react';

// Components
import { ImageAsset } from '@/components';

// Mocks
import { mockImageAsset } from '@/mocks/image-asset';

// Tests
import { testImageAsset } from '@/tests';

// Static
import { alignments } from '@/static';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C15 - ImageAsset',
    component: ImageAsset,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-39894&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockImageAsset.default) }
    },
    argTypes: {
        imageAlignment: {
            control: 'select',
            options: alignments
        },
        caption: textControl
    }
} satisfies Meta<typeof ImageAsset>;

type Story = StoryObj<typeof ImageAsset>;

export const Default: Story = {
    args: mockImageAsset.default,
    play: testImageAsset.default
};

export const ImageAssetWithoutCta: Story = {
    args: mockImageAsset.imageAssetWithoutCta,
    play: testImageAsset.default
};

export const ImageAssetSmall: Story = {
    args: mockImageAsset.imageAssetSmall,
    play: testImageAsset.default
};

export const ImageAssetSmallWithoutCta: Story = {
    args: mockImageAsset.imageAssetSmallWithoutCta,
    play: testImageAsset.default
};

export const ImageAssetLarge: Story = {
    args: mockImageAsset.imageAssetLarge,
    play: testImageAsset.default
};

export const ImageAssetWithMobileImage: Story = {
    args: mockImageAsset.imageAssetWithMobileImage,
    play: testImageAsset.default
};

export const ImageAssetWithMobileImageWithoutCta: Story = {
    args: mockImageAsset.imageAssetWithMobileImageWithoutCta,
    play: testImageAsset.default
};
