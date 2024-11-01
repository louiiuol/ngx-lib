import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoaderComponent } from '../../loader.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-loader-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Loader example</h3>
        <div class="examples-container">
          <h2>Default</h2>
          <div class="examples-list w-80 h-40 relative">
            <lib-loader />
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [LoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderDemoComponent {}
