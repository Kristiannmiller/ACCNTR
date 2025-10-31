import { ComponentProps } from 'react';

// Components
import { Container } from '@/components';

// Styles
import styles from './NewsListing.module.scss';

export type NewsListingProps = ComponentProps<typeof Container>;

export const NewsListing = (props: NewsListingProps) => {
    const { children, className, ...rest } = props;
    return (
        <Container
            className={styles['news-listing']}
            data-testid='news-listing'
            {...rest}>
            <div className={styles['card-list']}>{children}</div>
        </Container>
    );
};
