import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import type { nullish } from 'src/app/types/nullish.type';
import type { Severity } from 'src/app/types/severity.type';
import { IconMaterialComponent } from '../../atoms/icon-material/icon-material.component';
import { MESSAGE_DICTIONARY } from './dictionary.constant';

/**
 * Simple component to display inline container with colored messages depending on given
 * severity.
 *
 * @see [Documentation page](https://louiiuol.github.io/ngx-lib/#/components/message) for more details.
 * @see `IconMaterialComponent` to learn how icons are displayed.
 *
 * @example
 * ```html
 * <lib-message summary="Message summary" severity="info" details="Message details" />
 * <lib-message summary="An error ocurred" severity="error" details="Error details" />
 * <lib-message summary="A warning" severity="warning" />
 * <lib-message summary="A success message" severity="success" />
 * ```
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
      <span class="text-sm break-all" [innerHTML]="details()"></span>
    </div>
  `,
  imports: [IconMaterialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  /** Primary message of the notification. Required input */
  summary = input.required<string>();

  /** Severity of the message, Defines the type of Notification to be displayed. Default to 'info' */
  severity = input<Severity>('info');

  /** Secondary message, provide more context (can be omitted). Default to empty string */
  details = input<string | nullish>('');

  /** Whether to display an icon before the message. Default to true */
  showIcon = input<boolean>(true);

  /** Returns the icon name based on the severity of the message */
  protected readonly messageIcon = computed(
    () => MESSAGE_DICTIONARY[this.severity()].icon,
  );

  /** Returns the color class based on the severity of the message */
  protected readonly messageColor = computed(
    () => MESSAGE_DICTIONARY[this.severity()].color,
  );
}
