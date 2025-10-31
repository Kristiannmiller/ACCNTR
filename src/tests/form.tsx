import { StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Form } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof Form>;

const testFormDefault: Story['play'] = async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('form-container');
    const form = getByTestId('form');
    const wait = (t: any) => new Promise((resolve) => setTimeout(resolve, t));

    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    await expect(form).toBeEmptyDOMElement();

    await step('Wait for form to load "send" button', async () => {
        await waitFor(() =>
            expect(within(canvasElement).getByText('Send')).toBeInTheDocument()
        );
    });
    if (within(canvasElement).queryByText('Send')) {
        await step('Enter form data', async () => {
            await userEvent.type(
                within(canvasElement).getByLabelText('First name'),
                'Storybook Entered First Name'
            );
            await userEvent.type(
                within(canvasElement).getByLabelText('Last name'),
                'Storybook Entered Last Name'
            );
        });

        await step('Submit form', async () => {
            await wait(1000);
            await userEvent.click(within(canvasElement).getByText('Send'));
        });

        await step('Show Validation Messaging', async () => {
            await wait(1000);
            expect(
                within(canvasElement).queryByText('Phone number is required')
            ).toBeInTheDocument();
        });
    }
};

export const testForm = {
    default: testFormDefault
};
