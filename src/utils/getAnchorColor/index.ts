// Types
import { ANCHOR_COLOR_TYPES, BACKGROUND_COLOR_TYPES } from '@/types';

export type GetAnchorColorOptions = {
    backgroundColor: BACKGROUND_COLOR_TYPES;
};

export const getAnchorColor: (
    options: GetAnchorColorOptions
) => ANCHOR_COLOR_TYPES = (options) => {
    const { backgroundColor } = options;

    switch (backgroundColor) {
        case 'denimBlue':
        case 'wellnessBlue':
        case 'cchaPurple':
            return 'inverse';
        case 'achOrange':
        case 'utilityInfo':
        case 'utilityNegative':
        case 'utilityPositive':
        case 'utilityWarning':
        case 'utilityUtility':
            return 'alt';
        default:
        case 'white':
        case 'whiteSmoke':
            return 'default';
    }
};
