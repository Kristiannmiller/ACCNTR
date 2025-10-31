/** Get the `--header-height` prop value that is added to the body tag by the Header component. */
export const getHeaderHeight: () => {
    /** With the unit (rem). Ex: `"9.5rem"` */
    asString: string;
    /** Without the unit. Ex: `9.5` */
    asRem: number;
    /** Without the unit. Ex: `152` */
    asPx: number;
    /** Adds an additional 3rem to account for the utility navigation sliding down. Useful for calculating a scroll up since the utility nav won't slide down and contribute to the --height-height until the scroll begins to occur. */
    asRemWithUtilityNav: number;
    /** Adds an additional 48px to account for the utility navigation sliding down. Useful for calculating a scroll up since the utility nav won't slide down and contribute to the --height-height until the scroll begins to occur. */
    asPxWithUtilityNav: number;
} = () => {
    if (typeof window === 'undefined') {
        return {
            asString: '9.5rem',
            asRem: 9.5,
            asPx: 152,
            asRemWithUtilityNav: 12.5,
            asPxWithUtilityNav: 200
        };
    }

    const headerHeight = getComputedStyle(document.body).getPropertyValue(
        '--header-height'
    );

    return {
        asString: headerHeight,
        asRem: parseFloat(headerHeight),
        asPx: parseFloat(headerHeight) * 16,
        asRemWithUtilityNav: parseFloat(headerHeight) + 3,
        asPxWithUtilityNav: parseFloat(headerHeight) * 16 + 48
    };
};
