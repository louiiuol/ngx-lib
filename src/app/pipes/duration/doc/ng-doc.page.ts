import type { NgDocPage } from '@ng-doc/core';
import PipesCategory from '../../ng-doc.category';
import { DurationDemoComponent } from './demos/duration-demo.component';

const DurationPipe: NgDocPage = {
  title: `DurationPipe`,
  route: 'duration',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { DurationDemoComponent },
  category: PipesCategory,
};

export default DurationPipe;
