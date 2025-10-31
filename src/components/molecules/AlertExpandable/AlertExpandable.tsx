import { ComponentProps } from 'react';
import { cx } from 'class-variance-authority';
import * as Accordion from '@radix-ui/react-accordion';

// Components
import { SvgIcon, RichText, Container } from '@/components';

// Static
import { alertBgColorMap, alertIconMap } from '@/components';

// Styles
import styles from './AlertExpandable.module.scss';

// Types
import { AlertDataProps } from '@/components';

export type AlertExpandableDataProps = Pick<
    AlertDataProps,
    | 'alertType'
    | 'primaryAlertText'
    | 'mobileAlertText'
    | 'expandedAlertText'
    | 'shouldHideIcon'
    | 'showMoreLabel'
    | 'showLessLabel'
>;

export type AlertExpandableProps = Omit<
    ComponentProps<typeof Container>,
    // Omit 'value' to avoid conflict with Accordion.Item's 'value'
    'value'
> &
    AlertExpandableDataProps;

export const AlertExpandable = (props: AlertExpandableProps) => {
    const {
        className,
        primaryAlertText,
        expandedAlertText,
        mobileAlertText,
        alertType = 'info',
        shouldHideIcon = false,
        showMoreLabel = 'Show More',
        showLessLabel = 'Show Less',
        ...rest
    } = props;

    return (
        <Accordion.Root
            type='single'
            collapsible>
            <Container
                backgroundColor={alertBgColorMap[alertType]}
                {...rest}>
                <Accordion.Item
                    value='alert'
                    data-testid='alert-expandable'
                    className={cx(styles['alert'], className)}
                    {...rest}>
                    {!shouldHideIcon && (
                        <SvgIcon
                            data-testid='alert-icon'
                            className={styles['alert-icon']}
                            icon={alertIconMap[alertType]}
                        />
                    )}

                    {mobileAlertText && (
                        <RichText
                            data-testid='alert-mobile-text'
                            className={styles['alert-mobile-text']}>
                            {mobileAlertText}
                        </RichText>
                    )}

                    <RichText
                        data-testid='alert-primary-text'
                        className={styles['alert-primary-text']}>
                        {primaryAlertText}
                    </RichText>

                    <Accordion.Trigger
                        data-testid='alert-trigger'
                        className={styles['alert-trigger']}>
                        <span
                            data-testid='trigger-open'
                            className={styles['trigger-open']}>
                            <span className={styles['trigger-text']}>
                                {showMoreLabel}
                            </span>
                            <SvgIcon
                                className={styles['trigger-icon']}
                                icon='plus'
                            />
                        </span>
                        <span
                            data-testid='trigger-close'
                            className={styles['trigger-close']}>
                            <span className={styles['trigger-text']}>
                                {showLessLabel}
                            </span>
                            <SvgIcon
                                className={styles['trigger-icon']}
                                icon='minus'
                            />
                        </span>
                    </Accordion.Trigger>

                    <Accordion.Content
                        data-testid='alert-expanded-text'
                        className={styles['alert-expanded-text']}>
                        <RichText>{expandedAlertText}</RichText>
                    </Accordion.Content>
                </Accordion.Item>
            </Container>
        </Accordion.Root>
    );
};
