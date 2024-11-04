import type { NgDocPage } from '@ng-doc/core';
import FormCategory from '../../ng-doc.category';
import { FormDemoComponent } from './demos/form-demo.component';

const Form: NgDocPage = {
  title: `Form`,
  route: 'form',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { FormDemoComponent },
  category: FormCategory,
};

export default Form;
