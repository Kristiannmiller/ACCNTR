import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SideMediaAsset } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSideMediaAsset } from '@/mocks/side-media-asset';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C17 - SideMediaAsset',
    component: SideMediaAsset,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-39831&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockSideMediaAsset.default) }
    },
    argTypes: {
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        imageSide: {
            control: { type: 'select', options: ['left', 'right'] }
        },
        imageContainerSize: {
            control: {
                type: 'select',
                options: ['twenty', 'thirty', 'forty', 'fifty']
            }
        },
        headline: textControl,
        supportCopy: textControl,
        imageCaption: textControl
    }
} satisfies Meta<typeof SideMediaAsset>;

type Story = StoryObj<typeof SideMediaAsset>;

const test: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);
    const container = getByTestId('side-media-asset');

    await expect(container).toBeInTheDocument();

    const classNames = container.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    if (args.headline) {
        const headline = getByTestId('side-media-asset-headline');
        await expect(headline).toBeInTheDocument();
    }

    const media = getByTestId('media-with-caption');

    await expect(media).toBeInTheDocument();

    const mediaClasses = media.getAttribute('class')!;

    if (args.imageSide === 'left') {
        await expect(mediaClasses).toMatch(classNameRegex('media-left'));
    }

    if (args.imageSide === 'right') {
        await expect(mediaClasses).toMatch(classNameRegex('media-right'));
    }

    if (args.isImageBorderOn) {
        await expect(mediaClasses).toMatch(classNameRegex('image-border'));
    }

    if (args.imageContainerSize === 'fifty') {
        await expect(mediaClasses).toMatch(classNameRegex('media-size-50'));
    }

    if (args.imageContainerSize === 'forty') {
        await expect(mediaClasses).toMatch(classNameRegex('media-size-40'));
    }

    if (args.imageContainerSize === 'thirty') {
        await expect(mediaClasses).toMatch(classNameRegex('media-size-30'));
    }

    if (args.imageContainerSize === 'twenty') {
        await expect(mediaClasses).toMatch(classNameRegex('media-size-20'));
    }

    if (args.image) {
        await expect(media).toContainElement(media.querySelector('img'));

        if (args.imageCtaLink) {
            const imageLink = getByTestId('media-with-caption-image-link');
            await expect(imageLink).toBeInTheDocument();
        }
    }

    if (args.videoId && !args.image) {
        const video = getByTestId('media-with-caption-video');
        await expect(video).toBeInTheDocument();
    }

    if (args.imageCaption) {
        const imageCaption = getByTestId('media-with-caption-caption');
        await expect(imageCaption).toBeInTheDocument();
    }

    const supportCopy = getByTestId('side-media-asset-support-copy');
    await expect(supportCopy).toBeInTheDocument();
};

export const Default: Story = {
    args: mockSideMediaAsset.default,
    play: test
};

export const WithVideo: Story = {
    args: mockSideMediaAsset.withVideo,
    play: test
};

export const NoOptionalProps: Story = {
    args: mockSideMediaAsset.noOptionalProps,
    play: test
};
