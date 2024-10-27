import type { TimeUnit } from '../types/time-unit.type';

/**
 * Factors for converting between time units.
 */
export const timeFactors: Record<
  TimeUnit,
  { seconds: number; label: string; name: string }
> = {
  year: { seconds: 31_536_000, label: 'y', name: 'year' }, // Assuming 365-day year
  month: { seconds: 2_592_000, label: 'mo', name: 'month' }, // Assuming 30-day month
  week: { seconds: 604_800, label: 'w', name: 'week' },
  day: { seconds: 86_400, label: 'd', name: 'day' },
  hour: { seconds: 3600, label: 'h', name: 'hour' },
  minute: { seconds: 60, label: 'min', name: 'minute' },
  second: { seconds: 1, label: 'sec', name: 'second' },
  millisecond: { seconds: 0.001, label: 'ms', name: 'millisecond' },
};
