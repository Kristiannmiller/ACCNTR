import { Meta, StoryObj } from '@storybook/react';

// Components
import { HeroStatisticsItem } from './HeroStatisticsItem';

// Mocks
import { mockHeroStatisticsItems } from '@/mocks/hero-statistics-item';

// Controls
import { textControl } from '@/sb-tools';

// Tests
import { testHeroStatisticsItem } from '@/tests';

export default {
    title: 'Design System/molecules/HeroStatisticsItem',
    component: HeroStatisticsItem,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=17788-493&t=l820mFm22Xpvkz9N-4'
        },
        controls: {
            include: Object.keys(mockHeroStatisticsItems.doctors)
        }
    },
    argTypes: {
        topText: textControl,
        statisticsNumber: textControl,
        suffix: textControl,
        bottomText: textControl
    }
} satisfies Meta<typeof HeroStatisticsItem>;

type Story = StoryObj<typeof HeroStatisticsItem>;

export const Doctors: Story = {
    args: mockHeroStatisticsItems.doctors,
    play: testHeroStatisticsItem.default
};

export const NoOptionalProps: Story = {
    args: mockHeroStatisticsItems.noOptionalProps,
    play: testHeroStatisticsItem.default
};

export const Teammates: Story = {
    args: mockHeroStatisticsItems.teammates,
    play: testHeroStatisticsItem.default
};

export const Nurses: Story = {
    args: mockHeroStatisticsItems.nurses,
    play: testHeroStatisticsItem.default
};

export const Patients: Story = {
    args: mockHeroStatisticsItems.patients,
    play: testHeroStatisticsItem.default
};

export const Hospitals: Story = {
    args: mockHeroStatisticsItems.hospitals,
    play: testHeroStatisticsItem.default
};

export const SitesOfCare: Story = {
    args: mockHeroStatisticsItems.sitesOfCare,
    play: testHeroStatisticsItem.default
};

export const CommunityBenefit: Story = {
    args: mockHeroStatisticsItems.communityBenefit,
    play: testHeroStatisticsItem.default
};

export const AnnualRevenue: Story = {
    args: mockHeroStatisticsItems.annualRevenue,
    play: testHeroStatisticsItem.default
};

export const SizeRanking: Story = {
    args: mockHeroStatisticsItems.sizeRanking,
    play: testHeroStatisticsItem.default
};
