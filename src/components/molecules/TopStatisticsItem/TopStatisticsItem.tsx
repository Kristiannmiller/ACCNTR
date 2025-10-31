import { ComponentProps, ReactNode, useContext } from 'react';
import { cx } from 'class-variance-authority';

// Styles
import styles from './TopStatisticsItem.module.scss';

// Components
import { RichText, Text } from '@/components';

// Utils
import { shouldUseInverseText } from '@/utils';
import { BackgroundColorContext } from '@/components';

export type TopStatisticsItemProps = ComponentProps<'div'> & {
    topStatistic: ReactNode;
    supportCopy: ReactNode;
};

export const TopStatisticsItem = (props: TopStatisticsItemProps) => {
    const { className, topStatistic, supportCopy, ...rest } = props;

    const backgroundColor = useContext(BackgroundColorContext);

    const isInverse = shouldUseInverseText(backgroundColor);

    return (
        <div
            data-testid='top-statistics-item'
            className={cx(
                styles['statistics-item'],
                {
                    [styles['statistics-item-color-default']]: !isInverse
                },
                className
            )}
            {...rest}>
            <Text
                data-testid='top-statistics-item-statistic'
                tag='span'
                fontStyle='lgHeading'
                fontStyleCorp='smHeading'
                className={styles['statistic']}>
                {topStatistic}
            </Text>
            <RichText
                data-testid='top-statistics-item-support-copy'
                className={styles['support-copy']}>
                {supportCopy}
            </RichText>
        </div>
    );
};
