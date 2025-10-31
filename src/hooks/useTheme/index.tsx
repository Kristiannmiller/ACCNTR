import { useContext } from 'react';

// Utils
import { ThemeContext } from '@/components';

export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext);

    if (themeContext === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    const { theme } = themeContext;

    return {
        theme,
        isConsumer: theme === 'Consumer',
        isCorporate: theme === 'Corporate',
        isChildrens: theme === 'Childrens'
    };
};
