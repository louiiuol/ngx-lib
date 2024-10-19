import type { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API References',
	scopes: [
		{
      name: 'ngx-lib',
      route: 'api',
      include: 'src/app/**/*.ts',
      exclude: ['src/app/**/*.spec.ts', 'src/app/**/*.page.ts', 'src/app/**/*.category.ts'],
    },
  ],
};

export default Api;
