import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cx } from 'class-variance-authority';
import {
    ComponentPropsWithRef,
    ReactElement,
    cloneElement,
    forwardRef,
    useContext
} from 'react';

// Utils
import { BackgroundColorContext, isButtonVariant } from '@/components';
import { useThemeContext } from '@/hooks';
import { getButtonVariant, getAnchorColor } from '@/utils';

// Types
import { Expand, FONT_STYLE_TYPES } from '@/types';
import { ContextualButtonVariantProps } from '@/utils';

// Styles
import { buttonCVA } from '@/components/atoms/Button/styles';
import { anchorCVA } from './styles';

export type AnchorTextType = ComponentPropsWithRef<'a'> &
    Expand<VariantProps<typeof anchorCVA>> & {
        buttonStyle?: never;
        order?: never;
        variant?: never;
        size?: never;
    };

export type AnchorButtonType = ComponentPropsWithRef<'a'> &
    Expand<VariantProps<typeof buttonCVA>> & {
        fontStyle?: never | null;
        fontStyleTablet?: never;
        fontStyleCorp?: never;
        fontStyleCorpTablet?: never;
        underline?: never;
        asInherited?: never;
        color?: never;
    } & ContextualButtonVariantProps;

export type AnchorProps = (AnchorTextType | AnchorButtonType) & {
    disabled?: boolean;
};

// Must be derived from global fontStyles in /static.ts;
export const anchorFontStyles = ['smLink', 'smLinkMobile'] as const;

export const anchorUnderlines = ['always', 'hover', 'none'] as const;

export type ANCHOR_FONT_STYLE_TYPES = Extract<
    FONT_STYLE_TYPES,
    (typeof anchorFontStyles)[number]
>;

export type ANCHOR_UNDERLINE_TYPES = (typeof anchorUnderlines)[number];

export const DEFAULT_ANCHOR_FONT_STYLE: ANCHOR_FONT_STYLE_TYPES = 'smLink';

export const DEFAULT_ANCHOR_UNDERLINE: ANCHOR_UNDERLINE_TYPES = 'always';

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
    (props, ref) => {
        const {
            asInherited,
            children = '',
            buttonStyle,
            variant,
            color,
            order,
            fontStyle = DEFAULT_ANCHOR_FONT_STYLE,
            fontStyleTablet,
            fontStyleCorp = fontStyle,
            fontStyleCorpTablet = fontStyleTablet,
            size,
            underline = DEFAULT_ANCHOR_UNDERLINE,
            className = false,
            disabled = false,
            href,
            ...rest
        } = props;

        const backgroundColor = useContext(BackgroundColorContext);

        const { theme } = useThemeContext();

        const buttonVariant = buttonStyle
            ? getButtonVariant({
                  buttonStyle,
                  backgroundColor,
                  theme,
                  order
              })
            : variant;

        const anchorColor = color || getAnchorColor({ backgroundColor });

        const disabledArgs = (
            disabled
                ? {
                      href: '#',
                      'aria-disabled': 'true',
                      onClick: (
                          event: React.MouseEvent<HTMLElement, MouseEvent>
                      ) => {
                          event.preventDefault();
                      }
                  }
                : {}
        ) as ComponentPropsWithRef<'a'>;

        return (
            <Slot
                ref={ref}
                data-testid='anchor'
                rel='noopener noreferrer'
                className={cx(
                    buttonVariant && isButtonVariant(buttonVariant)
                        ? buttonCVA({ variant: buttonVariant, size })
                        : anchorCVA({
                              asInherited,
                              fontStyle,
                              fontStyleTablet,
                              fontStyleCorp,
                              fontStyleCorpTablet,
                              underline,
                              color: anchorColor
                          }),
                    className
                )}
                {...rest}>
                {typeof children === 'string' || href ? (
                    <a
                        href={href}
                        {...disabledArgs}>
                        {children}
                    </a>
                ) : (
                    cloneElement(children as ReactElement, disabledArgs)
                )}
            </Slot>
        );
    }
);
