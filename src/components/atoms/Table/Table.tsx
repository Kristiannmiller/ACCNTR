import {
    forwardRef,
    HTMLAttributes,
    TdHTMLAttributes,
    ThHTMLAttributes,
    useEffect,
    useRef,
    useState
} from 'react';
import { cx, VariantProps } from 'class-variance-authority';

// Components
import { RichText, SvgIcon, SvgIconType } from '@/components/';

// Styles
import { tableCellCVA, tableCVA } from './styles';
import styles from './Table.module.scss';

// Types
import { TABLE_CELL_ALIGNMENTS, Expand } from '@/types';

// Utils
import { debounce } from '@/utils';

/**
 * Table
 */
export type TableProps = HTMLAttributes<HTMLTableElement> &
    Expand<VariantProps<typeof tableCVA>>;

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
    const {
        className,
        isStriped = true,
        isSticky,
        tableStyle = 'standard',
        ...rest
    } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [shouldShowStickyShadow, setShouldShowStickyShadow] = useState(false);

    useEffect(() => {
        if (!window || !wrapperRef?.current || !isSticky) {
            return;
        }

        const hasOverflow = () =>
            (wrapperRef.current?.scrollWidth || 0) >
            (wrapperRef.current?.clientWidth || 0);

        setShouldShowStickyShadow(() => !!isSticky && hasOverflow());

        const handleResize = debounce(() => {
            setShouldShowStickyShadow(() => !!isSticky && hasOverflow());
        }, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSticky, wrapperRef]);

    return (
        <div
            ref={wrapperRef}
            className={cx(styles['table-wrapper'], className)}>
            <table
                ref={ref}
                className={cx(
                    styles['table-base'],
                    { [styles['sticky-shadow']]: shouldShowStickyShadow },
                    tableCVA({ isStriped, isSticky, tableStyle })
                )}
                data-testid='table'
                {...rest}
            />
        </div>
    );
});
Table.displayName = 'Table';

/**
 * TableHeader
 */
export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
    cellAlignment: Extract<
        TABLE_CELL_ALIGNMENTS,
        'default' | 'left' | 'center' | 'right'
    >;
};

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
    (props, ref) => {
        const { cellAlignment = 'default', className, ...rest } = props;
        return (
            <thead
                data-testid='table-header'
                ref={ref}
                className={cx(
                    styles['table-cell-base'],
                    tableCellCVA({ cellAlignment }),
                    className
                )}
                {...rest}
            />
        );
    }
);
TableHeader.displayName = 'TableHeader';

/**
 * TableBody
 */
const TableBody = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <tbody
            ref={ref}
            className={className}
            data-testid='table-body'
            {...rest}
        />
    );
});
TableBody.displayName = 'TableBody';

/**
 * TableFooter
 */
const TableFooter = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <tfoot
            ref={ref}
            className={className}
            {...rest}
        />
    );
});
TableFooter.displayName = 'TableFooter';

/**
 * TableRow
 */

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
    cellAlignment: Extract<
        TABLE_CELL_ALIGNMENTS,
        'default' | 'left' | 'center' | 'right'
    >;
};
const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
    (props, ref) => {
        const { cellAlignment = 'default', className, ...rest } = props;
        return (
            <tr
                data-testid='table-row'
                ref={ref}
                className={cx(tableCellCVA({ cellAlignment }), className)}
                {...rest}
            />
        );
    }
);
TableRow.displayName = 'TableRow';

/**
 * TableHead
 */
type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> &
    Expand<VariantProps<typeof tableCellCVA>>;
const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
    (props, ref) => {
        const { className, align = 'left', ...rest } = props;

        return (
            <th
                ref={ref}
                {...rest}
            />
        );
    }
);
TableHead.displayName = 'TableHead';

/**
 * TableCell
 */
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
    icon?: SvgIconType;
    cellAlignment: Extract<
        TABLE_CELL_ALIGNMENTS,
        'default' | 'left' | 'center' | 'right'
    >;
} & Expand<VariantProps<typeof tableCellCVA>>;

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
    (props, ref) => {
        const {
            className,
            icon,
            cellAlignment = 'default',
            children,
            ...rest
        } = props;

        return (
            <td
                data-testid='table-cell'
                ref={ref}
                className={cx(tableCellCVA({ cellAlignment }), className)}
                {...rest}>
                {icon && (
                    <SvgIcon
                        color='denimBlue'
                        icon={icon}
                    />
                )}
                {!icon && children && <RichText>{children}</RichText>}
            </td>
        );
    }
);
TableCell.displayName = 'TableCell';

/**
 * TableCaption
 */
const TableCaption = forwardRef<
    HTMLTableCaptionElement,
    HTMLAttributes<HTMLTableCaptionElement>
>((props, ref) => {
    const { className, ...rest } = props;

    return (
        <caption
            ref={ref}
            className={className}
            {...rest}
        />
    );
});
TableCaption.displayName = 'TableCaption';

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption
};
