import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { ChildrenAnimalMotif } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue } from '@/utils';

type Story = StoryObj<typeof ChildrenAnimalMotif>;

const testChildrenAnimalMotifDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const content = getByTestId('children-animal-motif');
    const classNames = content.getAttribute('class')!;
    await expect(content).toBeInTheDocument();
    await expect(classNames).toMatch(classNameRegex(classNames));

    const animals = getAllByTestId('childrens-animal-motif-animal');
    // Expect have correct number of animals svg
    await expect(animals).toHaveLength(args.animals.length);

    const bubbles = getByTestId('childrens-animal-motif-bubbles');
    // Expect there to be 1 bubble
    await expect(bubbles).toBeInTheDocument();
    // Expect the first bubble to have the correct quote
    await expect(bubbles).toHaveTextContent(
        getTextFieldValue(args.animals[args.randomAnimalIndex ?? 0].quote)
    );
};

export const testChildrenAnimalMotif = {
    default: testChildrenAnimalMotifDefault
};
