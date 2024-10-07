import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Simple component to display an icon from material-symbols-outlined font.
 * Refer to the material-symbols-outlined font for the list of available icons.
 * https://fonts.google.com/icons
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-icon-material',
  standalone: true,
  host: {
    class: 'material-symbols-outlined',
    '[style.width]': 'size()',
    '[style.height]': 'size()',
  },
  template: `{{ name() }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMaterialComponent {
  /**
   * Name of the material icon
   * (check https://fonts.google.com/icons for the list of available icons)
   * */
  name = input.required<string>();

  /**
   * Size of the icon (must include css unit)
   */
  size = input<string>('1.5rem');
}
