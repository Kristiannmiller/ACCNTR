import {
    Link as JSSLink,
    RichText as JSSRichText,
    Text as JssText,
    Image as JSSImage
} from '@sitecore-jss/sitecore-jss-react';

// Components
import {
    CorporateFooterProps,
    FooterProps,
    ImageAsset,
    MultiColumnContainer
} from '@/components';

// Mocks
import {
    mockSitecoreBottomText,
    mockSitecoreLink,
    mockSitecoreText
} from '@/mocks/sitecore';
import { mockFooterLogos } from '@/mocks/images';

// Types
import { Sites } from '@/types';

const mockLinkProps = { href: '/', target: '_blank' };

const mockFooterDefault: FooterProps = {
    logo: (
        <img
            {...mockFooterLogos.advocateHealthCare}
            alt='logo'
        />
    ),
    logoLink: <JSSLink field={mockSitecoreLink} />,
    bottomText: (
        <JSSRichText
            field={{
                ...mockSitecoreBottomText,
                value: 'Now part of <a href="https://www.advocatechildrenshospital.com/">Advocate Health</a>'
            }}
        />
    ),
    legalSection1Text: (
        <JSSRichText
            field={{
                value: '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your Advocate Aurora Health visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>'
            }}
        />
    ),
    copyRightText: (
        <JSSRichText
            field={{
                value: '<p class="copyright OneLinkNoTx">© <span id="copyrightYear">2024</span> Advocate Aurora Health</p>'
            }}
        />
    ),
    legalSection2Text: (
        <JSSRichText
            field={{
                value: '<p class="policies"><a href="https://www.advocatehealth.com/privacy-policy" target="_blank">Privacy policy – Advocate Health Care</a>&nbsp;|&nbsp; <a href="https://www.aurorahealthcare.org/privacy-policy" target="_blank">Privacy policy – Aurora Health Care</a>&nbsp;|&nbsp; <a href="https://www.advocateaurorahealth.org/notice-of-privacy-practices/" target="_blank">Notice of privacy practices</a>&nbsp;|&nbsp; <a href="https://www.advocateaurorahealth.org/pdfs/wilmette-mob-npp.pdf" target="_blank">Notice of privacy practices – JV Wilmette Pediatric Specialty Clinic</a></p>'
            }}
        />
    ),
    socialMediaLinks: [
        {
            link: <JSSLink field={mockSitecoreLink} />,
            iconName: 'youtube'
        },
        {
            link: <JSSLink field={mockSitecoreLink} />,
            iconName: 'facebook'
        },
        {
            link: <JSSLink field={mockSitecoreLink} />,
            iconName: 'instagram'
        },
        {
            link: <JSSLink field={mockSitecoreLink} />,
            iconName: 'xTwitter'
        },
        {
            link: <JSSLink field={mockSitecoreLink} />,
            iconName: 'linkedinIn'
        }
    ],
    footerColumn: [
        {
            headline: <JssText field={mockSitecoreText} />,
            footerLinkItems: [
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />
            ]
        },
        {
            headline: <JssText field={mockSitecoreText} />,
            footerLinkItems: [
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />
            ]
        },
        {
            headline: <JssText field={mockSitecoreText} />,
            footerLinkItems: [
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />
            ]
        },
        {
            headline: <JssText field={mockSitecoreText} />,
            footerLinkItems: [
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />,
                <JSSLink field={mockSitecoreLink} />
            ]
        }
    ]
};

