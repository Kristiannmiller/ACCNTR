import { StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';

// Components
import { SearchBoxForm } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof SearchBoxForm>;

const testSearchBoxFormDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const form = canvasElement.querySelector('form');
    await expect(form).toBeInTheDocument();

    if (!form) {
        return;
    }

    const classNames = form.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    const label = form.querySelector('label');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveTextContent(args.labelText);

    const input = form.querySelector('input');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('placeholder', args.placeholderText);

    const button = form.querySelector('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent(args.submitButtonText);
    await expect(button).toHaveAttribute('type', 'submit');
};

export const testSearchBoxForm: Record<'default', Story['play']> = {
    default: testSearchBoxFormDefault
};
