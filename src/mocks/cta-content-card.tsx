// Components
import {
    Text as JSSText,
    Link as JssLink,
    RichText as JSSRichText,
    Image as JSSImage
} from '@sitecore-jss/sitecore-jss-react';

import { CtaContentCardProps } from '@/components';

import { mockSitecoreLink, mockSitecoreLinkLong } from '@/mocks/sitecore';
import { mockImages } from '@/mocks/images';

// Default Mock
const mockCtaContentCardDefault: CtaContentCardProps = {
    headline: <JSSText field={{ value: 'CTA Content Card' }} />,
    bodyCopy: (
        <JSSRichText
            field={{
                value: '<p>Dr. David Callaway joins unique network examining leadership examples of recent presidents</p>'
            }}
        />
    ),
    firstCta: <JssLink field={mockSitecoreLink} />,
    secondCta: <JssLink field={mockSitecoreLink} />,
    thirdCta: <JssLink field={mockSitecoreLink} />,
    image: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    ),
    headlineTag: 'h3',
    firstCtaStyle: 'button',
    secondCtaStyle: 'button',
    ctaAlignment: 'left'
};

// Long Content Mock
const mockCtaContentCardLongContent: CtaContentCardProps = {
    headline: <JSSText field={{ value: 'CTA Content Card' }} />,
    bodyCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>'
            }}
        />
    ),
    firstCta: <JssLink field={mockSitecoreLinkLong} />,
    secondCta: <JssLink field={mockSitecoreLink} />,
    thirdCta: <JssLink field={mockSitecoreLink} />,
    image: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    ),
    headlineTag: 'h3',
    firstCtaStyle: 'button',
    secondCtaStyle: 'button',
    ctaAlignment: 'left'
};

// Link Style CTA's mock
const mockCtaContentCardLinks: CtaContentCardProps = {
    headline: <JSSText field={{ value: 'CTA Content Card' }} />,
    bodyCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>'
            }}
        />
    ),
    firstCta: <JssLink field={mockSitecoreLink} />,
    secondCta: <JssLink field={mockSitecoreLink} />,
    thirdCta: <JssLink field={mockSitecoreLink} />,
    image: (
        <JSSImage field={{ src: mockImages[0].src, alt: mockImages[0].alt }} />
    ),
    headlineTag: 'h3',
    firstCtaStyle: 'link',
    secondCtaStyle: 'link',
    ctaAlignment: 'left'
};

export const mockCtaContentCard: Record<
    'default' | 'longContent' | 'links' | 'withoutImage',
    CtaContentCardProps
> = {
    default: mockCtaContentCardDefault,
    longContent: mockCtaContentCardLongContent,
    links: mockCtaContentCardLinks,
    withoutImage: {
        ...mockCtaContentCardDefault,
        firstCta: null,
        image: null
    }
};
