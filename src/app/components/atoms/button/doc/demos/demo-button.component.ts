import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconMaterialComponent } from '../../../icon-material/icon-material.component';
import { ButtonComponent } from '../../button.component';

/**
 * @internal
 */
@Component({
  selector: 'lib-button-demo',
  standalone: true,
  template: `
    <div class="ng-demo">
      <section>
        <h3 class="w-full text-2xl mb-3">Appearance</h3>
        <div class="examples-container">
          <h2>Basic</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="basic">
              Default
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="basic"
            >
              Accent
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="basic"
            >
              Warn
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="basic"
              disabled
            >
              Disabled
            </button>
          </div>
        </div>
        <div class="examples-container">
          <h2>flat</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="flat">
              Default
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="flat"
            >
              Accent
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="flat"
            >
              Warn
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="flat"
              disabled
            >
              Disabled
            </button>
          </div>
        </div>
        <div class="examples-container">
          <h2>stroked</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="stroked">
              Default
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="stroked"
            >
              Accent
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="stroked"
            >
              Warn
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="stroked"
              disabled
            >
              Disabled
            </button>
          </div>
        </div>

        <div class="examples-container">
          <h2>icon</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="icon">
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="icon"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="icon"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="icon"
              disabled
            >
              <lib-icon-material name="favorite" />
            </button>
          </div>
        </div>

        <div class="examples-container">
          <h2>icon stroked</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="icon-stroked">
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="icon-stroked"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="icon-stroked"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="icon-stroked"
              disabled
            >
              <lib-icon-material name="favorite" />
            </button>
          </div>
        </div>

        <div class="examples-container">
          <h2>fab</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" appearance="fab">
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="accent"
              appearance="fab"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="fab"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              color="warn"
              appearance="fab"
              disabled
            >
              <lib-icon-material name="favorite" />
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3 class="w-full text-2xl mb-3">Sizing</h3>
        <div class="examples-container">
          <h2>Button</h2>
          <div class="examples-list">
            <button lib-button (click)="clicked()" size="small">small</button>
            <button lib-button (click)="clicked()" size="medium">medium</button>
            <button lib-button (click)="clicked()" size="large">large</button>
          </div>
        </div>
        <div class="examples-container">
          <h2>Icon</h2>
          <div class="examples-list">
            <button
              lib-button
              (click)="clicked()"
              size="small"
              appearance="icon"
            >
              <lib-icon-material size="1rem" name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              size="medium"
              appearance="icon"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              size="large"
              appearance="icon"
            >
              <lib-icon-material size="2.5rem" name="favorite" />
            </button>
          </div>
        </div>

        <div class="examples-container">
          <h2>Fab</h2>
          <div class="examples-list">
            <button
              lib-button
              (click)="clicked()"
              size="small"
              appearance="fab"
            >
              <lib-icon-material size="1rem" name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              size="medium"
              appearance="fab"
            >
              <lib-icon-material name="favorite" />
            </button>
            <button
              lib-button
              (click)="clicked()"
              size="large"
              appearance="fab"
            >
              <lib-icon-material size="2.5rem" name="favorite" />
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
  imports: [ButtonComponent, IconMaterialComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  clicked(): void {
    alert('Button clicked!');
  }
}
