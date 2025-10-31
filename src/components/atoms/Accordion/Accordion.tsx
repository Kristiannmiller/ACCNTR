import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { cx } from 'class-variance-authority';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

// Components
import { RichText, SvgIcon, Text } from '@/components';

// Styles
import styles from './Accordion.module.scss';

/**
 * Accordion Root
 */

type AccordionProps =
    | AccordionPrimitive.AccordionSingleProps
    | AccordionPrimitive.AccordionMultipleProps;

export type AccordionType = Pick<AccordionProps, 'type'>['type'];

const Accordion = (props: AccordionProps) => {
    const { className, type } = props;

    // Single Accordion
    if (type === 'single') {
        const { children, collapsible, type, ...rest } =
            props as AccordionPrimitive.AccordionSingleProps;
        return (
            <AccordionPrimitive.Root
                className={cx(styles['accordion-base'], className)}
                children={children}
                collapsible={collapsible}
                type={type}
                {...rest}
            />
        );
    } else {
        // Multiple Accordion
        const { children, type, ...rest } =
            props as AccordionPrimitive.AccordionMultipleProps;
        return (
            <AccordionPrimitive.Root
                className={cx(styles['accordion-base'], className)}
                children={children}
                type={type}
                {...rest}
            />
        );
    }
};

/**
 * Accordion Item
 */
const AccordionItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <AccordionPrimitive.Item
            data-testid='accordion-item'
            data-value={props.value}
            ref={ref}
            className={cx(styles['accordion-item'], className)}
            {...rest}
        />
    );
});
AccordionItem.displayName = 'AccordionItem';

/**
 * Accordion Trigger
 */
const AccordionTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        hasIcon?: boolean;
    }
>((props, ref) => {
    const { className, children, hasIcon = true, ...rest } = props;
    return (
        <AccordionPrimitive.Header
            data-testid='accordion-header'
            className={styles['accordion-header']}>
            <AccordionPrimitive.Trigger
                ref={ref}
                data-testid='accordion-trigger'
                className={cx(
                    styles['accordion-trigger'],
                    styles['typography-small-paragraph'],
                    className
                )}
                {...rest}>
                <Text
                    fontStyle='smParagraph'
                    className={styles['accordion-trigger-text']}>
                    {children}
                </Text>

                {hasIcon && (
                    <>
                        {/* Accordion is closed */}
                        {<SvgIcon icon='plus' />}

                        {/* Accordion is open */}
                        {<SvgIcon icon='minus' />}
                    </>
                )}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * Accordion Content
 */
const AccordionContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<
        typeof AccordionPrimitive.Content & { isRichText: boolean }
    >
>((props, ref) => {
    const { className, forceMount = true, children, ...rest } = props;
    return (
        <AccordionPrimitive.Content
            data-testid='accordion-content'
            ref={ref}
            forceMount={forceMount}
            className={styles['accordion-content-wrap']}
            {...rest}>
            <RichText
                className={cx(
                    styles['accordion-content'],
                    styles['typography-small-paragraph'],
                    className
                )}>
                {children}
            </RichText>
        </AccordionPrimitive.Content>
    );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

/**
 * Accordion Content no richtext
 */
export const AccordionContentPlain = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<
        typeof AccordionPrimitive.Content & { isRichText: boolean }
    >
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <AccordionPrimitive.Content
            data-testid='accordion-content'
            ref={ref}
            className={cx(styles['accordion-content-wrap'], className)}
            {...rest}>
            {children}
        </AccordionPrimitive.Content>
    );
});
AccordionContent.displayName = 'AccordionContentPlain';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
