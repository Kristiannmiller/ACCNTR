// Types
import { BUTTON_VARIANTS } from '@/components';
import {
    BUTTON_STYLE_TYPES,
    ORDER_TYPES,
    THEME_TYPES,
    BACKGROUND_COLOR_TYPES
} from '@/types';

export type GetButtonVariantOptions = {
    buttonStyle?: BUTTON_STYLE_TYPES;
    backgroundColor: BACKGROUND_COLOR_TYPES;
    theme: THEME_TYPES;
    order?: ORDER_TYPES;
};

export type ContextualButtonVariantProps = Pick<
    GetButtonVariantOptions,
    'buttonStyle' | 'order'
>;

export const getButtonVariant: (
    options: GetButtonVariantOptions
) => BUTTON_VARIANTS | undefined = (options) => {
    const { backgroundColor, buttonStyle, theme, order = 'first' } = options;

    if (buttonStyle === undefined || buttonStyle === 'link') return undefined;

    switch (theme) {
        case 'Corporate':
            switch (backgroundColor) {
                case 'white':
                case 'whiteSmoke':
                case 'denimBlue':
                    return 'solid1';
                default:
                    return 'solid-1-inverse';
            }
        default:
        case 'Consumer':
            switch (backgroundColor) {
                case 'white':
                case 'whiteSmoke':
                    switch (buttonStyle) {
                        case 'outlined':
                            return 'outlined';
                        default:
                        case 'solid':
                            switch (order) {
                                case 'first':
                                    return 'solid1';
                                default:
                                case 'second':
                                    return 'solid2';
                            }
                    }
                case 'wellnessBlue':
                    switch (buttonStyle) {
                        case 'outlined':
                            return 'outlined-inverse';
                        default:
                        case 'solid':
                            return 'light-inverse';
                    }
                case 'denimBlue':
                    switch (buttonStyle) {
                        case 'outlined':
                            return 'outlined-inverse';
                        default:
                        case 'solid':
                            return 'light1';
                    }
                case 'achOrange':
                    switch (buttonStyle) {
                        case 'outlined':
                            return 'outlined-alt';
                        default:
                        case 'solid':
                            return 'solid-1-inverse';
                    }
                default:
                    switch (buttonStyle) {
                        case 'outlined':
                            return 'outlined-inverse';
                        default:
                        case 'solid':
                            return 'solid-1-inverse';
                    }
            }
    }
};
