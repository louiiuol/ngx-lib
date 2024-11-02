import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

/**
 * Represents interface that associated components must implement.
 */
type CanComponentDeactivate = {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
};

/**
 * Checks if component allows user to be redirect to an another route.
 * * Must be called in angular routes with `canDeactivate` property.
 * * Must be associated with Component that contains a `canDeactivate()` method
 *
 * This way, components can defines some logic to prevent user from leaving route for specific reason.
 * For example, if user has unsaved changes, it can ask user to confirm if he wants to leave the page.
 * If user confirms, it will return `true` and user will be redirected to the new route.
 * Otherwise, it will return `false` and user will stay on the current route.
 *
 * @author louiiuol
 * @version 1.0.0
 *
 * @see https://angular.dev/api/router/CanDeactivate?tab=description
 */
@Injectable()
export class CanDeactivateGuard {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate();
  }
}
