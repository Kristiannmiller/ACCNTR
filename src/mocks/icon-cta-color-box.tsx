import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import {
    IconCtaColoredBoxCard,
    type IconCtaColoredBoxProps
} from '@/components';

// Mocks
import {
    mockSitecoreRichTextSmall,
    IconCtaColorBoxMockSitecoreText
} from '@/mocks/sitecore';
import { mockIconCTAColorBoxCard } from '@/mocks/icon-cta-color-box-card';

export const mockIconCTAColorBoxDefault: IconCtaColoredBoxProps = {
    headline: <JSSText field={IconCtaColorBoxMockSitecoreText} />,
    headlineTag: 'h2',
    headlineAlignment: 'center',
    supportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    supportCopyAlignment: 'center',
    bottomSupportCopy: <JSSRichText field={mockSitecoreRichTextSmall} />,
    columns: '2',
    children: (
        <>
            <IconCtaColoredBoxCard {...mockIconCTAColorBoxCard.default} />
            <IconCtaColoredBoxCard {...mockIconCTAColorBoxCard.default} />
            <IconCtaColoredBoxCard {...mockIconCTAColorBoxCard.default} />
            <IconCtaColoredBoxCard {...mockIconCTAColorBoxCard.default} />
        </>
    )
};

export const mockIconCTAColorBoxWithoutCTACard: IconCtaColoredBoxProps = {
    ...mockIconCTAColorBoxDefault,
    children: (
        <>
            <IconCtaColoredBoxCard
                {...mockIconCTAColorBoxCard.mockIconCTAColorBoxCardWithoutCTA}
            />
            <IconCtaColoredBoxCard
                {...mockIconCTAColorBoxCard.mockIconCTAColorBoxCardWithoutCTA}
            />
            <IconCtaColoredBoxCard
                {...mockIconCTAColorBoxCard.mockIconCTAColorBoxCardWithoutCTA}
            />
            <IconCtaColoredBoxCard
                {...mockIconCTAColorBoxCard.mockIconCTAColorBoxCardWithoutCTA}
            />
        </>
    )
};

export const mockIconCTAColorBox: Record<
    'default' | 'mockIconCTAColorBoxWithoutCTACard',
    IconCtaColoredBoxProps
> = {
    default: mockIconCTAColorBoxDefault,
    mockIconCTAColorBoxWithoutCTACard: mockIconCTAColorBoxWithoutCTACard
};
