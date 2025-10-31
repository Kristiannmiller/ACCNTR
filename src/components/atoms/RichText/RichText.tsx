import {
    ComponentPropsWithRef,
    ComponentType,
    ElementType,
    forwardRef,
    Ref,
    useContext
} from 'react';

// Styles
import { cx } from 'class-variance-authority';
import { BackgroundColorContext } from '@/components';
import { getAnchorColor, shouldUseInverseText } from '@/utils';

// Types
type RichTextProps<T extends ElementType> = {
    as?: T;
};
type IProps<T extends ElementType> = RichTextProps<T> &
    ComponentPropsWithRef<'div'> &
    Omit<ComponentPropsWithRef<T>, keyof RichTextProps<T>> & {
        customRef?: Ref<HTMLElement>;
    };

export const RichText = forwardRef<HTMLElement, IProps<ElementType>>(
    <T extends ElementType = 'div'>(
        props: IProps<T>,
        ref: Ref<HTMLElement>
    ) => {
        const { as, children, customRef, className, ...rest } = props;

        const backgroundColor = useContext(BackgroundColorContext);
        const isInverse = shouldUseInverseText(backgroundColor);
        const anchorColor = getAnchorColor({ backgroundColor });

        const richTextClasses = cx(
            'r-rich-text',
            isInverse && 'r-rich-text-inverse',
            anchorColor && `r-rich-text-anchors-${anchorColor}`,
            className
        );

        const Component = (as || 'div') as ComponentType<RichTextProps<T>>;

        if (typeof children === 'string')
            return (
                <Component
                    className={richTextClasses}
                    data-testid='rich-text'
                    ref={customRef || ref}
                    dangerouslySetInnerHTML={{ __html: children }}
                    {...rest}
                />
            );

        return (
            <Component
                className={richTextClasses}
                ref={customRef || ref}
                data-testid='rich-text'
                {...rest}>
                {children}
            </Component>
        );
    }
);

RichText.displayName = 'RichText';
