import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import type { Notification } from './types/notification.type';

import { v4 as uuidV4 } from 'uuid';
import type { NotifyOptions } from './types/notification-options.type';

/**
 * Simple notification service that allows to send notifications to the user.
 * They are stored in local storage and available through signal.
 * Checkout out Notification interface to see how to customize them.
 *
 * @author louiiuol
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
  notify({ summary, details, severity = 'info', life = 4000 }: NotifyOptions) {
    const uuid = uuidV4();
    this.notifications().push({
      uuid,
      severity,
      summary,
      details,
      seen: false,
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
   * @param summary key to be displayed for summary of the notification
   * @param message key to be displayed for description of the notification
   * @param key id of the container to display notification in
   */
  success = (opt: NotifyOptions) =>
    this.notify({ ...opt, severity: 'success' });

  /**
   * Send Error notification with given params to the user.
   * @param summary key to be displayed for summary of the notification
   * @param details key to be displayed for description of the notification
   * @param key id of the container to display notification in
   */
  error = (opt: NotifyOptions) => this.notify({ ...opt, severity: 'error' });

  /**
   * Send Warning notification with given params to the user.
   * @param summary key to be displayed for summary of the notification
   * @param details key to be displayed for description of the notification
   * @param key id of the container to display notification in
   */
  warn = (opt: NotifyOptions) => this.notify({ ...opt, severity: 'warn' });

  /**
   * Send all current notifications.
   * @returns all notifications as Signal.
   */
  getNotifications() {
    return this.notifications;
  }

  /**
   * Marks notification as seen.
   */
  seenNotification(uuid: string) {
    const updated = this.notifications().map((n) => {
      if (n.uuid === uuid) {
        n.seen = true;
      }
      return n;
    });
    this.notifications.set(updated);
    this.storage.set({
      key: this.localStorageKey,
      value: updated,
    });
  }

  /**
   * Clears local notifications list.
   */
  clearAllNotifications() {
    if (confirm('Are you sure you want to delete all notifications?')) {
      this.notifications.set([]);
      this.storage.remove(this.localStorageKey);
    }
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
