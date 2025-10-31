import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Static
import { variants } from '@/static';

// Components
import {
    Button,
    DEFAULT_BUTTON_SIZE,
    DEFAULT_BUTTON_VARIANT,
    Text
} from '@/components';

// Utils
import { sizeControl, variantControl } from './buttonArgTypes';
import { buttonSizeClassMap, buttonVariantClassMap } from './styles';

const meta: Meta<typeof Button> = {
    title: 'Design System/atoms/Button',
    component: Button,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System?type=design&node-id=150-1114&mode=design&t=vxXU596MnnyQqgIQ-4'
        }
    },
    argTypes: {
        variant: variantControl,
        size: sizeControl
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    parameters: {
        layout: 'centered'
    },
    args: {
        children: 'Button',
        variant: DEFAULT_BUTTON_VARIANT,
        size: DEFAULT_BUTTON_SIZE
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const buttonElement = canvas.getByRole('button', { name: 'Button' });

        if (args.variant) {
            if (!args.buttonStyle) {
                await expect(buttonElement.classList).toContain(
                    buttonVariantClassMap[args.variant]
                );
            }
        } else {
            await expect(buttonElement.classList).toContain(
                buttonVariantClassMap[DEFAULT_BUTTON_VARIANT]
            );
        }

        if (args.size) {
            await expect(buttonElement.classList).toContain(
                buttonSizeClassMap[args.size]
            );
        } else {
            await expect(buttonElement.classList).toContain(
                buttonSizeClassMap[DEFAULT_BUTTON_SIZE]
            );
        }
    }
};

export const KitchenSink: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                <Text fontStyle='lgHeading'>Medium</Text>
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}>
                    {variants.map((variant) => (
                        <Button
                            key={variant}
                            variant={variant}
                            size='medium'>
                            {variant.toUpperCase()}
                        </Button>
                    ))}
                    <Button
                        disabled
                        size='medium'>
                        Disabled
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                <Text fontStyle='xlHeading'>Large</Text>
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}>
                    {variants.map((variant) => (
                        <Button
                            key={variant}
                            variant={variant}
                            size='large'>
                            {variant.toUpperCase()}
                        </Button>
                    ))}
                    <Button
                        disabled
                        size='large'>
                        Disabled
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                <Text fontStyle='xlHeading'>Wrapping text</Text>
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}>
                    <Button
                        variant='solid1'
                        size='medium'>
                        Find an orthopedic
                        <br /> specialist
                    </Button>
                    <Button
                        variant='outlined'
                        size='medium'>
                        Longer text that gets <br />
                        wrapped to a second line
                    </Button>
                    <Button
                        disabled
                        size='large'>
                        Another example of <br />
                        longer text
                    </Button>
                </div>
            </div>
        </div>
    )
};
