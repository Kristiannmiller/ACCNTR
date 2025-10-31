import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, createContext } from 'react';

// Ensure you have THEME_TYPES correctly imported or defined
import { THEME_TYPES } from '@/types';

export const DEFAULT_THEME = 'Consumer';

interface ThemeContextType {
    theme: THEME_TYPES;
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
    theme: DEFAULT_THEME
});

export type ThemeProviderProps = ComponentProps<typeof Slot> & {
    theme?: THEME_TYPES;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, theme = DEFAULT_THEME } = props;

    return (
        <ThemeContext.Provider value={{ theme }}>
            <Slot data-theme={theme}>{children}</Slot>
        </ThemeContext.Provider>
    );
};
