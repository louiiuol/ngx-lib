/**
 * Helper function to generate a random UUID.
 * @returns A random UUID string.
 *
 * @example
 * ```ts
 *
 */
export const generateRandomUUID = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    return (char === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
