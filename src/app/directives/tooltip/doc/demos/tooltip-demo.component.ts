import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TooltipDirective } from '../../tooltip.directive';

/**
 * @internal
 */
@Component({
  selector: 'lib-tooltip-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          class="w-full text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          Hover me and you'll see
        </h3>
      </section>
    </div>
  `,
  imports: [TooltipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemoComponent {}
