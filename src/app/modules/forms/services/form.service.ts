import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import type { FormFieldOptions } from '../types/form-field-options.type';

/**
 * Provides form methods to ease form creation with JSON structures for form inputs.
 *
 * @author louiiuol
 */
@Injectable({ providedIn: 'root' })
export class FormService {
  readonly formBuilder = inject(FormBuilder);

  /**
   * Builds a form group skeleton from an array of input options.
   * Meant to be used in a reactive form.
   * Doesn't handle form control validation nor form arrays (yet).
   * @see `FormFieldOptions` for the available options.
   */
  buildForm(input: readonly FormFieldOptions[]) {
    const mapped = input
      .map((field) => ({ key: field.key, value: field.value }))
      .reduce((acc: { [key: string]: unknown }, field) => {
        acc[field.key] = new FormControl(field.value ?? null);
        return acc;
      }, {});
    return this.formBuilder.group(mapped);
  }
}
