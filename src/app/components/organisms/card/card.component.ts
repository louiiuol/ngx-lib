import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconMaterialComponent } from '../../atoms/icon-material/icon-material.component';

/**
 * Simple component to render a card with title, optionally subtitle or footer.
 * The footer can be passed as a template with the name `cardFooter`. (See example)
 *
 * @example
 * ```html
 * <lib-card [cardTitle]="title" [cardSubtitle]="subtitle">
 *  <p>
 *    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
 *    veritatis modi eum corporis!
 *  </p>
 *  <ng-template #cardFooter>
 *    <button>Cancel</button>
 *    <button>Confirm</button>
 *  </ng-template>
 * </lib-card>
 * ```
 * @author louiiuol
 * @version 1.0.0
 */
@Component({
  selector: 'lib-card',
  host: {
    class:
      'flex flex-col gap-6 p-6 bg-white rounded-2xl shadow w-fit mx-auto max-w-screen-xl',
  },
  standalone: true,
  template: `
    <header class="flex items-start justify-between gap-4">
      <div class="flex-1 flex flex-col items-start justify-start gap-2">
        <h2 class="text-2xl text-primary-900 font-semibold leading-6">
          {{ cardTitle() }}
        </h2>
        @if (cardSubtitle()) {
          <p class="text-slate text-primary-200">{{ cardSubtitle() }}</p>
        }
      </div>
      @if (closable()) {
        <button
          lib-button
          rounded
          appearance="icon"
          color="primary"
          (click)="closed.emit(null)"
        >
          <lib-icon-material name="close" />
        </button>
      }
    </header>
    <section
      class="relative flex-1 h-fit min-w-48 min-h-14 w-fit max-w-screen-md"
    >
      <ng-content />
    </section>

    @if (cardFooter()) {
      <footer class="flex justify-evenly items-center mt-4">
        <ng-container *ngTemplateOutlet="cardFooter()"></ng-container>
      </footer>
    }
  `,
  imports: [NgTemplateOutlet, ButtonComponent, IconMaterialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cardTitle = input.required<string>();
  cardSubtitle = input<string>();
  closable = input(false, { transform: booleanAttribute });

  closed = output<unknown>();

  @ContentChild('cardFooter', { read: TemplateRef })
  private readonly cardFooterTemplate!: TemplateRef<unknown>;
  protected readonly cardFooter = computed(() => this.cardFooterTemplate);
}
