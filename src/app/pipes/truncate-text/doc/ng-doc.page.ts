import type { NgDocPage } from '@ng-doc/core';
import PipesCategory from '../../ng-doc.category';
import { TruncateTextDemoComponent } from './demos/truncate-text-demo.component';

const TruncateText: NgDocPage = {
  title: `TruncateText`,
  route: 'truncate-text',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { TruncateTextDemoComponent },
  // playgrounds: {
  //   TruncateTextPlayground: {
  //     target: TruncateTextComponent,
  //     template: `<ng-doc-selector>click me</ng-doc-selector> `,
  //   },
  // },
  category: PipesCategory,
};

export default TruncateText;
