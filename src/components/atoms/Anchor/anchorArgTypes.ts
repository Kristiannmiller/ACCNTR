import { anchorFontStyles, anchorUnderlines } from './Anchor';

// Utils
import { booleanControl } from '@/sb-tools';

export const fontStyleControl = {
    control: 'select',
    options: [undefined, ...anchorFontStyles]
};

export const anchorUnderlineControl = {
    control: 'select',
    options: anchorUnderlines
};

export const anchorDisableControl = {
    booleanControl
};
