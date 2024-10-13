import type { NgDocPage } from '@ng-doc/core';
import { ButtonComponent } from 'src/app/components/atoms/button/button.component';
import { ButtonDemoComponent } from './demos/button-demo.component';

const Button: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  demos: { ButtonDemoComponent },
  playgrounds: {
    ButtonPlayground: {
      target: ButtonComponent,
      template: `<ng-doc-selector>My Button</ng-doc-selector>`,
    },
  },
};

export default Button;
