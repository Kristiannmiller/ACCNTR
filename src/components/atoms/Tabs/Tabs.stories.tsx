import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Utils
import { booleanControl } from '@/sb-tools';

// Components
import { Tabs, DEFAULT_TAB_SIZE } from './Tabs';

// Mocks
import { mockTabs } from '@/mocks/tabs';

export default {
    title: 'Design System/atoms/N08 - Tabs',
    component: Tabs,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=3863-5363&t=fCSyDdHz5b3lMXAP-4'
        }
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'large'],
            defaultValue: DEFAULT_TAB_SIZE
        },
        hasShadow: {
            booleanControl,
            defaultValue: false
        }
    }
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: mockTabs.default,
    play: async ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const tabTrigger = getAllByTestId('tab-trigger');
        const tabContent = getAllByTestId('tab-content');
        const tabContentFirstItem = tabContent[0];

        // Should have three items
        await expect(tabTrigger).toHaveLength(3);

        // Should have a display block on default
        expect(tabContentFirstItem).toHaveStyle({ display: 'block' });

        // Should have Tab content
        expect(tabContentFirstItem).toBeInTheDocument();
    }
};

export const findADoctorAndFindALocation: Story = {
    args: mockTabs.findADoctorAndFindALocation,
    play: async ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const tabTrigger = getAllByTestId('tab-trigger');
        const tabContent = getAllByTestId('tab-content');
        const tabContentFirstItem = tabContent[0];

        // Should have three items
        await expect(tabTrigger).toHaveLength(3);

        // Should have a display block on default
        expect(tabContentFirstItem).toHaveStyle({ display: 'block' });

        // Should have Tab content
        expect(tabContentFirstItem).toBeInTheDocument();
    }
};
