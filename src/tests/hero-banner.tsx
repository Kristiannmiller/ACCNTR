import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeroBanner } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof HeroBanner>;

const testHeroBannerDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const heroBannerDesktop = getByTestId('hero-banner-desktop');
    const classNamesDesktop = heroBannerDesktop.getAttribute('class')!;
    await expect(classNamesDesktop).toMatch(classNameRegex(classNamesDesktop));

    const heroBannerMobile = getByTestId('hero-banner-mobile');
    const classNamesMobile = heroBannerMobile.getAttribute('class')!;
    await expect(classNamesMobile).toMatch(classNameRegex(classNamesMobile));

    // Should have Hero Banner
    await expect(heroBannerDesktop).toBeInTheDocument();
    await expect(heroBannerMobile).toBeInTheDocument();

    // Should have backgroundImage
    const backgroundImageDesktop = getByTestId('hero-banner-image-desktop');
    const backgroundImageMobile = getByTestId('hero-banner-image-mobile');
    await expect(backgroundImageDesktop).toBeInTheDocument();
    await expect(backgroundImageMobile).toBeInTheDocument();

    if (args.headline) {
        const headingDesktop = getByTestId('hero-banner-heading-desktop');
        const headingMobile = getByTestId('hero-banner-heading-mobile');
        // Should have headline
        await expect(headingDesktop).toBeInTheDocument();
        await expect(headingMobile).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(headingDesktop).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
        await expect(headingMobile).toHaveTextContent(
            getTextFieldValue(args.headline)
        );
    }

    if (args.supportingCopy) {
        const supportingCopyDesktop = getByTestId(
            'hero-banner-supporting-copy-desktop'
        );
        const supportingCopyMobile = getByTestId(
            'hero-banner-supporting-copy-mobile'
        );

        // Should have supportCopy
        await expect(supportingCopyDesktop).toBeInTheDocument();
        await expect(supportingCopyMobile).toBeInTheDocument();
    }

    if (args.firstCTALink) {
        const firstCtaDesktop = getByTestId('hero-banner-first-link-desktop');
        const firstCtaMobile = getByTestId('hero-banner-first-link-mobile');

        // Should have firstCta
        await expect(firstCtaDesktop).toBeInTheDocument();
        await expect(firstCtaMobile).toBeInTheDocument();

        // Should have same href
        await expect(firstCtaDesktop).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCTALink)
        );
        await expect(firstCtaMobile).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCTALink)
        );

        // Should have correct styles applied to firstCta
        await expect(firstCtaDesktop).toHaveClass('r-btn-solid1');
        await expect(firstCtaMobile).toHaveClass('r-btn-light1');
    }

    if (args.secondCTALink) {
        const secondCtaDesktop = getByTestId('hero-banner-second-link-desktop');
        const secondCtaMobile = getByTestId('hero-banner-second-link-mobile');

        // Should have secondCta
        await expect(secondCtaDesktop).toBeInTheDocument();
        await expect(secondCtaMobile).toBeInTheDocument();

        // Should have same href
        await expect(secondCtaDesktop).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCTALink)
        );
        await expect(secondCtaMobile).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCTALink)
        );

        // Should have correct styles applied to secondCta
        await expect(secondCtaDesktop).toHaveClass('r-btn-light-inverse');
        await expect(secondCtaMobile).toHaveClass('r-btn-light1');
    }
};

export const testHeroBanner = {
    default: testHeroBannerDefault
};
