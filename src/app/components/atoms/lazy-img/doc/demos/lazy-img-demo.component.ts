import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyImgComponent } from '../../lazy-img.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-lazy-img-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Loading image</h3>
        <div class="examples-container">
          <h2>Default</h2>
          <div class="examples-list w-80">
            <lib-lazy-img [src]="url" alt="Heisenberg" />
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [LazyImgComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImgDemoComponent {
  url =
    'https://github.com/louiiuol/louiiuol/blob/prod/images/works/graphism/illustrator/heisenberg.jpg?raw=true';
}
