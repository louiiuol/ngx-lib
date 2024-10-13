import type { NotificationSeverity } from './notification-severity.type';

/**
 * Options available when creating notification.
 */
export type NotifyOptions = {
  /**
   * Title of the notification.
   */
  summary: string;
  /**
   * Description of the notification.
   */
  details?: string;

  /**
   * Time in milliseconds the notification will be displayed.
   */
  life?: number;

  /**
   * Severity of the notification.
   * Must be one of these: 'info', 'note', 'warn', 'error' or 'success'.
   */
  severity?: NotificationSeverity;
};
