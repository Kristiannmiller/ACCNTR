// Types
import { FindALocationProps } from '@/components';

const auroraLocationTypeItems = [
    'Anticoagulation Clinic',
    'Aurora Health at Home',
    'Behavioral Health',
    'Birthing Center',
    'Cancer Care',
    'Clinic',
    'Emergency Department',
    'Fitness',
    'Heart Scan',
    'Hospice',
    'Hospital',
    'Hyperbaric and Wound Care',
    'Laboratory',
    'Mammography',
    'Pharmacy',
    'Physical Therapy & Sports Health',
    'Sleep Medicine',
    'Surgery Center',
    'Urgent Care',
    'Vaccine Center',
    'Vision',
    'Walgreens'
];

const advocateHealthLocationTypeItems = [
    "Advocate Children's Medical Group",
    'Advocate Heart Institute',
    'Advocate Medical Group',
    'Emergency Services',
    'Health and Wellness Centers',
    'Heart Scan',
    'Hospitals',
    'Imaging Centers',
    'Immediate Care Center',
    'Laboratory',
    'Mammography',
    'Outpatient Centers',
    'Pharmacy',
    'Rehabilitation and Therapy Centers',
    'Specialty Centers/Institutes',
    'Surgical Centers',
    'Walgreens'
];

const mockFindALocationDefault: Omit<
    FindALocationProps,
    'locationTypeItems' | 'searchUrl'
> = {
    filterType: 'services',
    getPreciseLocationTriggerTitle: 'Use my current location',
    googleMapsAPIKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
    legendLabel: 'Find a location',
    locationInputPlaceholder: 'City, state or ZIP code',
    locationInvalidErrorMessage: 'Invalid location',
    locationRequiredErrorMessage: 'A city, state or ZIP code is required.',
    locationTypeLabel: 'Select a location type',
    searchAPIErrorMessage: 'Unable to retrieve location.',
    submitButtonTitle: 'See search results'
};

const mockAdvocateHealthFindALocation: FindALocationProps = {
    ...mockFindALocationDefault,
    locationTypeItems: advocateHealthLocationTypeItems,
    searchUrl: 'https://www.advocatehealth.com/find-a-location/'
};

const mockAuroraFindALocation: FindALocationProps = {
    ...mockFindALocationDefault,
    locationTypeItems: auroraLocationTypeItems,
    searchUrl: 'https://www.aurorahealthcare.org/locations/'
};

export const mockFindALocation: Record<
    'aurora' | 'advocateHealth',
    FindALocationProps
> = {
    aurora: mockAuroraFindALocation,
    advocateHealth: mockAdvocateHealthFindALocation
};
