import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './ContentFeedWithFeaturedCard.module.scss';

// Components
import {
    Anchor,
    ContentFeedGrid,
    ContentFeedCardProps,
    Container,
    RichText,
    Text
} from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type ContentFeedWithFeaturedCardProps = ComponentProps<
    typeof Container
> & {
    backgroundColor: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    cards: Array<ContentFeedCardProps>;
    contentAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    cta?: ReactNode;
    ctaAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    supportCopy?: ReactNode;
};

export const ContentFeedWithFeaturedCard = (
    props: ContentFeedWithFeaturedCardProps
) => {
    const {
        backgroundColor = 'whiteSmoke',
        cards,
        className,
        contentAlignment = 'center',
        cta,
        ctaAlignment = 'center',
        headline,
        headlineTag = 'p',
        supportCopy,
        ...rest
    } = props;
    return (
        <Container
            backgroundColor={backgroundColor}
            className={cx(
                styles['content-feed-with-featured-card-container'],
                className
            )}
            data-testid='content-feed-with-featured-card-container'
            {...rest}>
            <div>
                {headline && (
                    <Text
                        className={cx(styles['headline'], {
                            [styles['text-center']]:
                                contentAlignment === 'center'
                        })}
                        data-testid='content-feed-with-featured-card-headline'
                        tag={headlineTag}>
                        {headline}
                    </Text>
                )}
                {supportCopy && (
                    <RichText
                        className={cx(styles['support-copy'], {
                            [styles['text-center']]:
                                contentAlignment === 'center'
                        })}
                        data-testid='content-feed-with-featured-card-support-copy'>
                        {supportCopy}
                    </RichText>
                )}

                <ContentFeedGrid
                    cards={cards.map((card, index) => ({
                        isFeatured: index === 0,
                        ...card
                    }))}
                    className={styles['content-feed-grid']}
                />

                {cta && (
                    <Anchor
                        buttonStyle='link'
                        className={cx(styles['cta'], {
                            [styles['cta-center']]: ctaAlignment === 'center'
                        })}
                        data-testid='content-feed-with-featured-card-cta'>
                        {cta}
                    </Anchor>
                )}
            </div>
        </Container>
    );
};
