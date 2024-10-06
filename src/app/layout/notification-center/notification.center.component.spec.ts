import { signal } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NotificationCenterComponent } from './notification.center.component';

describe('NotificationCenterComponent', () => {
  let component: NotificationCenterComponent;
  let fixture: ComponentFixture<NotificationCenterComponent>;
  let notificationService: NotificationService;

  beforeEach(async () => {
    const notificationServiceMock = {
      getNotifications: jasmine.createSpy('getNotifications').and.returnValue(
        signal([
          {
            uuid: '1',
            summary: 'Test Summary 1',
            details: 'Test Details 1',
            severity: 'info',
          },
          {
            uuid: '2',
            summary: 'Test Summary 2',
            details: 'Test Details 2',
            severity: 'error',
          },
        ]),
      ),
    };

    await TestBed.configureTestingModule({
      imports: [NotificationCenterComponent],
      providers: [
        { provide: NotificationService, useValue: notificationServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationCenterComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO fix this test
  // it('should display notifications', () => {
  //   const compiled = fixture.nativeElement;
  //   const messages = compiled.querySelectorAll('lib-message');
  //   expect(messages.length).toBe(2);
  //   expect(messages[0].getAttribute('summary')).toBe('Test Summary 1');
  //   expect(messages[0].getAttribute('details')).toBe('Test Details 1');
  //   expect(messages[0].getAttribute('severity')).toBe('info');
  //   expect(messages[1].getAttribute('summary')).toBe('Test Summary 2');
  //   expect(messages[1].getAttribute('details')).toBe('Test Details 2');
  //   expect(messages[1].getAttribute('severity')).toBe('error');
  // });

  it('should call getNotifications from NotificationService', () => {
    expect(notificationService.getNotifications).toHaveBeenCalled();
  });
});
