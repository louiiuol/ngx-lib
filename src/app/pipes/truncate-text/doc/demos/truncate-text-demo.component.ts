import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TruncateTextPipe } from '../../truncate-text.pipe';
/**
 * @internal
 */
@Component({
  selector: 'lib-truncate-text-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Truncate text demo</h3>
        <div class="examples-container">
          <h2>Default size</h2>
          <div class="example">
            <p [innerHTML]="content | truncateText"></p>
          </div>
        </div>
        <div class="examples-container">
          <h2>Custom size</h2>
          <div class="example">
            <p [innerHTML]="content | truncateText: 15"></p>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [TruncateTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruncateTextDemoComponent {
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}
