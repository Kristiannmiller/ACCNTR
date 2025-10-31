import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { TopStatisticsItem } from './TopStatisticsItem';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockTopStatisticsItems } from '@/mocks/top-statistics-item';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/TopStatisticsItem',
    component: TopStatisticsItem,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-40842&t=l820mFm22Xpvkz9N-4'
        },
        controls: {
            include: Object.keys(mockTopStatisticsItems.default)
        }
    },
    argTypes: {
        supportCopy: textControl,
        topStatistic: textControl
    }
} satisfies Meta<typeof TopStatisticsItem>;

type Story = StoryObj<typeof TopStatisticsItem>;

/** Shared test for all stories. */
const test: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);
    const content = getByTestId('top-statistics-item');

    const classNames = content.getAttribute('class')!;
    await expect(classNames).toMatch(classNameRegex(classNames));

    const statistic = getByTestId('top-statistics-item-statistic');
    await expect(statistic).toBeInTheDocument();

    const supportCopy = getByTestId('top-statistics-item-support-copy');
    await expect(supportCopy).toBeInTheDocument();
};

export const Default: Story = {
    args: mockTopStatisticsItems.default,
    play: test
};

export const Reduction: Story = {
    args: mockTopStatisticsItems.reduction,
    play: test
};

export const Increase: Story = {
    args: mockTopStatisticsItems.increase,
    play: test
};

export const Investment: Story = {
    args: mockTopStatisticsItems.investment,
    play: test
};
