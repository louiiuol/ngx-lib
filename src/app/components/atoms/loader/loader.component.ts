import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Simple component to render a loader (with CSS only).
 * This component is meant to be called within @if control flow: otherwise will always be shown.
 * Also, this component is positioned as absolute, so parent element must be positioned as relative.
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-loader',
  standalone: true,
  host: {
    class:
      'absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center rounded-lg',
  },
  template: `<span
    class="rounded-full text-primary animate-spin size-12 border-transparent border-4 border-t-current border-b-current border-r-current"
  ></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
