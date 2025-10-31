import { cva } from 'class-variance-authority';

// Utils
import { createCvaOptions } from '@/utils';

// Types
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components';

export const buttonVariantClassMap = createCvaOptions<BUTTON_VARIANTS>({
    solid1: 'r-btn-solid1',
    solid2: 'r-btn-solid2',
    light1: 'r-btn-light1',
    light2: 'r-btn-light2',
    outlined: 'r-btn-outlined',
    'outlined-alt': 'r-btn-outlined-alt',
    'solid-1-inverse': 'r-btn-solid-1-inverse',
    'outlined-inverse': 'r-btn-outlined-inverse',
    'light-inverse': 'r-btn-light-inverse'
});

export const buttonSizeClassMap = createCvaOptions<BUTTON_SIZES>({
    medium: 'r-btn-medium',
    large: 'r-btn-large',
    responsive: 'r-btn-responsive'
});

export const buttonCVA = cva('r-btn', {
    variants: {
        variant: buttonVariantClassMap,
        size: buttonSizeClassMap
    }
});
