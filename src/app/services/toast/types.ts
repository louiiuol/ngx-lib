import type { Severity } from 'src/app/types/severity.type';

/**
 * Defines toast instance. It could be used to inform the user about the result of the action or to show some error messages.
 */
export type Toast = {
  /** Unique identifier of the toast. */
  uuid: string;
  /**
   * Severity of the toast.
   * Must be one of these: 'info', 'note', 'warn', 'error' or 'success'.
   */
  severity: Severity;

  /** Title of the toast. */
  summary: string;

  /** Description of the toast. */
  details?: string;

  /** Should the user be able to close it manually. */
  closable?: true;

  /** Time in milliseconds the toast will be displayed. */
  life?: number;
};

/**
 * Options available when creating toast.
 */
export type ToastOptions = Omit<Toast, 'severity' | 'uuid'>;
