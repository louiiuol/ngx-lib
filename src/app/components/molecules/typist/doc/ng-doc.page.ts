import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { TypistDemoComponent } from './demos/typist-demo.component';

const Typist: NgDocPage = {
  title: `Typist`,
  route: 'typist',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { TypistDemoComponent },
  category: ComponentsCategory,
};

export default Typist;
