import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO - Add test: should display the icon name when name is provided

  it('should display an SVG image when svg is provided', () => {
    fixture.componentRef.setInput('svg', 'logo');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.src).toContain('icons/logo.svg');
    expect(imgElement.nativeElement.style.width).toBe('1.5rem');
    expect(imgElement.nativeElement.style.height).toBe('1.5rem');
    expect(imgElement.nativeElement.alt).toBe('icon');
  });

  it('should apply the correct size to the SVG image', () => {
    fixture.componentRef.setInput('svg', 'logo');
    fixture.componentRef.setInput('size', '2rem');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.style.width).toBe('2rem');
    expect(imgElement.nativeElement.style.height).toBe('2rem');
  });

  it('should apply the correct alt text to the SVG image', () => {
    fixture.componentRef.setInput('svg', 'logo');
    fixture.componentRef.setInput('alt', 'logo icon');
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.alt).toBe('logo icon');
  });
});
