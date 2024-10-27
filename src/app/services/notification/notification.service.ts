import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import type { Notification } from './types/notification.type';

import { generateRandomUUID } from 'src/app/helpers/fn/gen-uuid.fn';

/**
 * Simple notification service that allows to send notifications to the user.
 * They are stored in local storage and available through signal.
 * Checkout out Notification interface to see how to customize them.
 *
 * @see `LocalStorageService` to understand how notifications are stored.
 * @see `uuid` npm package to generate unique identifiers.
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
   * Add given notification to the list of stored notifications. Can be accessed through `getNotifications()`.
   * @param summary title of the notification
   * @param message description of the notification
   */
  notify({ summary, details }: Pick<Notification, 'details' | 'summary'>) {
    const uuid = generateRandomUUID();
    this.notifications().push({
      uuid,
      summary,
      details,
      seen: false,
      emitAt: new Date(),
    });
    this.storage.set({
      key: this.localStorageKey,
      value: this.notifications(),
    });
  }

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
      if (n.uuid === uuid) n.seen = true;
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

  /*
   * Removes notification from the list.
   */
  removeNotification(uuid: string) {
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
