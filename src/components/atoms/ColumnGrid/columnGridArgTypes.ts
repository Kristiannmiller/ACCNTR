import { columnGridBreakpoints, rowGaps } from './ColumnGrid';

// Static
import { fourColumns, sixColumns } from '@/static';

export const rowGapControl = {
    control: 'select',
    options: rowGaps
};

export const columnsControl = {
    control: 'select',
    options: [undefined, ...fourColumns]
};

export const columnsDesktopControl = {
    control: 'select',
    options: sixColumns
};

export const reverseControl = {
    control: 'select',
    options: [undefined, ...columnGridBreakpoints]
};
