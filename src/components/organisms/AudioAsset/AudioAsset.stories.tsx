import { Meta, StoryObj } from '@storybook/react';

// Components
import { AudioAsset } from '@/components';

// Mocks
import { mockAudioAsset } from '@/mocks';

// Tests
import { testAudioAsset } from '@/tests';

export default {
    title: 'Design System/organisms/C18 - Audio Asset',
    component: AudioAsset,
    parameters: {
        // No Figma design available for this component.
        controls: { include: Object.keys(mockAudioAsset.default) }
    },
    argTypes: {
        caption: {
            control: 'text'
        },
        captionPlacement: {
            control: 'select',
            options: ['top', 'bottom']
        },
        playerAlignment: {
            control: 'select',
            options: ['left', 'center']
        }
    }
} satisfies Meta<typeof AudioAsset>;

type Story = StoryObj<typeof AudioAsset>;

export const Default: Story = {
    args: mockAudioAsset.default,
    play: testAudioAsset.default
};

export const WithoutCaption: Story = {
    args: mockAudioAsset.withoutCaption,
    play: testAudioAsset.default
};
