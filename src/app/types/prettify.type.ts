/**
 * Prettify type definition. Useful when you merge types and want to keep clean type definitions.
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;
