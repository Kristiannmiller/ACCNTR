import { ComponentProps, cloneElement, ReactElement } from 'react';
import { cx } from 'class-variance-authority';

// Components
import {
    SvgIcon,
    SvgIconType,
    Anchor,
    Text,
    RichText,
    Card
} from '@/components';

// Types
import { HEADLINE_TAG_TYPES } from '@/types';

// Styles
import styles from './IconCtaColoredBoxCard.module.scss';

export type IconCtaColoredBoxCardProps = ComponentProps<typeof Card> & {
    icon?: SvgIconType;
    headline?: ReactElement;
    headlineTag?: HEADLINE_TAG_TYPES;
    supportCopy?: ReactElement;
    cardCTA?: ReactElement;
};

export const IconCtaColoredBoxCard = (props: IconCtaColoredBoxCardProps) => {
    const {
        icon,
        headline,
        headlineTag = 'p',
        supportCopy,
        cardCTA,
        className,
        ...rest
    } = props;
    const content = (
        <Card
            elevation='none'
            className={cx(styles['icon-cta'], className)}
            data-testid='icon-cta-card'
            {...rest}>
            {icon && (
                <SvgIcon
                    className={styles['icon']}
                    icon={icon}
                    data-testid='icon-cta-icon'
                />
            )}

            <div className={styles['content-container']}>
                {headline && (
                    <Text
                        tag={headlineTag}
                        className={styles['headline']}
                        data-testid='icon-cta-headline'>
                        {headline}
                    </Text>
                )}

                {supportCopy && (
                    <RichText
                        className={styles['support-copy']}
                        data-testid='icon-cta-support-copy'>
                        {supportCopy}
                    </RichText>
                )}
            </div>
        </Card>
    );

    return cardCTA ? (
        <Anchor className={styles['icon-anchor']}>
            {cloneElement(cardCTA, {
                children: content,
                'data-testid': 'icon-cta-anchor'
            })}
        </Anchor>
    ) : (
        content
    );
};
