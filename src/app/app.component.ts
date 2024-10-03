import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-root',
  standalone: true,
  template: `
    <main class="bg-gray-100 p-4">
      <h1 class="text-xl font-semibold">Greetings, friend.</h1>
      <router-outlet />
    </main>
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
