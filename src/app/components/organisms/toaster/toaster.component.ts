import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { MessageComponent } from 'src/app/components/molecules/message/message.component';
import { ToastService } from 'src/app/services/toast/toast.service';

/**
 * Simple container for global toaster
 * Will display all toasts emitted from `ToastService`
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-toaster',
  standalone: true,
  host: {
    class: 'absolute inset-0 z-50 isolate px-4 py-6 flex',
    '[class]': 'positionClasses()',
  },
  template: `
    <div class="flex flex-col justify-end gap-3 w-96 h-fit">
      @for (toast of toasts(); track toast.uuid) {
        <lib-message
          class="w-80"
          [summary]="toast.summary"
          [details]="toast.details"
          [severity]="toast.severity"
        />
      }
    </div>
  `,
  imports: [MessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent {
  protected readonly toasts = inject(ToastService).toasts;

  /** Vertical position of the toast on the screen. Default to 'top' */
  positionY = input<'top' | 'bottom' | 'center'>('top');

  /** Horizontal position of the toast on the screen. Default to 'right' */
  positionX = input<'left' | 'right' | 'center'>('right');

  protected readonly positionClasses = computed(() => {
    const aligned = this.positionY()
      .replace('bottom', 'end')
      .replace('top', 'start');
    const justified = this.positionX()
      .replace('right', 'end')
      .replace('left', 'start');
    return `justify-${justified} items-${aligned}`;
  });
}
