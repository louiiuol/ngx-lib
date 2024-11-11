import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

/**
 * Provides form methods.
 *
 * @author louiiuol
 */
@Injectable({ providedIn: 'root' })
export class FormService {
  readonly formBuilder = inject(FormBuilder);

  /**
   * Builds a form group skeleton from an array of input options. Meant to be used in a reactive form.
   */
  buildForm(input: { key: string; value?: string }[]) {
    return this.formBuilder.group(
      input
        .map((field) => ({ key: field.key, value: field.value }))
        .reduce((acc: { [key: string]: unknown }, field) => {
          acc[field.key] = [field.value ?? ''];
          return acc;
        }, {}),
    );
  }
}
