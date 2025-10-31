import {
    Text as JSSText,
    Link as JssLink,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Components
import { Anchor, LinkListProps } from '@/components';

// Mocks
import { mockSitecoreLink, mockSitecoreRichTextSmall } from '@/mocks/sitecore';

// Types
import { Sites } from '@/types';

type LinkListSites = Extract<Sites, 'auroraHealthCare' | 'advocateHealthCare'>;

export const linkListHeadingMock = 'Link List';

const mockLinkListDefault: LinkListProps = {
    ctaStyle: 'button',
    columnAlignment: 'left',
    headlineTag: 'p',
    backgroundColor: 'whiteSmoke',
    numColumns: '4',
    bottomCta: <JssLink field={mockSitecoreLink} />,
    supportCopyAlignment: 'left',
    headlineAlignment: 'left',
    ctaAlignment: 'left',
    links: (
        <>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
            <Anchor>
                <JssLink field={mockSitecoreLink} />
            </Anchor>
        </>
    ),
    headline: <JSSText field={{ value: linkListHeadingMock }} />,
    supportingCopy: <JSSRichText field={mockSitecoreRichTextSmall} />
};

export const mockLinkList: Record<
    'default' | 'noBottomCta' | LinkListSites,
    LinkListProps
> = {
    default: mockLinkListDefault,
    noBottomCta: {
        ...mockLinkListDefault,
        bottomCta: undefined
    },
    auroraHealthCare: {
        ctaStyle: 'button',
        columnAlignment: 'left',
        headlineAlignment: 'center',
        headlineTag: 'h3',
        backgroundColor: 'whiteSmoke',
        numColumns: '4',
        bottomCta: <JssLink field={mockSitecoreLink} />,
        links: (
            <>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Cancer care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Heart care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Orthopedics',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: "Women's Health",
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Emergency & urgent care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Neuroscience',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Vascular services',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
            </>
        ),
        headline: <JSSText field={{ value: 'Link List' }} />
    },
    advocateHealthCare: {
        ctaStyle: 'button',
        columnAlignment: 'left',
        headlineAlignment: 'center',
        headlineTag: 'h3',
        backgroundColor: 'whiteSmoke',
        numColumns: '4',
        bottomCta: <JssLink field={mockSitecoreLink} />,
        links: (
            <>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Cancer care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Heart & vascular care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Orthopedics',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: "Women's Health",
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Gastroenterology',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Neuroscience',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
                <Anchor>
                    <JssLink
                        field={{
                            value: {
                                text: 'Primary care',
                                href: '/learn-more'
                            }
                        }}
                    />
                </Anchor>
            </>
        ),
        headline: <JSSText field={{ value: 'Link List' }} />
    }
};
