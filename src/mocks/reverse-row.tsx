import { Text as JSSText } from '@sitecore-jss/sitecore-jss-react';
import { RichText as JSSRichText } from '@sitecore-jss/sitecore-jss-react';
import { Image as JSSImage } from '@sitecore-jss/sitecore-jss-react';
import { Link as JSSLink } from '@sitecore-jss/sitecore-jss-react';

// Components
import { ReverseRowProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockImages } from '@/mocks/images';

const defaultMockReverseRow: ReverseRowProps = {
    mediaSide: 'left',
    headlineTag: 'p',
    contentAlignment: 'center',
    ctaStyle: 'button',
    videoId: 'vBi8FxvoYvo',
    headline: <JSSText field={{ value: 'Reverse Row' }} />,
    supportingCopy: (
        <JSSRichText
            field={{
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            }}
        />
    ),
    image: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    ),
    firstCta: <JSSLink field={mockSitecoreLink} />,
    secondCta: <JSSLink field={mockSitecoreLink} />
};

export const mockReverseRow: Record<'default' | 'noVideo', ReverseRowProps> = {
    default: defaultMockReverseRow,
    noVideo: {
        ...defaultMockReverseRow,
        videoId: ''
    }
};
