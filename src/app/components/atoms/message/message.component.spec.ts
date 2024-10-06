import { ChangeDetectionStrategy } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageComponent],
    })
      .overrideComponent(MessageComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('summary', 'Test Summary');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct icon and color for info severity', () => {
    fixture.componentRef.setInput('severity', 'info');
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('lib-icon'));
    const container = fixture.debugElement.query(By.css('div'));

    expect(icon.componentInstance.name()).toBe('info');
    expect(container.nativeElement.classList).toContain('bg-blue-100');
    expect(container.nativeElement.classList).toContain('border-blue-500');
    expect(container.nativeElement.classList).toContain('text-blue-900');
  });

  it('should display the correct icon and color for error severity', () => {
    fixture.componentRef.setInput('severity', 'error');

    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('lib-icon'));
    const container = fixture.debugElement.query(By.css('div'));

    expect(icon.componentInstance.name()).toBe('error');
    expect(container.nativeElement.classList).toContain('bg-red-100');
    expect(container.nativeElement.classList).toContain('border-red-500');
    expect(container.nativeElement.classList).toContain('text-red-900');
  });

  it('should display the summary and details', () => {
    fixture.componentRef.setInput('details', 'Test Details');
    fixture.detectChanges();

    const summaryElement = fixture.debugElement.query(
      By.css('span'),
    ).nativeElement;
    const detailsElement = fixture.debugElement.queryAll(By.css('span'))[1]
      .nativeElement;

    expect(summaryElement.innerHTML).toContain('Test Summary');
    expect(detailsElement.innerHTML).toContain('Test Details');
  });

  it('should not display the icon if showIcon is false', () => {
    fixture.componentRef.setInput('showIcon', false);
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('lib-icon'));
    expect(icon).toBeNull();
  });
});
