import { ComponentProps, createContext } from 'react';
import { VariantProps, cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// Types
import { Expand, BACKGROUND_COLOR_TYPES } from '@/types';

// Styles
import { backgroundColorCVA } from './styles';

export const BackgroundColorContext =
    createContext<BACKGROUND_COLOR_TYPES>('white');

export type BackgroundColorCvaProps = Expand<
    VariantProps<typeof backgroundColorCVA>
>;

export type BackgroundColorProps = ComponentProps<typeof Slot> &
    BackgroundColorCvaProps;

export const BackgroundColor = (props: BackgroundColorProps) => {
    const { className, children, backgroundColor = 'white', ...rest } = props;
    return (
        <BackgroundColorContext.Provider value={backgroundColor || 'white'}>
            <Slot
                data-background-color={backgroundColor !== 'white'}
                className={cx(
                    backgroundColorCVA({ backgroundColor }),
                    className
                )}
                {...rest}>
                {children}
            </Slot>
        </BackgroundColorContext.Provider>
    );
};
