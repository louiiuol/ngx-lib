import { JsonPipe } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import type { FormGroup } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import type { InputType } from '../../input.component';
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
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <lib-input
                formControlName="email"
                [label]="emailLabel()"
                [type]="emailType()"
                [placeholder]="'Enter your email'"
              />

              <lib-input
                formControlName="password"
                [label]="passwordLabel()"
                [type]="passwordType()"
                [placeholder]="'Enter your password'"
                [patternName]="'password'"
              />

              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                [disabled]="form.invalid"
              >
                Submit
              </button>
            </form>
            <p>This form is {{ form.invalid ? 'invalid ⛑️' : 'valid ✨' }}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [InputComponent, ReactiveFormsModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoComponent implements OnInit {
  form!: FormGroup;

  // Signal-based inputs
  emailLabel = signal<string>('Email');
  emailType = signal<InputType>('email');

  passwordLabel = signal<string>('Password');
  passwordType = signal<InputType>('password');

  private fb = inject(FormBuilder);

  constructor() {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['toto@mail.fr'],
      password: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
