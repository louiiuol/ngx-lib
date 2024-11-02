/**
 * This function uses a regular expression to convert dash-case string to camelCase.
 * @param input string to be converted
 * @returns camelCase string
 * @example
 * ```ts
 * dashToCamelCase('hello-world') // 'helloWorld'
 * dashToCamelCase('hello-world-again') // 'helloWorldAgain'
 * dashToCamelCase('hello') // 'hello'
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const dashToCamelCase = (input: string) =>
  input.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
