import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Simple button component with multiple styles.
 *
 * @author louiiuol
 */
@Component({
  selector: 'button[lib-button]',
  standalone: true,
  host: {
    class:
      'inline-flex justify-center gap-2 items-center rounded-md cursor-pointer overflow-hidden relative border-transparent border m-2',
    '[attr.data-color]': 'color()',
    '[attr.data-size]': 'size()',
    '[attr.data-rounded]': 'rounded()',
    '[attr.data-disabled]': 'disabled()',
    '[attr.data-appearance]': 'appearance()',
    '[class.w-full]': 'full()',
    '[attr.type]': 'type()',
  },
  template: ` <ng-content /> `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Color of the button.
   * @default 'primary'
   */
  color = input<'primary' | 'accent' | 'warn'>('primary');

  /**
   * Size of the button.
   * @default 'medium'
   */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Whether the button should take the full width.
   * @default false
   */
  full = input(false, { transform: booleanAttribute });

  /**
   * Whether the button should have rounded corners.
   * @default false
   */
  rounded = input(false, { transform: booleanAttribute });

  /**
   * Whether the button should be disabled.
   * @default false
   */
  disabled = input(false, { transform: booleanAttribute });

  /**
   * Appearance of the button.
   * @default 'flat'
   */
  appearance = input<'basic' | 'flat' | 'stroked' | 'icon' | 'icon-stroked' | 'fab'>('flat');

  type = input<'button' | 'submit' | 'reset'>('button');
}
