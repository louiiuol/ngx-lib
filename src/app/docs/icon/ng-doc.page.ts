import type { NgDocPage } from '@ng-doc/core';
import { IconComponent } from 'src/app/components/atoms/icon/icon.component';

const IconPage: NgDocPage = {
  title: `Icon`,
  mdFile: './index.md',
  playgrounds: {
    ButtonPlayground: {
      target: IconComponent,
      template: `<ng-doc-selector>My Button</ng-doc-selector>`,
    },
  },
};

export default IconPage;
