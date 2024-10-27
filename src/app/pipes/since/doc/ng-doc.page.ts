import type { NgDocPage } from '@ng-doc/core';
import PipesCategory from '../../ng-doc.category';
import { SinceDemoComponent } from './demos/since-demo.component';

const SincePipe: NgDocPage = {
  title: `SincePipe`,
  route: 'since',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { SinceDemoComponent },
  category: PipesCategory,
};

export default SincePipe;
