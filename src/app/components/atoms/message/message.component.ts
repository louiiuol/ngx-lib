import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import type { NotificationSeverity } from 'src/app/types/notification-severity.type';
import { IconComponent } from '../icon/icon.component';

const MESSAGE_DICTIONARY = {
  info: { icon: 'info', color: 'bg-blue-100 border-blue-500 text-blue-900' },
  note: {
    icon: 'lightbulb',
    color: 'bg-indigo-100 border-indigo-500 text-indigo-900',
  },
  warn: {
    icon: 'warning',
    color: 'bg-orange-100 border-orange-500 text-orange-900',
  },
  error: { icon: 'error', color: 'bg-red-100 border-red-500 text-red-900' },
  success: { icon: 'done', color: 'bg-teal-100 border-teal-500 text-teal-900' },
} as const;

/**
 * Simple component to display inline container with colored messages depending on given
 * severity. Check this component's `@Input` for more informations
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-message',
  standalone: true,
  imports: [NgIf, IconComponent],
  template: `
    <div
      class="flex items-center justify-between gap-3 border-l-4 rounded-r px-4 shadow-md"
      [class]="messageColor()"
    >
      <div class="flex-1 flex items-start justify-start py-2">
        @if (showIcon()) {
          <lib-icon
            *ngIf="showIcon"
            [name]="messageIcon()"
            class="my-1 !mx-0"
          />
        }
        <div class="p-1">
          <span
            [class]="{ 'font-bold': !!details }"
            [innerHTML]="summary()"
          ></span>
          <br />
          @if (details(); as details) {
            <span class="text-sm" [innerHTML]="details"></span>
          }
        </div>
      </div>
    </div>
  `,
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
    return this.severity() ? MESSAGE_DICTIONARY[this.severity()].icon : 'info';
  });

  messageColor = computed(() => {
    return this.severity() ? MESSAGE_DICTIONARY[this.severity()].color : '';
  });
}
