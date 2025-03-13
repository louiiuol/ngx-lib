import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent } from '../../color-picker.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-color-picker-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Choose a color</h3>
        <div class="examples-container">
          <div class="examples-list w-80">
            <form [formGroup]="form">
              <lib-color-picker formControlName="color" />
            </form>
            <p>Selected Color: {{ form.controls.color.value }}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [ColorPickerComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerDemoComponent {
  form = new FormGroup({
    color: new FormControl('#ff0000'), // Default color red
  });
}
