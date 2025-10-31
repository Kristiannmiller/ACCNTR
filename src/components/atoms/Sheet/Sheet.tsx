import {
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    HTMLAttributes
} from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, cx } from 'class-variance-authority';

// Styles
import styles from './Sheet.module.scss';
import { sheetContentCVA } from '@/components/atoms/Sheet/styles';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

/**
 * Sheet Overlay
 */
const SheetOverlay = forwardRef<
    ElementRef<typeof SheetPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        className={cx(styles['sheet-overlay'], className)}
        {...props}
        ref={ref}
    />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

type SheetContentProps = ComponentPropsWithoutRef<
    typeof SheetPrimitive.Content
> &
    VariantProps<typeof sheetContentCVA>;

/**
 * Sheet Content
 */
const SheetContent = forwardRef<
    ElementRef<typeof SheetPrimitive.Content>,
    SheetContentProps
>(({ direction = 'right', className, children, ...props }, ref) => (
    <>
        <SheetPrimitive.Content
            ref={ref}
            className={cx(sheetContentCVA({ direction }), className)}
            {...props}>
            {children}
        </SheetPrimitive.Content>
    </>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

/**
 * Sheet Header
 */
const SheetHeader = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cx(styles['sheet-header'], className)}
        {...props}
    />
);
SheetHeader.displayName = 'SheetHeader';

/**
 * Sheet Footer
 */
const SheetFooter = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cx(styles['sheet-footer'], className)}
        {...props}
    />
);
SheetFooter.displayName = 'SheetFooter';

/**
 * Sheet Title
 */
const SheetTitle = forwardRef<
    ElementRef<typeof SheetPrimitive.Title>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        className={cx(styles['sheet-title'], className)}
        {...props}
    />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

/**
 * Sheet Description
 */
const SheetDescription = forwardRef<
    ElementRef<typeof SheetPrimitive.Description>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        className={cx(styles['sheet-description'], className)}
        {...props}
    />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription
};
