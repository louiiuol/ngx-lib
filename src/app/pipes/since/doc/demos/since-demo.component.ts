import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SincePipe } from '../../since.pipe';
/**
 * @internal
 */
@Component({
  selector: 'lib-since-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <div class="examples-container">
          <h2>Pick a date</h2>
          <div class="example flex gap-4">
            <input type="date" [(ngModel)]="value" />
            <p class="text-lg">
              <em>{{ value | since }}</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [SincePipe, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinceDemoComponent {
  value: number | null = null;
}
