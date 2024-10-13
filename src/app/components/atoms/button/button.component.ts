import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Simple button component with multiple styles.
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-button',
  standalone: true,
  host: {
    class:
      'inline-flex justify-center items-center rounded-md cursor-pointer overflow-hidden relative border-transparent border',
    '[attr.data-color]': 'color()',
    '[attr.data-size]': 'size()',
    '[attr.data-rounded]': 'rounded()',
    '[attr.data-disabled]': 'disabled()',
    '[attr.data-appearance]': 'appearance()',
    '[attr.data-full]': 'full()',
  },
  template: `<ng-content />`,
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
  full = input(false);

  /**
   * Whether the button should have rounded corners.
   * @default false
   */
  rounded = input(true);

  /**
   * Whether the button should be disabled.
   * @default false
   */
  disabled = input(false);
  // TODO Prevent click event when disabled

  /**
   * Appearance of the button.
   * @default 'raised'
   */
  appearance = input<'basic' | 'flat' | 'stroked'>('flat');
}
