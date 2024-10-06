import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from 'src/app/components/atoms/icon/icon.component';

/**
 * Introduction page for the library
 *
 * @author louiiuol
 */
@Component({
  selector: 'lib-home-page',
  host: {
    class:
      'flex flex-col gap-6 items-center justify-center bg-slate-100 p-16 rounded-2xl shadow-xl',
  },
  standalone: true,
  template: `
    <h1 class="text-7xl font-semibold text-center text-primary-700">
      Greetings,
      <br />
      friend.
    </h1>
    <p class="text-2xl text-accent-300">Let's start building some UI 🎨</p>
    <lib-icon svg="logo" alt="Website logo" size="150px" />
  `,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
