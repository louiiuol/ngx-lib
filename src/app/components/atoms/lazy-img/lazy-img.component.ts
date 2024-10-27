import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/**
 * A lazy loading image component.
 * @param src - The image source.
 * @param alt - The image alt text.
 *
 * @example
 * ```html
 * <lib-lazy-img src="https://example.com/image.jpg" alt="An image" />
 * ```
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-lazy-img',
  standalone: true,
  host: {
    '[style.aspect-ratio]': 'ratio()',
    class: 'inline-block rounded-lg relative',
  },
  template: `
    @if (src() && !hasError()) {
      <img
        class="w-full h-auto max-w-"
        (load)="onLoad()"
        (error)="onError()"
        [src]="src()"
        [alt]="alt()"
      />
    }
    @if (loading() || hasError()) {
      <lib-icon
        name="image-placeholder"
        class="!w-full h-auto fill-slate-400 bg-slate-200 px-6"
      />
    }
  `,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImgComponent {
  src = input.required<string>();
  alt = input<string>('');
  ratio = input<string>('16 / 9');

  loading = signal(true);
  hasError = signal(false);

  onLoad() {
    this.loading.set(false);
    this.hasError.set(false);
  }

  onError() {
    this.loading.set(false);
    this.hasError.set(true);
  }
}
