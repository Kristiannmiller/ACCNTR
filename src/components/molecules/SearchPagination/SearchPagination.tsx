import { ComponentProps, useMemo } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { SvgIcon, Text } from '@/components';

// Styles
import styles from './SearchPagination.module.scss';

// Types
type VisiblePage = number | '...';

export type SearchPaginationProps = ComponentProps<'div'> & {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    nextPageActionText: string;
    previousPageActionText: string;
};

const getVisiblePages = (page: number, total: number): VisiblePage[] => {
    if (total < 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    } else {
        if (page <= 3) {
            return [1, 2, 3, '...', total];
        } else if (page >= total - 2) {
            return [1, '...', total - 2, total - 1, total];
        } else {
            return [1, '...', page, '...', total];
        }
    }
};

export const SearchPagination = (props: SearchPaginationProps) => {
    const {
        className,
        currentPage,
        nextPageActionText = 'Go to next page',
        onPageChange,
        previousPageActionText = 'Go to previous page',
        totalPages,
        ...rest
    } = props;

    const visiblePages = useMemo(
        () => getVisiblePages(currentPage, totalPages),
        [currentPage, totalPages]
    );

    const changePage = (page: number) => {
        onPageChange(page);

        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const isOnFirstPage = currentPage === 1;
    const isOnLastPage = currentPage === totalPages;

    return (
        <div
            className={cx(styles['search-pagination-base'], className)}
            data-testid='search-pagination'
            {...rest}>
            {visiblePages?.length > 1 && (
                <button
                    disabled={isOnFirstPage}
                    onClick={() => changePage(currentPage - 1)}
                    title={previousPageActionText}>
                    <SvgIcon icon='chevronLeft' />
                </button>
            )}
            {visiblePages.map((page, idx) =>
                typeof page === 'number' ? (
                    <button
                        key={idx}
                        className={page === currentPage ? styles.active : ''}
                        onClick={() => changePage(page)}>
                        {page}
                    </button>
                ) : (
                    <Text
                        key={idx}
                        fontStyle='smParagraph'>
                        {page}
                    </Text>
                )
            )}
            {visiblePages?.length > 1 && (
                <button
                    disabled={isOnLastPage}
                    onClick={() => changePage(currentPage + 1)}
                    title={nextPageActionText}>
                    <SvgIcon icon='chevronRight' />
                </button>
            )}
        </div>
    );
};
