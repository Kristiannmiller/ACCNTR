import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { CorporateFooter } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof CorporateFooter>;

const testCorporateFooterDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId, getAllByTestId } = within(canvasElement);
    const content = getByTestId('corporate-footer');
    const classNames = content.getAttribute('class')!;
    // Should match the class names
    await expect(classNames).toMatch(classNameRegex(classNames));
    await expect(content).toBeInTheDocument();

    // Should have 6 images
    await expect(content.querySelectorAll('img')).toHaveLength(6);

    if (args.socialMediaLinks) {
        const socialMediaLinks = getAllByTestId('corporate-footer-link');
        // Should have 3 social media links
        await expect(socialMediaLinks).toHaveLength(3);
    }

    const copyrightText = getByTestId('corporate-footer-copyright-text');
    // Should have a copy right text
    await expect(copyrightText).toHaveTextContent('© 2024 Advocate Health');

    const legalPrivacyLink = getByTestId('corporate-footer-legal-privacy-link');
    // Should have a legal privacy link
    await expect(legalPrivacyLink).toHaveTextContent('Policies & notices');
};

export const testCorporateFooter = {
    default: testCorporateFooterDefault
};
