import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MediaWithCaption, Container } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockMediaWithCaption } from '@/mocks/media-with-caption';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/MediaWithCaption',
    component: MediaWithCaption,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-39831&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockMediaWithCaption.default) }
    },
    decorators: [
        (Story) => {
            return (
                <Container>
                    <Story />
                </Container>
            );
        }
    ],
    argTypes: {
        imageContainerSize: {
            control: 'select',
            options: ['twenty', 'thirty', 'forty', 'fifty', undefined]
        },
        imageSide: {
            control: 'select',
            options: ['left', 'right', undefined]
        },
        imageCaption: textControl
    },
    args: mockMediaWithCaption.default
} satisfies Meta<typeof MediaWithCaption>;

type Story = StoryObj<typeof MediaWithCaption>;

const unitTests: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId, queryByTestId } = within(canvasElement);
    const content = getByTestId('media-with-caption');

    const classNames = content.getAttribute('class')!;

    // Expect the MediaWithCaption to have the correct class names
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Expect the image to have the correct src
    const video = await queryByTestId('media-with-caption-video');
    args.videoId
        ? await expect(video).toBeInTheDocument()
        : await expect(video).not.toBeInTheDocument();

    // Expect the image to render a caption
    const image = await queryByTestId('img');
    const caption = await queryByTestId('media-with-caption-caption');

    if (args.image) {
        await expect(image).toBeInTheDocument();
        await expect(caption).toBeInTheDocument();
    } else {
        await expect(image).not.toBeInTheDocument();
        await expect(caption).not.toBeInTheDocument();
    }
};

export const WithImage: Story = {
    args: mockMediaWithCaption.withImage,
    play: unitTests
};

export const WithVideo: Story = {
    args: mockMediaWithCaption.withVideo,
    play: unitTests
};
