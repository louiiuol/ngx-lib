import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconMaterialComponent } from '../../icon-material/icon-material.component';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'lib-button-demo',
  template: `
  <div class="p-6">
    <p>Simple button</p>
      <button lib-button (click)="notify()">My button</button>
      <hr />
      <p>Button with text and icon</p>
      <button lib-button (click)="notify()" disabled rounded>
        <lib-icon-material name="favorite" />
        My button
      </button>
      <hr />
      <p>Button with icon</p>
      <button lib-button appearance="fab">
      <lib-icon-material name="favorite" />
      </button>
      <button lib-button appearance="icon" color="accent"></button>
      <button lib-icon-material name="favorite" rounded >
      </button>
      <button lib-button appearance="icon-stroked" rounded>
      <lib-icon-material name="favorite" />
      </button>
  </div>
  `,
  standalone: true,
  imports: [ButtonComponent, IconMaterialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  notify(): void {
    alert('Hello!');
  }
}
