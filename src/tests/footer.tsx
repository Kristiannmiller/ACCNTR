import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Footer } from '@/components';

type Story = StoryObj<typeof Footer>;

const testFooterDefault: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);
    const socialMediaLink = getAllByTestId('svg-icon');

    if (args.legalSection1Text) {
        const legalText1 = getByTestId('legal-section1');
        await expect(legalText1).toBeInTheDocument();
    }

    if (args.legalSection2Text) {
        const legalText2 = getByTestId('legal-section2');
        await expect(legalText2).toBeInTheDocument();
    }

    if (args.socialMediaLinks) {
        await expect(socialMediaLink).toHaveLength(5);
    }

    if (args.logo) {
        const footerLogo = getByTestId('footer-logo');
        await expect(footerLogo).toBeInTheDocument();
    }
};

export const testFooter = {
    default: testFooterDefault
};
