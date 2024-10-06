import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Simple component to display an icon.
 * * either from material-symbols-outlined font
 * * or from an svg file located in assets/icons folder
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-icon',
  standalone: true,
  host: { class: 'material-symbols-outlined' },
  template: `
    @if (name(); as name) {
      {{ name }}
    } @else if (svg()) {
      <img
        [src]="iconsPath + svg() + '.svg'"
        [style.width]="size()"
        [style.height]="size()"
        [alt]="alt()"
      />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  /**
   * Name of the google icon
   * */
  name = input<string>();

  /**
   * Alternative text to be attached
   * */
  alt = input<string>('icon');

  /**
   * SVG file name to be displayed (must match the file name in assets/icons folder)
   */
  svg = input<string>();

  /**
   * Size of the icon (must include unit)
   */
  size = input<string>('1.5rem');

  protected readonly iconsPath = 'icons/';
}
