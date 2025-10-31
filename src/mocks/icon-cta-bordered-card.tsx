import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { IconCtaBorderedCardProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';

const mockIconCtaBorderedCardDefault: IconCtaBorderedCardProps = {
    firstCTA: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'Start a scheduled visit'
            }}
        />
    ),
    firstCTAStyle: 'button',
    headline: <JSSText field={{ value: 'Icon CTA Bordered Card' }} />,
    icon: 'blog',
    secondCTA: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'Learn more about this visit'
            }}
        />
    ),
    secondCTAStyle: 'link',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>'
            }}
        />
    ),
    headlineTag: 'h2',
    topColorBar: 'denimBlue'
};

export const mockIconCtaBorderedCard = {
    default: mockIconCtaBorderedCardDefault
};
