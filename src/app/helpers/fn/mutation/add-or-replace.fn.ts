import type { nullish } from 'src/app/types/nullish.type';

/**
 * Adds or replaces an object in an array based on a property.
 * If the object is not found, it will be added to the array.
 * If the object is found, it will be replaced by the new object.
 *
 * @param input array to update
 * @param obj object to add or replace
 * @param prop property to compare
 * @returns updated array
 *
 * @example
 * ```typescript
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
 * const obj = { id: 2, name: 'Jane' };
 * const prop = 'id';
 * const updated = addOrReplace(array, obj, prop);
 * console.log(updated);
 * // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const addOrReplace = <T, K extends keyof T>(
  input: T[] | nullish,
  obj: T,
  prop: K,
): T[] => {
  const array = [...(input ?? [])];
  const index = array.findIndex((p) => p[prop] === obj[prop]);
  if (index !== -1) {
    array[index] = obj;
  } else {
    array.push(obj);
  }
  return array;
};
