import { Meta, StoryObj } from '@storybook/react';

// Components
import { allFontAwesomeIcons, ReputationScheduleCta } from '@/components';

// Static
import { headlineTags } from '@/static';

// Mocks
import { mockReputationScheduleCta } from '@/mocks/reputation-schedule-cta';

// Tests
import { testReputationScheduleCta } from '@/tests';

// Controls
import { textControl } from '@/sb-tools';

export default {
    title: 'Design System/molecules/C48 - ReputationScheduleCta',
    component: ReputationScheduleCta,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/OvsPWuRi4IKkkx7mwbcDBm/Advocate-Design-System---MASTER?node-id=11215-7169&t=l820mFm22Xpvkz9N-4'
        },
        controls: {
            include: Object.keys(mockReputationScheduleCta.advocateACHSearch)
        }
    },
    argTypes: {
        headlineTag: {
            default: 'p',
            control: 'select',
            options: headlineTags
        },
        filterType: {
            default: 'Specialties',
            description:
                "'Specialties' is used on the Advocate system and 'Marketing Specialties' is used on the Aurora system. 'Services' is used for Location Type search.",
            control: 'select',
            options: ['Specialties', 'Marketing Specialties', 'Services']
        },
        icon: {
            default: 'instagram',
            control: 'select',
            options: allFontAwesomeIcons
        },
        searchType: {
            default: 'Doctor',
            description:
                'It will allow the user to search for a location or doctor based on pre-configured filters.',
            control: 'select',
            options: ['Location', 'Doctor']
        },
        topColorBar: {
            default: 'denimBlue',
            control: 'select',
            options: [
                'none',
                'wellnessBlue',
                'denimBlue',
                'childrensBlue',
                'childrensGreen',
                'childrensOrange',
                'childrensPurple',
                'childrensYellow',
                'childrensAlliance'
            ]
        },
        buttonText: textControl,
        errorMessage: textControl,
        headline: textControl,
        searchLabel: textControl,
        supportCopy: textControl
    }
} satisfies Meta<typeof ReputationScheduleCta>;

type Story = StoryObj<typeof ReputationScheduleCta>;

export const AbmcSearch: Story = {
    args: mockReputationScheduleCta.abmcSearch,
    play: testReputationScheduleCta.default
};

export const AdvocateACHSearch: Story = {
    args: mockReputationScheduleCta.advocateACHSearch,
    play: testReputationScheduleCta.default
};

export const CardiovascularSearch: Story = {
    args: mockReputationScheduleCta.cardiovascularSearch,
    play: testReputationScheduleCta.default
};

export const CertifiedNurseMidwifeSearch: Story = {
    args: mockReputationScheduleCta.certifiedNurseMidwifeSearch,
    play: testReputationScheduleCta.default
};

export const ChildrensHealthPhysicalTherapySearch: Story = {
    args: mockReputationScheduleCta.childrensHealthPhysicalTherapySearch,
    play: testReputationScheduleCta.default
};

export const DentistrySearch: Story = {
    args: mockReputationScheduleCta.dentistrySearch,
    play: testReputationScheduleCta.default
};

export const EndocrinologySearch: Story = {
    args: mockReputationScheduleCta.endocrinologySearch,
    play: testReputationScheduleCta.default
};

export const LocationSearch: Story = {
    args: mockReputationScheduleCta.locationSearch,
    play: testReputationScheduleCta.default
};

export const OralMaxillofacialSurgerySearch: Story = {
    args: mockReputationScheduleCta.oralMaxillofacialSurgerySearch,
    play: testReputationScheduleCta.default
};
