import type { NgDocPage } from '@ng-doc/core';
import FormCategory from '../../../../ng-doc.category';
import { ColorPickerDemoComponent } from './demos/color-picker-demo.component';

const ColorPicker: NgDocPage = {
  title: `ColorPicker`,
  route: 'colorPicker',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  demos: { ColorPickerDemoComponent },
  category: FormCategory,
};

export default ColorPicker;
