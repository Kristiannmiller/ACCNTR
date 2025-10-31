import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { LocationCard } from '@/components';

type Story = StoryObj<typeof LocationCard>;

const testOptionalEl = async (el: HTMLElement | null, condition: boolean) =>
    condition
        ? await expect(el).toBeInTheDocument()
        : await expect(el).toBeNull();

const testLocationCardDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { queryByTestId } = within(canvasElement);

    const {
        location,
        firstCta,
        secondCta,
        shouldDisplayImageOverlay,
        animalIcon
    } = args;

    const containerEl = queryByTestId('location-card-container');
    const childrenImageEl = queryByTestId('location-card-children-image');
    const cardEl = queryByTestId('location-card-card');
    const imageLinkEl = queryByTestId('location-card-image-link');
    const imageWrapperEl = queryByTestId('location-card-image-wrapper');
    const overlayContainerEl = queryByTestId('location-card-overlay-container');
    const nameEl = queryByTestId('location-card-name');
    const addressLinkEl = queryByTestId('location-card-address-link');
    const phoneLinksEl = queryByTestId('location-card-phone-links');
    const defaultPhoneEl = queryByTestId('location-card-default-phone');
    const emergencyPhoneEl = queryByTestId('location-card-emergency-phone');
    const emailEl = queryByTestId('location-card-email');
    const ctasEl = queryByTestId('location-card-ctas');
    const firstCtaEl = queryByTestId('location-card-first-cta');
    const secondCtaEl = queryByTestId('location-card-second-cta');

    await expect(containerEl).toBeInTheDocument();

    await testOptionalEl(childrenImageEl, !!animalIcon);

    await expect(cardEl).toBeInTheDocument();

    await testOptionalEl(imageWrapperEl, !!location.image);

    await testOptionalEl(
        imageLinkEl,
        !!location.image && !!location.locationTour
    );

    await testOptionalEl(
        overlayContainerEl,
        !!location.image &&
            !!location.locationTour &&
            !!shouldDisplayImageOverlay
    );

    await expect(nameEl).toBeInTheDocument();

    await expect(addressLinkEl).toBeInTheDocument();

    await testOptionalEl(
        phoneLinksEl,
        !!location.defaultPhone || !!location.emergencyPhone
    );

    await testOptionalEl(defaultPhoneEl, !!location.defaultPhone);

    await testOptionalEl(emergencyPhoneEl, !!location.emergencyPhone);

    await testOptionalEl(emailEl, !!location.email);

    await testOptionalEl(ctasEl, !!firstCta || !!secondCta);

    await testOptionalEl(firstCtaEl, !!firstCta);

    await testOptionalEl(secondCtaEl, !!secondCta);
};

export const testLocationCard: Record<'default', Story['play']> = {
    default: testLocationCardDefault
};
