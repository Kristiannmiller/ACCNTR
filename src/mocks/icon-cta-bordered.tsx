import {
    RichText as JSSRichText,
    Link as JSSLink,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { IconCtaBorderedCard, ReputationScheduleCta } from '@/components';

// Types
import type {
    IconCtaBorderedCardProps,
    IconCtaBorderedProps
} from '@/components';

// Mocks
import { mockSitecoreLink } from '@/mocks/sitecore';
import { mockReputationScheduleCta } from '@/mocks/reputation-schedule-cta';

const cards: IconCtaBorderedCardProps[] = [
    {
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
    },
    {
        firstCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Start a scheduled visit'
                }}
            />
        ),
        firstCTAStyle: 'link',
        headline: <JSSText field={{ value: 'Icon CTA Bordered Card' }} />,
        icon: 'certificate',
        secondCTA: null,
        secondCTAStyle: 'button',
        supportCopy: (
            <JSSRichText
                field={{
                    value: `<ul style='text-align: left;padding-inline-start: 20px;margin: 0;'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>`
                }}
            />
        ),
        headlineTag: 'h3',
        topColorBar: 'wellnessBlue'
    },
    {
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
        icon: 'envelope',
        secondCTA: null,
        secondCTAStyle: 'button',
        supportCopy: (
            <JSSRichText
                field={{
                    value: `<ul style='text-align: left;padding-inline-start: 20px;margin: 0;'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>`
                }}
            />
        ),
        headlineTag: 'p',
        topColorBar: 'none'
    },
    {
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
        icon: 'chalkboardUser',
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
                    value: `<ul style='text-align: left;padding-inline-start: 20px;margin: 0;'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>`
                }}
            />
        ),
        headlineTag: 'h2',
        topColorBar: 'childrensOrange'
    },
    {
        firstCTA: (
            <JSSLink
                field={{
                    ...mockSitecoreLink.value,
                    text: 'Start a scheduled visit'
                }}
            />
        ),
        firstCTAStyle: 'link',
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
        secondCTAStyle: 'button',
        supportCopy: (
            <JSSRichText
                field={{
                    value: `<ul style='text-align: left;padding-inline-start: 20px;margin: 0;'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>`
                }}
            />
        ),
        headlineTag: 'h2',
        topColorBar: 'childrensPurple'
    },
    {
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
        icon: 'flask',
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
                    value: `<ul style='text-align: left;padding-inline-start: 20px;margin: 0;'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
                </ul>`
                }}
            />
        ),
        headlineTag: 'h2',
        topColorBar: 'childrensGreen'
    }
];

const mockIconCtaBorderedDefault: IconCtaBorderedProps = {
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
                <IconCtaBorderedCard
                    key={idx}
                    {...card}
                />
            ))}
        </>
    ),
    headline: <JSSText field={{ value: 'Icon CTA Bordered' }} />,
    numberOfColumns: '3',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    headlineTag: 'h2'
};

const mockIconCtaBorderedSixCards: IconCtaBorderedProps = {
    ...mockIconCtaBorderedDefault,
    children: (
        <>
            {cards.map((card, idx) => (
                <IconCtaBorderedCard
                    key={idx}
                    {...card}
                />
            ))}
        </>
    )
};

const mockIconCtaBorderedWithReputationScheduleCta: IconCtaBorderedProps = {
    ...mockIconCtaBorderedDefault,
    children: (
        <>
            <IconCtaBorderedCard {...cards[0]}></IconCtaBorderedCard>
            <ReputationScheduleCta
                {...mockReputationScheduleCta.advocateACHSearch}></ReputationScheduleCta>
            <IconCtaBorderedCard {...cards[1]}></IconCtaBorderedCard>
        </>
    )
};

export const mockIconCtaBordered: Record<
    'default' | 'sixCards' | 'withReputationScheduleCta',
    IconCtaBorderedProps
> = {
    default: mockIconCtaBorderedDefault,
    sixCards: mockIconCtaBorderedSixCards,
    withReputationScheduleCta: mockIconCtaBorderedWithReputationScheduleCta
};
