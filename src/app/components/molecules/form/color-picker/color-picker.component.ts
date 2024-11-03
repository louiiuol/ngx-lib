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
      <label
        for="hs-color-input"
        class="block text-sm font-medium mb-2 dark:text-white"
      >
        Color picker
      </label>
    }
    <input
      type="color"
      class="p-1 h-10 w-14 block bg-none border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
      id="hs-color-input"
      [formControl]="colorControl"
      title="Choose your color"
    />
  `,
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
