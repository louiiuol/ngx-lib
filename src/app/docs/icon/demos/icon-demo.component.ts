import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from 'src/app/components/atoms/icon/icon.component';

@Component({
  selector: 'lib-icon-demo',
  standalone: true,
  template: ` <lib-icon (click)="notify()">My icon</lib-icon> `,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDemoComponent {}
