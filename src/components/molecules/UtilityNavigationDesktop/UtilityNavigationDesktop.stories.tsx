import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { UtilityNavigationDesktop } from './';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockUtilityNavigation } from '@/mocks/utility-navigation';

export default {
    title: 'Design System/molecules/N02 - UtilityNavigationDesktop',
    component: UtilityNavigationDesktop,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-42674&t=wVIzZUBnFsJQZGiu-4'
        }
    }
} satisfies Meta<typeof UtilityNavigationDesktop>;

type Story = StoryObj<typeof UtilityNavigationDesktop>;

export const Default: Story = {
    args: mockUtilityNavigation.advocateHealthCare,
    play: async ({ canvasElement }) => {
        const { getByTestId, getAllByTestId, getAllByRole } =
            within(canvasElement);
        const content = getByTestId('utility-navigation');
        const triggers = getAllByTestId('navigation-menu-trigger');
        const links = getAllByRole('link');
        const ctaButtons = getAllByTestId('cta-button');

        const classNames = content.getAttribute('class')!;

        // Expect the component to have the correct classes
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Expect there to 3 menus and 3 links
        await expect(triggers).toHaveLength(3);
        await expect(links).toHaveLength(3);

        // Expect the first link to be 'Español'
        await expect(links[0]).toHaveTextContent('Español');

        // Expect the first trigger to be 'Pay a Bill'
        await expect(triggers[0]).toHaveTextContent('Pay a Bill');

        // Expect the second trigger to be 'Find a doctor'
        await expect(triggers[1]).toHaveTextContent('Find a doctor');

        // Expect the third trigger to be 'Find a location'
        await expect(triggers[2]).toHaveTextContent('Find a location');

        // Expect there to be 2 CTA buttons
        await expect(ctaButtons).toHaveLength(2);
    }
};
