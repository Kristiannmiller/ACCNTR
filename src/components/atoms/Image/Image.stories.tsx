import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Image as JSSImage } from '@sitecore-jss/sitecore-jss-react';

// Components
import { Image } from './Image';

// Utils
import { classNameRegex } from '@/utils';

// Mocks
import { mockImages } from '@/mocks/images';
import { mockSitecoreImage } from '@/mocks/sitecore';

// Types
import { ratios } from '@/static';

export default {
    title: 'Design System/atoms/Image',
    component: Image,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?type=design&node-id=850-7063&mode=design&t=Kiw7kNuhBUkJQMMJ-4'
        }
    },
    argTypes: {
        ratio: {
            control: 'select',
            options: ratios,
            defaultValue: 16 / 9
        },
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        children: (
            <img
                src={mockImages[0].src}
                alt={mockImages[0].alt}
            />
        ),
        ratio: '16:9'
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('image');

        const classNames = (content?.firstChild as Element)?.getAttribute(
            'class'
        ) as string;

        // Expect the image to be in the document
        await expect(content).toBeInTheDocument();

        // Expect the parent to have the correct 16:9 aspect ratio style attribute
        expect(content.parentElement).toHaveAttribute(
            'style',
            'position: relative; width: 100%; padding-bottom: 56.25%;'
        );

        // Expect the img to have the proper class on it.
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Expect the image to have an alt attribute.
        expect(content.firstChild).toHaveAttribute('alt', mockImages[0].alt);
    }
};

export const NoChildren: Story = {
    args: {
        children: (
            <img
                src={mockImages[0].src}
                alt={mockImages[0].alt}
            />
        ),
        ratio: '16:9'
    },
    render: (args) => {
        return (
            <Image
                ratio={args.ratio}
                src={mockImages[0].src}
                alt={mockImages[0].alt}
            />
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('image');

        const classNames = (content?.firstChild as Element)?.getAttribute(
            'class'
        ) as string;

        // Expect the image to be in the document
        await expect(content).toBeInTheDocument();

        // Expect the parent to have the correct 16:9 aspect ratio style attribute
        expect(content.parentElement).toHaveAttribute(
            'style',
            'position: relative; width: 100%; padding-bottom: 56.25%;'
        );

        // Expect the img to have the proper class on it.
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Expect the image to have an alt attribute.
        expect(content.firstChild).toHaveAttribute('alt', mockImages[0].alt);
    }
};

export const SitecoreExample: Story = {
    args: {
        children: (
            <img
                src={mockImages[0].src}
                alt={mockImages[0].alt}
            />
        ),
        ratio: '16:9'
    },
    render: (args) => {
        return (
            <Image ratio={args.ratio}>
                <JSSImage field={mockSitecoreImage} />
            </Image>
        );
    },
    play: async ({ canvasElement }) => {
        const { getByTestId } = within(canvasElement);
        const content = getByTestId('image');

        const classNames = (content?.firstChild as Element)?.getAttribute(
            'class'
        ) as string;

        // Expect the image to be in the document
        await expect(content).toBeInTheDocument();

        // Expect the parent to have the correct 16:9 aspect ratio style attribute
        expect(content.parentElement).toHaveAttribute(
            'style',
            'position: relative; width: 100%; padding-bottom: 56.25%;'
        );

        // Expect the img to have the proper class on it.
        await expect(classNames).toMatch(classNameRegex(classNames));

        // Expect the image to have an alt attribute.
        expect(content.firstChild).toHaveAttribute(
            'alt',
            mockSitecoreImage.value.alt
        );
    }
};
