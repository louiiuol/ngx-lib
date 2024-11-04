import type { NgDocPage } from '@ng-doc/core';
import FormCategory from '../../../ng-doc.category';
import { InputDemoComponent } from './demos/input-demo.component';

const Input: NgDocPage = {
  title: `Input`,
  route: 'input',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { InputDemoComponent },
  category: FormCategory,
};

export default Input;
