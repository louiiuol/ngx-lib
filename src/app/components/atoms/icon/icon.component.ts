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

const ICONS_PATH = '/icons';

/**
 * Simple component to display an icon from an svg file
 * located in `assets/icons` folder
 *
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
   * Size of the icon (must include css unit)
   * @default '1.5rem'
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

  protected readonly triggerSubscription = toObservable(this.name)
    .pipe(
      switchMap((name) => this.fileService.getSVG(`${ICONS_PATH}/${name}.svg`)),
      takeUntilDestroyed(),
    )
    .subscribe((svgContent) => this.renderSvg(svgContent));

  readonly el = inject(ElementRef<IconComponent>);
  private readonly fileService = inject(FileService);
  private readonly renderer = inject(Renderer2);

  /**
   * Render the svg content in the component
   * @param element svg content to be rendered
   */
  private renderSvg(element: HTMLParagraphElement | SVGElement | null) {
    const svgElement = element?.querySelector('svg');
    if (svgElement) {
      this.renderer.setAttribute(svgElement, 'width', this.size());
      this.renderer.setAttribute(svgElement, 'height', this.size());
    }
    this.renderer.appendChild(this.el.nativeElement, element);
  }
}
