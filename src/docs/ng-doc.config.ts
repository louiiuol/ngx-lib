import type { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  routePrefix: 'docs',
  repoConfig: {
    url: 'https://github.com/louiiuol/ngx-lib',
    mainBranch: 'main',
    releaseBranch: 'release',
  },
};

export default config;
