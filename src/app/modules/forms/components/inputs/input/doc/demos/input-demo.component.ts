import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import { FormService } from 'src/app/modules/forms/services/form.service';
import type { FormFieldOptions } from 'src/app/modules/forms/types/form-field-options.type';
import { InputComponent } from '../../input.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-input-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Login example</h3>
        <div class="examples-container">
          <div class="examples-list w-80">
            <form
              class="flex flex-col gap-3 w-full"
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
            >
              @for (field of formFields; track field.key) {
                <lib-input [formControlName]="field.key" [opt]="field" />
              }

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
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoComponent {
  protected readonly formFields: FormFieldOptions[] = [
    {
      key: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'example@mail.com',
      required: true,
      pattern: 'email',
      value: 'yolo@email.com',
    },
    {
      key: 'password',
      type: 'password',
      label: 'Password',
      placeholder: '*******',
      required: true,
      pattern: 'password',
    },
    {
      key: 'url',
      type: 'url',
      label: 'Url',
      placeholder: 'https://example.com',
      pattern: 'url',
    },
  ];

  protected readonly form = inject(FormService).buildForm(this.formFields);

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value, null, 1));
    }
  }
}
