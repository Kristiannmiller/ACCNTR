import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { SidePhotoContentCardCarousel } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockSidePhotoContentCardCarousel } from '@/mocks/side-photo-content-card-carousel';

export default {
    title: 'Design System/organisms/C14 - SidePhotoContentCardCarousel',
    component: SidePhotoContentCardCarousel,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=5750-9396&t=oljJbFC1z3BYRxnO-4'
        },
        controls: {
            include: [
                'backgroundColor',
                'contentAlignment',
                'headlineTag',
                'slideTimingSeconds',
                'layout',
                'ctaStyle',
                'imageSide'
            ]
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        contentAlignment: {
            control: 'select',
            options: ['center', 'left']
        },
        ctaStyle: {
            control: 'select',
            options: ['solid', 'outline', 'link']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        slideTimingSeconds: {
            type: 'number'
        },
        layout: {
            control: 'select',
            options: ['fifty', 'forty']
        },
        imageSide: {
            control: 'select',
            options: ['left', 'right']
        }
    }
} satisfies Meta<typeof SidePhotoContentCardCarousel>;

type Story = StoryObj<typeof SidePhotoContentCardCarousel>;

export const Default: Story = {
    args: mockSidePhotoContentCardCarousel.default,
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('side-photo-content-card-carousel');

        const classNames = content.getAttribute('class')!;

        await expect(classNames).toMatch(classNameRegex(classNames));

        // Should have a background color of whiteSmoke
        await expect(classNames).toContain('white-smoke');

        // Should have a headline
        await expect(content).toContainHTML('Headline');

        // Should have a CTA
        await expect(content).toContainHTML('CTA');

        // Should have support copy
        await expect(content).toContainHTML('Support copy');

        // Should have bottom support copy
        await expect(content).toContainHTML(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        );
    }
};

export const ImagesRight: Story = {
    args: mockSidePhotoContentCardCarousel.imagesRight,
    play: async ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const slideItems = getAllByTestId('side-photo-content-card-item');

        // Should have all slides with images on the right
        for (const slideItem of slideItems) {
            const slideClassNames = slideItem.getAttribute('class')!;
            await expect(slideClassNames).toMatch(
                classNameRegex('image-right')
            );
        }
    }
};

export const LayoutForty: Story = {
    args: mockSidePhotoContentCardCarousel.layoutForty,
    play: async ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const slideItems = getAllByTestId('side-photo-content-card-item');

        // Should have all slides with layout-forty
        for (const slideItem of slideItems) {
            const slideClassNames = slideItem.getAttribute('class')!;
            await expect(slideClassNames).toMatch(
                classNameRegex('layout-forty')
            );
        }
    }
};
