import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { IconCtaSimplifiedProps, IconCtaSimplifiedCard } from '@/components';

// Mocks
import { mockIconCtaSimplifiedCard } from './icon-cta-simplified-card';
import { loremParagraph } from './lorem-ipsum';

const iconCtaSimplifiedDefault: IconCtaSimplifiedProps = {
    headline: <JSSText field={{ value: `Icon CTA Simplified` }} />,
    headlineTag: 'p',
    supportCopy: (
        <JSSRichText field={{ value: `<p>${loremParagraph.long}</p>` }} />
    ),
    bottomSupportCopy: (
        <JSSRichText field={{ value: `<p>${loremParagraph.long}</p>` }} />
    ),
    numberOfColumns: '2',
    mobileBehavior: 'stacked',
    iconCtas: (
        <>
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.default} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy1} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy2} />
        </>
    )
};

const iconCtaSimplifiedTwoUpGrid: IconCtaSimplifiedProps = {
    ...iconCtaSimplifiedDefault,
    mobileBehavior: '2-up Grid',
    bottomSupportCopy: undefined,
    iconCtas: (
        <>
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.noIcon} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.noIcon} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.noIcon} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.noIcon} />
        </>
    )
};

const iconCtaSimplifiedWithLink: IconCtaSimplifiedProps = {
    ...iconCtaSimplifiedDefault,
    iconCtas: (
        <>
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.iconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.iconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.iconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.iconWithLink}
            />
        </>
    )
};

const iconCtaSimplifiedTwoUpGridWithLink: IconCtaSimplifiedProps = {
    ...iconCtaSimplifiedDefault,
    mobileBehavior: '2-up Grid',
    bottomSupportCopy: undefined,
    iconCtas: (
        <>
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.noIconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.noIconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.noIconWithLink}
            />
            <IconCtaSimplifiedCard
                {...mockIconCtaSimplifiedCard.noIconWithLink}
            />
        </>
    )
};

const iconCtaSimplifiedShort: IconCtaSimplifiedProps = {
    ...iconCtaSimplifiedDefault,
    mobileBehavior: '2-up Grid',
    bottomSupportCopy: undefined,
    iconCtas: (
        <>
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy} />
            <IconCtaSimplifiedCard {...mockIconCtaSimplifiedCard.shortCopy} />
        </>
    )
};

export const mockIconCtaSimplified: Record<
    'default' | 'twoUpGrid' | 'iconAndLink' | 'twoUpWithLink' | 'short',
    IconCtaSimplifiedProps
> = {
    default: iconCtaSimplifiedDefault,
    twoUpGrid: iconCtaSimplifiedTwoUpGrid,
    iconAndLink: iconCtaSimplifiedWithLink,
    twoUpWithLink: iconCtaSimplifiedTwoUpGridWithLink,
    short: iconCtaSimplifiedShort
};
