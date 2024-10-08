import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import type { NotificationSeverity } from 'src/app/types/notification-severity.type';
import { IconComponent } from '../../atoms/icon/icon.component';
import { MESSAGE_DICTIONARY } from './dictionary.constant';

/**
 * Simple component to display inline container with colored messages depending on given
 * severity. Check this component's `@Input` for more informations
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-message',
  standalone: true,
  host: {
    class:
      'flex items-center justify-between gap-3 border-l-4 rounded-r px-4 py-2 shadow-md',
    '[class]': 'messageColor() ',
  },
  template: `
    @if (showIcon()) {
      <lib-icon [name]="messageIcon()" class="my-1 !mx-0" />
    }
    <div class="p-1 flex flex-col">
      <span [class]="{ 'font-bold': !!details }" [innerHTML]="summary()"></span>
      @if (details(); as details) {
        <span class="text-sm" [innerHTML]="details"></span>
      }
    </div>
  `,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  /** Primary message of the notification */
  summary = input.required<string>();

  /** Severity of the message, Defines the type of Notification to be displayed */
  severity = input<NotificationSeverity>('info');

  /** Secondary message, provide more context (can be omitted) */
  details = input<string>();

  /** Whether to display an icon before the message */
  showIcon = input<boolean>(true);

  messageIcon = computed(() => {
    return MESSAGE_DICTIONARY[this.severity()].icon ?? 'info';
  });

  messageColor = computed(() => {
    return (
      MESSAGE_DICTIONARY[this.severity()].color ??
      MESSAGE_DICTIONARY['info'].color
    );
  });
}
