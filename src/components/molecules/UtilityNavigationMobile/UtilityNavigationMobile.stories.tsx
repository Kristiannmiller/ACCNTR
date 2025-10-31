import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { UtilityNavigationMobile } from './';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockUtilityNavigation } from '@/mocks/utility-navigation';

export default {
    title: 'Design System/molecules/N02 - UtilityNavigationMobile',
    component: UtilityNavigationMobile,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-42674&t=wVIzZUBnFsJQZGiu-4'
        }
    }
} satisfies Meta<typeof UtilityNavigationMobile>;

type Story = StoryObj<typeof UtilityNavigationMobile>;

export const Default: Story = {
    args: mockUtilityNavigation.advocateHealthCare,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('utility-navigation-mobile');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));
    }
};
