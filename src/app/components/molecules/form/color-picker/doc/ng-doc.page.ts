import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { ColorPickerDemoComponent } from './demos/color-picker-demo.component';

const ColorPicker: NgDocPage = {
  title: `ColorPicker`,
  route: 'colorPicker',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { ColorPickerDemoComponent },
  category: ComponentsCategory,
};

export default ColorPicker;
