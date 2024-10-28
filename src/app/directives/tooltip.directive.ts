import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input('libTooltip') tooltipContent: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltipContent)
    );

    // Add HTML support
    this.tooltipElement.innerHTML = this.tooltipContent;

    this.renderer.appendChild(document.body, this.tooltipElement);
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement.getBoundingClientRect();

    const top = hostPos.top - tooltipPos.height - 8;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;

    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}