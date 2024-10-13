import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import type { NotificationSeverity } from 'src/app/services/notification/types/notification-severity.type';
import { IconMaterialComponent } from '../../atoms/icon-material/icon-material.component';
import { MESSAGE_DICTIONARY } from './dictionary.constant';

/**
 * Simple component to display inline container with colored messages depending on given
 * severity.
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-message',
  standalone: true,
  host: {
    class:
      'flex items-center justify-start gap-3 border rounded-lg px-4 py-2 shadow-md',
    '[class]': 'messageColor() ',
  },
  template: `
    @if (showIcon()) {
      <lib-icon-material [name]="messageIcon()" class="my-1 !mx-0" />
    }
    <div class="p-1 flex flex-col">
      <span [class]="{ 'font-bold': !!details }" [innerHTML]="summary()"></span>
      @if (details(); as details) {
        <span class="text-sm break-all" [innerHTML]="details"></span>
      }
    </div>
  `,
  imports: [IconMaterialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  /** Primary message of the notification */
  summary = input.required<string>();

  /** Severity of the message, Defines the type of Notification to be displayed
   * @default 'info'
   */
  severity = input<NotificationSeverity>('info');

  /** Secondary message, provide more context (can be omitted)
   * @default undefined
   */
  details = input<string>('');

  /** Whether to display an icon before the message
   * @default true
   */
  showIcon = input<boolean>(true);

  messageIcon = computed(() => MESSAGE_DICTIONARY[this.severity()].icon);

  messageColor = computed(() => MESSAGE_DICTIONARY[this.severity()].color);
}
