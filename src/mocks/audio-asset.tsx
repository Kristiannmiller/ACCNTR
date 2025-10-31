import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';

// Types
import { AudioAssetProps } from '@/components';

// Mocks
import { mockSitecoreRichTextSmall } from './sitecore';

const mockAudioAssetDefault: AudioAssetProps = {
    audioSrc:
        'https://www.aurorabaycare.com/services/womens-health/obstetrics/easset_upload_file56047_458711_e.mp3',
    caption: <JSSRichText field={mockSitecoreRichTextSmall} />,
    captionPlacement: 'top',
    playerAlignment: 'left'
};

export const mockAudioAsset: Record<
    'default' | 'withoutCaption',
    AudioAssetProps
> = {
    default: mockAudioAssetDefault,
    withoutCaption: {
        ...mockAudioAssetDefault,
        caption: undefined
    }
};
