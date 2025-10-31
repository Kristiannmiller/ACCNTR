import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { IconCtaSimplifiedCardProps } from '@/components';

// Mocks
import { mockSitecoreLink, mockSitecoreRichTextBottomCopy } from './sitecore';

const IconCtaSimplifiedCardDefault: IconCtaSimplifiedCardProps = {
    supportCopy: <JSSRichText field={mockSitecoreRichTextBottomCopy} />,
    icon: 'instagram',
    ctaStyle: 'button',
    cta: <JSSLink field={{ ...mockSitecoreLink.value, text: 'Learn More' }} />,
    headline: <JSSText field={{ value: 'Icon CTA Simplified Card' }} />,
    headlineTag: 'h2'
};

const IconCtaSimplifiedCardNoIcon: IconCtaSimplifiedCardProps = {
    ...IconCtaSimplifiedCardDefault,
    icon: undefined
};

const IconCtaSimplifiedCardWithLink: IconCtaSimplifiedCardProps = {
    ...IconCtaSimplifiedCardDefault,
    ctaStyle: 'link'
};

const IconCtaSimplifiedCardNoIconWithLink: IconCtaSimplifiedCardProps = {
    supportCopy: <JSSRichText field={mockSitecoreRichTextBottomCopy} />,
    ctaStyle: 'link',
    icon: undefined,
    cta: <JSSLink field={{ ...mockSitecoreLink.value, text: 'Learn More' }} />,
    headline: <JSSText field={{ value: 'Icon CTA Simplified Card' }} />,
    headlineTag: 'h2'
};

const IconCtaSimplifiedCardshortCopy: IconCtaSimplifiedCardProps = {
    ...IconCtaSimplifiedCardDefault,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>this is some short text</p>'
            }}
        />
    ),
    icon: 'facebook'
};

const IconCtaSimplifiedCardshortCopy1: IconCtaSimplifiedCardProps = {
    ...IconCtaSimplifiedCardDefault,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>this is some short text</p>'
            }}
        />
    ),
    icon: 'blog'
};

const IconCtaSimplifiedCardshortCopy2: IconCtaSimplifiedCardProps = {
    ...IconCtaSimplifiedCardDefault,
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>this is some short text</p>'
            }}
        />
    ),
    icon: 'comment'
};

export const mockIconCtaSimplifiedCard: Record<
    | 'default'
    | 'noIcon'
    | 'iconWithLink'
    | 'noIconWithLink'
    | 'shortCopy'
    | 'shortCopy1'
    | 'shortCopy2',
    IconCtaSimplifiedCardProps
> = {
    default: IconCtaSimplifiedCardDefault,
    noIcon: IconCtaSimplifiedCardNoIcon,
    iconWithLink: IconCtaSimplifiedCardWithLink,
    noIconWithLink: IconCtaSimplifiedCardNoIconWithLink,
    shortCopy: IconCtaSimplifiedCardshortCopy,
    shortCopy1: IconCtaSimplifiedCardshortCopy1,
    shortCopy2: IconCtaSimplifiedCardshortCopy2
};
