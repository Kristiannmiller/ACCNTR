import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SideStatisticsItem } from './SideStatisticsItem';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSideStatisticsItems } from '@/mocks/side-statistics-item';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/SideStatisticsItem',
    component: SideStatisticsItem,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17788-229'
        },
        controls: {
            include: Object.keys(mockSideStatisticsItems.default)
        }
    },
    argTypes: {
        statistic: textControl,
        prefix: textControl,
        suffix: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof SideStatisticsItem>;

type Story = StoryObj<typeof SideStatisticsItem>;

/** Shared test for all stories. */
const test: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('side-statistics-item');

    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    if (args.prefix) {
        const prefix = getByTestId('side-statistics-item-prefix');
        await expect(prefix).toBeInTheDocument();
    }

    const statistic = getByTestId('side-statistics-item-statistic');
    await expect(statistic).toBeInTheDocument();

    if (args.suffix) {
        const suffix = getByTestId('side-statistics-item-suffix');
        await expect(suffix).toBeInTheDocument();
    }

    const supportCopy = getByTestId('side-statistics-item-support-copy');
    await expect(supportCopy).toBeInTheDocument();
};

export const Default: Story = {
    args: mockSideStatisticsItems.default,
    play: test
};

export const WithPrefix: Story = {
    args: mockSideStatisticsItems.withPrefix,
    play: test
};

export const WithSuffix: Story = {
    args: mockSideStatisticsItems.withSuffix,
    play: test
};

export const NumberOnly: Story = {
    args: mockSideStatisticsItems.numberOnly,
    play: test
};
