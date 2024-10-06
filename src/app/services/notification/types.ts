import type { NotificationSeverity } from 'src/app/types/notification-severity.type';

/**
 * Interfaces and types for the Notification service.
 */
export interface Notification {
  uuid: string;
  severity: NotificationSeverity;
  summary: string;
  details?: string;
  closable?: true;
  life?: number;
  date?: Date;
}
