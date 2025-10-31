import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './ContentFeedForHealthNews.module.scss';

// Components
import {
    Carousel,
    ColumnGrid,
    ContentContainer,
    ContentFeedForHealthNewsCard,
    ContentFeedForHealthNewsCardProps
} from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

export type ContentFeedForHealthNewsProps = ComponentProps<
    typeof ContentContainer
> & {
    backgroundColor: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    cards: Array<ContentFeedForHealthNewsCardProps>;
    contentAlignment: Extract<ALIGNMENT_TYPES, 'left' | 'center'>;
    cta?: ReactNode;
    enableCarouselOnMobile: boolean;
    headline?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    shouldHideImagesOnMobile: boolean;
    shouldHideSupportCopyOnCards: boolean;
    supportCopy?: ReactNode;
    slideTimingInSeconds?: number;
};

export const ContentFeedForHealthNews = (
    props: ContentFeedForHealthNewsProps
) => {
    const {
        backgroundColor = 'white',
        cards: cardsProp = [],
        className,
        contentAlignment = 'center',
        cta,
        enableCarouselOnMobile,
        headline,
        headlineTag = 'p',
        shouldHideImagesOnMobile,
        shouldHideSupportCopyOnCards,
        supportCopy,
        slideTimingInSeconds = 6,
        ...rest
    } = props;

    /** Override `shouldHideImagesOnMobile` and `shouldHideSupportCopyOnCards` in each card */
    const cards = cardsProp.map((card, index) => (
        <ContentFeedForHealthNewsCard
            key={index}
            {...card}
            shouldHideImagesOnMobile={shouldHideImagesOnMobile}
            shouldHideSupportCopyOnCards={shouldHideSupportCopyOnCards}
        />
    ));

    return (
        <ContentContainer
            backgroundColor={backgroundColor}
            className={cx(
                {
                    [styles['mobile-carousel']]: enableCarouselOnMobile
                },
                className
            )}
            contentAlignment={contentAlignment}
            cta={cta}
            ctaStyle='link'
            data-testid='content-feed-for-health-news-container'
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            {...rest}>
            <ColumnGrid
                className={styles['cards-grid']}
                data-testid='content-feed-for-health-news-grid'
                columns='1'
                columnsTablet='2'
                columnsDesktop='4'>
                {cards}
            </ColumnGrid>
            {enableCarouselOnMobile && (
                <Carousel
                    data-testid='content-feed-for-health-news-carousel'
                    className={styles['cards-carousel']}
                    controlsClass={styles['carousel-controls']}
                    slides={cards}
                    slideTimingSeconds={slideTimingInSeconds}
                    controlsPosition='static'
                    backgroundColor={backgroundColor}
                />
            )}
        </ContentContainer>
    );
};
