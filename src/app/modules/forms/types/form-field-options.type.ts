import type { CommonPatternName } from '../form-patterns.const';

/**
 * TYpe definition for a form field options.
 */
export interface FormFieldOptions<T = string> {
  key: string;
  type: 'text' | 'password' | 'email' | 'tel' | 'url';
  value?: T;
  label?: string;
  placeholder?: string;
  hint?: string;
  suffix?: string;
  prefix?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  pattern?:
    | CommonPatternName
    | { name: string; regex: RegExp; description: string };
  [key: string]: unknown;
}
