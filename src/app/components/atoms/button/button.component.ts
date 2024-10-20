import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * Appearance of the button.
 * * `basic` -  No background color, Selector color is applied to text color. Ripple effect on hover.
 * * `flat` - Default button appearance. Selector color is applied to background. Ripple effect on hover.
 * * `stroked` - Button with border. Selector color is applied to border color. Ripple effect on hover.
 * * `icon` - Button with icon only. Spacing are squared. Ripple effect on hover.
 * * `icon-stroked` - Button with icon only and border. Spacing are squared. Ripple effect on hover.
 * * `fab` - Floating action button. Circular button with icon only. Ripple effect on hover.
 */
export type ButtonAppearance =
  | 'basic'
  | 'flat'
  | 'stroked'
  | 'icon'
  | 'icon-stroked'
  | 'fab';

/**
 * Button component with different colors, appearances, and sizes.
 * Also supports disabled property to prevent click events.
 *
 * @see [Documentation page](https://louiiuol.github.io/ngx-lib/#/components/button) for more details.
 *
 * @example
 * **Important: This component must be called by adding `lib-button` attribute on a button element.**
 * ```html
 * <button lib-button>Default</button>
 * <button lib-button appearance="stroked">stroked</button>
 * <button lib-button rounded>Rounded</button>
 * <button lib-button disabled>Disabled</button>
 * ```
 * @author louiiuol
 */
@Component({
  selector: 'button[lib-button], a[lib-button]',
  standalone: true,
  host: {
    class:
      'inline-flex justify-center gap-2 items-center rounded-md cursor-pointer overflow-hidden relative border-transparent border',
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
   */
  color = input<'primary' | 'accent' | 'warn'>('primary');

  /**
   * Size of the button. Changes the font size and the padding applied.
   * @default 'medium'
   */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Whether the button should take the full width or not.
   * @default false
   */
  full = input(false, { transform: booleanAttribute });

  /**
   * Whether the button should have rounded corners or not.
   * @default false
   */
  rounded = input(false, { transform: booleanAttribute });

  /**
   * Whether the button should be disabled; Prevents triggering the click event.
   * @default false
   */
  disabled = input(false, { transform: booleanAttribute });

  /**
   * Appearance of the button.
   * @see ButtonAppearance
   * @default 'flat'
   */
  appearance = input<ButtonAppearance>('flat');

  /**
   * Type of the button. Allows to overrides default button behavior to submit or reset form.
   * @default 'button'
   */
  type = input<'button' | 'submit' | 'reset'>('button');
}
