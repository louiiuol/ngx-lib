/**
 * Checks if given property is a `string` type
 * @param prop to be checked
 * @returns true if input is a string, false otherwise
 *
 * @example
 * ```ts
 * isString('hello') // true
 * isString(1) // false
 * isString(true) // false
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const isString = (prop: unknown) => typeof prop === 'string';
