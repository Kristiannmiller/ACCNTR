import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { BioCardDirectory } from '@/components';

// Utils
import {
    classNameRegex,
    getTextFieldValue,
    getRichTextFieldValue
} from '@/utils';

type Story = StoryObj<typeof BioCardDirectory>;

const testBioCardDirectoryDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);

    const bioCardDirectory = getByTestId('bio-card-directory');
    const classNames = bioCardDirectory.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have correct number of cards
    const numberOfCards = args.bios?.length ?? 0;
    const cards = getAllByTestId('bio-card');
    await expect(cards).toHaveLength(numberOfCards);

    //All labels
    const specialtyLabel = getTextFieldValue(args.specialtyLabel);
    const titleLabel = getTextFieldValue(args.titleLabel);
    const phoneLabel = getTextFieldValue(args.phoneLabel);
    const faxLabel = getTextFieldValue(args.faxLabel);
    const emailLabel = getTextFieldValue(args.emailLabel);
    const locationsLabel = getTextFieldValue(args.locationsLabel);
    const additionalInformationLabel = getTextFieldValue(
        args.additionalInformationLabel
    );

    for (const [index, card] of cards.entries()) {
        const bio = args.bios[index];
        // Check for specialty
        const specialty = getTextFieldValue(bio.specialty);
        if (specialty) {
            const specialtyElement = within(card).getByText(
                `${specialtyLabel}:`
            );
            await expect(specialtyElement).toBeInTheDocument();
        } else {
            const specialtyElement = within(card).queryByText(
                `${specialtyLabel}:`
            );
            await expect(specialtyElement).toBeNull();
        }

        // Check for title
        const title = getTextFieldValue(bio.title);
        if (title) {
            const titleElements = within(card).getByText(`${titleLabel}:`);
            await expect(titleElements).toBeInTheDocument();
        } else {
            const titleElements = within(card).queryByText(`${titleLabel}:`);
            await expect(titleElements).toBeNull();
        }

        // Check for phone
        const phone = getTextFieldValue(bio.phone);
        if (phone) {
            const phoneElements = within(card).getByText(`${phoneLabel}:`);
            await expect(phoneElements).toBeInTheDocument();
        } else {
            const phoneElements = within(card).queryByText(`${phoneLabel}:`);
            await expect(phoneElements).toBeNull();
        }

        // Check for fax
        const fax = getTextFieldValue(bio.fax);
        if (fax) {
            const faxElements = within(card).getByText(`${faxLabel}:`);
            await expect(faxElements).toBeInTheDocument();
        } else {
            const faxElements = within(card).queryByText(`${faxLabel}:`);
            await expect(faxElements).toBeNull();
        }

        // Check for email
        const email = getTextFieldValue(bio.email);
        if (email) {
            const emailElements = within(card).getByText(`${emailLabel}:`);
            await expect(emailElements).toBeInTheDocument();
        } else {
            const emailElements = within(card).queryByText(`${emailLabel}:`);
            await expect(emailElements).toBeNull();
        }

        // Check for locations
        const locations = getRichTextFieldValue(bio.locations);
        if (locations) {
            const locationsElements = within(card).getByText(
                `${locationsLabel}:`
            );
            await expect(locationsElements).toBeInTheDocument();
        } else {
            const locationsElements = within(card).queryByText(
                `${locationsLabel}:`
            );
            await expect(locationsElements).toBeNull();
        }

        // Check for additional information
        const additional = getRichTextFieldValue(bio.additional);
        if (additional) {
            const additionalElements = within(card).getByText(
                `${additionalInformationLabel}:`
            );
            await expect(additionalElements).toBeInTheDocument();
        } else {
            const additionalElements = within(card).queryByText(
                `${additionalInformationLabel}:`
            );
            await expect(additionalElements).toBeNull();
        }
    }
};

export const testBioCardDirectory = {
    default: testBioCardDirectoryDefault
};
