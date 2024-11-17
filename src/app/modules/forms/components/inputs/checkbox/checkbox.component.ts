import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  input,
} from '@angular/core';
import type { ValidatorFn } from '@angular/forms';
import {
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
  type ControlValueAccessor,
} from '@angular/forms';
import { TooltipDirective } from 'src/app/directives/tooltip/tooltip.directive';
import { TruncateTextPipe } from 'src/app/pipes/truncate-text/truncate-text.pipe';
import type { CheckboxOptions } from '../../../types/form-field-options.type';

/**
 * Simple checkbox component.
 *
 * @author louiiuol
 * @version 0.0.1
 */
@Component({
  selector: 'lib-checkbox',
  host: { class: 'block w-full', '[class]': 'opt().class' },
  standalone: true,
  template: `
    <div class="relative w-full">
      <div class="flex items-center">
        <input
          type="checkbox"
          [id]="'input-' + uuid"
          [formControl]="control"
          (blur)="onTouched()"
          class="accent-primary-600 rounded cursor-pointer oultine"
          [class.outline-red-500]="
            control.invalid && (control.dirty || control.touched)
          "
          [class.bg-gray-100]="opt().disabled"
        />
        <label
          class="ms-2 text-sm font-medium text-gray-900  cursor-pointer"
          [innerHTML]="
            (opt().label ?? opt().key) + (opt().required ? ' *' : '')
          "
          [for]="'input-' + uuid"
        ></label>
      </div>
      <div class="h-8 py-1">
        @let errorMessage = getErrorMessage();

        @if (
          opt().hint &&
          (!errorMessage || (control.pristine && control.untouched))
        ) {
          <p class="text-gray-600 text-xs italic mt-1">
            {{ opt().hint }}
          </p>
        }

        @if (control.invalid && (control.dirty || control.touched)) {
          @let maxLength = 120;
          @let showTooltip = errorMessage.length > maxLength;

          <p
            [libTooltip]="errorMessage"
            [tooltipDisabled]="!showTooltip"
            class="text-red-500 text-xs italic cursor-help max-w-prose leading-tight"
            [class.cursor-help]="showTooltip"
            [innerHTML]="errorMessage | truncateText: maxLength"
          ></p>
        }
      </div>
    </div>
  `,
  imports: [ReactiveFormsModule, TruncateTextPipe, TooltipDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  opt = input.required<CheckboxOptions>();

  protected control = new FormControl<boolean>(false);
  protected readonly uuid = Math.random().toString(36).substring(2);

  constructor() {
    effect(() => {
      const validators: ValidatorFn[] = [];
      const opt = this.opt();

      if (opt.required) validators.push(Validators.requiredTrue);

      this.control.setValidators(validators);

      if (opt.disabled) this.control.disable();

      this.control.statusChanges.subscribe(() => this.onValidatorChange());

      this.control.updateValueAndValidity();

      // Update value changes
      this.control.valueChanges.subscribe(
        (value) => value && this.onChange(value),
      );
    });
  }

  // ControlValueAccessor methods
  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};
  onValidatorChange = () => {};

  writeValue(value: boolean): void {
    this.control.setValue(value, { emitEvent: true });
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  validate() {
    return this.control.valid ? null : { invalid: true };
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'Ce champ est requis.';
    }
    return '';
  }
}
