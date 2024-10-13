import type { NgDocPage } from '@ng-doc/core';
import { MessageComponent } from 'src/app/components/molecules/message/message.component';
import ComponentsCategory from 'src/docs/components/ng-doc.category';

const Message: NgDocPage = {
  title: `Message`,
  mdFile: './index.md',
  playgrounds: {
    MessagePlayground: {
      target: MessageComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
  category: ComponentsCategory,
};

export default Message;
