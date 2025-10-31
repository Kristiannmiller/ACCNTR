import { FormEvent, useMemo, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentContainer, SearchBoxForm } from '@/components';

// Mocks
import { mockSearchBoxForm } from '@/mocks';

// Tests
import { testSearchBoxForm } from '@/tests';

// Utils
import { disabledControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/S05 - SearchBoxForm',
    component: SearchBoxForm,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-36242&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: { include: Object.keys(mockSearchBoxForm.default) }
    },
    argTypes: {
        onSubmitCallback: disabledControl,
        onChangeCallback: disabledControl
    }
} satisfies Meta<typeof SearchBoxForm>;

type Story = StoryObj<typeof SearchBoxForm>;

export const Default: Story = {
    args: mockSearchBoxForm.default,
    render: (args) => {
        const { suggestions, ...rest } = args;
        const [inputValue, setInputValue] = useState<string>('');

        const filteredSuggestions = useMemo(() => {
            if (inputValue.trim().length <= 0) {
                return suggestions;
            }

            return suggestions.filter(({ text }) =>
                text.toLowerCase().includes(inputValue.toLowerCase())
            );
        }, [inputValue]);

        const onChangeCallback = (value: string) => {
            setInputValue(value);
        };

        const onSubmitCallback = (e: FormEvent) => {
            e.preventDefault();
            const selectedSuggestion = suggestions.find(
                (s) => s.text === inputValue
            );

            if (selectedSuggestion) {
                window.open(selectedSuggestion.href, selectedSuggestion.target);
            }
        };

        return (
            <ContentContainer>
                <SearchBoxForm
                    {...rest}
                    suggestions={filteredSuggestions}
                    onChangeCallback={onChangeCallback}
                    onSubmitCallback={onSubmitCallback}
                />
            </ContentContainer>
        );
    },
    play: testSearchBoxForm.default
};
