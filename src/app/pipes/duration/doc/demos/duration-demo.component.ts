import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from '../../duration.pipe';
/**
 * @internal
 */
@Component({
  selector: 'lib-duration-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <div class="examples-container">
          <h2>Input</h2>
          <div class="example">
            <em>result</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>null</h2>
          <div class="example">
            <em>{{ null | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>0</h2>
          <div class="example">
            <em>{{ 0 | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>7200</h2>
          <div class="example">
            <em>{{ 7200 | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>79</h2>
          <div class="example">
            <em>{{ 79 | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>7200</h2>
          <div class="example">
            <em>{{ 7200 | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>17200</h2>
          <div class="example">
            <em>{{ 17200 | duration }}</em>
          </div>
        </div>
        <div class="examples-container">
          <h2>37200</h2>
          <div class="example">
            <em>{{ 37200 | duration }}</em>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [DurationPipe, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationDemoComponent {
  value: number | null = null;
}
