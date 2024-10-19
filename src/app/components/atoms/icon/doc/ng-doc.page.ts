import type { NgDocPage } from '@ng-doc/core';
import { IconComponent } from 'src/app/components/atoms/icon/icon.component';
import ComponentsCategory from 'src/app/components/ng-doc.category';

const Icon: NgDocPage = {
  title: `Icon`,
  route: 'icon',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  playgrounds: {
    IconPlayground: {
      target: IconComponent,
      template: `<ng-doc-selector>favorite</ng-doc-selector> `,
    },
  },
  category: ComponentsCategory,
};

export default Icon;
