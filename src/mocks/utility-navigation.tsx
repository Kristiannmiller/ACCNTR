// Mocks
import {
    UtilityNavigationDesktopDataProps,
    UtilityNavigationMobileDataProps
} from '@/components';

// Types
import { Sites } from '@/types';

type UtilityNavigationSites = Extract<
    Sites,
    | 'advocateAuroraHealth'
    | 'advocateChildrens'
    | 'advocateHealthCare'
    | 'auroraHealthCare'
    | 'auroraBayCare'
    | 'research'
    | 'foundations'
>;

const mockLinkProps = { href: '/', target: '_blank' };

export const mockUtilityNavigation: Record<
    UtilityNavigationSites,
    UtilityNavigationDesktopDataProps | UtilityNavigationMobileDataProps
> = {
    advocateChildrens: {
        navigationItems: [
            {
                type: 'link',
                link: (
                    <a
                        target='_blank'
                        href='tel:855-312-KIDS'>
                        855-312-KIDS
                    </a>
                )
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a doctor</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a location</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Pay a Bill</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Donate</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Sign in to LiveWell</a>,
                color: 'solid2'
            }
        ]
    },
    advocateHealthCare: {
        navigationItems: [
            {
                type: 'link',
                link: (
                    <a
                        target='_blank'
                        href='tel:800-3-ADVOCATE'>
                        800-3-ADVOCATE
                    </a>
                )
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Español</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a doctor</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a location</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Pay a Bill</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Sign in to LiveWell</a>,
                color: 'solid2'
            }
        ]
    },
    auroraHealthCare: {
        navigationItems: [
            {
                type: 'link',
                link: (
                    <a
                        target='_blank'
                        href='tel:833-528-7672'>
                        833-528-7672
                    </a>
                )
            },
            {
                type: 'dropdown',
                title: 'Quick Links',
                links: [
                    {
                        link: <a {...mockLinkProps}>Find a doctor</a>
                    },
                    {
                        link: <a {...mockLinkProps}>Find a location</a>
                    },
                    {
                        link: <a {...mockLinkProps}>Pay a Bill</a>
                    }
                ]
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a doctor</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a location</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Pay a Bill</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Sign in to LiveWell</a>,
                color: 'solid2'
            }
        ]
    },
    auroraBayCare: {
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a doctor</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Find a location</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Pay a Bill</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Contact Us</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Sign in to LiveWell</a>,
                color: 'solid2'
            },
            {
                link: <a {...mockLinkProps}>myBayCare</a>,
                color: 'solid1'
            }
        ]
    },
    foundations: {
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Contact Us</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Donate</a>,
                color: 'light2'
            }
        ]
    },
    research: {
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Contact Us</a>
            }
        ],
        ctaButtons: [
            {
                link: <a {...mockLinkProps}>Donate</a>,
                color: 'solid1'
            }
        ]
    }
};
