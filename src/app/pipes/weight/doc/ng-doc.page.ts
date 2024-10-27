import type { NgDocPage } from '@ng-doc/core';
import PipesCategory from '../../ng-doc.category';
import { WeightDemoComponent } from './demos/weight-demo.component';

const Weight: NgDocPage = {
  title: `Weight`,
  route: 'truncate-text',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { WeightDemoComponent },
  category: PipesCategory,
};

export default Weight;
