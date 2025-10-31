import { ComponentProps } from 'react';

// Components
import { Container, Text } from '@/components';

// Styles
import styles from './SearchResultSummary.module.scss';

export type SearchResultSummaryProps = ComponentProps<typeof Container> & {
    numberOfResult: string;
    resultText: string;
    searchText: string;
    totalNumberOfResult: string;
};

export const SearchResultSummary = (props: SearchResultSummaryProps) => {
    const {
        className,
        numberOfResult,
        resultText,
        searchText,
        totalNumberOfResult,
        ...rest
    } = props;
    return (
        <Container
            className={className}
            {...rest}>
            <div
                data-testid='search-result'
                className={styles['search-result']}>
                <Text data-testid='result-text'> {resultText} </Text>
                <Text
                    data-testid='number-of-result'
                    fontStyle={'smLinkMobile'}>
                    {numberOfResult}
                </Text>
                <Text data-testid='total-result'>{totalNumberOfResult}</Text>
                <Text
                    data-testid='search-text'
                    fontStyle={'smLinkMobile'}>
                    {searchText}
                </Text>
            </div>
        </Container>
    );
};
