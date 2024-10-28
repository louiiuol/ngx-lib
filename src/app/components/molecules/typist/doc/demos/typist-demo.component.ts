import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TypistComponent } from '../../typist.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-typist-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Loading image</h3>
        <div class="examples-container">
          <h2>Default</h2>
          <div class="examples-list w-80">
            <lib-typist [toType]="sentences" />
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [TypistComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypistDemoComponent {
  sentences = [
    'Hello, friend',
    "Let's hack the world",
    'We are fsociety',
    'We are finally free',
  ];
}
