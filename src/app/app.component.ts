import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h1 class="text-xl font-semibold">Greetings, friend.</h1> `,
})
export class AppComponent {}
