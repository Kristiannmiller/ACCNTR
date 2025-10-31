import { Meta, StoryObj } from '@storybook/react';

// Components
import { LocationCards } from '@/components';

// Mocks
import { mockLocationCards } from '@/mocks/location-cards';

// Static
import { threeColumns, headlineTags } from '@/static';

// Tests
import { testLocationCards } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C24 - LocationCards',
    component: LocationCards,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=6259-2965&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockLocationCards.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        contentAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        numberOfColumns: {
            control: 'select',
            options: threeColumns
        },
        headline: textControl,
        supportCopy: textControl,
        bottomSupportCopy: textControl
    }
} satisfies Meta<typeof LocationCards>;

type Story = StoryObj<typeof LocationCards>;

export const Default: Story = {
    args: mockLocationCards.default,
    play: testLocationCards.default
};

export const EmptyCards: Story = {
    args: mockLocationCards.emptyCards,
    play: testLocationCards.threeCards
};

export const NoOptionalProps: Story = {
    args: mockLocationCards.noOptionalProps,
    play: testLocationCards.threeCards
};
