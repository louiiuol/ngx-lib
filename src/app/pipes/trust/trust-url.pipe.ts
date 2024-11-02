import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

/**
 * Formats given url and makes it "safe" using DomSanitizer.
 * This pipe must be used with controlled content only (should be parsed and escaped to prevent XSS attacks)
 *
 * @example
 * ```html
 * <a [href]="url | trustURL">Click me</a>
 * ```
 *
 * @see https://angular.io/api/platform-browser/DomSanitizer
 *
 * @author louiiuol
 * @version 1.0.0
 */
@Pipe({
  standalone: true,
  name: 'trustURL',
})
export class TrustUrlPipe implements PipeTransform {
  private readonly _sanitizer = inject(DomSanitizer);
  transform(value: string | null | undefined): SafeHtml {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value ?? '');
  }
}
