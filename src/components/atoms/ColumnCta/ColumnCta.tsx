import { ComponentProps, ReactNode } from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Components
import { Text, RichText, Anchor } from '@/components';

// Types
import { Expand, HEADLINE_TAG_TYPES } from '@/types';

// Styles
import { columnCtaCVA } from './styles';
import styles from './ColumnCta.module.scss';

export type ColumnCtaProps = ComponentProps<'div'> &
    Expand<VariantProps<typeof columnCtaCVA>> & {
        headline: ReactNode;
        headlineTag?: HEADLINE_TAG_TYPES;
        extraCTA?: ReactNode;
        bodyCopy: ReactNode;
    };

export const ColumnCta = (props: ColumnCtaProps) => {
    const {
        className,
        headlineTag = 'p',
        headline,
        bodyCopy,
        textAlignment = 'left',
        extraCTA,
        ...rest
    } = props;

    return (
        <div
            className={cx(
                columnCtaCVA({
                    textAlignment
                }),
                className
            )}
            data-testid='column-cta'
            {...rest}>
            {/* Headline */}
            <Text
                tag={headlineTag}
                data-testid='column-cta-headline'
                className={styles['headline']}>
                {headline}
            </Text>

            {/* body Copy */}
            <RichText
                className={styles['body-copy']}
                data-testid='column-cta-body-copy'>
                {bodyCopy}
            </RichText>

            {/* CTA Button */}
            {extraCTA && (
                <div
                    className={cx(
                        columnCtaCVA({ textAlignment }),
                        styles['anchor-wrapper']
                    )}>
                    <Anchor
                        className={styles['anchor']}
                        variant={'solid1'}
                        size={'responsive'}
                        data-testid='column-cta-link'>
                        {extraCTA}
                    </Anchor>
                </div>
            )}
        </div>
    );
};
