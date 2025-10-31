import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

// Components
import { RichText, Text, Anchor, SvgIcon, Card } from '@/components';

// Types
import { SvgIconType } from '@/components';
import { CTA_STYLE_TYPES, HEADLINE_TAG_TYPES } from '@/types';

// Styles
import styles from './IconCtaSimplifiedCard.module.scss';

export type IconCtaSimplifiedCardProps = ComponentProps<typeof Card> & {
    icon?: SvgIconType;
    supportCopy?: ReactNode;
    cta?: ReactNode;
    ctaStyle?: CTA_STYLE_TYPES;
    headline?: ReactNode;
    headlineTag?: HEADLINE_TAG_TYPES;
};

export const IconCtaSimplifiedCard = (props: IconCtaSimplifiedCardProps) => {
    const {
        className,
        icon,
        supportCopy,
        cta,
        headline,
        headlineTag,
        ctaStyle = 'button',
        ...rest
    } = props;

    return (
        <Card
            className={cx(styles['icon-cta-simplified-card'], className)}
            data-testid='icon-cta-simplified-card'
            elevation='none'
            {...rest}>
            {/* Icon */}
            {icon && (
                <div className={styles['icon-cta-simplified-card-icon']}>
                    <SvgIcon
                        icon={icon}
                        data-testid='icon-cta-simplified-card-icon'
                    />
                </div>
            )}

            {/* Headline */}
            {headline && (
                <Text
                    data-testid='icon-cta-simplified-card-headline'
                    tag={headlineTag}
                    className={styles['icon-cta-simplified-card-headline']}>
                    {headline}
                </Text>
            )}

            {/* Support Copy */}
            {supportCopy && (
                <RichText
                    data-testid='icon-cta-simplified-card-support-copy'
                    className={styles['icon-cta-simplified-card-support-copy']}>
                    {supportCopy}
                </RichText>
            )}

            {/* CTA Button */}
            {cta && (
                <div
                    className={
                        styles['icon-cta-simplified-card-anchor-wrapper']
                    }>
                    <Anchor
                        size='responsive'
                        variant={ctaStyle === 'button' ? 'solid1' : undefined}
                        data-testid='icon-cta-simplified-card-link'>
                        {cta}
                    </Anchor>
                </div>
            )}
        </Card>
    );
};
