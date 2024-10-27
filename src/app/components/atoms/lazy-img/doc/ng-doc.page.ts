import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { LazyImgDemoComponent } from './demos/lazy-img-demo.component';

const LazyImg: NgDocPage = {
  title: `Lazy image`,
  route: 'lazy-img',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { LazyImgDemoComponent },
  category: ComponentsCategory,
};

export default LazyImg;
