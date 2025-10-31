// Types
import { SearchPaginationProps } from '@/components';

const mockSearchPaginationDefault: SearchPaginationProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log('Page changed to:', page),
    nextPageActionText: 'Go to next page',
    previousPageActionText: 'Go to previous page'
};

export const mockSearchPagination: Record<
    'default' | 'threePages',
    SearchPaginationProps
> = {
    default: mockSearchPaginationDefault,
    threePages: {
        ...mockSearchPaginationDefault,
        totalPages: 3
    }
};
