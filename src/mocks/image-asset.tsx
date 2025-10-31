import {
    Image as JSSImage,
    RichText as JSSRichText,
    Link as JSSLink
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ImageAssetProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockImages, mockLargeImage } from '@/mocks/images';

const mockImageAssetDefault: ImageAssetProps = {
    image: (
        <JSSImage field={{ src: mockImages[1].src, alt: mockImages[1].alt }} />
    ),
    caption: (
        <JSSRichText
            field={{
                value: `<p>Image <a href='https://google.com'>Asset</a></p>`
            }}
        />
    ),
    imageAlignment: 'right',
    isImageBorderOn: true,
    imageCTA: <JSSLink field={mockSitecoreLink} />
};

const mockImageAssetSmall: ImageAssetProps = {
    ...mockImageAssetDefault,
    image: (
        <JSSImage
            field={{
                value: {
                    src: 'https://placehold.co/200x100',
                    alt: 'A placeholder image',
                    height: 100,
                    width: 200
                }
            }}
        />
    )
};

const mockImageAssetSmallWithoutCta: ImageAssetProps = {
    ...mockImageAssetSmall,
    imageCTA: undefined
};

const mockImageAssetLarge: ImageAssetProps = {
    ...mockImageAssetDefault,
    image: <JSSImage field={{ value: mockLargeImage }} />
};

const mockImageAssetWithoutCta: ImageAssetProps = {
    ...mockImageAssetDefault,
    imageCTA: undefined
};

const mockImageAssetWithMobileImage: ImageAssetProps = {
    ...mockImageAssetDefault,
    mobileImage: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    )
};

const mockImageAssetWithMobileImageWithoutCta: ImageAssetProps = {
    ...mockImageAssetWithMobileImage,
    imageCTA: undefined
};

export const mockImageAsset: Record<
    | 'default'
    | 'imageAssetWithoutCta'
    | 'imageAssetSmall'
    | 'imageAssetSmallWithoutCta'
    | 'imageAssetLarge'
    | 'imageAssetWithMobileImage'
    | 'imageAssetWithMobileImageWithoutCta',
    ImageAssetProps
> = {
    default: mockImageAssetDefault,
    imageAssetWithoutCta: mockImageAssetWithoutCta,
    imageAssetSmall: mockImageAssetSmall,
    imageAssetSmallWithoutCta: mockImageAssetSmallWithoutCta,
    imageAssetLarge: mockImageAssetLarge,
    imageAssetWithMobileImage: mockImageAssetWithMobileImage,
    imageAssetWithMobileImageWithoutCta: mockImageAssetWithMobileImageWithoutCta
};
