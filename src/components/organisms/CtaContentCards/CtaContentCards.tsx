import { ComponentProps, ReactElement, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Types
import {
    ALIGNMENT_TYPES,
    COLOR_TYPES,
    Expand,
    FOUR_COLUMN_TYPES,
    HEADLINE_TAG_TYPES
} from '@/types';

// Styles
import { ctaContentCardsCVA } from './styles';
import styles from './CtaContentCards.module.scss';

// Components
import { Container, Text, Anchor, ColumnGrid, RichText } from '@/components';

export type CTA_CARDS_BACKGROUND_THEME_TYPE = Extract<
    COLOR_TYPES,
    'white' | 'whiteSmoke'
>;
export type CTA_CONTENT_CARDS_ALIGNMENT_TYPE = Extract<
    ALIGNMENT_TYPES,
    'left' | 'center'
>;

export type CtaContentCardsProps = ComponentProps<typeof Container> &
    Expand<VariantProps<typeof ctaContentCardsCVA>> & {
        backgroundColor?: CTA_CARDS_BACKGROUND_THEME_TYPE;
        bottomSupportingCopy?: ReactNode;
        contentAlignment?: CTA_CONTENT_CARDS_ALIGNMENT_TYPE;
        contentCards: ReactElement;
        cta?: ReactNode;
        hasDropShadows?: boolean;
        headline?: ReactNode;
        headlineTag?: HEADLINE_TAG_TYPES;
        numColumns?: FOUR_COLUMN_TYPES;
        supportingCopy?: ReactNode;
    };

export const CtaContentCards = (props: CtaContentCardsProps) => {
    const {
        headline,
        headlineTag = 'p',
        contentAlignment = 'center',
        numColumns = '2',
        supportingCopy,
        bottomSupportingCopy,
        cta,
        hasDropShadows = false,
        backgroundColor = 'white',
        contentCards,
        className,
        ...rest
    } = props;

    return (
        <Container
            data-testid='cta-content-cards'
            backgroundColor={backgroundColor}
            className={cx(
                ctaContentCardsCVA({ contentAlignment }),
                styles['content-copy-container'],
                className
            )}
            {...rest}>
            <div className={styles['top-copy']}>
                {headline && (
                    <Text
                        data-testid='cta-cards-container-headline'
                        className={styles['headline']}
                        tag={headlineTag}>
                        {headline}
                    </Text>
                )}
                {supportingCopy && (
                    <div
                        data-testid='cta-cards-top-copy'
                        className={styles['top-copy']}>
                        <RichText>{supportingCopy}</RichText>
                    </div>
                )}
            </div>
            {contentCards && (
                <ColumnGrid
                    className={cx(
                        ctaContentCardsCVA({ hasDropShadows }),
                        styles['content-cards-grid']
                    )}
                    columns={'1'}
                    data-backgroundcolor={backgroundColor}
                    columnsTablet={parseInt(numColumns) >= 2 ? '2' : '1'}
                    columnsDesktop={numColumns ?? '3'}>
                    {contentCards}
                </ColumnGrid>
            )}
            {bottomSupportingCopy && (
                <RichText
                    data-testid='cta-cards-bottom-copy'
                    className={styles['bottom-copy']}>
                    {bottomSupportingCopy}
                </RichText>
            )}
            {cta && (
                <div className={styles['cta-button-container']}>
                    <Anchor
                        data-testid='cta-cards-container-cta'
                        size='responsive'
                        variant='solid1'
                        className={styles['cta-button']}>
                        {cta}
                    </Anchor>
                </div>
            )}
        </Container>
    );
};
