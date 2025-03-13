import type { nullish } from 'src/app/types/nullish.type';
import type { Prettify } from 'src/app/types/prettify.type';
import type { CommonPatternName } from '../form-patterns.const';

/**
 * Type definitions for a form field options.
 * Could be an input or a checkbox.
 */
export type FormFieldOptions = InputOptions | CheckboxOptions;

type FormFieldCommonOptions = {
  key: string;
  class?: string;
  disabled?: boolean;
  hint?: string;
  label?: string;
  required?: boolean;
};

export type InputOptions = Prettify<
  FormFieldCommonOptions & {
    type: 'text' | 'password' | 'email' | 'tel' | 'url';
    value?: string | nullish;
    placeholder?: string;
    suffix?: string;
    prefix?: string;
    minLength?: number;
    maxLength?: number;
    pattern?:
      | CommonPatternName
      | { name: string; regex: RegExp; description: string };
  }
>;

export type CheckboxOptions = Prettify<
  FormFieldCommonOptions & {
    type: 'checkbox';
    value?: boolean | nullish;
  }
>;
