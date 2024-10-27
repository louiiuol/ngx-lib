import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { nullish } from '../../types/nullish.type';

/**
 * Convert weight from one unit to another.
 * @param value The weight to convert.
 * @param inputUnit The unit of the weight to convert.
 * @param outputUnit The unit to convert the weight to. (default is kg)
 * @returns The converted weight in the output unit.
 */
@Pipe({
  name: 'weight',
  standalone: true,
})
export class WeightPipe implements PipeTransform {
  private readonly conversionMap: Record<string, number> = {
    t: 1_000_000,
    kg: 1_000,
    g: 1,
  };

  transform(
    value: number | nullish,
    inputUnit: 'g' | 'kg' | 't' = 'g',
    outputUnit: 'g' | 'kg' | 't' = 'kg',
  ) {
    if (!value) return `0 ${outputUnit}`;

    const valueInGrams = value * this.conversionMap[inputUnit]; // Convert input to grams
    const convertedValue = valueInGrams / this.conversionMap[outputUnit]; // Convert grams to output unit

    return `${convertedValue.toFixed(2)} ${outputUnit}`;
  }
}
