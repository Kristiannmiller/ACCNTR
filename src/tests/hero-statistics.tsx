import { StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { HeroStatistics } from '@/components';

// Utils
import { classNameRegex } from '@/utils';

type Story = StoryObj<typeof HeroStatistics>;

const testHeroStatisticsDefault: Story['play'] = async ({
    canvasElement,
    args
}) => {
    const { getByTestId } = within(canvasElement);
    const container = getByTestId('hero-statistics');

    await expect(container).toBeInTheDocument();

    const classNames = container.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    if (args.headline) {
        const headline = getByTestId('content-container-headline');

        await expect(headline).toBeInTheDocument();
    }

    if (args.supportCopy) {
        const supportCopy = getByTestId('content-container-support-copy');

        await expect(supportCopy).toBeInTheDocument();
    }

    const columnGrid = getByTestId('hero-statistics-column-grid');

    await expect(columnGrid).toBeInTheDocument();

    const columnGridClasses = columnGrid.getAttribute('class')!;

    if (args.numberOfColumnsMobile === '2') {
        await expect(columnGridClasses).toMatch(classNameRegex('grid-2-m'));
    }

    if (args.shouldShowColumnDividers) {
        await expect(columnGridClasses).toMatch(
            classNameRegex('grid-dividers')
        );
    }

    if (args.numberOfColumns !== '1') {
        await expect(columnGridClasses).toMatch(
            classNameRegex(`grid-${args.numberOfColumns}`)
        );
    }

    if (args.supportCopyBottom) {
        const supportCopyBottom = getByTestId(
            'content-container-support-copy-bottom'
        );

        await expect(supportCopyBottom).toBeInTheDocument();
    }

    if (args.cta) {
        const cta = getByTestId('content-container-cta');

        await expect(cta).toBeInTheDocument();

        const ctaClasses = cta.getAttribute('class')!;

        if (args.ctaAlignment === 'center') {
            await expect(ctaClasses).toMatch(classNameRegex('cta-center'));
        }
    }
};

export const testHeroStatistics = {
    default: testHeroStatisticsDefault
};
