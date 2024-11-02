/**
 * Checks if given property is a `boolean` type
 * @param prop to be checked
 * @returns true if input is a boolean, false otherwise
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean('true') // false
 * isBoolean(1) // false
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const isBoolean = (prop: unknown) => typeof prop === 'boolean';
