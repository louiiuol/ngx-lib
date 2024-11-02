import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { CardDemoComponent } from './demos/card-demo.component';

const Card: NgDocPage = {
  title: `Card`,
  route: 'card',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { CardDemoComponent },
  category: ComponentsCategory,
};

export default Card;
