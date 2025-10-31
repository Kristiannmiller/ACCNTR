/**
 * @function classNameRegex
 * @param classNames
 * @returns regex
 * @description - Returns a regex match for the className.
 *                This is useful for parsing css_modules classnames in unit tests.
 * @example: 'button-primary button-large' => /button-primary|button-large/g
 */
export const classNameRegex = (classNames: string) => {
    if (!classNames) return new RegExp('');

    // Split the classNames string into individual class names
    const classNamesArray = classNames.split(' ');

    // Escape special characters in each class name and join them with '|'
    const escapedClassNames = classNamesArray
        .map((className) => {
            return className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        })
        .join('|');

    return new RegExp(`(${escapedClassNames})`, 'g');
};
