// Types
import { SearchResultSummaryProps } from '@/components';

const mockSearchResultSummaryDefault: SearchResultSummaryProps = {
    numberOfResult: '0-0',
    resultText: 'Results',
    searchText: 'Lorem Ipsum',
    totalNumberOfResult: 'of 000 for'
};

export const mockSearchResultSummary: Record<
    'default',
    SearchResultSummaryProps
> = {
    default: mockSearchResultSummaryDefault
};
