import {
    Image as JSSImage,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { MediaWithCaptionProps } from '@/components';

// Mocks
import { mediaWithCaptionMockSitecoreText } from '@/mocks/sitecore';
import { mockImages } from '@/mocks/images';
import { mockYoutubeEmbed } from '@/mocks/youtube-embed';

const mockMediaWithCaptionDefault: MediaWithCaptionProps = {
    imageCaption: undefined,
    videoId: undefined,
    image: undefined,
    imageCtaLink: undefined,
    imageSide: undefined,
    isImageBorderOn: undefined,
    imageContainerSize: undefined
};

const mockMediaWithCaptionWithImage: MediaWithCaptionProps = {
    ...mockMediaWithCaptionDefault,
    image: <JSSImage field={mockImages[2]} />,
    imageCaption: <JSSText field={mediaWithCaptionMockSitecoreText} />
};

const mockMediaWithCaptionWithVideo: MediaWithCaptionProps = {
    ...mockMediaWithCaptionDefault,
    videoId: mockYoutubeEmbed.videoId
};

export const mockMediaWithCaption: Record<
    'default' | 'withImage' | 'withVideo',
    MediaWithCaptionProps
> = {
    default: mockMediaWithCaptionDefault,
    withImage: mockMediaWithCaptionWithImage,
    withVideo: mockMediaWithCaptionWithVideo
};
