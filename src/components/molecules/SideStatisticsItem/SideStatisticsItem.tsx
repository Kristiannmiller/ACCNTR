import { ComponentProps, ReactNode, useContext } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './SideStatisticsItem.module.scss';

// Components
import { RichText, Text } from '@/components';

// Utils
import { shouldUseInverseText } from '@/utils';
import { BackgroundColorContext } from '@/components';

export type SideStatisticsItemProps = Omit<ComponentProps<'li'>, 'prefix'> & {
    statistic: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    supportCopy: ReactNode;
};

export const SideStatisticsItem = (props: SideStatisticsItemProps) => {
    const { className, statistic, prefix, suffix, supportCopy, ...rest } =
        props;

    const backgroundColor = useContext(BackgroundColorContext);

    const isInverse = shouldUseInverseText(backgroundColor);

    return (
        <li
            data-testid='side-statistics-item'
            className={cx(
                styles['list-item'],
                { [styles['list-item-color-default']]: !isInverse },
                className
            )}
            {...rest}>
            <div className={styles['statistics-block']}>
                {prefix && (
                    <Text
                        data-testid='side-statistics-item-prefix'
                        tag='span'
                        className={styles['prefix']}>
                        {prefix}
                    </Text>
                )}
                <Text
                    data-testid='side-statistics-item-statistic'
                    tag='span'
                    className={styles['statistic']}>
                    {statistic}
                </Text>
                {suffix && (
                    <Text
                        data-testid='side-statistics-item-suffix'
                        tag='span'
                        className={styles['suffix']}>
                        {suffix}
                    </Text>
                )}
            </div>

            <RichText
                data-testid='side-statistics-item-support-copy'
                className={styles['support-copy']}>
                {supportCopy}
            </RichText>
        </li>
    );
};
