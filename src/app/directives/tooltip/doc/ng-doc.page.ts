import type { NgDocPage } from '@ng-doc/core';
import DirectivesCategory from '../../ng-doc.category';
import { TooltipDemoComponent } from './demos/tooltip-demo.component';

const Tooltip: NgDocPage = {
  title: `Tooltip`,
  route: 'tooltip',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { TooltipDemoComponent },
  category: DirectivesCategory,
};

export default Tooltip;
