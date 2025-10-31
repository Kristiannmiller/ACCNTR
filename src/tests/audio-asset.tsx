import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { AudioAsset } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof AudioAsset>;

const testAudioAssetDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('audio-asset');
    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    const audio = content.querySelector('audio')!;

    await expect(audio).toBeInTheDocument();
    await expect(audio).toHaveAttribute('src', args.audioSrc);

    const caption = content.querySelector('figcaption');

    if (args.caption) {
        await expect(caption).toBeInTheDocument();

        if (args.captionPlacement === 'top') {
            const bottomAudio = content.querySelector('figcaption + audio');
            await expect(bottomAudio).toBeInTheDocument();
        } else {
            const bottomCaption = content.querySelector('audio + figcaption');
            await expect(bottomCaption).toBeInTheDocument();
        }
    } else {
        await expect(caption).toBeNull();
    }
};

export const testAudioAsset: Record<'default', Story['play']> = {
    default: testAudioAssetDefault
};
