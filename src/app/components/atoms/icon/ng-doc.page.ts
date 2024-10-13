import type { NgDocPage } from '@ng-doc/core';
import { IconComponent } from 'src/app/components/atoms/icon/icon.component';
import ComponentsCategory from 'src/app/components/ng-doc.category';

const IconPage: NgDocPage = {
  title: `Icon`,
  mdFile: './index.md',
  playgrounds: {
    IconPlayground: {
      target: IconComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
  category: ComponentsCategory,
};

export default IconPage;
