// Mocks
import { mockLogos } from '@/mocks/images';

// Types
import { Sites } from '@/types';
import { GlobalNavigationDataProps } from '@/components';

const mockLinkProps = { href: window.location.href, target: '_self' };

const mockLinks = [
    {
        link: <a {...mockLinkProps}>Learn more (desktop)</a>,
        mobileLink: <a {...mockLinkProps}>Learn more (mobile)</a>
    },
    {
        link: <a {...mockLinkProps}>Learn more (desktop)</a>,
        mobileLink: <a {...mockLinkProps}>Learn more (mobile)</a>
    }
];

const mockGlobalNavigationDefault: GlobalNavigationDataProps = {
    logoUrl: '/',
    logoTitle: 'Advocate Health Care',
    logoImage: <img {...mockLogos.advocateHealthCare} />,
    backgroundColor: 'white',
    mobileMenuTriggerOpenLabel: 'MENU',
    mobileMenuTriggerCloseLabel: 'CLOSE',
    searchLabel: 'Search',
    searchPlaceholder: 'What can we help you find?',
    searchUrl: '/search',
    navigationItems: []
};

export const mockGlobalNavigation: Record<Sites, GlobalNavigationDataProps> = {
    advocateChildrens: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.advocateChildrens} />,
        navigationItems: [
            {
                type: 'link',
                color: 'orange',
                link: <a {...mockLinkProps}>Conditions</a>
            },
            {
                type: 'link',
                color: 'yellow',
                link: <a {...mockLinkProps}>Services & Specialties</a>
            },
            {
                type: 'link',
                color: 'purple',
                link: <a {...mockLinkProps}>Health Resources</a>
            },
            {
                type: 'link',
                color: 'blue',
                link: <a {...mockLinkProps}>Your Visit</a>
            }
        ],
        searchColor: 'green'
    },
    advocateHealthCare: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.advocateHealthCare} />,
        mobileCallLink: <a {...mockLinkProps}>Call</a>,
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Services & Specialties</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Appointments</a>
            }
        ]
    },
    auroraBayCare: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.auroraBayCare} />,
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Services & Specialties</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Patients & Visitors</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Appointments</a>
            }
        ]
    },
    auroraHealthCare: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.auroraHealthCare} />,
        mobileCallLink: <a {...mockLinkProps}>Call</a>,
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Services & Specialties</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Patients & Visitors</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Appointments</a>
            }
        ]
    },
    corporate: {
        ...mockGlobalNavigationDefault,
        logoImage: (
            <img
                {...mockLogos.corporate}
                alt='corp'
            />
        ),
        logoImageInverse: (
            <img
                {...mockLogos.corporateInverse}
                alt='corp'
            />
        ),
        backgroundColor: 'transparent',
        searchUrl: undefined,
        navigationItems: [
            {
                type: 'dropdown',
                title: 'Who We Are',
                links: [
                    { link: <a {...mockLinkProps}>About</a> },
                    {
                        link: <a href='#anchor-test'>Our reach</a>
                    },
                    { link: <a {...mockLinkProps}>Leadership</a> },
                    { link: <a {...mockLinkProps}>Foundations</a> }
                ]
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Research</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Employer Solutions</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>News</a>
            }
        ]
    },
    employerSolutions: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.employerSolutions} />,
        searchUrl: undefined,
        navigationItems: [
            {
                type: 'dropdown',
                title: 'Build your solution',
                links: mockLinks
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Contact us today</a>
            }
        ]
    },
    foundations: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.foundations} />,
        searchUrl: '/search',
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Where to give</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Ways to give</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Get involved</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Blog</a>
            }
        ]
    },
    research: {
        ...mockGlobalNavigationDefault,
        logoImage: <img {...mockLogos.research} />,
        searchUrl: '/search',
        navigationItems: [
            {
                type: 'link',
                link: <a {...mockLinkProps}>Participate</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Collaborate</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>Biospecimens</a>
            },
            {
                type: 'link',
                link: <a {...mockLinkProps}>News</a>
            }
        ]
    }
};
