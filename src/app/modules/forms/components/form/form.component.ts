// dynamic-form.component.ts
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../components/atoms/button/button.component';
import type { CommonPatternName } from '../../form-patterns.const';
import {
  getPatternDescription,
  getPatternValidators,
} from '../../form-patterns.const'; // Import custom validators
import type { FormFieldConfig } from './types/form-field-config.type';

@Component({
  selector: 'lib-form',
  standalone: true,
  templateUrl: './form.component.html',
  imports: [ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  fields = input.required<FormFieldConfig[]>();
  form = computed(
    () =>
      new FormGroup(
        this.fields().reduce(
          (acc, field) => {
            const controlValidators = field.validators
              ? [...field.validators]
              : [];

            // Add a pattern validator if a patternName is provided
            if (field.patternName) {
              // Assuming getPattern returns a validator function
              controlValidators.push(getPatternValidators(field.patternName));
            }

            // Create a new FormControl with initial value, validators, and async validators
            acc[field.key] = new FormControl(
              field.initialValue || '', // Use empty string as a default initial value
              controlValidators,
              field.asyncValidators || [],
            );

            return acc;
          },
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          {} as { [key: string]: FormControl },
        ),
      ),
  );

  // Expose the form to the template if needed
  getFormControl(key: string): FormControl {
    return this.form().get(key) as FormControl;
  }

  onSubmit(): void {
    if (this.form().valid) {
      console.log('Form Submitted!', this.form().value);
    } else {
      console.log('Form is invalid');
    }
  }

  getPatternErrorMessage(patternName: CommonPatternName): string {
    return getPatternDescription(patternName) || 'Format invalide';
  }
}
