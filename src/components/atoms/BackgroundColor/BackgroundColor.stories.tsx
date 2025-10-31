import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Static
import { backgroundColors } from '@/static';

// Components
import { BackgroundColor } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockBackgroundColor } from '@/mocks/background-color';

export default {
    title: 'Design System/atoms/BackgroundColor',
    component: BackgroundColor,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System?type&#x3D;design&amp;node-id&#x3D;15-21&amp;mode&#x3D;design&amp;t&#x3D;vxXU596MnnyQqgIQ-4'
        },
        controls: {
            include: ['backgroundColor']
        }
    },
    argTypes: {
        backgroundColor: {
            description: 'The background color of the container.',
            control: 'select',
            options: backgroundColors
        }
    }
} satisfies Meta<typeof BackgroundColor>;

type Story = StoryObj<typeof BackgroundColor>;

export const Default: Story = {
    args: mockBackgroundColor.white,
    play: async ({ canvasElement, args }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('mock-bg-color');

        const classNames = content.getAttribute('class')!;

        if (args.backgroundColor === 'white') {
            await expect(classNames).toMatch(classNameRegex('bg-white'));
        }

        if (args.backgroundColor === 'wellnessBlue') {
            await expect(classNames).toMatch(
                classNameRegex('bg-wellness-blue')
            );
        }

        if (args.backgroundColor === 'denimBlue') {
            await expect(classNames).toMatch(classNameRegex('bg-denim-blue'));
        }

        if (args.backgroundColor === 'whiteSmoke') {
            await expect(classNames).toMatch(classNameRegex('bg-white-smoke'));
        }

        if (args.backgroundColor === 'achOrange') {
            await expect(classNames).toMatch(classNameRegex('bg-ach-orange'));
        }

        if (args.backgroundColor === 'cchaPurple') {
            await expect(classNames).toMatch(classNameRegex('bg-ccha-purple'));
        }
    }
};
