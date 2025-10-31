import { ComponentPropsWithRef, forwardRef, PropsWithChildren } from 'react';
import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import { Slot } from '@radix-ui/react-slot';

// Styles
import styles from './Image.module.scss';

// Types
import { RATIO_TYPES } from '@/types';
export type AspectRatioRootProps = Omit<
    RadixAspectRatio.AspectRatioProps,
    'ratio'
>;

export const ratiosMap: Record<RATIO_TYPES, number> = {
    '1:1': 1,
    '5:4': 5 / 4,
    '5:2': 5 / 2,
    '4:5': 4 / 5,
    '8:5': 8 / 5,
    '4:3': 4 / 3,
    '8:3': 8 / 3,
    '3:4': 3 / 4,
    '3:2': 3 / 2,
    '3:1': 3,
    '2:3': 2 / 3,
    '16:10': 16 / 10,
    '16:5': 16 / 5,
    '10:16': 10 / 16,
    'golden-ratio-landscape': 1.618,
    'golden-ratio-half-landscape': 3.235,
    'golden-ratio-portrait': 0.618,
    'golden-ratio-half-portrait': 0.144,
    '16:9': 16 / 9,
    '32:9': 32 / 9,
    '9:16': 9 / 16,
    '9:8': 9 / 8,
    '2:1': 2,
    '4:1': 4,
    '1:2': 1 / 2,
    '21:9': 21 / 9,
    '14:3': 14 / 3,
    '9:21': 9 / 21,
    '6:7': 6 / 7,
    'A4-landscape': 1.414,
    'A4-half-landscape': 2.828,
    'A4-portrait': 0.707,
    'A4-half-portrait': 1.414,
    'letter-landscape': 1.294,
    'letter-half-landscape': 2.588,
    'letter-portrait': 0.772,
    'letter-half-portrait': 1.545
};

type ImageProps = AspectRatioRootProps &
    PropsWithChildren<{
        ratio: RATIO_TYPES | number;
    }> &
    ComponentPropsWithRef<'img'>;
export const DEFAULT_IMAGE_RATIO = '1:1';

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    const { className, children, ratio, ...rest } = props;

    return (
        <RadixAspectRatio.Root
            className={className}
            data-testid='image'
            ratio={
                (typeof ratio === 'number' ? ratio : ratiosMap[ratio]) ??
                DEFAULT_IMAGE_RATIO
            }>
            <Slot
                ref={ref}
                className={styles['image-base']}
                {...rest}>
                {children ?? <img />}
            </Slot>
        </RadixAspectRatio.Root>
    );
});

export type { ImageProps };
