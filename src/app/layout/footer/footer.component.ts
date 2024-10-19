import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';

/**
 * Simple footer component to display copyright
 *
 * @internal
 * @author louiiuol
 */
@Component({
  selector: 'lib-footer',
  host: {
    class:
      'w-full flex  items-center justify-start bg-white text-blue-800 px-12 py-8',
  },
  standalone: true,
  template: `
    <p>
      Made with ❤️ by
      <a
        lib-button
        class="ml-1 text-primary"
        href="https://github.com/louiiuol"
        target="_blank"
        appearance="basic"
        rounded
        >louiiuol</a
      >
    </p>
  `,
  imports: [ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
