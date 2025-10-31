import { Slot } from '@radix-ui/react-slot';
import {
    AllHTMLAttributes,
    ComponentPropsWithRef,
    ComponentType,
    ElementType,
    Ref
} from 'react';
import { VariantProps, cx } from 'class-variance-authority';

// Components
import { BackgroundColor, BackgroundColorCvaProps } from '@/components';

// Types
import { CONTAINER_TAG_TYPES, CONTAINER_VARIANT_TYPES, Expand } from '@/types';

// Styles
import { containerCVA } from './styles';

// Types
export type ContainerProps<T extends CONTAINER_TAG_TYPES> = Expand<
    VariantProps<typeof containerCVA>
> & {
    tag?: T;
    asChild?: boolean;
} & AllHTMLAttributes<HTMLElement> &
    BackgroundColorCvaProps;

export const DEFAULT_VERTICAL_SPACING = false;

type ComponentPropsWithCustomRef<P, T extends ElementType> = P &
    Omit<ComponentPropsWithRef<T>, keyof T | 'ref'> & {
        customRef?: Ref<HTMLElement>;
    };

// -- defaults
export const DEFAULT_CONTAINER_VARIANT: CONTAINER_VARIANT_TYPES = 'contained';
export const DEFAULT_CONTAINER_TAG: CONTAINER_TAG_TYPES = 'div';

/**
 * @summary
 * The `Container` atom is intended to be the root component of most organisms.
 * The purpose of the component is to:
 * - Provide a consistent width, margin, and padding to the content within it so that all page content is visually aligned.
 * - Set common contexts like `backgroundColor`.
 * - Enable the use of `@container` queries.
 *
 * Specifically, it does the following:
 * - Applies the `container-type: inline` CSS property to enable `@container` queries.
 * - Horizontally centers all **direct children** (with `margin-inline: auto`)
 * - Sets the `max-width` of all **direct children** based on the provided `variant`
 * - Sets the left/right `padding` of all **direct children** (if the `Container` is not a descendant of another `Container`)
 * - Sets the `backgroundColor` and context so descendant Text, RichText, Anchor, and Button components can be styled accordingly.
 * - Applies top/bottom `margin` to itself and sibling Containers
 *
 * @param props.variant - Sets the `max-width` of the immediate children.
 * | Variant          | Max Width          |
 * | ---------------- | ------------------ |
 * | `containedSmall` | `1196px`           |
 * | `contained`      | `1440px` (default) |
 * | `containedLarge` | `1920px`           |
 * | `full`           | no max width       |
 */
export const Container = <
    T extends CONTAINER_TAG_TYPES = typeof DEFAULT_CONTAINER_TAG
>(
    props: ComponentPropsWithCustomRef<ContainerProps<T>, T>
) => {
    const {
        className,
        variant = DEFAULT_CONTAINER_VARIANT,
        tag = DEFAULT_CONTAINER_TAG,
        verticalSpacing = DEFAULT_VERTICAL_SPACING,
        isPadded = true,
        backgroundColor,
        children,
        asChild = false,
        customRef,
        ...rest
    } = props;
    const Element = asChild
        ? Slot
        : (tag as unknown as ComponentType<ContainerProps<T>>);
    return (
        <BackgroundColor backgroundColor={backgroundColor}>
            <Element
                ref={customRef}
                className={cx(
                    containerCVA({
                        variant,
                        isPadded,
                        verticalSpacing
                    }),
                    className
                )}
                data-testid='container'
                {...rest}>
                {children}
            </Element>
        </BackgroundColor>
    );
};
