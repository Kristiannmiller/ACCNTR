import { ComponentProps } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Anchor, BackgroundColor, Card, RichText } from '@/components';

// Styles
import styles from './ContentFeedForHealthNewsCard.module.scss';

export type ContentFeedForHealthNewsCardProps = ComponentProps<typeof Card> & {
    excerpt: string;
    headline: string;
    shouldHideImagesOnMobile: boolean;
    shouldHideSupportCopyOnCards: boolean;
    imageSrc: string;
    url: string;
};

export const ContentFeedForHealthNewsCard = (
    props: ContentFeedForHealthNewsCardProps
) => {
    const {
        className,
        excerpt,
        headline,
        shouldHideImagesOnMobile,
        shouldHideSupportCopyOnCards,
        imageSrc,
        url,
        ...rest
    } = props;

    return (
        <BackgroundColor backgroundColor='transparent'>
            <Card
                elevation='none'
                className={cx(
                    styles['content-feed-for-health-news-card'],
                    className
                )}
                data-testid='content-feed-for-health-news-card'
                {...rest}>
                <img
                    className={cx({
                        [styles['hide-card-img']]: shouldHideImagesOnMobile
                    })}
                    data-testid='content-feed-for-health-news-card-image'
                    src={imageSrc}
                    alt={headline}
                />
                <Anchor
                    className={styles['card-title-link']}
                    data-testid='content-feed-for-health-news-card-link'
                    fontStyle={'smLink'}
                    href={url}
                    target={'_blank'}>
                    {headline}
                </Anchor>
                {!shouldHideSupportCopyOnCards && excerpt && (
                    <RichText
                        className={styles['card-excerpt']}
                        data-testid='content-feed-for-health-news-card-excerpt'>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: excerpt
                            }}
                        />
                    </RichText>
                )}
            </Card>
        </BackgroundColor>
    );
};
