import { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

// Components
import { Container, Input } from '@/components';

// Mocks
import { mockInput } from '@/mocks/input';

// Tests
import { testInput } from '@/tests';

// Controls
import { textControl, booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/atoms/Input',
    component: Input,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=4771-21286&t=dGef1HKaZkGajRg8-0'
        },
        controls: { include: Object.keys(mockInput.default) }
    },
    argTypes: {
        hasError: {
            booleanControl
        },
        label: textControl,
        errorMessage: textControl
    },
    decorators: [
        (Story) => (
            <Container>
                <div style={{ marginBlock: '3rem' }}>
                    <Story />
                </div>
            </Container>
        )
    ]
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: mockInput.default,
    render: (args) => {
        const [hasError, setHasError] = useState<boolean>(!!args.hasError);

        useEffect(() => {
            setHasError(!!args.hasError);
        }, [args.hasError]);

        return (
            <Input
                {...args}
                hasError={hasError}
                setHasError={setHasError}
            />
        );
    },
    play: testInput.default
};
