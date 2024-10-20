import type { NgDocPage } from '@ng-doc/core';
import { IconMaterialComponent } from 'src/app/components/atoms/icon-material/icon-material.component';
import ComponentsCategory from 'src/app/components/ng-doc.category';

const IconMaterial: NgDocPage = {
  title: `Icon Material`,
  route: 'icon-material',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  playgrounds: {
    IconMaterialPlayground: {
      target: IconMaterialComponent,
      template: `<ng-doc-selector>favorite</ng-doc-selector> `,
    },
  },
  category: ComponentsCategory,
};

export default IconMaterial;
