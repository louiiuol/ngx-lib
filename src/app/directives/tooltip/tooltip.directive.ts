import type { OnDestroy } from '@angular/core';
import {
  Directive,
  effect,
  ElementRef,
  HostListener,
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
 * @version 0.0.1
 */
@Directive({
  selector: '[libTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnDestroy {
  /**
   * Required input for the tooltip content.
   */
  libTooltip = input.required<string>();

  /**
   * Optional input for the Tailwind CSS classes of the tooltip.
   */
  tooltipClass = input<string>();

  private tooltipElement!: HTMLElement;
  private readonly elementRef = inject(ElementRef);
  private readonly sanitizer = inject(DomSanitizer);

  constructor() {
    // Create the tooltip element
    this.createTooltipElement();

    // Set up effects to react to changes in content and class inputs
    this.setupContentEffect();
    this.setupClassEffect();
  }

  private createTooltipElement() {
    this.tooltipElement = document.createElement('div');
    // Add default Tailwind CSS classes for styling
    this.tooltipElement.classList.add(
      'absolute',
      'bg-gray-800',
      'text-white',
      'text-sm',
      'py-1',
      'px-2',
      'rounded',
      'opacity-0',
      'transition-opacity',
      'duration-200',
      'pointer-events-none',
      'z-50',
    );
  }

  private setupContentEffect() {
    effect(() => {
      const content = this.libTooltip();

      // Sanitize the HTML content
      const sanitizedContent =
        this.sanitizer.sanitize(SecurityContext.HTML, content) ?? '';

      // Set the sanitized HTML content
      this.tooltipElement.innerHTML = sanitizedContent;
    });
  }

  private setupClassEffect() {
    effect(() => {
      const customClasses = this.tooltipClass();
      // Remove all classes except the default ones
      const defaultClasses = [
        'absolute',
        'opacity-0',
        'transition-opacity',
        'duration-200',
        'pointer-events-none',
        'z-50',
        'bg-gray-800',
        'text-white',
        'text-sm',
        'py-1',
        'px-2',
        'rounded',
      ];
      this.tooltipElement.className = '';
      this.tooltipElement.classList.add(...defaultClasses);

      // Add custom Tailwind CSS classes if provided
      if (customClasses) {
        this.tooltipElement.classList.add(...customClasses.split(' '));
      }
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    document.body.appendChild(this.tooltipElement);
    this.updateTooltipPosition();
    this.tooltipElement.classList.remove('opacity-0');
    this.tooltipElement.classList.add('opacity-100');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.tooltipElement.classList.remove('opacity-100');
    this.tooltipElement.classList.add('opacity-0');
    setTimeout(() => {
      if (this.tooltipElement.parentNode) {
        this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      }
    }, 200); // Match the transition duration
  }

  @HostListener('mousemove')
  onMouseMove() {
    this.updateTooltipPosition();
  }

  private updateTooltipPosition() {
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();

    // Calculate the position of the tooltip
    const top = hostPos.top - tooltipPos.height - 8 + window.scrollY;
    const left =
      hostPos.left + (hostPos.width - tooltipPos.width) / 2 + window.scrollX;

    // Set the position
    this.tooltipElement.style.top = `${top}px`;
    this.tooltipElement.style.left = `${left}px`;
  }

  ngOnDestroy() {
    if (this.tooltipElement.parentNode) {
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
    }
  }
}
