import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';

// Components
import { Container, ThemeProvider } from '@/components';

// Utils
import { mockBackgroundColor } from '@/mocks/background-color';

export default {
    title: 'Design System/atoms/ThemeProvider',
    component: ThemeProvider
} satisfies Meta<typeof ThemeProvider>;

type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
    render: () => <Container {...mockBackgroundColor.whiteSmoke} />,
    play: async ({ canvasElement, globals }) => {
        const body = canvasElement.ownerDocument.body;

        const theme = body.dataset.theme!;

        await expect(theme).toMatch(globals.theme);
    }
};
