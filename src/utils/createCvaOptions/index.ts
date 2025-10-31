/**
 * @function createCvaOptions
 * @description A utility function for CVA that helps ensure all variants are defined based on the provided type.
 * It simply returns the provided `options` object. The utility of this function is in the type safety, not any applied logic.
 * @param {Record<T, string[] | string | undefined>} options The options object to be created.
 * @returns {Record<T, string[] | string | undefined>} The provided `options` object.
 * @example
 * type TEST_TYPES = "primary" | "secondary";
 *
 * export const testCVA = cva([styles['base-class']], {
 *    variants: {
 *      propName: createCvaOptions<TEST_TYPES>({
 *        primary: styles["test-class"],
 *        secondary: styles["test-class-2"],
 *        tertiary: styles["test-class-3"], // <- * This will throw a typescript error
 *      }),
 *    }
 * });
 *
 */
export const createCvaOptions = <T extends string>(
    options: Record<T, string[] | string | undefined>
): Record<T, string[] | string | undefined> => options;
