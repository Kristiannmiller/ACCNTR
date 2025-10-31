import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { IconCtaLeftAlignedCard } from '@/components';

// Types
import type {
    IconCtaLeftAlignedCardProps,
    IconCtaLeftAlignedProps
} from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';

const cards: IconCtaLeftAlignedCardProps[] = [
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'blog',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'h2'
    },
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'calendar',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'h3'
    },
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'cloudUpload',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'p'
    },
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'blog',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'h2'
    },
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'blog',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'h2'
    },
    {
        cardCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'See our programs & treatments'
                }}
            />
        ),
        headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
        icon: 'blog',
        supportCopy: (
            <JSSRichText
                field={{
                    value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
                }}
            />
        ),
        headlineTag: 'h2'
    }
];

const mockIconCtaLeftAlignedDefault: IconCtaLeftAlignedProps = {
    bottomSupportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    children: (
        <>
            {cards.slice(0, 3).map((card, idx) => (
                <IconCtaLeftAlignedCard
                    key={idx}
                    {...card}
                />
            ))}
        </>
    ),
    headline: <JSSText field={{ value: 'Icon CTA Left Aligned' }} />,
    headlineAlignment: 'left',
    headlineTag: 'h2',
    numberOfColumns: '3',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    supportCopyAlignment: 'left'
};

const mockIconCtaLeftAlignedSixCards: IconCtaLeftAlignedProps = {
    ...mockIconCtaLeftAlignedDefault,
    children: (
        <>
            {cards.map((card, idx) => (
                <IconCtaLeftAlignedCard
                    key={idx}
                    {...card}
                />
            ))}
        </>
    )
};

export const mockIconCtaLeftAligned = {
    default: mockIconCtaLeftAlignedDefault,
    sixCards: mockIconCtaLeftAlignedSixCards
};
