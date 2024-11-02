/**
 * Clean the given object by removing all nullish values. (empty object, string and array.)
 * @param obj object to be cleaned
 * @returns Cleaned given object (removed all nullish values.)
 *
 * @example
 * ```ts
 * clean({ a: 1, b: null, c: undefined }) // { a: 1 }
 * clean({ a: 1, b: '', c: undefined }) // { a: 1 }
 * clean({ a: 1, b: [], c: undefined }) // { a: 1 }
 * clean({ a: 1, b: { c: null }, c: undefined }) // { a: 1, b: {} }
 *
 * @author louiiuol
 * @version 1.0.0
 */
export const clean = <T>(obj: T): T => {
  if (typeof obj === 'object') {
    for (const propName in obj) {
      if (
        (Array.isArray(obj[propName]) &&
          (obj[propName] as Array<unknown>).length === 0) ||
        !obj[propName]
      ) {
        delete obj[propName];
      }
    }
  } else if (Array.isArray(obj)) {
    obj = obj.filter((el) => el !== null && el !== undefined) as unknown as T;
  }
  return obj;
};
