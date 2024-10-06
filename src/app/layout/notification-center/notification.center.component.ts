import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageComponent } from 'src/app/components/molecules/message/message.component';
import { NotificationService } from 'src/app/services/notification/notification.service';

/**
 * Simple container for global notification
 * Will display all notification emitted from `NotificationService`.notifications signal
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-notification-center',
  standalone: true,
  host: {
    class: 'absolute right-2 top-16 z-50 flex flex-col justify-end gap-3',
  },
  template: `
    @for (n of notifications(); track n.uuid) {
      <lib-message
        [summary]="n.summary"
        [details]="n.details"
        [severity]="n.severity"
      />
    }
  `,
  imports: [MessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCenterComponent {
  protected readonly notifications =
    inject(NotificationService).getNotifications();
}
