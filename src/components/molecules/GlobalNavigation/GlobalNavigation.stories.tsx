import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import {
    GlobalNavigation,
    backgroundColorOptions,
    navItemColors
} from '@/components';

// Mocks
import { mockGlobalNavigation } from '@/mocks/global-navigation';

export default {
    title: 'Design System/molecules/GlobalNavigation',
    component: GlobalNavigation,
    parameters: {
        layout: 'fullscreen',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-40155'
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: backgroundColorOptions,
            defaultValue: 'white'
        },
        searchColor: {
            control: 'select',
            options: navItemColors,
            defaultValue: 'green'
        }
    }
} satisfies Meta<typeof GlobalNavigation>;

type Story = StoryObj<typeof GlobalNavigation>;

export const AdvocateChildrens: Story = {
    args: mockGlobalNavigation.advocateChildrens,
    parameters: {
        excludeThemes: ['Corporate', 'Consumer']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const AdvocateHealth: Story = {
    args: mockGlobalNavigation.advocateHealthCare,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const AuroraBayCare: Story = {
    args: mockGlobalNavigation.auroraBayCare,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const AuroraHealthCare: Story = {
    args: mockGlobalNavigation.auroraHealthCare,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const Corporate: Story = {
    args: mockGlobalNavigation.corporate,
    parameters: {
        excludeThemes: ['Childrens', 'Consumer']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const EmployerSolutions: Story = {
    args: mockGlobalNavigation.employerSolutions,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};

export const Foundations: Story = {
    args: mockGlobalNavigation.foundations,
    parameters: {
        excludeThemes: ['Corporate', 'Childrens']
    },
    render: (args) => <GlobalNavigation {...args} />,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('global-navigation');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNames);
    }
};
