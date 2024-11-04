import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import { FormComponent } from '../../form.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-form-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Default form</h3>
        <div class="examples-container">
          <div class="examples-list">
            <lib-form [fields]="fields"> </lib-form>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [FormComponent, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDemoComponent {
  fields = [
    {
      key: 'username',
      label: 'Username',
      type: 'input',
      validators: [Validators.required],
      patternName: 'username',
    },
    {
      key: 'email',
      label: 'Email',
      type: 'input',
      validators: [],
      patternName: 'email',
    },
    {
      key: 'password',
      label: 'Password',
      type: 'input',
      validators: [],
      patternName: 'password',
    },
  ];
}
