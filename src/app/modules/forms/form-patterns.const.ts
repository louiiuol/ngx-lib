// custom-validators.ts
import { Validators } from '@angular/forms';

export type CommonPatternName = (typeof APP_FORM_PATTERNS)[number]['name'];

/**
 * Retrieves ValidatorFn matching given pattern name
 */
export function getPatternValidators(name: CommonPatternName) {
  const pattern = APP_FORM_PATTERNS.find((p) => p.name === name)?.regex ?? '';
  return Validators.pattern(pattern);
}

/**
 * Retrieves description of the given pattern name
 */
export function getPatternDescription(name: CommonPatternName) {
  return APP_FORM_PATTERNS.find((p) => p.name === name)?.description ?? '';
}

/**
 * Dictionary of all custom patterns needed by application's FormFields
 */
export const APP_FORM_PATTERNS = [
  { name: 'digit', description: 'Chiffres uniquement.', regex: /^\d+$/ },
  { name: 'alpha', description: 'Lettres uniquement.', regex: /^[a-zA-Z]+$/ },
  {
    name: 'alphanumeric',
    description: 'Chiffres et lettres uniquement.',
    regex: /^[a-zA-Z0-9]+$/,
  },
  {
    name: 'password',
    description:
      'Au moins 8 caractères, avec un mélange de majuscules, minuscules, chiffres et caractères spéciaux.',
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
  },
  {
    name: 'email',
    description: 'Format attendu: " email@example.com ". ',
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    name: 'url',
    description: 'Format attendu: " http://www.example.com ".',
    regex:
      /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
  },
] as const;
