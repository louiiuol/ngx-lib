import { Injectable } from '@angular/core';

/**
 * Service to manage local storage
 *
 * @author louiiuol
 */
@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  /**
   * Get value object from local storage, if found
   *
   * @param key - The key of the value
   * @returns The value as object if the key exists, otherwise null
   */
  get<T = object>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }
    return JSON.parse(item);
  }

  /**
   * Set value to local storage
   *
   * @param key - The key of the value
   * @param value - The value
   */
  set({ key, value }: { key: string; value: string | object }): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  /**
   * Remove value that match given key from local storage
   *
   * @param key - The key of the value
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Check if the given key exists in local storage
   *
   * @param key - The key of the value
   * @returns True if the key exists, otherwise false
   */
  check(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
