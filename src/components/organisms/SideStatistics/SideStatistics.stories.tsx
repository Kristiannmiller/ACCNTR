import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SideStatistics } from './SideStatistics';

// Static
import { headlineTags } from '@/static';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSideStatistics } from '@/mocks/side-statistics';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C51 - SideStatistics',
    component: SideStatistics,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17788-1254&t=l820mFm22Xpvkz9N-4'
        },
        controls: {
            include: Object.keys(mockSideStatistics.default)
        }
    },
    argTypes: {
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        contentAlignments: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke', 'denimBlue']
        },
        headline: textControl,
        supportCopy: textControl,
        supportCopyBottom: textControl
    }
} satisfies Meta<typeof SideStatistics>;

type Story = StoryObj<typeof SideStatistics>;

/** Shared test for all stories. */
const test: Story['play'] = async ({ canvasElement, args }) => {
    const { getByTestId } = within(canvasElement);
    const container = getByTestId('side-statistics');

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

    if (args.supportCopyBottom) {
        const supportCopyBottom = getByTestId(
            'content-container-support-copy-bottom'
        );
        await expect(supportCopyBottom).toBeInTheDocument();
    }

    if (args.cta) {
        const cta = getByTestId('content-container-cta');
        await expect(cta).toBeInTheDocument();

        if (args.ctaAlignment === 'center') {
            await expect(cta.getAttribute('class')).toMatch(
                classNameRegex('cta-center')
            );
        }
    }
};

export const Default: Story = {
    args: mockSideStatistics.default,
    play: test
};

export const NoOptionalProps: Story = {
    args: mockSideStatistics.noOptionalProps,
    play: test
};

export const NoSupportCopy: Story = {
    args: mockSideStatistics.noSupportCopy,
    play: test
};
