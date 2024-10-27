import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { nullish } from 'src/app/types/nullish.type';
import { timeFactors } from '../../constants/time.const';
import type { TimeUnit } from '../../types/time-unit.type';

/**
 * Convert duration from one unit to another or generate a human-readable duration breakdown.
 * @param time The duration to convert.
 * @param inputUnit The unit of the duration to convert. Default is 'second'.
 * @param outputUnit The unit to convert the duration to. Default is 'hour'.
 * @returns The converted duration as a string.
 *
 * @see `timeFactors` for the conversion factors.
 * @see `TimeUnit` for the available time units.
 *
 * @author louiiuol
 */
@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(
    time: number | nullish,
    inputUnit: TimeUnit = 'second',
    separator: string = ' ',
    compact = true,
  ): string {
    if (!time || time < 1) return '--';
    const timeInSeconds = time * timeFactors[inputUnit].seconds;
    return this.formatDuration(timeInSeconds, separator, compact);
  }

  private formatDuration(seconds: number, separator: string, compact: boolean) {
    return Object.entries(timeFactors)
      .reduce((parts: string[], [, { seconds: unitSeconds, label, name }]) => {
        const value = Math.floor(seconds / unitSeconds);
        const unit = compact ? label : name;
        seconds %= unitSeconds;
        return value ? [...parts, `${value} ${unit}`] : parts;
      }, [])
      .join(separator);
  }
}
