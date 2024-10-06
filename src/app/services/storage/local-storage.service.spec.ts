import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

    service = TestBed.inject(LocalStorageService);
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set value to local storage [string]', () => {
    const key = 'key';
    const value = 'value';
    service.set({ key, value });
    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should get value from local storage [object]', () => {
    const key = 'key';
    const value = { data: 'value' };
    localStorage.setItem(key, JSON.stringify(value));
    expect(service.get(key)).toEqual(value);
  });

  it('should get value from local storage [array]', () => {
    const key = 'key';
    const value = [{ data: 'value' }];
    localStorage.setItem(key, JSON.stringify(value));
    expect(service.get(key)).toEqual(value);
  });

  it('should return null if key does not exist in local storage', () => {
    expect(service.get('nonexistentKey')).toBeNull();
  });

  it('should remove value from local storage', () => {
    const key = 'key';
    const value = 'value';
    localStorage.setItem(key, value);
    service.remove(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  it('should check if key exists in local storage', () => {
    const key = 'key';
    const value = 'value';
    localStorage.setItem(key, value);
    expect(service.check(key)).toBeTruthy();
  });

  it('should check if key does not exist in local storage', () => {
    expect(service.check('nonexistentKey')).toBeFalsy();
  });
});
