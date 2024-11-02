import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InitialsPipe } from '../../initials.pipe';
/**
 * @internal
 */
@Component({
  selector: 'lib-initials-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Initials examples usage</h3>
        <div class="examples-container">
          <h2>Only email available</h2>
          <div class="example">
            <p>{{ user1 | json }}</p>
            <p [innerHTML]="user1 | initials"></p>
          </div>
        </div>
        <div class="examples-container">
          <h2>First name and last name available</h2>
          <div class="example">
            <p>{{ user2 | json }}</p>
            <p [innerHTML]="user2 | initials"></p>
          </div>
        </div>
        <div class="examples-container">
          <h2>Empty object</h2>
          <div class="example">
            <p>{{ user3 | json }}</p>
            <p [innerHTML]="user3 | initials"></p>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [InitialsPipe, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialsDemoComponent {
  user1 = {
    email: 'email@example.fr',
  };

  user2 = {
    firstName: 'John',
    lastName: 'Doe',
  };

  user3 = {};
}
