import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { UserType } from 'src/app/helpers/fn/formats/initials.fn';
import { initials } from 'src/app/helpers/fn/formats/initials.fn';

/**
 * Formats initials from given user based on their information:
 * If no fistName nor lastName was provided, method will returns email's first letter.
 * Otherwise, will return the first letters of the firstName and lastName.
 * If none of these information are provided, it will return a question mark.
 * @param user User information to get initials from
 * @returns Initials from given user or a question mark if no information was provided
 *
 * @example
 * ```html
 * <span>{{ user | initials }}</span>
 * ```
 *
 * @author louiiuol
 * @version 1.0.0
 */
@Pipe({
  standalone: true,
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform = (user?: UserType) => initials(user);
}
