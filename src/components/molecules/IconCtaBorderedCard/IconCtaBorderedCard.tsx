import { ComponentProps, ReactElement, ReactNode } from 'react';
import { cx } from 'class-variance-authority';

//Components
import {
    Anchor,
    Card,
    RichText,
    ReputationScheduleForm,
    SvgIcon,
    SvgIconType,
    Text
} from '@/components';

// Styles
import styles from './IconCtaBorderedCard.module.scss';

// Types
import { CTA_STYLE_TYPES, HEADLINE_TAG_TYPES } from '@/types';

export type IconCtaBorderedCardProps = ComponentProps<typeof Card> & {
    firstCTA?: ReactNode;
    firstCTAStyle?: CTA_STYLE_TYPES;
    headline?: ReactNode;
    icon?: SvgIconType;
    secondCTA?: ReactNode;
    secondCTAStyle?: CTA_STYLE_TYPES;
    supportCopy?: ReactNode;
    headlineTag: HEADLINE_TAG_TYPES;
    reputationScheduleForm?: ReactElement<typeof ReputationScheduleForm>;
};

export const IconCtaBorderedCard = (props: IconCtaBorderedCardProps) => {
    const {
        className,
        firstCTA,
        firstCTAStyle = 'button',
        headline,
        icon,
        secondCTA,
        secondCTAStyle = 'button',
        supportCopy,
        headlineTag = 'p',
        topColorBar = 'none',
        reputationScheduleForm,
        ...rest
    } = props;

    return (
        <Card
            elevation='elevation1'
            topColorBar={topColorBar}
            className={cx(styles['bordered-card'], className)}
            data-testid='icon-cta-bordered-card'
            {...rest}>
            {/* SVG Icon */}
            {icon && <SvgIcon icon={icon} />}

            {(headline || supportCopy) && (
                <div className={styles['text-content']}>
                    {/* Headline */}
                    {headline && (
                        <Text
                            data-testid='icon-cta-bordered-card-headline'
                            tag={headlineTag}
                            className={styles['headline']}>
                            {headline}
                        </Text>
                    )}

                    {/* Support Copy */}
                    {supportCopy && (
                        <RichText
                            data-testid='icon-cta-bordered-card-support-copy'
                            className={styles['support-copy']}>
                            {supportCopy}
                        </RichText>
                    )}
                </div>
            )}

            {reputationScheduleForm}

            {(firstCTA || secondCTA) && (
                <div className={styles['cta-wrapper']}>
                    {firstCTA && (
                        <Anchor
                            data-testid='icon-cta-bordered-card-first-cta'
                            variant={
                                firstCTAStyle === 'button'
                                    ? 'solid1'
                                    : undefined
                            }
                            size='responsive'>
                            {firstCTA}
                        </Anchor>
                    )}

                    {secondCTA && (
                        <Anchor
                            data-testid='icon-cta-bordered-card-second-cta'
                            variant={
                                secondCTAStyle === 'button'
                                    ? 'solid1'
                                    : undefined
                            }
                            size='responsive'>
                            {secondCTA}
                        </Anchor>
                    )}
                </div>
            )}
        </Card>
    );
};
