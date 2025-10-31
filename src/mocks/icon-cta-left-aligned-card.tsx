import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { IconCtaLeftAlignedCardProps } from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';

const mockIconCtaLeftAlignedCardDefault: IconCtaLeftAlignedCardProps = {
    cardCTA: (
        <JSSLink
            field={{
                ...mockSitecoreLink.value,
                text: 'See our programs & treatments'
            }}
        />
    ),
    headline: <JSSText field={{ value: 'Icon CTA Left Aligned Card' }} />,
    icon: 'blog',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    headlineTag: 'h2'
};

export const mockIconCtaLeftAlignedCard = {
    default: mockIconCtaLeftAlignedCardDefault
};
