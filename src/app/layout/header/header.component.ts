import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  host: {
    class: 'py-6 px-12  flex justify-between items-center gap-12 bg-white',
  },
  template: `
    <strong class="text-2xl text-primary-500">{{ appName }}</strong>
    <nav class="flex-1  justify-end items-center gap-3 hidden">
      @for (route of routes; track $index) {
        <a class="text-primary-200" [routerLink]="route.path" class="mr-4">
          {{ route.label }}
        </a>
      }
    </nav>
  `,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  activateRouter = inject(ActivatedRoute);
  routes = [
    { label: 'home', path: '/' },
    { label: 'components', path: '/components' },
    { label: 'modules', path: '/modules' },
    { label: 'services', path: '/services' },
  ];
  appName = 'ngx lib';
}
