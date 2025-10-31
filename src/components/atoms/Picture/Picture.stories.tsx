import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// Components
import { Picture, PictureCompProps } from './index';

// Mocks
import { mockPictures, mockPictureSingleSource } from '@/mocks/picture-items';

export default {
    title: 'Design System/atoms/Picture',
    component: Picture,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?type=design&node-id=850-7063&mode=design&t=Kiw7kNuhBUkJQMMJ-4'
        }
    }
} satisfies Meta<typeof Picture>;

type Story = StoryObj<typeof Picture>;

export const Default: Story = {
    args: {
        sources: mockPictures[1].sources,
        image: mockPictures[1].image
    },
    play: ({ canvasElement }) => {
        const { getByTestId, getAllByTestId } = within(canvasElement);
        const pictureElement = getByTestId('picture-element');
        const imgElement = getByTestId('picture-image');
        const sourceElements = getAllByTestId('picture-source');

        // Contains an image element
        expect(pictureElement).toContainElement(imgElement);

        // Should contain a descriptor as part of the srcset value
        sourceElements.map((sourceElement, idx) => {
            const srcSet = sourceElement.getAttribute('srcset');
            const srcSetArr = srcSet?.split(', ');

            mockPictures[0].sources[idx].srcset.map((setItem, index) => {
                const { path, descriptor } = setItem;
                expect(srcSetArr?.[index]).toEqual(
                    `${path} ${descriptor ?? ''}`.trim()
                );
            });
        });
    }
};

export const NoDescriptor: Story = {
    args: {
        sources: mockPictures[2].sources,
        image: mockPictures[2].image
    },
    play: ({ canvasElement }) => {
        const { getAllByTestId } = within(canvasElement);
        const sourceElements = getAllByTestId('picture-source');

        // Should not contain a descriptor as part of the srcset value
        sourceElements.map((sourceElement, idx) => {
            const srcSet = sourceElement.getAttribute('srcset');
            const srcSetArr = srcSet?.split(', ');

            mockPictures[2].sources[idx].srcset.map((setItem, index) => {
                const { path } = setItem;
                expect(srcSetArr?.[index]).toEqual(path);
            });
        });
    }
};

export const SingleSource: Story = {
    args: {
        desktopLgSrc: mockPictureSingleSource.desktopLgSrc,
        image: mockPictureSingleSource.image,
        tabletLgSrc: mockPictureSingleSource.tabletLgSrc,
        tabletSrc: mockPictureSingleSource.tabletSrc,
        mobileSrc: mockPictureSingleSource.mobileSrc
    },
    render: (args) => (
        <Picture
            desktopLgSrc={(args as PictureCompProps)?.desktopLgSrc}
            image={(args as PictureCompProps)?.image}
            tabletLgSrc={(args as PictureCompProps)?.tabletLgSrc}
            tabletSrc={(args as PictureCompProps)?.tabletSrc}
            mobileSrc={(args as PictureCompProps)?.mobileSrc}
        />
    )
};
