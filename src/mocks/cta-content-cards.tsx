import {
    Text as JSSText,
    Link as JssLink,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { CtaContentCard } from '@/components';

// Types
import { CtaContentCardsProps } from '@/components/organisms/CtaContentCards';

import { mockCtaContentCard } from '@/mocks/cta-content-card';

import { mockSitecoreLink } from './sitecore';

const mockCtaContentCardsDefault: CtaContentCardsProps = {
    headline: <JSSText field={{ value: 'CTA Content Cards' }} />,
    headlineTag: 'p',
    contentAlignment: 'center',
    numColumns: '2',
    supportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    bottomSupportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    cta: <JssLink field={mockSitecoreLink} />,
    hasDropShadows: false,
    backgroundColor: 'white',
    contentCards: (
        <>
            <CtaContentCard {...mockCtaContentCard.default} />
            <CtaContentCard {...mockCtaContentCard.longContent} />
            <CtaContentCard {...mockCtaContentCard.default} />
            <CtaContentCard {...mockCtaContentCard.longContent} />
            <CtaContentCard {...mockCtaContentCard.default} />
        </>
    )
};
const mockCtaContentCardsSmokey: CtaContentCardsProps = {
    headline: <JSSText field={{ value: 'CTA Content Cards' }} />,
    headlineTag: 'p',
    contentAlignment: 'center',
    numColumns: '2',
    supportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    bottomSupportingCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    cta: <JssLink field={mockSitecoreLink} />,
    hasDropShadows: true,
    backgroundColor: 'whiteSmoke',
    contentCards: (
        <>
            <CtaContentCard {...mockCtaContentCard.default} />
            <CtaContentCard {...mockCtaContentCard.longContent} />
            <CtaContentCard {...mockCtaContentCard.default} />
            <CtaContentCard {...mockCtaContentCard.longContent} />
            <CtaContentCard {...mockCtaContentCard.default} />
        </>
    )
};

const mockCtaContentCardsLinks: CtaContentCardsProps = {
    ...mockCtaContentCardsDefault,
    contentCards: (
        <>
            <CtaContentCard {...mockCtaContentCard.default} />
            <CtaContentCard {...mockCtaContentCard.links} />
            <CtaContentCard {...mockCtaContentCard.links} />
            <CtaContentCard {...mockCtaContentCard.links} />
            <CtaContentCard {...mockCtaContentCard.links} />
        </>
    )
};

export const mockCtaContentCards: Record<
    'default' | 'smoke' | 'links',
    CtaContentCardsProps
> = {
    default: mockCtaContentCardsDefault,
    smoke: mockCtaContentCardsSmokey,
    links: mockCtaContentCardsLinks
};
