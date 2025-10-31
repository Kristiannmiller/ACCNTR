import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { YouTubeEmbed } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockYoutubeEmbed } from '@/mocks/youtube-embed';

export default {
    title: 'Design System/atoms/YouTubeEmbed',
    component: YouTubeEmbed,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-38819&t=wVIzZUBnFsJQZGiu-4'
        }
    },
    argTypes: {
        videoId: {
            default: mockYoutubeEmbed.videoId,
            description: 'YouTube videoId to embed'
        }
    }
} satisfies Meta<typeof YouTubeEmbed>;

type Story = StoryObj<typeof YouTubeEmbed>;

export const Default: Story = {
    args: mockYoutubeEmbed,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('youtube-embed');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};
