import { ReactNode, ComponentProps } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './ContentFeedGrid.module.scss';

// Components
import { Anchor, BackgroundColor, Card, RichText, Text } from '@/components';

export type ContentFeedCardProps = {
    date: string;
    image: ReactNode;
    link: ReactNode;
    excerpt?: ReactNode;
    isFeatured?: boolean;
};

export type ContentFeedGridProps = ComponentProps<'div'> & {
    cards: Array<ContentFeedCardProps>;
};

export const ContentFeedGrid = (props: ContentFeedGridProps) => {
    const { cards, className, ...rest } = props;
    return (
        <div
            className={cx(styles['grid'], className)}
            data-testid={'content-feed-grid'}
            {...rest}>
            {cards.map((card, index) => {
                const { image, date, link, excerpt, isFeatured } = card;
                return (
                    <BackgroundColor
                        backgroundColor='white'
                        key={index}>
                        <Card
                            elevation='elevation1'
                            className={cx({
                                [styles['featured-card']]: isFeatured,
                                [styles['card']]: !isFeatured
                            })}
                            data-testid={`content-feed-grid-card`}>
                            {image}
                            <div className={styles['card-content']}>
                                <Text
                                    className={styles['card-date']}
                                    data-testid={`content-feed-grid-card-date`}
                                    tag='span'>
                                    {date}
                                </Text>
                                <Anchor
                                    buttonStyle='link'
                                    className={styles['card-link']}
                                    data-testid={`content-feed-grid-card-link`}>
                                    {link}
                                </Anchor>
                                {isFeatured && excerpt && (
                                    <RichText
                                        className={styles['card-excerpt']}
                                        data-testid={`content-feed-grid-card-excerpt`}>
                                        {excerpt}
                                    </RichText>
                                )}
                            </div>
                        </Card>
                    </BackgroundColor>
                );
            })}
        </div>
    );
};
