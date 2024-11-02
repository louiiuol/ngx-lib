export type UserType = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
} | null;

/**
 * Formats initials from given user based on their information:
 * If no fistName nor lastName was provided, method will returns email's first letter.
 * Otherwise, will return the first letters of the firstName and lastName.
 * @param user User information to get initials from
 * @returns Initials from given user
 *
 * * @example
 * ```typescript
 * const user = { email: 'email@example.fr', firstName: 'John', lastName: 'Doe' };
 * const initials = initials(user); // JD
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
export function initials(user?: UserType): string {
  if (!user) return '?';

  const name =
    user.firstName && user.lastName
      ? user.firstName.charAt(0) + user.lastName.charAt(0)
      : (user.email?.charAt(0) ?? '?');
  return name.toLocaleUpperCase();
}
