import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Card, ColumnGrid, Container } from '@/components';

// Mocks
import { mockCards } from '@/mocks/card';

export default {
    title: 'Design System/atoms/Card',
    component: Card,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=433-16833&m=dev'
        },
        controls: { include: ['elevation', 'topColorBar'] }
    },
    argTypes: {
        elevation: {
            control: 'select',
            options: ['none', 'elevation1', 'elevation2', 'elevation3']
        },
        topColorBar: {
            control: 'select',
            options: [
                'none',
                'denimBlue',
                'wellnessBlue',
                'childrensAlliance',
                'childrensBlue',
                'childrensGreen',
                'childrensOrange',
                'childrensPurple',
                'childrensYellow'
            ]
        }
    },
    decorators: [
        (Story) => (
            <div style={{ marginBlock: '3rem' }}>
                <Story />
            </div>
        )
    ]
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        ...mockCards.default,
        style: { padding: '1.5rem', display: 'grid', gap: '1rem' }
    },
    parameters: {
        layout: 'centered'
    },
    play: async ({ canvasElement, args }) => {
        const { getByTestId } = within(canvasElement);

        const card = getByTestId('card');

        await expect(card).toBeInTheDocument();

        if (args.topColorBar) {
            await expect(card).toHaveStyle('border-top-style: solid;');
            await expect(card).toHaveStyle('border-top-width: 8px;');
        }
    }
};

export const Grid: Story = {
    args: {
        ...mockCards.default,
        style: { padding: '1.5rem', display: 'grid', gap: '1rem' }
    },
    render: (args) => (
        <Container>
            <ColumnGrid
                columns='1'
                columnsTablet='2'
                columnsDesktop='4'>
                <Card {...args} />
                <Card {...args} />
                <Card {...args} />
                <Card {...args} />
            </ColumnGrid>
        </Container>
    ),
    play: async ({ canvasElement, args }) => {
        const { getAllByTestId } = within(canvasElement);

        const cards = getAllByTestId('card');

        await expect(cards).toHaveLength(4);

        if (args.topColorBar) {
            for (const card of cards) {
                await expect(card).toHaveStyle('border-top-style: solid;');
                await expect(card).toHaveStyle('border-top-width: 8px;');
            }
        }
    }
};
