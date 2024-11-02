import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import { CardComponent } from '../../card.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-card-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Default card</h3>
        <div class="examples-container">
          <div class="examples-list">
            <lib-card [cardTitle]="title" [cardSubtitle]="subtitle">
              <p>
                {{ description }}
              </p>
            </lib-card>
          </div>
        </div>
      </section>
      <section>
        <h3 class="w-full text-2xl mb-3">Card with close button & footer</h3>
        <div class="examples-container">
          <div class="examples-list">
            <lib-card
              closable
              (closed)="close()"
              [cardTitle]="title"
              [cardSubtitle]="subtitle"
            >
              <p>
                {{ description }}
              </p>
              <ng-template #cardFooter>
                <button lib-button appearance="stroked">Cancel</button>
                <button lib-button color="primary">Confirm</button>
              </ng-template>
            </lib-card>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [CardComponent, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDemoComponent {
  title = 'Hello friend.';
  subtitle = 'Nice to meet you.';

  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis modi eum corporis, rem officia natus omnis ullam ut
                repudiandae, accusantium ipsum eveniet quibusdam obcaecati sint
                pariatur tempore amet. Voluptates!`;

  close() {
    alert('Closed');
  }
}
