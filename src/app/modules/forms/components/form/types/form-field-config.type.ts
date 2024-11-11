import type { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import type { CommonPatternName } from '../../../form-patterns.const';

export interface FormFieldConfig {
  key: string; // FormControl name
  type: string; // Field type: 'input', 'checkbox', 'select', etc.
  label?: string;
  placeholder?: string;
  description?: string;
  options?: { label: string; value: string | number }[]; // For 'select', 'radio', etc.
  inputType?: string; // For 'input' fields: 'text', 'password', etc.
  validators?: ValidatorFn[]; // Synchronous validators
  asyncValidators?: AsyncValidatorFn[]; // Asynchronous validators
  patternName?: CommonPatternName; // For custom pattern validators
  hidden?: boolean; // For conditionally hiding fields
  initialValue?: string | number | boolean; // Initial value
  // Add more properties as needed
}
