import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';

@Component({
  selector: 'lib-button-demo',
  standalone: true,
  template: ` <button lib-button (click)="notify()">My button</button> `,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  notify(): void {
    alert('Hello!');
  }
}
