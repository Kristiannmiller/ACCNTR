import { ComponentPropsWithRef, forwardRef, useContext } from 'react';
import { VariantProps, cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// Styles
import { buttonCVA } from './styles';

// Types
import { Expand, SIZE_TYPES, VARIANT_TYPES } from '@/types';
import { ContextualButtonVariantProps } from '@/utils';

// Static
import { variants } from '@/static';

// Utils
import { BackgroundColorContext } from '@/components';
import { getButtonVariant } from '@/utils';

// Hooks
import { useThemeContext } from '@/hooks';

export type ButtonProps = ComponentPropsWithRef<'button'> &
    Expand<VariantProps<typeof buttonCVA>> & {
        asChild?: boolean;
    } & ContextualButtonVariantProps;

// Variants are the same as the static variants.
export type BUTTON_VARIANTS = Extract<VARIANT_TYPES, (typeof variants)[number]>;

export const buttonSizes = ['medium', 'large', 'responsive'] as const;
export type BUTTON_SIZES = Extract<
    SIZE_TYPES | 'responsive',
    (typeof buttonSizes)[number]
>;

export const isButtonVariant = (
    variant: string
): variant is BUTTON_VARIANTS => {
    return variants.includes(variant as BUTTON_VARIANTS);
};

export const DEFAULT_BUTTON_SIZE: BUTTON_SIZES = 'large';
export const DEFAULT_BUTTON_VARIANT: BUTTON_VARIANTS = 'solid1';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        asChild = false,
        className,
        size = DEFAULT_BUTTON_SIZE,
        variant = DEFAULT_BUTTON_VARIANT,
        buttonStyle,
        order,
        ...rest
    } = props;
    const Comp = asChild ? Slot : 'button';

    const backgroundColor = useContext(BackgroundColorContext);

    const { theme } = useThemeContext();

    const buttonVariant = buttonStyle
        ? getButtonVariant({ backgroundColor, theme, buttonStyle, order })
        : variant;

    return (
        <Comp
            className={cx(
                buttonCVA({ variant: buttonVariant, size }),
                className
            )}
            ref={ref}
            {...rest}
        />
    );
});
Button.displayName = 'Button';

export { Button };
