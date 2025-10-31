import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeroStatisticsItem } from '@/components';

type Story = StoryObj<typeof HeroStatisticsItem>;

const testHeroStatisticsItemDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('hero-statistics-item');
    const EMPTY_SPACE_CHAR = ' ';

    await expect(content).toBeInTheDocument();

    const topText = getByTestId('hero-statistics-item-top-text');

    await expect(topText).toBeInTheDocument();

    if (!args.topText) {
        await expect(topText).toContainHTML(EMPTY_SPACE_CHAR);
    }

    if (args.prefix) {
        const prefix = getByTestId('hero-statistics-item-prefix');
        await expect(prefix).toBeInTheDocument();
    }

    const statisticsNumber = getByTestId(
        'hero-statistics-item-statistics-number'
    );

    await expect(statisticsNumber).toBeInTheDocument();

    if (args.suffix) {
        const suffix = getByTestId('hero-statistics-item-suffix');
        await expect(suffix).toBeInTheDocument();
    }

    if (args.superscriptSuffix) {
        const superscriptSuffix = getByTestId(
            'hero-statistics-item-superscript-suffix'
        );
        await expect(superscriptSuffix).toBeInTheDocument();
    }

    const bottomText = getByTestId('hero-statistics-item-bottom-text');

    await expect(bottomText).toBeInTheDocument();

    if (!args.bottomText) {
        await expect(bottomText).toContainHTML(EMPTY_SPACE_CHAR);
    }
};

export const testHeroStatisticsItem = {
    default: testHeroStatisticsItemDefault
};
