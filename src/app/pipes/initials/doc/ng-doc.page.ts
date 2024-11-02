import type { NgDocPage } from '@ng-doc/core';
import PipesCategory from '../../ng-doc.category';
import { InitialsDemoComponent } from './demos/initials-demo.component';

const Initials: NgDocPage = {
  title: `Initials`,
  route: 'initials',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { InitialsDemoComponent },
  category: PipesCategory,
};

export default Initials;
