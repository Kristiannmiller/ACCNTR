import {
    AllHTMLAttributes,
    ComponentPropsWithRef,
    ComponentType,
    ElementType,
    Ref,
    useContext
} from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cx } from 'class-variance-authority';

// Styles
import { textCVA } from './styles';

// Utils
import { BackgroundColorContext } from '@/components';
import { shouldUseInverseText } from '@/utils';

// Types
import { Expand, TEXT_TYPES } from '@/types';

type TagElementType = ElementType<
    // `any` is the default P template for ElementType and must be passed to define the type of the tag.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    TEXT_TYPES
>;

export const DEFAULT_TAG: TagElementType = 'span';

export type TextProps<T extends TagElementType> = Omit<
    Expand<VariantProps<typeof textCVA>>,
    'tag'
> & {
    tag?: T;
    asChild?: boolean;
} & AllHTMLAttributes<HTMLElement>;

type ComponentPropsWithCustomRef<P, T extends ElementType> = P &
    Omit<ComponentPropsWithRef<T>, keyof T | 'ref'> & {
        customRef?: Ref<HTMLElement>;
    };

/**
 * Note: Creating a generic component as output of React.forwardRef is not
 *       directly possible. Instead, we use an optional custom prop
 *       called `customRef` to optionally pass the ref to the underlying component.
 */
export const Text = <T extends TagElementType = typeof DEFAULT_TAG>(
    props: ComponentPropsWithCustomRef<TextProps<T>, T>
) => {
    const {
        tag = DEFAULT_TAG,
        asChild = false,
        fontStyle,
        fontStyleTablet,
        fontStyleCorp = fontStyle,
        fontStyleCorpTablet = fontStyleTablet,
        className,
        customRef,
        ...rest
    } = props;

    const Component = asChild ? Slot : (tag as ComponentType<TextProps<T>>);

    const backgroundColor = useContext(BackgroundColorContext);

    const isInverse = shouldUseInverseText(backgroundColor);

    const isValidRichText = !!rest.dangerouslySetInnerHTML?.__html;

    const textClass = cx(
        textCVA({
            tag: tag as TEXT_TYPES,
            fontStyle,
            fontStyleTablet,
            fontStyleCorp,
            fontStyleCorpTablet,
            isInverse
        }),
        className
    );

    return (
        (rest.children || isValidRichText) && (
            <Component
                className={textClass}
                ref={customRef}
                {...rest}
            />
        )
    );
};
