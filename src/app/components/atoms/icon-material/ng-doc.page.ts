import type { NgDocPage } from '@ng-doc/core';
import { IconMaterialComponent } from 'src/app/components/atoms/icon-material/icon-material.component';
import ComponentsCategory from 'src/app/components/ng-doc.category';

const IconMaterialPage: NgDocPage = {
  title: `Icon Material`,
  mdFile: './index.md',
  playgrounds: {
    IconMaterialPlayground: {
      target: IconMaterialComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
  category: ComponentsCategory,
};

export default IconMaterialPage;
