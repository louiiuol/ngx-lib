import type { OnDestroy } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
} from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * Simple color picker component that implements ControlValueAccessor.
 *
 * @author louiiuol
 * @version 1.0.0
 */
@Component({
  selector: 'lib-color-picker',
  standalone: true,
  template: `
    @if (label()) {
      <label class="block text-sm font-medium mb-2 dark:text-white">
        Color picker
      </label>
    }
    <input
      class="w-8 h-9 rounded-full border-none bg-transparent appearance-none cursor-pointer"
      type="color"
      [formControl]="colorControl"
      title="Choose your color"
    />
  `,
  styles: [
    `
      :host {
        input::-webkit-color-swatch {
          border-radius: 50%;
          border: 2px solid transparent;
        }
        input::-moz-color-swatch {
          border-radius: 50%;
          border: 2px solid transparent;
        }
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent implements ControlValueAccessor, OnDestroy {
  label = input<string>();
  colorControl = new FormControl();
  subscriptions: Subscription = new Subscription();

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {
    this.subscriptions.add(
      this.colorControl.valueChanges.subscribe((value) => {
        this.onChange(value);
      }),
    );
  }

  writeValue(value: string): void {
    this.colorControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.colorControl.disable();
    } else {
      this.colorControl.enable();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
