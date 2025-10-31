import {
    Text as JSSText,
    Link as JSSLink,
    RichText as JSSRichText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { HeroStatisticsProps } from '@/components';

// Components
import { HeroStatisticsItem } from '@/components';

// Mocks
import { mockHeroStatisticsItems } from './hero-statistics-item';

const mockHeroStatisticsDefault: HeroStatisticsProps = {
    backgroundColor: 'white',
    contentAlignments: 'center',
    ctaAlignment: 'center',
    numberOfColumnsMobile: '2',
    numberOfColumns: '3',
    shouldShowColumnDividers: true,
    headline: <JSSText field={{ value: 'Hero Statistics' }} />,
    headlineTag: 'p',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    supportCopyBottom: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
            }}
        />
    ),
    cta: <JSSLink field={{ href: '#', text: 'Learn More' }} />,
    children: (
        <>
            <HeroStatisticsItem {...mockHeroStatisticsItems.teammates} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.doctors} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.nurses} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.patients} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.noOptionalProps} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.hospitals} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.sitesOfCare} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.communityBenefit} />
            <HeroStatisticsItem {...mockHeroStatisticsItems.sizeRanking} />
        </>
    )
};

export const mockHeroStatistics: Record<
    'default' | 'noOptionalProps' | 'noSupportCopy',
    HeroStatisticsProps
> = {
    default: mockHeroStatisticsDefault,
    noOptionalProps: {
        ...mockHeroStatisticsDefault,
        headline: undefined,
        supportCopy: undefined,
        supportCopyBottom: undefined,
        cta: undefined
    },
    noSupportCopy: {
        ...mockHeroStatisticsDefault,
        headlineTag: 'h2',
        supportCopy: undefined,
        supportCopyBottom: undefined,
        numberOfColumnsMobile: '2',
        numberOfColumns: '4',
        children: (
            <>
                <HeroStatisticsItem {...mockHeroStatisticsItems.teammates} />
                <HeroStatisticsItem {...mockHeroStatisticsItems.doctors} />
                <HeroStatisticsItem {...mockHeroStatisticsItems.nurses} />
                <HeroStatisticsItem {...mockHeroStatisticsItems.patients} />
            </>
        )
    }
};
