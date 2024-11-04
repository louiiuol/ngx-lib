import type { OnDestroy } from '@angular/core';
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Directive to create a tooltip on hover.
 *
 * @example
 * ````html
 * <h3
 *  libTooltip="Hello, friend. <br/> Nice to meet you"
 * [tooltipClass]="'bg-blue-500 text-white'"
 * >
 *  Hover me and you'll see
 * </h3>
 * ````
 *
 * @author louiiuol
 * @version 1.0.0
 */
@Directive({
  selector: '[libTooltip]',
  standalone: true,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class TooltipDirective implements OnDestroy {
  /**
   * Tooltip content. Can be HTML as a string. Required input.
   */
  libTooltip = input.required<string>();

  /**
   * Optional input for the Tailwind CSS classes of the tooltip.
   */
  tooltipClass = input<string>();

  /**
   * Optional property to disable the tooltip.
   */
  tooltipDisabled = input<boolean>(false);

  position = input<'above' | 'below' | 'before' | 'after'>('below');

  private tooltipElement: HTMLElement = document.createElement('div');
  private readonly elementRef = inject(ElementRef);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly tooltipClasses =
    'absolute bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 transition-opacity duration-200 pointer-events-none z-50 max-w-96 text-pretty';

  constructor() {
    this.createTooltipElement();
    this.syncContent();
    this.syncCustomClasses();
  }

  ngOnDestroy() {
    if (this.tooltipElement.parentNode)
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
  }

  private onMouseEnter() {
    if (this.tooltipDisabled()) return; // Prevent tooltip if disabled
    document.body.appendChild(this.tooltipElement);
    this.updateTooltipPosition();
    this.tooltipElement.classList.remove('opacity-0');
    this.tooltipElement.classList.add('opacity-100');
  }

  private onMouseLeave() {
    if (this.tooltipDisabled()) return; // Prevent tooltip if disabled
    this.tooltipElement.classList.remove('opacity-100');
    this.tooltipElement.classList.add('opacity-0');
    const disappearTimeout = 200;
    setTimeout(() => {
      if (this.tooltipElement.parentNode) {
        this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      }
    }, disappearTimeout);
  }

  private createTooltipElement() {
    this.tooltipElement.classList.add(...this.tooltipClasses.split(' '));
  }

  private syncContent() {
    effect(() => {
      this.tooltipElement.innerHTML =
        this.sanitizer.sanitize(SecurityContext.HTML, this.libTooltip()) ?? '';
    });
  }

  private syncCustomClasses() {
    effect(() => {
      this.tooltipElement.className = '';
      this.tooltipElement.classList.add(...this.tooltipClasses.split(' '));

      // Add custom Tailwind CSS classes if provided
      const customClasses = this.tooltipClass();
      if (customClasses) {
        this.tooltipElement.classList.add(...customClasses.split(' '));
      }
    });
  }

  private updateTooltipPosition() {
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();

    const positions = {
      above: {
        top: hostPos.top - tooltipPos.height - 8 + window.scrollY,
        left:
          hostPos.left +
          (hostPos.width - tooltipPos.width) / 2 +
          window.scrollX,
      },
      below: {
        top: hostPos.bottom + 8 + window.scrollY,
        left:
          hostPos.left +
          (hostPos.width - tooltipPos.width) / 2 +
          window.scrollX,
      },
      before: {
        top:
          hostPos.top +
          (hostPos.height - tooltipPos.height) / 2 +
          window.scrollY,
        left: hostPos.left - tooltipPos.width - 8 + window.scrollX,
      },
      after: {
        top:
          hostPos.top +
          (hostPos.height - tooltipPos.height) / 2 +
          window.scrollY,
        left: hostPos.right + 8 + window.scrollX,
      },
    };

    const pos = positions[this.position()];
    this.tooltipElement.style.top = `${pos.top}px`;
    this.tooltipElement.style.left = `${pos.left}px`;
  }
}
