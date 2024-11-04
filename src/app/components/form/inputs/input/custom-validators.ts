// custom-validators.ts
import { Validators } from '@angular/forms';

/**
 * Retrieves ValidatorFn matching given pattern name
 */
export function getPattern(name: string) {
  const pattern = APP_FORM_PATTERNS.find((p) => p.name === name)?.regex ?? '';
  return Validators.pattern(pattern);
}

/**
 * Retrieves description of the given regex pattern
 */
export function getPatternDescription(name: string) {
  return APP_FORM_PATTERNS.find((p) => p.name === name)?.description ?? '';
}

/**
 * Dictionary of all custom patterns needed by application's FormFields
 */
export const APP_FORM_PATTERNS: {
  name: string;
  description: string;
  regex: RegExp;
}[] = [
  { name: 'digit', description: 'Chiffres uniquement', regex: /^\d+$/ },
  {
    name: 'password',
    description:
      'Au moins 8 caractères, avec un mélange de majuscules, minuscules, chiffres et caractères spéciaux',
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@$!%*?&#^()]{8,}$/,
  },
];
