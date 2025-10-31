// Static
import { variants } from '@/static';
import { buttonSizes, DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_VARIANT } from './';

export const variantControl = {
    control: 'select',
    options: variants,
    defaultValue: DEFAULT_BUTTON_VARIANT,
    table: {
        defaultValue: { summary: DEFAULT_BUTTON_VARIANT }
    }
};

export const sizeControl = {
    control: 'select',
    options: buttonSizes,
    defaultValue: DEFAULT_BUTTON_SIZE,
    table: {
        defaultValue: { summary: DEFAULT_BUTTON_SIZE }
    }
};
