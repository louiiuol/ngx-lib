/**
 * Capitalize given string. (Make the first letter uppercase.)
 * @param str text to be capitalized
 * @returns Capitalized string.
 *
 * @example
 * ```ts
 * capitalize('hello') // 'Hello'
 * capitalize('world') // 'World'
 * capitalize('hello world') // 'Hello world'
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const capitalize = (str: string) =>
  str.charAt(0).toLocaleUpperCase() + str.slice(1);
