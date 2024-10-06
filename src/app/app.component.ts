import type { AfterViewChecked } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotificationCenterComponent } from './layout/notification-center/notification.center.component';
import { NotificationService } from './services/notification/notification.service';

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
    <lib-notification-center />
    <lib-header />
    <main
      class="py-8 px-12 flex-1 flex items-center justify-center flex-col gap-8"
    >
      <router-outlet />
    </main>
    <lib-footer />
  `,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NotificationCenterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  notifier = inject(NotificationService);

  ngAfterViewChecked(): void {
    this.notifier.notify('Welcome', 'Welcome to the application!');
  }
}
