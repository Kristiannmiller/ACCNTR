// Mocks
import { mockGlobalNavigation } from './global-navigation';

// Types
import { Sites } from '@/types';
import { HeaderProps } from '@/components';
import { mockUtilityNavigation } from './utility-navigation';

export const mockHeader: Record<Sites, HeaderProps> = {
    advocateChildrens: {
        utilityNavigation: mockUtilityNavigation.advocateChildrens,
        globalNavigation: mockGlobalNavigation.advocateChildrens
    },
    advocateHealthCare: {
        utilityNavigation: mockUtilityNavigation.auroraHealthCare,
        globalNavigation: mockGlobalNavigation.advocateHealthCare
    },
    auroraBayCare: {
        utilityNavigation: mockUtilityNavigation.auroraBayCare,
        globalNavigation: mockGlobalNavigation.auroraBayCare
    },
    auroraHealthCare: {
        utilityNavigation: mockUtilityNavigation.auroraHealthCare,
        globalNavigation: mockGlobalNavigation.auroraHealthCare
    },
    corporate: {
        utilityNavigation: undefined,
        globalNavigation: mockGlobalNavigation.corporate
    },
    employerSolutions: {
        utilityNavigation: undefined,
        globalNavigation: mockGlobalNavigation.employerSolutions
    },
    foundations: {
        utilityNavigation: mockUtilityNavigation.foundations,
        globalNavigation: mockGlobalNavigation.foundations
    },
    research: {
        utilityNavigation: mockUtilityNavigation.research,
        globalNavigation: mockGlobalNavigation.research
    }
};
