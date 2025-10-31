import { COLOR_TYPES } from '@/types';

export const shouldUseInverseText = (backgroundColor?: COLOR_TYPES) => {
    switch (backgroundColor) {
        case 'white':
        case 'whiteSmoke':
        case 'achOrange':
        case 'utilityInfo':
        case 'utilityWarning':
        case 'utilityNegative':
        case 'utilityPositive':
        case 'utilityUtility':
            return false;
        default:
            return true;
    }
};
