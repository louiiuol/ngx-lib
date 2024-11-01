import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { LoaderDemoComponent } from './demos/loader-demo.component';

const Loader: NgDocPage = {
  title: `Loader`,
  route: 'loader',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { LoaderDemoComponent },
  category: ComponentsCategory,
};

export default Loader;
