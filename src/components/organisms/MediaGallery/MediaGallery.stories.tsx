import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { MediaGallery } from '@/components';

// Static
import { headlineTags } from '@/static';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockMediaGallery } from '@/mocks/media-gallery';

// Controls
import { textControl, booleanControl } from '@/sb-tools';

export default {
    title: 'Design System/organisms/C43 - MediaGallery',
    component: MediaGallery,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17785-28108&t=wVIzZUBnFsJQZGiu-4'
        },
        controls: {
            include: Object.keys(mockMediaGallery.default)
        }
    },
    argTypes: {
        backgroundColor: {
            control: 'select',
            options: ['white', 'whiteSmoke']
        },
        contentAlignment: {
            control: 'select',
            options: ['left', 'center']
        },
        headlineTag: {
            control: 'select',
            options: headlineTags
        },
        shouldHideNavigation: {
            booleanControl
        },
        shouldHideThumbnails: {
            booleanControl
        },
        headline: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof MediaGallery>;

type Story = StoryObj<typeof MediaGallery>;

const unitTests: Story['play'] = async ({ canvasElement }) => {
    const { getByTestId } = within(canvasElement);

    const content = getByTestId('media-gallery');
    const headline = getByTestId('media-gallery-headline');
    const supportCopy = getByTestId('media-gallery-support-copy');
    const cta = getByTestId('media-gallery-cta');

    const classNames = content.getAttribute('class')!;

    await expect(classNames).toMatch(classNameRegex(classNames));

    // Should have a headline
    await expect(headline).toBeInTheDocument();

    // Should have a headline tag
    await expect(headline.tagName).toMatch(/H2|H3|P/);

    // Should have support copy
    await expect(supportCopy).toBeInTheDocument();

    // Should have a CTA
    await expect(cta).toBeInTheDocument();
};

export const Default: Story = {
    args: mockMediaGallery.default,
    play: unitTests
};

export const SixSlides: Story = {
    args: mockMediaGallery['6-items'],
    play: unitTests
};

export const WithEmptySlide: Story = {
    args: mockMediaGallery.withEmptySlide
};
