import { ComponentProps, ReactNode, useContext } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './HeroStatisticsItem.module.scss';

// Components
import { HeroStatisticsContext, Text } from '@/components';

// Utils
import { shouldUseInverseText } from '@/utils';
import { BackgroundColorContext } from '@/components';

const EMPTY_SPACE_CHAR = ' ';

export type HeroStatisticsItemProps = Omit<ComponentProps<'div'>, 'prefix'> & {
    topText?: ReactNode;
    prefix?: ReactNode;
    statisticsNumber: ReactNode;
    suffix?: ReactNode;
    superscriptSuffix?: ReactNode;
    bottomText?: ReactNode;
};

export const HeroStatisticsItem = (props: HeroStatisticsItemProps) => {
    const {
        className,
        topText,
        prefix,
        statisticsNumber,
        suffix,
        superscriptSuffix,
        bottomText,
        ...rest
    } = props;

    const backgroundColor = useContext(BackgroundColorContext);

    const isInverse = shouldUseInverseText(backgroundColor);

    const { isStackedMobile, isStackedDesktop } = useContext(
        HeroStatisticsContext
    );

    return (
        <div
            className={cx(
                styles['item'],
                {
                    [styles['item-color-default']]: !isInverse,
                    [styles['item-stacked-mobile']]: isStackedMobile,
                    [styles['item-stacked-desktop']]: isStackedDesktop
                },
                className
            )}
            data-testid='hero-statistics-item'
            {...rest}>
            <Text
                data-testid='hero-statistics-item-top-text'
                tag='span'
                className={styles['top-text']}>
                {topText ?? EMPTY_SPACE_CHAR}
            </Text>
            <span className={styles['statistic-span']}>
                {prefix && (
                    <Text
                        data-testid='hero-statistics-item-prefix'
                        tag='span'
                        className={styles['prefix']}>
                        {prefix}
                    </Text>
                )}
                <Text
                    data-testid='hero-statistics-item-statistics-number'
                    tag='span'
                    className={styles['statistic']}>
                    {statisticsNumber}
                    {superscriptSuffix && (
                        <Text
                            data-testid='hero-statistics-item-superscript-suffix'
                            tag='sup'
                            className={styles['superscript-suffix']}>
                            {superscriptSuffix}
                        </Text>
                    )}
                </Text>
                {suffix && (
                    <Text
                        data-testid='hero-statistics-item-suffix'
                        tag='span'
                        className={styles['suffix']}>
                        {suffix}
                    </Text>
                )}
            </span>
            <Text
                data-testid='hero-statistics-item-bottom-text'
                tag='span'
                className={styles['bottom-text']}>
                {bottomText ?? EMPTY_SPACE_CHAR}
            </Text>
        </div>
    );
};
