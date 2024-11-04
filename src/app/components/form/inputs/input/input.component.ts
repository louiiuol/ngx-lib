import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import type { ControlValueAccessor, ValidatorFn } from '@angular/forms';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TooltipDirective } from 'src/app/directives/tooltip/tooltip.directive';
import { TruncateTextPipe } from 'src/app/pipes/truncate-text/truncate-text.pipe';
import type { nullish } from 'src/app/types/nullish.type';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url';

export interface FormFieldConfig {
  label: string;
  type: InputType;
  placeholder?: string;
  hint?: string;
  suffix?: string;
  prefix?: string;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  patternDescription?: string;
}

export const commonPatterns = [
  {
    name: 'email',
    description: 'Please enter a valid email address.',
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    name: 'password',
    description:
      'Please choose a more secure password. Try a mix of letters, numbers and symbols.',
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@$!%*?&#^()]{8,}$/,
  },
] as const;

type CommonPatternName = (typeof commonPatterns)[number]['name'];

/**
 * Input component for forms.
 *
 * @example
 * ```html
 * <lib-input
 *  label="Email"
 * type="email"
 * placeholder="Enter your email"
 * patternName="email"
 * ></lib-input>
 * ```
 */
@Component({
  selector: 'lib-input',
  standalone: true,
  template: `
    <div class="relative w-full mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        {{ label() }}
      </label>
      <div
        class="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-slate-500/60"
        [class.border-red-500]="
          control.invalid && (control.dirty || control.touched)
        "
        [class.bg-gray-100]="disabled()"
      >
        @if (prefix()) {
          <span class="mr-2 text-gray-500">{{ prefix() }}</span>
        }
        <input
          [type]="type()"
          [formControl]="control"
          [placeholder]="placeholder()"
          (blur)="onTouched()"
          class="appearance-none bg-transparent w-full text-gray-700 leading-tight focus:outline-none"
        />
        @if (suffix()) {
          <span class="ml-2 text-gray-500">{{ suffix() }}</span>
        }
      </div>
      @if (hint()) {
        <p class="text-gray-600 text-xs italic mt-1">
          {{ hint() }}
        </p>
      }
      @if (control.invalid && (control.dirty || control.touched)) {
        @let errorMessage = getErrorMessage();
        @let maxLength = 80;
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
  ],
  imports: [ReactiveFormsModule, TruncateTextPipe, TooltipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  type = input<InputType>('text');
  label = input<string>();
  placeholder = input<string>();
  hint = input<string>();
  suffix = input<string>();
  prefix = input<string>();
  minLength = input<number>();
  maxLength = input<number>();
  min = input<number>();
  max = input<number>();
  patternName = input<CommonPatternName>();
  disabled = signal(true);
  // readonly

  patternDescription = computed<string | nullish>(
    () =>
      commonPatterns.find((p) => p.name === this.patternName())?.description,
  );
  control = new FormControl('');

  // ControlValueAccessor methods
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  ngOnInit() {
    const validators: ValidatorFn[] = [];

    if (this.minLength())
      validators.push(Validators.minLength(this.minLength() as number));

    if (this.maxLength())
      validators.push(Validators.maxLength(this.maxLength() as number));

    if (this.min()) validators.push(Validators.min(this.min() as number));

    if (this.max()) validators.push(Validators.max(this.max() as number));

    if (this.patternName()) {
      const regex = commonPatterns.find(
        (p) => p.name === this.patternName(),
      )?.regex;
      if (regex) {
        validators.push(Validators.pattern(regex));
      }
    }

    this.control.setValidators(validators);

    // Update value changes
    this.control.valueChanges.subscribe((value) => {
      value && this.onChange(value);
    });
  }

  writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'This field is required.';
    } else if (this.control.hasError('minlength')) {
      return `Minimum length is ${this.minLength()}.`;
    } else if (this.control.hasError('maxlength')) {
      return `Maximum length is ${this.maxLength()}.`;
    } else if (this.control.hasError('min')) {
      return `Minimum value is ${this.min()}.`;
    } else if (this.control.hasError('max')) {
      return `Maximum value is ${this.max()}.`;
    } else if (this.control.hasError('pattern')) {
      return this.patternDescription() || 'Invalid format.';
    }
    return '';
  }
}
