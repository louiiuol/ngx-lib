import { ActivatedRoute } from '@angular/router';

/**
 * Function that provides a mock for the ActivatedRoute
 * @param mock with requested methods and properties to be included
 * @returns Mock provider to be used in TestBed imports
 *
 * @author louiiuol
 */
export default {
  provide: ActivatedRoute,
  useValue: {
    snapshot: {
      paramMap: {
        get: () => null,
      },
    },
  },
};
