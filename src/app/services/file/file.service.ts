import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

/**
 * Simple service to handle file operations.
 *
 * @author louiiuol
 */
@Injectable({ providedIn: 'root' })
export class FileService {
  private readonly http = inject(HttpClient);

  /**
   * Get the content of an SVG file located at the given path.
   * @param path Path to the SVG file
   * @returns SVG content as a SVGSVGElement
   */
  getSVG(path: string) {
    return this.http.get(path, { responseType: 'text' }).pipe(
      catchError(() => of(null)),
      map((svgContent) => {
        if (!svgContent) {
          const fallbackSVG = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V13H13V7ZM13 15H11V17H13V15Z" fill="#757575"/>
            </svg>
          `;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = fallbackSVG;
          return tempDiv.querySelector('svg');
        }
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = svgContent;
        return tempDiv.querySelector('svg');
      }),
    );
  }
}
