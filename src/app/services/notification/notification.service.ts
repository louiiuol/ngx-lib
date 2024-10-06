import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import type { Notification } from './types';

import type { NotificationSeverity } from 'src/app/types/notification-severity.type';
import { v4 as uuidV4 } from 'uuid';

/**
 * Simple notification service that allows to send notifications to the user.
 * They are stored in local storage and available through signal.
 * Checkout out Notification interface to see how to customize them.
 *
 * @author author
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly storage = inject(LocalStorageService);
  private readonly localStorageKey = 'notifications-center';

  private readonly notifications = signal<Notification[]>(
    this.getLocalNotifications(),
  );

  /**
   * Send notification with given params to the user.
   * @param title key to be displayed for title of the notification
   * @param message key to be displayed for description of the notification
   * @param severity level to apply to notification (default is 'info')
   * @param key id of the container to display notification in
   */
  notify(
    summary: string,
    details?: string,
    severity: NotificationSeverity = 'info',
    life: number = 4000,
  ) {
    const uuid: string = uuidV4();
    this.notifications().push({
      uuid,
      severity,
      summary,
      details,
      date: new Date(),
    });
    this.storage.set({
      key: this.localStorageKey,
      value: this.notifications(),
    });
    setTimeout(() => this.removeNotification(uuid), life);
  }

  /**
   * Send Success notification with given params to the user.
   * @param title key to be displayed for title of the notification
   * @param message key to be displayed for description of the notification
   * @param key id of the container to display notification in
   */
  success = (title: string, message?: string) =>
    this.notify(title, message, 'success');

  /**
   * Send Error notification with given params to the user.
   * @param title key to be displayed for title of the notification
   * @param message key to be displayed for description of the notification
   * @param key id of the container to display notification in
   */
  error = (title: string, message?: string) =>
    this.notify(title, message, 'error');

  getNotifications() {
    return this.notifications;
  }

  /**
   * Clears local notifications list.
   */
  clearAllNotifications() {
    this.notifications.set([]);
    this.storage.remove(this.localStorageKey);
  }

  private removeNotification(uuid: string) {
    const updated = this.notifications().filter((n) => n.uuid !== uuid);
    this.notifications.set(updated);
    this.storage.set({
      key: this.localStorageKey,
      value: updated,
    });
  }

  private getLocalNotifications() {
    const notifications = this.storage.get<Notification[]>(
      this.localStorageKey,
    );
    if (!notifications) {
      return [];
    }
    return notifications;
  }
}
