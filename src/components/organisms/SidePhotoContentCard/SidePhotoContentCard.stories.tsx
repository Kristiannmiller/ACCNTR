import { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SidePhotoContentCard } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockSidePhotoContentCards } from '@/mocks/side-photo-content-card';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C13 - SidePhotoContentCard',
    component: SidePhotoContentCard,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17772-42746&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: Object.keys(mockSidePhotoContentCards.default)
        }
    },
    argTypes: {
        headline: textControl,
        supportCopy: textControl,
        headlineTag: {
            control: 'select',
            options: headlineTags
        }
    }
} satisfies Meta<typeof SidePhotoContentCard>;

type Story = StoryObj<typeof SidePhotoContentCard>;

const extraSpacingForStorybookArgs: { style: CSSProperties } = {
    style: { paddingBlock: '2rem' }
};

export const Default: Story = {
    args: {
        ...mockSidePhotoContentCards.default,
        ...extraSpacingForStorybookArgs
    },
    play: async ({ canvasElement }) => {
        const { getByTestId, getAllByTestId } = within(canvasElement);

        const content = getByTestId('side-photo-content-card');
        await expect(content).toBeInTheDocument();

        const image = getByTestId('image');
        await expect(image).toBeInTheDocument();

        const richtext = getByTestId('rich-text');
        await expect(richtext).toBeInTheDocument();

        const ctas = getAllByTestId('anchor');
        await expect(ctas).toHaveLength(4);
    }
};

export const Right6040: Story = {
    args: {
        ...mockSidePhotoContentCards.right6040,
        ...extraSpacingForStorybookArgs
    },
    play: async ({ canvasElement }) => {
        const { getByTestId, getAllByTestId } = within(canvasElement);

        const content = getByTestId('side-photo-content-card');
        await expect(content).toBeInTheDocument();

        const image = getByTestId('image');
        await expect(image).toBeInTheDocument();

        const richtext = getByTestId('rich-text');
        await expect(richtext).toBeInTheDocument();

        const ctas = getAllByTestId('anchor');
        await expect(ctas).toHaveLength(3);
    }
};

export const NoOptionalProps: Story = {
    args: {
        ...mockSidePhotoContentCards.noOptionalProps,
        ...extraSpacingForStorybookArgs
    },
    play: async ({ canvasElement }) => {
        const { getByTestId, getAllByTestId } = within(canvasElement);

        const content = getByTestId('side-photo-content-card');
        await expect(content).toBeInTheDocument();

        const image = getByTestId('image');
        await expect(image).toBeInTheDocument();

        const ctas = getAllByTestId('anchor');
        await expect(ctas).toHaveLength(1);
    }
};
