import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Simple footer component to display copyright
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-footer',
  host: { class: 'w-full flex  items-center justify-center' },
  standalone: true,
  template: ` <p>{{ copyright }}</p> `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  copyright = 'Make with ❤️ by louiiuol';
}
