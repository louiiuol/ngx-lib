import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  host: {
    class: 'py-6 px-12  flex justify-between items-center gap-12 bg-white',
  },
  template: `
    <strong class="text-2xl text-primary-500">ngx lib</strong>
    <nav class="flex-1  justify-end items-center gap-3 hidden">
      @for (route of routes; track $index) {
        <a
          class="text-primary-200"
          [routerLink]="'/' + route"
          routerLinkActive="text-primary-500"
          class="mr-4"
        >
          {{ route }}
        </a>
      }
    </nav>
  `,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  routes = ['home', 'components', 'modules', 'services'];
}
