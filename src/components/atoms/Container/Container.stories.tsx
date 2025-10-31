import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    Container,
    DEFAULT_CONTAINER_VARIANT,
    DEFAULT_CONTAINER_TAG,
    DEFAULT_VERTICAL_SPACING
} from '@/components';

// Static
import { backgroundColors, containerTags, containerVariants } from '@/static';

// Mocks
import { mockBackgroundColor } from '@/mocks/background-color';

// Utils
import { booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/atoms/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=9470-28573'
        },
        controls: {
            include: [
                'backgroundColor',
                'variant',
                'tag',
                'verticalSpacing',
                'isPadded'
            ]
        }
    },
    argTypes: {
        variant: {
            description: `Controls the max-width and padding of the container. | 
                "containedSmall": 1196px |
                "contained": 1440px | 
                "containedLarge": 1920px`,
            control: 'select',
            options: containerVariants
        },
        verticalSpacing: {
            description:
                'Adds standard 1rem top/bottom margin to the container.',
            ...booleanControl
        },
        tag: {
            description: 'The HTML tag to render the container as.',
            control: 'select',
            options: containerTags
        },
        backgroundColor: {
            description: 'The background color of the container.',
            control: 'select',
            options: backgroundColors
        },
        isPadded: {
            description: 'Adds padding (or page margin) to the container.',
            booleanControl
        }
    }
} satisfies Meta<typeof Container>;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        variant: DEFAULT_CONTAINER_VARIANT,
        tag: DEFAULT_CONTAINER_TAG,
        isPadded: true,
        verticalSpacing: DEFAULT_VERTICAL_SPACING,
        backgroundColor: 'white',
        children: mockBackgroundColor.white.children,
        style: { paddingBlock: '3rem' }
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('container');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};
