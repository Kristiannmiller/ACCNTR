import { ComponentProps, ReactElement, ReactNode } from 'react';

// Components
import { ContentContainer, ColumnGrid } from '@/components';

// Types
import {
    ALIGNMENT_TYPES,
    BACKGROUND_COLOR_TYPES,
    THREE_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

// Styles
import styles from './LocationCards.module.scss';

export type LocationCardsDataProps = {
    headline?: ReactNode;
    supportCopy?: ReactNode;
    bottomSupportCopy?: ReactNode;
    cta?: ReactElement;
    headlineTag?: HEADLINE_TAG_TYPES;
    contentAlignment?: Extract<ALIGNMENT_TYPES, 'center' | 'left'>;
    backgroundColor?: Extract<BACKGROUND_COLOR_TYPES, 'white' | 'whiteSmoke'>;
    numberOfColumns?: THREE_COLUMN_TYPES;
};

export type LocationCardsProps = ComponentProps<typeof ContentContainer> &
    LocationCardsDataProps;

export const LocationCards = (props: LocationCardsProps) => {
    const {
        headline,
        supportCopy,
        bottomSupportCopy,
        cta,
        headlineTag = 'p',
        contentAlignment = 'center',
        backgroundColor = 'whiteSmoke',
        children,
        numberOfColumns = '3',
        className,
        ...rest
    } = props;
    return (
        <ContentContainer
            data-testid='location-cards-container'
            variant='containedSmall'
            backgroundColor={backgroundColor}
            className={className}
            contentAlignment={contentAlignment}
            headline={headline}
            headlineTag={headlineTag}
            supportCopy={supportCopy}
            supportCopyBottom={bottomSupportCopy}
            cta={cta}
            ctaAlignment={contentAlignment}
            ctaStyle='link'
            {...rest}>
            <ColumnGrid
                className={styles['location-cards-grid']}
                columns={'1'}
                columnsTablet={numberOfColumns === '1' ? '1' : '2'}
                columnsDesktop={numberOfColumns}
                data-testid='location-cards-grid'>
                {children}
            </ColumnGrid>
        </ContentContainer>
    );
};
