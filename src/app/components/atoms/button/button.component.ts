import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Button component with different colors, sizes and rounded corners.
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-button, lib-button-outline',
  standalone: true,
  host: {
    '[attr.data-color]': 'color()',
    '[attr.data-size]': 'size()',
    '[attr.data-rounded]': 'rounded()',
    '[attr.data-disabled]': 'disabled()',
  },
  template: `<ng-content />`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Color of the button.
   */
  color = input<'primary' | 'accent' | 'warn'>('primary');

  /**
   * Size of the button.
   */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Whether the button should have rounded corners.
   */
  rounded = input(false);

  /**
   * Whether the button should be disabled.
   */
  disabled = input(false);
}
