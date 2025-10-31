import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { VideoAsset } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockVideoAsset } from '@/mocks/video-asset';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C16 - VideoAsset',
    component: VideoAsset,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-38819&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: { include: Object.keys(mockVideoAsset.default) }
    },
    argTypes: {
        caption: textControl
    }
} satisfies Meta<typeof VideoAsset>;

type Story = StoryObj<typeof VideoAsset>;

export const Default: Story = {
    args: mockVideoAsset.default,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('video-asset');
        const caption = getByTestId('video-asset-caption');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(caption).toBeInTheDocument();
    }
};

export const NoCaption: Story = {
    args: {
        caption: mockVideoAsset.noCaption.caption
    },
    play: async ({ canvasElement }) => {
        const { getByTestId, queryByText } = within(canvasElement);
        const content = getByTestId('video-asset');
        const classNames = content.getAttribute('class')!;
        const caption = queryByText('video-asset-caption');

        await expect(classNames).toMatch(classNameRegex(classNames));
        await expect(caption).not.toBeInTheDocument();
    }
};
