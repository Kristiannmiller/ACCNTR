import {
    RichText as JSSRichText,
    Text as JSSText
} from '@sitecore-jss/sitecore-jss-react';

// Types
import { ReputationScheduleCtaProps } from '@/components';

const mockReputationScheduleCtaDefault: ReputationScheduleCtaProps = {
    buttonText: <JSSText field={{ value: 'Schedule online' }} />,
    errorMessage: (
        <JSSRichText
            field={{ value: 'Enter city, state and/or ZIP is required' }}
        />
    ),
    filterType: 'specialties',
    filterText: 'Adolescent Psychiatry',
    headline: <JSSText field={{ value: 'Reputation Schedule CTA' }} />,
    headlineTag: 'h2',
    icon: 'instagram',
    placeholderText: 'Lorem ipsum dolar set (lorem ipsum)',
    searchLabel: <JSSText field={{ value: 'Form Label' }} />,
    searchType: 'Doctor',
    searchUrl: 'https://www.advocatehealth.com/find-a-doctor',
    supportCopy: (
        <JSSRichText
            field={{
                value: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>'
            }}
        />
    ),
    topColorBar: 'denimBlue'
};

export const mockReputationScheduleCta: Record<
    | 'abmcSearch'
    | 'advocateACHSearch'
    | 'cardiovascularSearch'
    | 'certifiedNurseMidwifeSearch'
    | 'childrensHealthPhysicalTherapySearch'
    | 'dentistrySearch'
    | 'endocrinologySearch'
    | 'locationSearch'
    | 'oralMaxillofacialSurgerySearch',
    ReputationScheduleCtaProps
> = {
    abmcSearch: {
        ...mockReputationScheduleCtaDefault,
        searchUrl: 'https://www.aurorahealthcare.org/doctors/',
        filterType: 'marketing_specialties',
        filterText: 'Athletic Training',
        searchLabel: ''
    },
    advocateACHSearch: mockReputationScheduleCtaDefault,
    cardiovascularSearch: {
        ...mockReputationScheduleCtaDefault,
        filterType: 'specialties',
        filterText: 'Cardiovascular & Thoracic Surgery'
    },
    certifiedNurseMidwifeSearch: {
        ...mockReputationScheduleCtaDefault,
        searchUrl: 'https://www.aurorahealthcare.org/doctors/',
        filterType: 'marketing_specialties',
        filterText: 'Certified Nurse Midwife (CNM)'
    },
    childrensHealthPhysicalTherapySearch: {
        ...mockReputationScheduleCtaDefault,
        searchUrl: 'https://www.aurorahealthcare.org/doctors/',
        filterType: 'marketing_specialties',
        filterText: "Children's Health Physical Therapy"
    },
    dentistrySearch: {
        ...mockReputationScheduleCtaDefault,
        filterType: 'specialties',
        filterText: 'Dentistry-Endodontic'
    },
    endocrinologySearch: {
        ...mockReputationScheduleCtaDefault,
        filterType: 'specialties',
        filterText: 'Endocrinology, Diabetes and Metabolism'
    },
    locationSearch: {
        ...mockReputationScheduleCtaDefault,
        filterType: 'services',
        filterText: 'Mammography',
        searchUrl: 'https://www.aurorahealthcare.org/locations/',
        searchType: 'Location'
    },
    oralMaxillofacialSurgerySearch: {
        ...mockReputationScheduleCtaDefault,
        filterType: 'specialties',
        filterText: 'Oral/Maxillofacial Surgery'
    }
};
