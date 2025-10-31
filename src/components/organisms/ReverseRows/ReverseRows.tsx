import { ComponentProps, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Types
import { Expand, HEADLINE_TAG_TYPES } from '@/types';

// Styles
import { reverseRowsCVA } from './styles';
import styles from './ReverseRows.module.scss';

// Components
import { Anchor, Text, RichText, Container } from '@/components';

export type ReverseRowsProps = ComponentProps<'div'> &
    Expand<VariantProps<typeof reverseRowsCVA>> & {
        headline: ReactNode;
        headlineTag?: HEADLINE_TAG_TYPES;
        topSupportingCopy?: ReactNode;
        bottomSupportingCopy?: ReactNode;
        bottomCta?: ReactNode;
        rows: ReactNode;
        shouldRemovePaddingBetweenRows: boolean;
    };

export const ReverseRows = (props: ReverseRowsProps) => {
    const {
        className,
        headline,
        headlineTag = 'h2',
        topSupportingCopy,
        bottomSupportingCopy,
        bottomCta,
        rows,
        shouldRemovePaddingBetweenRows,
        ...rest
    } = props;
    return (
        <div
            className={cx(styles['reverse-rows-base'], className)}
            data-testid='reverse-rows'
            {...rest}>
            <Container>
                <Text
                    data-testid='reverse-rows-heading'
                    tag={headlineTag}
                    className={styles['heading']}>
                    {headline}
                </Text>
                <RichText
                    data-testid='reverse-rows-supporting-copy-top'
                    className={styles['supporting-copy-top']}>
                    {topSupportingCopy}
                </RichText>
            </Container>
            <div
                className={cx(
                    reverseRowsCVA({
                        shouldRemovePaddingBetweenRows
                    }),
                    styles['content-row']
                )}>
                {rows}
            </div>
            <Container className={styles['bottom-section']}>
                <RichText
                    data-testid='reverse-rows-supporting-copy-bottom'
                    className={styles['supporting-copy-bottom']}>
                    {bottomSupportingCopy}
                </RichText>
                <Anchor>{bottomCta}</Anchor>
            </Container>
        </div>
    );
};
