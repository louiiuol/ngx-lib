import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../storage/local-storage.service';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const localStorageSpy = jasmine.createSpyObj('LocalStorageService', [
      'get',
      'set',
      'remove',
    ]);

    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        { provide: LocalStorageService, useValue: localStorageSpy },
      ],
    });

    service = TestBed.inject(NotificationService);
    localStorageService = TestBed.inject(
      LocalStorageService,
    ) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a notification', () => {
    service.notify({ summary: 'Test Summary', details: 'Test Details' });

    expect(
      service
        .getNotifications()()
        .find((n) => n.summary)?.summary,
    ).toBe('Test Summary');
    expect(localStorageService.set).toHaveBeenCalled();
  });

  it('should send a success notification', () => {
    service.success({ summary: 'Success Title', details: 'Success Message' });

    expect(service.getNotifications()()).toContain(
      jasmine.objectContaining({
        severity: 'success',
        summary: 'Success Title',
        details: 'Success Message',
      }),
    );
  });

  it('should send an error notification', () => {
    service.error({ summary: 'Error Title', details: 'Error Message' });

    expect(service.getNotifications()()).toContain(
      jasmine.objectContaining({
        severity: 'error',
        summary: 'Error Title',
        details: 'Error Message',
      }),
    );
  });

  // it('should clear all notifications', () => {
  //   service.notify({ details: 'Test Summary', summary: 'Test Details' });
  //   service.clearAllNotifications();

  //   expect(service.getNotifications()()).toEqual([]);
  //   expect(localStorageService.remove).toHaveBeenCalledWith(
  //     'notifications-center',
  //   );
  // });

  // it('should remove a notification after its life span', (done) => {
  //   const lifeSpan = 1000;
  //   service.notify({
  //     summary: 'Test Summary',
  //     details: 'Test Details',
  //     severity: 'info',
  //     life: lifeSpan,
  //   });

  //   setTimeout(() => {
  //     expect(service.getNotifications()()).toEqual([]);
  //     done();
  //   }, lifeSpan + 100); // Adding a small buffer to ensure the timeout has completed
  // });
});
