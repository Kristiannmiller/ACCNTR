import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { Anchor, RichText, Card, Text } from '@/components';

// Styles
import styles from './NewsListingCard.module.scss';

export type NewsListingCardProps = ComponentProps<typeof Card> & {
    categoryName?: string;
    headline: ReactNode;
    href?: string;
    image?: ReactNode;
    isFeatured?: boolean;
    supportCopyText: ReactNode;
};

export const NewsListingCard = (props: NewsListingCardProps) => {
    const {
        categoryName,
        className,
        headline,
        href,
        image,
        isFeatured,
        supportCopyText,
        ...rest
    } = props;

    return (
        <Card
            elevation='none'
            className={cx(
                styles['news-listing-card'],
                {
                    [styles['is-featured']]: isFeatured
                },
                className
            )}
            data-testid='news-listing-card'
            {...rest}>
            {/* If there is not a categoryName we can show the image.
                If there is not a categoryName AND there is not an image, render an empty div to preserve the space. */}
            {!categoryName &&
                (image ? (
                    image
                ) : (
                    <div className={styles['empty-image-placeholder']} />
                ))}

            <div className={styles['content-container']}>
                {!categoryName ? (
                    <Anchor
                        className={styles['headline']}
                        data-testid='news-listing-card-headline'>
                        {headline}
                    </Anchor>
                ) : (
                    <div className={styles['headline-wrapper']}>
                        <Anchor href={href}>
                            <>
                                {headline && (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: headline
                                        }}
                                    />
                                )}
                            </>
                        </Anchor>
                        {categoryName && (
                            <Text
                                fontStyle='smParagraphBold'
                                data-testid='news-listing-card-category-name'>
                                ({categoryName})
                            </Text>
                        )}
                    </div>
                )}

                <RichText
                    className={styles['support-copy']}
                    data-testid='news-listing-card-support-copy'>
                    {supportCopyText}
                </RichText>
            </div>
        </Card>
    );
};
