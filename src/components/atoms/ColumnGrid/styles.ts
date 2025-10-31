import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Styles
import styles from './ColumnGrid.module.scss';

// Types
import {
    BOOLEAN_TYPE,
    FOUR_COLUMN_TYPES,
    SIX_COLUMN_TYPES,
    TWELVE_COLUMN_TYPES
} from '@/types';
import { COLUMN_GRID_BREAKPOINT_TYPES, ROW_GAP_TYPES } from './ColumnGrid';

export const columnGridCVA = cva(styles['column-grid'], {
    variants: {
        rowGap: createCvaOptions<ROW_GAP_TYPES>({
            even: styles['row-gap-even'],
            none: styles['row-gap-none'],
            standard: ''
        }),
        centerOrphans: createCvaOptions<BOOLEAN_TYPE>({
            true: styles['center-orphans'],
            false: ''
        }),
        columns: createCvaOptions<FOUR_COLUMN_TYPES>({
            1: styles['cols-1'],
            2: styles['cols-2'],
            3: styles['cols-3'],
            4: styles['cols-4']
        }),
        columnsTablet: createCvaOptions<FOUR_COLUMN_TYPES>({
            1: styles['cols-tablet-1'],
            2: styles['cols-tablet-2'],
            3: styles['cols-tablet-3'],
            4: styles['cols-tablet-4']
        }),
        columnsTabletLg: createCvaOptions<SIX_COLUMN_TYPES>({
            1: styles['cols-tablet-lg-1'],
            2: styles['cols-tablet-lg-2'],
            3: styles['cols-tablet-lg-3'],
            4: styles['cols-tablet-lg-4'],
            5: styles['cols-tablet-lg-5'],
            6: styles['cols-tablet-lg-6']
        }),
        columnsDesktop: createCvaOptions<SIX_COLUMN_TYPES>({
            1: styles['cols-desktop-1'],
            2: styles['cols-desktop-2'],
            3: styles['cols-desktop-3'],
            4: styles['cols-desktop-4'],
            5: styles['cols-desktop-5'],
            6: styles['cols-desktop-6']
        }),
        reverse: createCvaOptions<COLUMN_GRID_BREAKPOINT_TYPES>({
            tablet: styles['reverse-tablet'],
            tabletLg: styles['reverse-tablet-lg'],
            desktop: styles['reverse-desktop']
        })
    }
});

export const columnCVA = cva('', {
    variants: {
        span: createCvaOptions<FOUR_COLUMN_TYPES>({
            1: styles['col-1-4'],
            2: styles['col-2-4'],
            3: styles['col-3-4'],
            4: styles['col-4-4']
        }),
        spanTablet: createCvaOptions<TWELVE_COLUMN_TYPES>({
            1: styles['col-tablet-1-12'],
            2: styles['col-tablet-2-12'],
            3: styles['col-tablet-3-12'],
            4: styles['col-tablet-4-12'],
            5: styles['col-tablet-5-12'],
            6: styles['col-tablet-6-12'],
            7: styles['col-tablet-7-12'],
            8: styles['col-tablet-8-12'],
            9: styles['col-tablet-9-12'],
            10: styles['col-tablet-10-12'],
            11: styles['col-tablet-11-12'],
            12: styles['col-tablet-12-12']
        }),
        spanTabletLg: createCvaOptions<TWELVE_COLUMN_TYPES>({
            1: styles['col-tablet-lg-1-12'],
            2: styles['col-tablet-lg-2-12'],
            3: styles['col-tablet-lg-3-12'],
            4: styles['col-tablet-lg-4-12'],
            5: styles['col-tablet-lg-5-12'],
            6: styles['col-tablet-lg-6-12'],
            7: styles['col-tablet-lg-7-12'],
            8: styles['col-tablet-lg-8-12'],
            9: styles['col-tablet-lg-9-12'],
            10: styles['col-tablet-lg-10-12'],
            11: styles['col-tablet-lg-11-12'],
            12: styles['col-tablet-lg-12-12']
        }),
        spanDesktop: createCvaOptions<TWELVE_COLUMN_TYPES>({
            1: styles['col-desktop-1-12'],
            2: styles['col-desktop-2-12'],
            3: styles['col-desktop-3-12'],
            4: styles['col-desktop-4-12'],
            5: styles['col-desktop-5-12'],
            6: styles['col-desktop-6-12'],
            7: styles['col-desktop-7-12'],
            8: styles['col-desktop-8-12'],
            9: styles['col-desktop-9-12'],
            10: styles['col-desktop-10-12'],
            11: styles['col-desktop-11-12'],
            12: styles['col-desktop-12-12']
        }),
        offset: createCvaOptions<FOUR_COLUMN_TYPES>({
            1: styles['col-offset-1-4'],
            2: styles['col-offset-2-4'],
            3: styles['col-offset-3-4'],
            4: styles['col-offset-4-4']
        }),
        offsetTablet: createCvaOptions<TWELVE_COLUMN_TYPES | '0'>({
            0: styles['col-offset-tablet-0-12'],
            1: styles['col-offset-tablet-1-12'],
            2: styles['col-offset-tablet-2-12'],
            3: styles['col-offset-tablet-3-12'],
            4: styles['col-offset-tablet-4-12'],
            5: styles['col-offset-tablet-5-12'],
            6: styles['col-offset-tablet-6-12'],
            7: styles['col-offset-tablet-7-12'],
            8: styles['col-offset-tablet-8-12'],
            9: styles['col-offset-tablet-9-12'],
            10: styles['col-offset-tablet-10-12'],
            11: styles['col-offset-tablet-11-12'],
            12: styles['col-offset-tablet-12-12']
        }),
        offsetTabletLg: createCvaOptions<TWELVE_COLUMN_TYPES | '0'>({
            0: styles['col-offset-tablet-lg-0-12'],
            1: styles['col-offset-tablet-lg-1-12'],
            2: styles['col-offset-tablet-lg-2-12'],
            3: styles['col-offset-tablet-lg-3-12'],
            4: styles['col-offset-tablet-lg-4-12'],
            5: styles['col-offset-tablet-lg-5-12'],
            6: styles['col-offset-tablet-lg-6-12'],
            7: styles['col-offset-tablet-lg-7-12'],
            8: styles['col-offset-tablet-lg-8-12'],
            9: styles['col-offset-tablet-lg-9-12'],
            10: styles['col-offset-tablet-lg-10-12'],
            11: styles['col-offset-tablet-lg-11-12'],
            12: styles['col-offset-tablet-lg-12-12']
        }),
        offsetDesktop: createCvaOptions<TWELVE_COLUMN_TYPES | '0'>({
            0: styles['col-offset-desktop-0-12'],
            1: styles['col-offset-desktop-1-12'],
            2: styles['col-offset-desktop-2-12'],
            3: styles['col-offset-desktop-3-12'],
            4: styles['col-offset-desktop-4-12'],
            5: styles['col-offset-desktop-5-12'],
            6: styles['col-offset-desktop-6-12'],
            7: styles['col-offset-desktop-7-12'],
            8: styles['col-offset-desktop-8-12'],
            9: styles['col-offset-desktop-9-12'],
            10: styles['col-offset-desktop-10-12'],
            11: styles['col-offset-desktop-11-12'],
            12: styles['col-offset-desktop-12-12']
        })
    }
});
