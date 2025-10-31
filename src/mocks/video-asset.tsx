import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { VideoAssetProps } from '@/components';

const videoAssetDefault: VideoAssetProps = {
    videoId: 'SSmzSn7EuyI',
    caption: <JSSRichText field={{ value: `<p>Video Asset</p>` }} />
};

const videoAssetNoCaption: VideoAssetProps = {
    videoId: 'SSmzSn7EuyI',
    caption: undefined
};

export const mockVideoAsset: Record<'default' | 'noCaption', VideoAssetProps> =
    {
        default: videoAssetDefault,
        noCaption: videoAssetNoCaption
    };
