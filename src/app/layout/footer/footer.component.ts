import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Simple footer component to display copyright
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-footer',
  host: {
    class:
      'w-full flex  items-center justify-center bg-white text-blue-800 px-12 py-8',
  },
  standalone: true,
  template: ` <p>{{ copyright }}</p> `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  copyright = 'Made with ❤️ by louiiuol';
}
