import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  forwardRef,
  input,
} from '@angular/core';
import type { ControlValueAccessor, ValidatorFn } from '@angular/forms';
import {
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TooltipDirective } from 'src/app/directives/tooltip/tooltip.directive';
import type { FormFieldOptions } from 'src/app/modules/forms/types/form-field-options.type';
import { TruncateTextPipe } from 'src/app/pipes/truncate-text/truncate-text.pipe';
import type { nullish } from 'src/app/types/nullish.type';
import {
  getPatternDescription,
  getPatternValidators,
} from '../../../form-patterns.const';

/**
 * Input component for forms.
 *
 * @example
 * ```html
 * <lib-input
 *  formControlName="name"
 *  [opt]="fieldOpt"
 * />
 * ```
 *
 * @see `InputOptions` for the available options.
 */
@Component({
  selector: 'lib-input',
  standalone: true,
  template: `
    <div class="relative w-full mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        {{ opt().label }}
        @if (opt().required) {
          <span libTooltip="required">*</span>
        }
      </label>
      <div
        class="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-slate-500/60"
        [class.border-red-500]="
          control.invalid && (control.dirty || control.touched)
        "
        [class.bg-gray-100]="opt().disabled"
      >
        @if (opt().prefix; as prefix) {
          <span class="mr-2 text-gray-500">{{ prefix }}</span>
        }
        <input
          [type]="opt().type"
          [formControl]="control"
          [placeholder]="opt().placeholder"
          (blur)="onTouched()"
          class="appearance-none bg-transparent w-full text-gray-700 leading-tight focus:outline-none"
        />
        @if (opt().suffix; as suffix) {
          <span class="ml-2 text-gray-500">{{ suffix }}</span>
        }
      </div>
      @if (opt().hint; as hint) {
        <p class="text-gray-600 text-xs italic mt-1">
          {{ hint }}
        </p>
      }
      @if (control.invalid && (control.dirty || control.touched)) {
        @let errorMessage = getErrorMessage();
        @let maxLength = 120;
        @let showTooltip = errorMessage.length > maxLength;

        <p
          [libTooltip]="errorMessage"
          [tooltipDisabled]="!showTooltip"
          class="text-red-500 text-xs italic mt-1 cursor-help max-w-prose"
          [class.cursor-help]="showTooltip"
          [innerHTML]="errorMessage | truncateText: maxLength"
        ></p>
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule, TruncateTextPipe, TooltipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  opt = input.required<FormFieldOptions>();

  protected patternDescription = computed<string | nullish>(() => {
    const pattern = this.opt().pattern;
    return typeof pattern === 'string'
      ? getPatternDescription(pattern)
      : pattern?.description;
  });
  protected control = new FormControl('');

  // ControlValueAccessor methods
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  onValidatorChange = () => {};

  constructor() {
    effect(() => {
      const validators: ValidatorFn[] = [];
      const opt = this.opt();

      if (opt.minLength) validators.push(Validators.minLength(opt.minLength));
      if (opt.maxLength) validators.push(Validators.maxLength(opt.maxLength));

      if (opt.pattern) {
        if (typeof opt.pattern === 'object') {
          console.log('object');
          validators.push(Validators.pattern(opt.pattern.regex));
        } else {
          validators.push(getPatternValidators(opt.pattern));
        }
      }

      if (opt.required) validators.push(Validators.required);

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

  writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: true });
  }

  registerOnChange(fn: (value: string) => void): void {
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
    } else if (this.control.hasError('minlength')) {
      return `Taille minimal: ${this.opt().minLength}.`;
    } else if (this.control.hasError('maxlength')) {
      return `Taille maximal: ${this.opt().maxLength}.`;
    } else if (this.control.hasError('pattern')) {
      return this.patternDescription() || 'Format invalide.';
    }
    return '';
  }
}
