/**
 * Defines notification instance.
 */
export type Notification = {
  /**
   * Unique identifier of the notification. Used to remove it from store notification.
   */
  uuid: string;

  /**
   * Title of the notification.
   */
  summary: string;

  /**
   * Description of the notification.
   */
  details?: string;

  /**
   * Date of the notification.
   */
  emitAt: Date;

  /**
   * Has the user seen the notification.
   * (should be hidden in the notification center if true)
   */
  seen: boolean;
};
