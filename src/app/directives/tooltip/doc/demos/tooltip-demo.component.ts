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
      <section class="flex gap-6">
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          class="text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          Below (Default)
        </h3>
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          position="above"
          class="text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          Above
        </h3>
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          position="before"
          class="text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          Before
        </h3>
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          position="after"
          class="text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          After
        </h3>
        <h3
          libTooltip="Hello, friend. <br/> Nice to meet you"
          tooltipClass="bg-pink-300 text-black"
          position="above"
          class="text-2xl mb-3 bg-slate-400 text-center text-slate-800 py-3 px-5 rounded-lg"
        >
          CSS
        </h3>
      </section>
    </div>
  `,
  imports: [TooltipDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemoComponent {}
