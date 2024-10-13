import type { NgDocPage } from '@ng-doc/core';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import ComponentsCategory from 'src/app/components/ng-doc.category';

const Button: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  playgrounds: {
    ButtonPlayground: {
      target: ButtonComponent,
      template: `<ng-doc-selector>My Button</ng-doc-selector>`,
    },
  },
  category: ComponentsCategory,
};

export default Button;
