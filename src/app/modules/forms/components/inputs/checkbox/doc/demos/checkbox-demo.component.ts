import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import { FormService } from 'src/app/modules/forms/services/form.service';
import { CheckboxComponent } from '../../checkbox.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-checkbox-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Login example</h3>
        <div class="examples-container">
          <div class="examples-list w-full px-6">
            <form
              class="flex flex-col gap-3 w-full"
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
            >
              <div class="flex flex-wrap gap-3">
                @for (field of formFields; track field.key) {
                  <lib-checkbox [formControlName]="field.key" [opt]="field" />
                }
              </div>

              <button lib-button type="submit" [disabled]="form.invalid">
                Submit
              </button>
            </form>
            @if (form.dirty || form.touched) {
              <p>
                Ce formulaire est
                {{ form.invalid ? 'invalide ⛑️' : 'valide ✨' }}
              </p>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [CheckboxComponent, ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoComponent {
  protected formFields = [
    {
      key: 'agreed',
      type: 'checkbox',
      label: 'Agree to <a class="underline text-primary" href="#">terms</a>',
      required: true,
      value: false,
    },
  ] as const;

  protected readonly form = inject(FormService).buildForm(this.formFields);

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value, null, 1));
    }
  }
}