const mockCorporateFooterDefault: CorporateFooterProps = {
    footerBody: (
        <>
            <MultiColumnContainer
                numberOfColumns='4'
                columnContents={
                    <>
                        <ImageAsset
                            image={
                                <JSSImage
                                    field={{
                                        value: {
                                            src: '/images/site-logos/logo-advocate-wht.svg',
                                            alt: 'Advocate Health Care'
                                        }
                                    }}
                                />
                            }
                            imageCTA={<JSSLink field={mockSitecoreLink} />}
                            imageAlignment='center'
                        />
                        <ImageAsset
                            image={
                                <JSSImage
                                    field={{
                                        value: {
                                            src: '/images/site-logos/logo-atrium-wht.svg',
                                            alt: 'Atrium Health'
                                        }
                                    }}
                                />
                            }
                            imageCTA={<JSSLink field={mockSitecoreLink} />}
                            imageAlignment='center'
                        />
                        <ImageAsset
                            image={
                                <JSSImage
                                    field={{
                                        value: {
                                            src: '/images/site-logos/logo-aurora-wht.svg',
                                            alt: 'Aurora Health Care'
                                        }
                                    }}
                                />
                            }
                            imageCTA={<JSSLink field={mockSitecoreLink} />}
                            imageAlignment='center'
                        />
                        <ImageAsset
                            image={
                                <JSSImage
                                    field={{
                                        value: {
                                            src: '/images/site-logos/logo-wakeforest-wht.svg',
                                            alt: 'Wake Forest University School of Medicine'
                                        }
                                    }}
                                />
                            }
                            imageCTA={<JSSLink field={mockSitecoreLink} />}
                            imageAlignment='center'
                        />
                    </>
                }
            />
            <ImageAsset
                image={
                    <JSSImage
                        field={{
                            value: {
                                src: '/images/site-logos/now-part-AH-logo.webp',
                                alt: 'Now part of Advocate Health'
                            }
                        }}
                    />
                }
                mobileImage={
                    <JSSImage
                        field={{
                            value: {
                                src: '/images/site-logos/now-part-AH-logo-M.webp',
                                alt: 'Now part of Advocate Health'
                            }
                        }}
                    />
                }
                imageCTA={<JSSLink field={mockSitecoreLink} />}
                imageAlignment='center'
            />
        </>
    ),
    socialMediaLinks: [
        {
            link: <a {...mockLinkProps}>youtube</a>,
            iconName: 'youtube'
        },
        {
            link: <a {...mockLinkProps}>facebook</a>,
            iconName: 'facebook'
        },
        {
            link: <a {...mockLinkProps}>linkedin</a>,
            iconName: 'linkedin'
        }
    ],
    copyRightText:
        '<p class="copyright OneLinkNoTx">© <span id="copyrightYear">2024</span> Advocate Health</p>',
    legalPrivacyLink: (
        <JSSLink
            field={{ text: 'Policies & notices', href: '/policies-notices' }}
        />
    )
};

export const mockFooter: Record<
    Exclude<Sites, 'corporate'> | 'default' | 'noLogoLink',
    FooterProps
