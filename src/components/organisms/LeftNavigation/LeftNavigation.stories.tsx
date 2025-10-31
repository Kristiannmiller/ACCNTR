import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LeftNavigationProps, LeftNavigation } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockLeftNavigation } from '@/mocks/sitecore';

export default {
    title: 'Design System/organisms/N03 - LeftSideNavigation',
    component: LeftNavigation,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29073&t=fCSyDdHz5b3lMXAP-4'
        }
    }
} satisfies Meta<typeof LeftNavigation>;

type Story = StoryObj<typeof LeftNavigation>;

export const Default: Story = {
    args: {
        navigations: mockLeftNavigation
    } as LeftNavigationProps,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('left-navigation');
        const classNames = content.getAttribute('class')!;

        const list = getByTestId('left-navigation-list');

        // Check class validity
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Check that there are more than 10 items
        await expect(list.children.length).toBeGreaterThan(10);

        // Check that show more is displayed
        await expect(list.lastChild?.textContent).toMatch('Show more');
    }
};
