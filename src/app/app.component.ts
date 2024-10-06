import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

/**
 * Root component of the application. Defines layout and routing.
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-root',
  standalone: true,
  host: { class: 'flex flex-col h-screen bg-primary-100' },
  template: `
    <lib-header />
    <main
      class="py-8 px-12 flex-1 flex items-center justify-center flex-col gap-8"
    >
      <router-outlet />
    </main>
  `,
  imports: [RouterOutlet, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