> = {
    default: mockFooterDefault,
    noLogoLink: { ...mockFooterDefault, logoLink: undefined },
    advocateChildrens: {
        ...mockFooterDefault,
        logo: (
            <img
                {...mockFooterLogos.advocateChildrens}
                alt='children logo'
            />
        ),
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            },
            {
                link: <a {...mockLinkProps}>instagram</a>,
                iconName: 'instagram'
            },
            {
                link: <JSSLink field={mockSitecoreLink} />,
                iconName: 'xTwitter'
            },
            {
                link: <JSSLink field={mockSitecoreLink} />,
                iconName: 'linkedinIn'
            }
        ],
        legalSection1Text:
            '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your Advocate Children\'s Hospital visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>',
        copyRightText: "© 2024 Advocate Children's Hospital",
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>855-312-KIDS</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>TDD 315-528-5030</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Contact us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Compliance & privacy concerns</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For patients & visitors',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Classes</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Cost of care estimate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Financial assistance</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Shop Pals' Pets</a>
                    </>
                ]
            },
            {
                headline: 'For professionals',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Training & resources</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Refer a patient</a>
                    </>
                ]
            },
            {
                headline: "About Advocate Children's Hospital",
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>About us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Leadership team</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>News Center</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Volunteer opportunities</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Donate</a>
                    </>
                ]
            }
        ]
    },
    advocateHealthCare: {
        ...mockFooterDefault,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            },
            {
                link: <a {...mockLinkProps}>instagram</a>,
                iconName: 'instagram'
            },
            {
                link: <a {...mockLinkProps}>twitter</a>,
                iconName: 'twitter'
            },
            {
                link: <a {...mockLinkProps}>linkedin</a>,
                iconName: 'linkedin'
            }
        ],
        copyRightText:
            '© 2024 Advocate Health Care 2025 Windsor Dr., Oak Brook, Illinois 60523',
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>800-3-ADVOCATE</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Contact Us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Compliance & privacy concerns</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatechildenshospital.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For patients & visitors',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>LiveWell</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>
                            health <em>e</em>news
                        </a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Billing & payment</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Price transparency</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Cost of care estimate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Financial assistance</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Medical records</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Hospital information</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Flower shop</a>
                    </>
                ]
            },
            {
                headline: 'For professionals',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>AdvocateOnline</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Education</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Physician partners</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Employer Solutions</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Investor relations</a>
                    </>
                ]
            },
            {
                headline: 'About Advocate',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>About us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Advocate Medical Group</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>News Center</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Foundation</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Volunteer opportunities</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Donate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Serving our community</a>
                    </>
                ]
            }
        ]
    },
    auroraBayCare: {
        ...mockFooterDefault,
        logo: <img {...mockFooterLogos.auroraBayCare} />,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            }
        ],
        copyRightText: '© 2024 Aurora BayCare Medical Center',
        legalSection1Text:
            '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your Aurora Bay Care visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>',
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Contact Us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Compliance & privacy concerns</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>aurorahealthcare.org</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For patients',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>LiveWell</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>myBayCare</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Classes & events</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Cost of care estimate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Financial assistance</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Patients & visitor information</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Services & specialties</a>
                    </>
                ]
            },
            {
                headline: 'For Professionals',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Caregiver Connect</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research</a>
                    </>
                ]
            },
            {
                headline: 'About Aurora BayCare',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>About us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>News Center</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Volunteer opportunities</a>
                    </>
                ]
            }
        ]
    },
    auroraHealthCare: {
        ...mockFooterDefault,
        logo: <img {...mockFooterLogos.auroraHealthCare} />,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            }
        ],
        copyRightText: '© 2024 Aurora Health Care',
        legalSection1Text:
            '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your Aurora Health Care visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>',
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>833-528-7672</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Contact Us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Compliance & privacy concerns</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>aurorabaycare.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For patients & visitors',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>LiveWell</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>
                            health <em>e</em>news
                        </a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Classes & events</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Billing & payments</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Price transparency</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Cost of care estimate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Financial assistance</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Collection process</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Medical records</a>
                    </>
                ]
            },
            {
                headline: 'For Professionals',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Caregiver Connect</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Tertiary Access Program</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Education</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Credentialing resources</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research & clinical trials</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>RSSP/IRB</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Employer Solutions</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Investory relations</a>
                    </>
                ]
            },
            {
                headline: 'About Aurora BayCare',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>About us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>News Center</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Foundation</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Volunteer opportunities</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Donate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Community benefits</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Speakers & sponsorship</a>
                    </>
                ]
            }
        ]
    },
    employerSolutions: {
        ...mockFooterDefault,
        logo: <img {...mockFooterLogos.employerSolutions} />,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            },
            {
                link: <a {...mockLinkProps}>twitter</a>,
                iconName: 'twitter'
            },
            {
                link: <a {...mockLinkProps}>linkedin</a>,
                iconName: 'linkedin'
            }
        ],
        legalSection1Text:
            '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>',
        copyRightText: '© 2024 Advocate Health Employer Solutions',
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Contact us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>aurorahealthcare.org</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For employers',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Health benefit plans</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>COVID services</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Employee Assistance Program</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Employer clinics</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Executive health services</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Flu shot clinic</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Occupational health</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Preventive screenings</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Wellness services</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Workforce health</a>
                    </>
                ]
            },
            {
                headline: 'For brokers',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Partner with us</a>
                    </>
                ]
            }
        ]
    },
    foundations: {
        ...mockFooterDefault,
        logo: <img {...mockFooterLogos.foundations} />,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            },
            {
                link: <a {...mockLinkProps}>instagram</a>,
                iconName: 'instagram'
            },
            {
                link: <JSSLink field={mockSitecoreLink} />,
                iconName: 'xTwitter'
            },
            {
                link: <JSSLink field={mockSitecoreLink} />,
                iconName: 'linkedinIn'
            }
        ],
        copyRightText: "© 2024 Advocate Children's Hospital",
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>855-312-KIDS</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>TDD 315-528-5030</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Contact us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Compliance & privacy concerns</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'For patients & visitors',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Classes</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Cost of care estimate</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Financial assistance</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Shop Pals' Pets</a>
                    </>
                ]
            },
            {
                headline: 'For professionals',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Training & resources</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Refer a patient</a>
                    </>
                ]
            },
            {
                headline: "About Advocate Children's Hospital",
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>About us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Leadership team</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>News Center</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Volunteer opportunities</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Donate</a>
                    </>
                ]
            }
        ]
    },
    research: {
        ...mockFooterDefault,
        logo: <img {...mockFooterLogos.research} />,
        socialMediaLinks: [
            {
                link: <a {...mockLinkProps}>youtube</a>,
                iconName: 'youtube'
            },
            {
                link: <a {...mockLinkProps}>facebook</a>,
                iconName: 'facebook'
            },
            {
                link: <a {...mockLinkProps}>twitter</a>,
                iconName: 'twitter'
            }
        ],
        legalSection1Text:
            '<p><i class="fas fa-american-sign-language-interpreting" aria-hidden="true"></i> Language assistance services are available free of charge during your Advocate Aurora Health visit. Just ask and assistance will be provided. Select your language to learn more.</p><p><a href="/language-assistance-services#spanish">Español</a> | <a href="/language-assistance-services#hmong">Hmoob</a> | <a href="/language-assistance-services#russian">Русский</a> | <a href="/language-assistance-services#albanian">Shqip</a> | <a href="/language-assistance-services#arabic">العربیة</a> | <a href="/language-assistance-services#bosnian">Bosanski</a> | <a class="lang-zawgyi" href="/language-assistance-services#burmese">ျမန္မာ</a> | <a href="/language-assistance-services#chinhakha">Lai (Chin) Hakha</a> | <a href="/language-assistance-services#chinfalam">Laizo (Chin) Falam</a> | <a href="/language-assistance-services#chinesesimplified">简体中文</a> | <a href="/language-assistance-services#chinesetraditional">正體中文</a> | <a href="/language-assistance-services#croatian">Hrvatski</a> | <a href="/language-assistance-services#french">Français</a> | <a href="/language-assistance-services#german">Deutsch</a> | <a href="/language-assistance-services#greek">Ελληνικά</a> | <a href="/language-assistance-services#gujarati">Gujarati</a> | <a href="/language-assistance-services#hindi">Hindi</a> | <a href="/language-assistance-services#italian">Italiano</a> | <a href="/language-assistance-services#japanese">日本語</a> | <a class="lang-knu" href="/language-assistance-services#karen">unDusdm</a> | <a href="/language-assistance-services#korean">한국어</a> | <a href="/language-assistance-services#lao">ພາສາລາວ</a> | <a href="/language-assistance-services#malay">Bahasa Melayu</a> | <a href="/language-assistance-services#malayalam">മലയാളം</a> | <a href="/language-assistance-services#pennsylvaniadutch">Pennsylvaanisch Deitsch</a> | <a href="/language-assistance-services#polish">Polski</a> | <a href="/language-assistance-services#punjabi">ਪੰਜਾਬੀ</a> | <a href="/language-assistance-services#rohingya">Ruáinga</a> | <a href="/language-assistance-services#romanian">Română</a> | <a href="/language-assistance-services#serbian">Srpski</a> | <a href="/language-assistance-services#somali">Af-Soomaali</a> | <a href="/language-assistance-services#swahili">Kiswahili</a> | <a href="/language-assistance-services#tagalog">Tagalog</a> | <a href="/language-assistance-services#urdu">اردو</a> | <a href="/language-assistance-services#vietnamese">Tiếng Việt</a></p>',
        copyRightText: '© 2024 Advocate Aurora Health',
        footerColumn: [
            {
                headline: 'Get in touch',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Contact us</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.com</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>aurorahealthcare.org</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>advocatehealth.org</a>
                    </>
                ]
            },
            {
                headline: 'About Advocate Aurora Research Institute',
                footerLinkItems: [
                    <>
                        <a {...mockLinkProps}>Internal Research Resources</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Research News</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>
                            Journal of PAtient-Centered Reserach and Reviews
                        </a>
                    </>,
                    <>
                        <a {...mockLinkProps}>
                            Research Subject Protection Program/IRB
                        </a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Careers</a>
                    </>,
                    <>
                        <a {...mockLinkProps}>Donate</a>
                    </>
                ]
            }
        ]
    }
};

export const mockCorporateFooter: Record<'default', CorporateFooterProps> = {
    default: mockCorporateFooterDefault
};
