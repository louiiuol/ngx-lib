import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import type { nullish } from 'src/app/types/nullish.type';

/**
 * Formats given html content and makes it "safe" using DomSanitizer.
 * This pipe must be used with controlled content only (should be parsed and escaped)
 *
 * @example
 * ```html
 * <div [innerHTML]="content | trustHtml"></div>
 * ```
 *
 * @see https://angular.io/api/platform-browser/DomSanitizer
 *
 * @author louiiuol
 * @version 1.0.0
 */
@Pipe({
  standalone: true,
  name: 'trustHtml',
})
export class TrustHtmlPipe implements PipeTransform {
  private readonly _sanitizer = inject(DomSanitizer);
  transform(value: string | nullish): SafeHtml {
    return value ? this._sanitizer.bypassSecurityTrustHtml(value) : '';
  }
}
