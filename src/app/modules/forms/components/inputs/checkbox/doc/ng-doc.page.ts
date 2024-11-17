import type { NgDocPage } from '@ng-doc/core';
import FormCategory from '../../../../ng-doc.category';
import { CheckboxDemoComponent } from './demos/checkbox-demo.component';

const Checkbox: NgDocPage = {
  title: `Checkbox`,
  route: 'checkbox',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { CheckboxDemoComponent },
  category: FormCategory,
};

export default Checkbox;
