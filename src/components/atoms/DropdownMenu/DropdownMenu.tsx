import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cx } from 'class-variance-authority';

// Components
import { SvgIcon } from '@/components';

// Styles
import styles from './DropdownMenu.module.scss';

type DropdownMultipleProps = AccordionPrimitive.AccordionMultipleProps;
type DropdownSingleProps = Omit<
    AccordionPrimitive.AccordionSingleProps,
    'type'
>;

const DropdownMenuSingle = (props: DropdownSingleProps) => {
    const { className, ...rest } = props;
    return (
        <AccordionPrimitive.Root
            collapsible
            type='single'
            className={cx(styles['drop-down-menu-base'], className)}
            data-testid='dropDownMenu'
            {...rest}
        />
    );
};

const DropdownMenu = (props: DropdownMultipleProps) => {
    const { className, ...rest } = props;
    return (
        <AccordionPrimitive.Root
            className={cx(styles['drop-down-menu-base'], className)}
            data-testid='dropDownMenu'
            {...rest}
        />
    );
};

const DropdownMenuMobile = (props: DropdownMultipleProps) => {
    const { className, ...rest } = props;
    return (
        <AccordionPrimitive.Root
            className={cx(styles['drop-down-menu-base'], className)}
            {...rest}
        />
    );
};

/**
 * Dropdown Menu Item
 */
const DropdownMenuItem = forwardRef<
    ElementRef<typeof AccordionPrimitive.Item>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => {
    const { className, ...rest } = props;
    return (
        <AccordionPrimitive.Item
            data-testid='accordion-item'
            ref={ref}
            className={cx(styles['accordion-item'], className)}
            {...rest}
        />
    );
});
DropdownMenuItem.displayName = 'AccordionItem';

/**
 * Dropdown Menu Trigger
 */
const DropdownMenuTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <AccordionPrimitive.Trigger
            ref={ref}
            data-testid='accordion-trigger'
            className={cx(
                styles['accordion-trigger'],
                styles['drop-down-menu-trigger'],
                className
            )}
            {...rest}>
            {children}
        </AccordionPrimitive.Trigger>
    );
});
DropdownMenuTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * Dropdown Menu Sub Trigger
 */
const DropdownMenuSubTrigger = forwardRef<
    ElementRef<typeof AccordionPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <AccordionPrimitive.Trigger
            ref={ref}
            data-testid='accordion-trigger'
            className={cx(
                styles['accordion-trigger'],
                styles['drop-down-menu-sub-trigger'],
                className
            )}
            {...rest}>
            {children}
            <SvgIcon icon='plus' />
            <SvgIcon icon='minus' />
        </AccordionPrimitive.Trigger>
    );
});
DropdownMenuSubTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * Dropdown Menu Content
 */
const DropdownMenuContent = forwardRef<
    ElementRef<typeof AccordionPrimitive.Content>,
    ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <AccordionPrimitive.Content
            data-testid='accordion-content'
            ref={ref}
            className={cx(styles['drop-down-menu-content'], className)}
            {...rest}>
            {children}
        </AccordionPrimitive.Content>
    );
});
DropdownMenuContent.displayName = AccordionPrimitive.Content.displayName;

/**
 * Dropdown Menu List
 */
const DropdownMenuList = forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<'div'>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <div
            ref={ref}
            className={cx(styles['drop-down-menu-list'], className)}
            data-testid='dropDownMenu-list'
            {...rest}>
            {children}
        </div>
    );
});

/**
 * Dropdown Menu List Item
 */
const DropdownMenuListItem = forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<'div'>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <div
            ref={ref}
            className={cx(styles['drop-down-menu-item'], className)}
            {...rest}>
            {children}
        </div>
    );
});

/**
 * Dropdown Menu Separator
 */
const DropdownMenuSeparator = forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<'div'>
>((props, ref) => {
    const { className, children, ...rest } = props;
    return (
        <div
            ref={ref}
            className={cx(styles['drop-down-menu-label'], className)}
            {...rest}>
            {children}
        </div>
    );
});

export {
    DropdownMenu,
    DropdownMenuSingle,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuList,
    DropdownMenuListItem,
    DropdownMenuMobile,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
};
