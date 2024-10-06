import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => null,
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render w/ tailwind', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const computedStyle = window.getComputedStyle(mainElement);
      // TODO: FIX -> wrong display value
      expect(computedStyle.display).toEqual('block');
    }
  });
});
