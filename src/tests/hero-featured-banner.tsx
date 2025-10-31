import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeroFeaturedBanner } from '@/components';

// Utils
import { classNameRegex, getTextFieldValue, getLinkFieldValue } from '@/utils';

type Story = StoryObj<typeof HeroFeaturedBanner>;

const testHeroFeaturedBannerDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);

    const heroFeaturedBanner = getByTestId('hero-featured-banner');
    const classNamesDesktop = heroFeaturedBanner.getAttribute('class')!;
    await expect(classNamesDesktop).toMatch(classNameRegex(classNamesDesktop));

    // Should have Hero Featured Banner
    await expect(heroFeaturedBanner).toBeInTheDocument();

    // Should have background image
    const backgroundImage = getByTestId('hero-featured-banner-image');
    expect(backgroundImage).toBeInTheDocument();

    // Should have headline
    const headline = getByTestId('hero-featured-banner-headline');
    await expect(headline).toBeInTheDocument();

    if (args.taglineTop) {
        const taglineTop = getByTestId('hero-featured-banner-tagline-top');
        // Should have tagline top
        await expect(taglineTop).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(taglineTop).toHaveTextContent(
            getTextFieldValue(args.taglineTop)
        );
    }

    if (args.taglineBottom) {
        const taglineBottom = getByTestId(
            'hero-featured-banner-tagline-bottom'
        );
        // Should have tagline bottom
        await expect(taglineBottom).toBeInTheDocument();

        // Check if the element has the exact text
        await expect(taglineBottom).toHaveTextContent(
            getTextFieldValue(args.taglineBottom)
        );
    }

    if (args.firstCTALink) {
        const firstCTALink = getByTestId('hero-featured-banner-first-link');
        // Should have first cta
        await expect(firstCTALink).toBeInTheDocument();

        // Should have same href
        await expect(firstCTALink).toHaveAttribute(
            'href',
            getLinkFieldValue(args.firstCTALink)
        );

        // Should have correct styles applied to first cta
        await expect(firstCTALink).toHaveClass('r-btn-solid1');

        if (args.firstCTAIcon) {
            const firstCTALinkIcon = getByTestId(
                'hero-featured-banner-first-link-icon'
            );
            // Should have first cta icon
            await expect(firstCTALinkIcon).toBeInTheDocument();
        }
    }

    if (args.secondCTALink) {
        const secondCTALink = getByTestId('hero-featured-banner-second-link');
        // Should have second cta
        await expect(secondCTALink).toBeInTheDocument();

        // Should have same href
        await expect(secondCTALink).toHaveAttribute(
            'href',
            getLinkFieldValue(args.secondCTALink)
        );

        // Should have correct styles applied to second cta
        await expect(secondCTALink).toHaveClass('r-btn-solid1');

        if (args.secondCTAIcon) {
            const secondCTALinkIcon = getByTestId(
                'hero-featured-banner-second-link-icon'
            );
            // Should have second cta icon
            await expect(secondCTALinkIcon).toBeInTheDocument();
        }
    }
};

export const testHeroFeaturedBanner = {
    default: testHeroFeaturedBannerDefault
};
