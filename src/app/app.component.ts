import type { AfterViewChecked } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
} from '@ng-doc/app';
import { IconMaterialComponent } from './components/atoms/icon-material/icon-material.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotificationCenterComponent } from './layout/notification-center/notification.center.component';
import { NotificationService } from './services/notification/notification.service';
import { LocalStorageService } from './services/storage/local-storage.service';

/**
 * Root component of the application. Uses the `NgDocRootComponent` to provide a layout for the application.
 * It also uses the `NgDocNavbarComponent` and `NgDocSidebarComponent` to provide a navigation bar and a sidebar.
 * The `RouterOutlet` is used to render the content of the application.
 * Refer to Router configuration in `main.ts` to see how the routes are configured.
 *
 * @internal
 * @author louiiuol
 */
@Component({
  selector: 'lib-root',
  standalone: true,
  host: { class: 'bg-primary-100' },
  template: `
    <ng-doc-root>
      <ng-doc-navbar>
        <h3
          ngDocNavbarLeft
          class="text-2xl text-primary-500 flex items-center gap-2 cursor-pointer"
          routerLink="/"
        >
          <lib-icon-material name="construction" class="cursor-pointer" />
          {{ appName }}
        </h3>
      </ng-doc-navbar>
      <ng-doc-sidebar />
      <router-outlet />
      <lib-footer />
    </ng-doc-root>
  `,
  imports: [
    RouterOutlet,
    RouterLink,
    NotificationCenterComponent,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    IconMaterialComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  notifier = inject(NotificationService);
  storage = inject(LocalStorageService);
  appName = 'ngx lib';

  ngAfterViewChecked(): void {
    this.greetings();
  }

  private greetings() {
    if (!this.storage.check('onboarded')) {
      this.notifier.notify({
        summary: 'Welcome !',
        details:
          'Welcome to this library! Hope it will help you in your project. Enjoy !✨',
      });
      this.storage.set({ key: 'onboarded', value: String(true) });
    }
  }
}
