import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconMaterialComponent } from '../../icon-material/icon-material.component';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'lib-button-demo',
  template: `
  <div class="p-6">
    <p>Simple button</p>
      <lib-button (click)="notify()">My button</lib-button>
      <hr />
      <p>Button with text and icon</p>
      <lib-button (click)="notify()">
        <lib-icon-material name="favorite" />
        My button
        </lib-button>
        <hr />
        <p>Button with icon</p>
        <lib-button appearance="fab">
        <lib-icon-material name="favorite" />
        </lib-button>
        <lib-button appearance="icon" color="accent">
        <lib-icon-material name="favorite" />
        </lib-button>
        <lib-button appearance="icon-stroked">
        <lib-icon-material name="favorite" />
        </lib-button>
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
