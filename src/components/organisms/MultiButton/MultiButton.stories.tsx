import { Meta, StoryObj } from '@storybook/react';

// Components
import { MultiButton } from '@/components';

// Mocks
import { mockMultiButtonLayouts } from '@/mocks/multi-button';

// Tests
import { testMultiButton } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C04 - Multi-button Layout CTA',
    component: MultiButton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=3393-2690&t=QZPXlsBQxxPF8Pel-4'
        },
        controls: {
            include: Object.keys(mockMultiButtonLayouts.fourButton)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke', 'wellnessBlue']
        },
        headline: textControl,
        subHeading: textControl
    }
} satisfies Meta<typeof MultiButton>;

type Story = StoryObj<typeof MultiButton>;

export const Default: Story = {
    args: mockMultiButtonLayouts.oneButton,
    play: testMultiButton.default
};

export const TwoButton: Story = {
    args: mockMultiButtonLayouts.twoButton,
    play: testMultiButton.default
};

export const ThreeButton: Story = {
    args: mockMultiButtonLayouts.threeButton,
    play: testMultiButton.default
};

export const FourButton: Story = {
    args: mockMultiButtonLayouts.fourButton,
    play: testMultiButton.default
};

export const NoOptionalProps: Story = {
    args: mockMultiButtonLayouts.noOptionalProps,
    play: testMultiButton.default
};
