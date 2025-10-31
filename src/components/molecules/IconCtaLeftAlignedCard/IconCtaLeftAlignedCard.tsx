import { ComponentProps, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

//Components
import {
    Anchor,
    Card,
    RichText,
    SvgIcon,
    SvgIconType,
    Text
} from '@/components';

// Styles
import styles from './IconCtaLeftAlignedCard.module.scss';

// Types
import { HEADLINE_TAG_TYPES } from '@/types';

export type IconCtaLeftAlignedCardProps = ComponentProps<typeof Card> & {
    cardCTA?: ReactNode;
    headline?: ReactNode;
    icon?: SvgIconType;
    supportCopy?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
};

export const IconCtaLeftAlignedCard = (props: IconCtaLeftAlignedCardProps) => {
    const {
        cardCTA,
        className,
        headline,
        icon,
        supportCopy,
        headlineTag = 'p',
        ...rest
    } = props;

    return (
        <Card
            elevation='none'
            className={cx(styles['left-aligned-card'], className)}
            data-testid='icon-cta-left-aligned-card'
            {...rest}>
            {/* SVG Icon */}
            {icon && <SvgIcon icon={icon} />}

            {/* Headline */}
            {headline && (
                <Text
                    data-testid='icon-cta-left-aligned-card-headline'
                    tag={headlineTag}
                    className={styles['headline']}>
                    {headline}
                </Text>
            )}

            {/* Support Copy */}
            {supportCopy && (
                <RichText
                    data-testid='icon-cta-left-aligned-card-support-copy'
                    className={styles['support-copy']}>
                    {supportCopy}
                </RichText>
            )}

            {cardCTA && (
                <Anchor
                    data-testid='icon-cta-left-aligned-card-card-cta'
                    className={styles['card-cta']}
                    size='responsive'>
                    {cardCTA}
                </Anchor>
            )}
        </Card>
    );
};
