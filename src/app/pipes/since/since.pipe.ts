import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { nullish } from 'src/app/types/nullish.type';
import { timeFactors } from '../../constants/time.const';
import type { TimeUnit } from '../../types/time-unit.type';

/**
 * Convert a timestamp to a human-readable string representing the time since the timestamp.
 * Also works with future dates.
 * @param value The date used to estimate time distance with today's date.
 * @returns The human-readable string representing the time since the timestamp.
 *
 * @see `timeFactors` for the conversion factors.
 *
 * @author louiiuol
 */
@Pipe({
  name: 'since',
  standalone: true,
})
export class SincePipe implements PipeTransform {
  transform(value: number | nullish) {
    if (!value) return 'never';

    const dateValue = new Date(value).getTime();
    if (isNaN(dateValue)) return 'never';

    const secondsElapsed = Math.floor((Date.now() - dateValue) / 1000);
    if (Math.abs(secondsElapsed) < 30) return 'Just now';

    const isFuture = secondsElapsed > 0;
    const elapsedSeconds = Math.abs(secondsElapsed);

    for (const unit of Object.keys(timeFactors) as TimeUnit[]) {
      const { seconds, name } = timeFactors[unit];
      const count = Math.floor(elapsedSeconds / seconds);
      if (count >= 1) {
        const time = `${count} ${name}${count > 1 ? 's' : ''}`;
        return !isFuture ? `in ${time}` : `${time} ago`;
      }
    }

    return 'Just now';
  }
}
