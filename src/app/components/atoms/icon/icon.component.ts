import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { FileService } from 'src/app/services/file/file.service';

/**
 * Simple component to display an icon from an svg file
 * located in `assets/icons` folder
 *
 * @see `FileService`
 * @see [Documentation page](https://louiiuol.github.io/ngx-lib/#/components/icon) for more details.
 *
 * @example
 * ```html
 * <lib-icon name="home" size="3.5rem" color="lightblue" />
 * ```
 * @author louiiuol
 */
@Component({
  selector: 'lib-icon',
  standalone: true,
  host: {
    class: 'inline-block',
    '[style.width]': 'size()',
    '[style.aspect-ratio]': 'aspectRatio()',
    '[style.color]': 'color()',
  },
  template: ``,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  /**
   * Name of the icon.
   * (must match the filename located in assets/icons folder, without extension .svg)
   * */
  name = input.required<string>();

  /**
   * Optional path to the icons folder. Default is `/icons`
   */
  path = input<string>('/icons');

  /**
   * Size of the icon (must include css unit). Default is '1.5rem'
   */
  size = input<string>('1.5rem');

  /**
   * Aspect ratio of the icon (must match css aspect-ratio property)
   * @default '1 / 1'
   */
  aspectRatio = input<string>('1 / 1');

  /**
   * Color of the icon (must match css aspect-ratio property)
   * @default currentColor
   */
  color = input<string>('currentColor');

  /**
   * Subscription to the icon name changes in order to render the svg content
   */
  protected readonly triggerSubscription = toObservable(this.name)
    .pipe(
      switchMap((name) =>
        this.fileService.getSVG(`${this.path()}/${name}.svg`),
      ),
      takeUntilDestroyed(),
    )
    .subscribe((svgContent) => this.renderSvg(svgContent));

  /**
   * Inject the element reference to render the svg content in the component
   */
  protected readonly el = inject(ElementRef<IconComponent>);
  private readonly fileService = inject(FileService);
  private readonly renderer = inject(Renderer2);

  /**
   * Render the svg content in the component
   * @param element svg content to be rendered
   */
  private renderSvg(element: SVGElement | null) {
    const svgElement = element?.querySelector('svg');
    if (svgElement) {
      this.renderer.setAttribute(svgElement, 'width', this.size());
      this.renderer.setAttribute(svgElement, 'height', this.size());
    }
    this.renderer.appendChild(this.el.nativeElement, element);
  }
}
