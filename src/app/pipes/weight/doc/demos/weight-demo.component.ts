import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeightPipe } from '../../weight.pipe';
/**
 * @internal
 */
@Component({
  selector: 'lib-weight-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Weight pipe examples usage</h3>
        <div class="examples-container">
          <h2>678678g</h2>
          <p class="example">
            {{ 678678 | weight }}
          </p>
        </div>
      </section>
    </div>
  `,
  imports: [WeightPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeightDemoComponent {}
