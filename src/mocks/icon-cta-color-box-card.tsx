import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import type { IconCtaColoredBoxCardProps } from '@/components';

// Mocks
import {
    mockSitecoreLink,
    iconCtaColorBoxCardMockSitecoreText,
    mockSitecoreRichTextSmall
} from '@/mocks/sitecore';
export const mockIconCTAColorBoxCardDefault: IconCtaColoredBoxCardProps = {
    icon: 'phone',
    headline: <JSSText field={iconCtaColorBoxCardMockSitecoreText} />,
    headlineTag: 'h2',
    supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    cardCTA: <JSSLink field={mockSitecoreLink} />
};

export const mockIconCTAColorBoxCardWithoutCTA: IconCtaColoredBoxCardProps = {
    ...mockIconCTAColorBoxCardDefault,
    cardCTA: undefined
};

export const mockIconCTAColorBoxCard: Record<
    'default' | 'mockIconCTAColorBoxCardWithoutCTA',
    IconCtaColoredBoxCardProps
> = {
    default: mockIconCTAColorBoxCardDefault,
    mockIconCTAColorBoxCardWithoutCTA: mockIconCTAColorBoxCardWithoutCTA
};
