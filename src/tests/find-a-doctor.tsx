import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { StoryObj } from '@storybook/react';

// Components
import { FindADoctor } from '@/components';

// Mocks
import { mockFindADoctor } from '@/mocks/find-a-doctor';

type Story = StoryObj<typeof FindADoctor>;

const testFindADoctorDefault: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId, getByRole, getByPlaceholderText } =
        within(canvasElement);

    const findALocation = getByTestId('find-a-doctor');
    const classNames = findALocation.getAttribute('class')!;
    await expect(classNames).toMatch(/find-a-doctor-base/);

    // Check for select dropdown
    const selectDropdown = getByRole('combobox', {
        name: mockFindADoctor.advocateHealth.specialtySelectLabel
    });
    await expect(selectDropdown).toBeInTheDocument();

    // Check for doctor input
    const doctorInput = getByPlaceholderText(
        mockFindADoctor.aurora.doctorsNameInputPlaceholder
    );
    await expect(doctorInput).toBeInTheDocument();

    // Check for a location input
    const locationInput = getByPlaceholderText(
        mockFindADoctor.aurora.locationInputPlaceholder
    );

    await expect(locationInput).toBeInTheDocument();

    // Check for submit button
    const submitButton = getByRole('button', { name: /See search results/i });
    await expect(submitButton).toBeInTheDocument();
    await expect(submitButton).toBeDisabled();
};

export const testFindADoctor = {
    default: testFindADoctorDefault
};
