import { Meta, StoryObj } from '@storybook/react';

// Components
import { ChildrenAnimalMotif } from '@/components';

// Mocks
import { mockChildrensAnimalMotif } from '@/mocks/childrens-animal-motif';

// Tests
import { testChildrenAnimalMotif } from '@/tests';

export default {
    title: 'Design System/organisms/C46 - ChildrensAnimalMotif',
    component: ChildrenAnimalMotif,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17831-29616&t=fCSyDdHz5b3lMXAP-4'
        },
        controls: {
            include: Object.keys(mockChildrensAnimalMotif.default)
        },
        excludeThemes: ['Corporate', 'Consumer']
    }
} satisfies Meta<typeof ChildrenAnimalMotif>;

type Story = StoryObj<typeof ChildrenAnimalMotif>;

export const Default: Story = {
    args: mockChildrensAnimalMotif.default,
    play: testChildrenAnimalMotif.default
};

export const SecondBubble: Story = {
    args: mockChildrensAnimalMotif.secondBubble,
    play: testChildrenAnimalMotif.default
};

export const ThirdBubble: Story = {
    args: mockChildrensAnimalMotif.thirdBubble,
    play: testChildrenAnimalMotif.default
};

export const FourthBubble: Story = {
    args: mockChildrensAnimalMotif.fourthBubble,
    play: testChildrenAnimalMotif.default
};

export const FifthBubble: Story = {
    args: mockChildrensAnimalMotif.fifthBubble,
    play: testChildrenAnimalMotif.default
};
