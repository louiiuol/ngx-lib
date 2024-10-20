import type { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from 'src/app/components/ng-doc.category';
import { MessageComponent } from '../message.component';

const Message: NgDocPage = {
  title: `Message`,
  route: 'message',
  mdFile: ['./tabs/index.md', './tabs/sources.md', './tabs/requirements.md'],
  playgrounds: {
    MessagePlayground: {
      target: MessageComponent,
      template: `<ng-doc-selector></ng-doc-selector> `,
    },
  },
  category: ComponentsCategory,
};

export default Message;
