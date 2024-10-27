import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

import ellipsis from 'html-ellipsis';
import type { nullish } from '../../types/nullish.type';

/**
 * Truncate text to a specified length and add ellipsis at the end.
 * Uses the `html-ellipsis` package to render HTML tags correctly. (bold, italic, etc.).
 * This pipe is meant to be used inside a InnerHTML binding. Check out usage in the demo.
 * @param value The string to truncate.
 * @param limit The maximum length of the truncated string. Default is 40 (ellipsis included).
 * @returns The truncated string.
 *
 * @example
 * ```html
 * <p [innerHTML]="content | truncateText"></p>
 * <p [innerHTML]="content | truncateText: 15"></p>
 * ```
 *
 * @author louiiuol
 */
@Pipe({
  name: 'truncateText',
  standalone: true,
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string | nullish, limit = 40) {
    if (!value) {
      return '--';
    }
    if (value.length <= limit) {
      return value;
    }
    return ellipsis(value, limit, true);
  }
}
