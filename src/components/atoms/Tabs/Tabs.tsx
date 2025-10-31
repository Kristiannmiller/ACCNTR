import {
    Children,
    cloneElement,
    ComponentPropsWithoutRef,
    ElementRef,
    forwardRef,
    ReactElement
} from 'react';
import { VariantProps, cx } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { TabsListProps, TabsProps } from '@radix-ui/react-tabs';

// Components
import { Container, ConditionalWrapper } from '@/components';

// Styles
import styles from './Tabs.module.scss';
import { tabCVA } from './styles';

// Types
import { Expand, SIZE_TYPES } from '@/types';

export type TAB_SIZES = Extract<SIZE_TYPES, 'small' | 'large'>;
export const DEFAULT_TAB_SIZE: TAB_SIZES = 'small';

/**
 * Tabs
 */
export type TabsType = TabsProps &
    Expand<VariantProps<typeof tabCVA>> & {
        hasShadow?: boolean;
    };

const Tabs = (props: TabsType) => {
    const { className, size, hasShadow = false, children, ...rest } = props;

    return (
        <Container>
            <TabsPrimitive.Root
                className={className}
                {...rest}>
                <ConditionalWrapper
                    condition={hasShadow}
                    wrapper={(children) => (
                        <div className={styles['has-shadow']}>{children}</div>
                    )}>
                    {Children.map(
                        children as ReactElement[],
                        (child: ReactElement) => {
                            return Children.map(child.props.children, (child) =>
                                cloneElement(child, { size })
                            );
                        }
                    )}
                </ConditionalWrapper>
            </TabsPrimitive.Root>
        </Container>
    );
};

/**
 * TabsList
 */
type TabsListType = TabsListProps & Expand<VariantProps<typeof tabCVA>>;

const TabsList = forwardRef<
    ElementRef<typeof TabsPrimitive.List>,
    TabsListType
>((props, forwardedRef) => {
    const { className, color, size = DEFAULT_TAB_SIZE, ...rest } = props;
    return (
        <TabsPrimitive.List
            data-testid='tab-list'
            data-accent-color={color}
            asChild={false}
            ref={forwardedRef}
            className={cx(styles['tab-list'], tabCVA({ size }), className)}
            {...rest}
        />
    );
});
TabsList.displayName = 'Tabs.List';

/**
 * TabsTrigger
 */
const TabsTrigger = forwardRef<
    ElementRef<typeof TabsPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, forwardedRef) => {
    const { className, children, ...triggerProps } = props;
    return (
        <TabsPrimitive.Trigger
            data-testid='tab-trigger'
            {...triggerProps}
            asChild={false}
            ref={forwardedRef}
            className={cx(styles['tab-trigger'], className)}>
            {children}
        </TabsPrimitive.Trigger>
    );
});
TabsTrigger.displayName = 'Tabs.Trigger';

/**
 * TabsContent
 */

const TabsContent = forwardRef<
    ElementRef<typeof TabsPrimitive.Content>,
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        data-testid='tab-content'
        ref={ref}
        className={cx(styles['tab-content'], className)}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
