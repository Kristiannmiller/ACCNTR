import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Link as JSSLink } from '@sitecore-jss/sitecore-jss-react';

// Components
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from './';

// Utils
import { classNameRegex } from '@/utils';
import { mockSitecoreLink } from '@/mocks/sitecore';

export default {
    title: 'Design System/atoms/NavigationMenu',
    component: NavigationMenu,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-40155'
        }
    },
    argTypes: {
        hasIndicator: {
            control: {
                type: 'boolean'
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} satisfies Meta<typeof NavigationMenu>;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
    render: () => {
        return (
            <NavigationMenu value='1'>
                <NavigationMenuList>
                    <NavigationMenuItem value='1'>
                        <NavigationMenuTrigger>Our Story</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <a href='#'>Google</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <JSSLink field={mockSitecoreLink.value} />
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId, queryByTestId } = within(canvasElement);
        const content = getByTestId('navigation-menu');
        const trigger = getByTestId('navigation-menu-trigger');
        const menuContent = queryByTestId('navigation-menu-content');

        const classNames = content.getAttribute('class')!;

        // Expect the component to have the correct class name
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Expect there to be a trigger
        await expect(trigger).toBeInTheDocument();

        // Expect the trigger to have the correct text
        await expect(trigger).toHaveTextContent('Our Story');

        // Expect the menuContent to not be in the dom
        await expect(menuContent).toBe(null);
    }
};
