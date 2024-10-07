import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { IconMaterialComponent } from './icon-material.component';

describe('IconMaterialComponent', () => {
  let component: IconMaterialComponent;
  let fixture: ComponentFixture<IconMaterialComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMaterialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMaterialComponent);
    fixture.componentRef.setInput('name', 'home');
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct icon name', () => {
    expect(compiled.textContent).toContain('home');
  });

  it('should update the icon name', () => {
    fixture.componentRef.setInput('name', 'info');
    fixture.detectChanges();
    expect(compiled.textContent).toContain('info');
  });

  it('should have the correct class', () => {
    expect(compiled.classList).toContain('material-symbols-outlined');
  });

  it('should have the correct size', () => {
    expect(compiled.style.width).toBe('1.5rem');
    expect(compiled.style.height).toBe('1.5rem');
  });

  it('should update the size', () => {
    fixture.componentRef.setInput('size', '2rem');
    fixture.detectChanges();
    expect(compiled.style.width).toBe('2rem');
    expect(compiled.style.height).toBe('2rem');
  });
});
