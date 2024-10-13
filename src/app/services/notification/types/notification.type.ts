import type { NotificationSeverity } from 'src/app/services/notification/types/notification-severity.type';

/**
 * Defines notification instance.
 */
export type Notification = {
  /**
   * Unique identifier of the notification. Used to remove it from store notification.
   */
  uuid: string;

  /**
   * Severity of the notification. Which will apply different styles on the notification.
   */
  severity: NotificationSeverity;

  /**
   * Title of the notification.
   */
  summary: string;

  /**
   * Description of the notification.
   */
  details?: string;

  /**
   * Should the user be able to close it manually.
   */
  closable?: true;

  /**
   * Time in milliseconds the notification will be displayed.
   */
  life?: number;

  /**
   * Date of the notification.
   */
  date?: Date;

  /**
   * Has the user seen the notification.
   * (should be hidden in the notification center if true)
   */
  seen?: boolean;
};
