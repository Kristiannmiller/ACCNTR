import { ComponentPropsWithRef, forwardRef } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Types
import { Expand } from '@/types';

// Styles
import { columnCVA, columnGridCVA } from './styles';
import {
    desktopBreakpoint,
    tabletBreakpoint,
    tabletLgBreakpoint
} from '@/static';

export const rowGaps = ['standard', 'even', 'none'] as const;

export const columnGridBreakpoints = [
    tabletBreakpoint,
    tabletLgBreakpoint,
    desktopBreakpoint
] as const;

export type ROW_GAP_TYPES = (typeof rowGaps)[number];

export type COLUMN_GRID_BREAKPOINT_TYPES =
    (typeof columnGridBreakpoints)[number];

export type ColumnProps = ComponentPropsWithRef<'div'> &
    Expand<VariantProps<typeof columnCVA>>;

export const Column = (props: ColumnProps) => {
    const {
        className,
        children,
        span = '1',
        spanTablet,
        spanTabletLg,
        spanDesktop,
        offset,
        offsetTablet,
        offsetTabletLg,
        offsetDesktop,
        ...rest
    } = props;

    return (
        <div
            className={cx(
                columnCVA({
                    span,
                    spanTablet,
                    spanTabletLg,
                    spanDesktop,
                    offset,
                    offsetTablet,
                    offsetTabletLg,
                    offsetDesktop
                }),
                className
            )}
            data-testid='column'
            {...rest}>
            {children}
        </div>
    );
};
Column.displayName = 'Column';

type DefaultColumnGridProps = Omit<
    VariantProps<typeof columnGridCVA>,
    'columns' | 'columnsTablet' | 'columnsTabletLg' | 'columnsDesktop'
> & {
    columns?: never;
    columnsTablet?: never;
    columnsTabletLg?: never;
    columnsDesktop?: never;
};

type CustomColumnGridProps = Omit<
    VariantProps<typeof columnGridCVA>,
    'columns'
> &
    Required<Pick<VariantProps<typeof columnGridCVA>, 'columns'>>;

export type ColumnGridProps = ComponentPropsWithRef<'div'> &
    (DefaultColumnGridProps | CustomColumnGridProps);

/**
 * **default grid**: 4 columns (mobile) | 12 columns (tablet, desktop).
 *
 * ---
 * To customize the number of columns from the default,
 * - pass the `columns` prop.
 * - `columnsTablet` and `columnsDesktop` props are not allowed unless `columns` is specified first.
 * ---
 *
 * All direct children of a ColumnGrid will span 1 column unless a <Column> element is used to customize the span.
 *
 */
export const ColumnGrid = forwardRef<HTMLDivElement, ColumnGridProps>(
    (props, ref) => {
        const {
            className,
            children,
            columns,
            columnsTablet,
            columnsTabletLg,
            columnsDesktop,
            centerOrphans,
            rowGap = 'standard',
            reverse,
            ...rest
        } = props;

        return (
            <div
                ref={ref}
                data-testid='column-grid'
                data-column-grid
                className={cx(
                    columnGridCVA({
                        columns,
                        columnsTablet,
                        columnsTabletLg,
                        columnsDesktop,
                        centerOrphans,
                        rowGap,
                        reverse
                    }),
                    className
                )}
                {...rest}>
                {children}
            </div>
        );
    }
);
ColumnGrid.displayName = 'ColumnGrid';
