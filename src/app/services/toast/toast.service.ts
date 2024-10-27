import { Injectable, signal } from '@angular/core';
import { generateRandomUUID } from 'src/app/helpers/fn/gen-uuid.fn';
import type { Toast, ToastOptions } from './types';

/**
 * Simple toast service that allows to send toasts to the user.
 * They are stored in local storage and available through signal.
 * Checkout out Toast interface to see how to customize them.
 *
 * @see `ToasterComponent` to learn how to display toasts.
 * @source [Github](https://github.com/louiiuol/ngx-lib/blob/main/src/app/services/toast/toast.service.ts)
 *
 * @author louiiuol
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);

  /**
   * Send Warning toast with given params to the user.
   * @param summary key to be displayed for summary of the toast
   * @param details key to be displayed for description of the toast
   * @param key id of the container to display toast in
   */
  info(opt: ToastOptions) {
    return this.notify({ ...opt, severity: 'info' });
  }

  /**
   * Send Success toast with given params to the user.
   * @param summary key to be displayed for summary of the toast
   * @param message key to be displayed for description of the toast
   * @param key id of the container to display toast in
   */
  success(opt: ToastOptions) {
    console.log('object');
    return this.notify({ ...opt, severity: 'success' });
  }

  /**
   * Send Error toast with given params to the user.
   * @param summary key to be displayed for summary of the toast
   * @param details key to be displayed for description of the toast
   * @param key id of the container to display toast in
   */
  error(opt: ToastOptions) {
    return this.notify({ ...opt, severity: 'error' });
  }

  /**
   * Send Warning toast with given params to the user.
   * @param summary key to be displayed for summary of the toast
   * @param details key to be displayed for description of the toast
   * @param key id of the container to display toast in
   */
  warn(opt: ToastOptions) {
    return this.notify({ ...opt, severity: 'warn' });
  }

  /**
   * Send toast with given params to the user.
   * @param title key to be displayed for title of the toast
   * @param message key to be displayed for description of the toast
   * @param severity level to apply to toast (default is 'info')
   * @param key id of the container to display toast in
   */
  private notify({
    summary,
    details,
    severity = 'info',
    life = 4000,
    closable,
  }: Omit<Toast, 'uuid'>) {
    const uuid = generateRandomUUID();
    this.toasts.update((toasts) => [
      ...toasts,
      {
        uuid,
        severity,
        summary,
        details,
        life,
        closable,
      },
    ]);
    setTimeout(() => this.removeToast(uuid), life);
  }

  private removeToast(uuid: string) {
    const updated = this.toasts().filter((n) => n.uuid !== uuid);
    this.toasts.set(updated);
  }
}
