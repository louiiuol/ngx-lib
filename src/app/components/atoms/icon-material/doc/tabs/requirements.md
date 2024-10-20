---
title: Requirements
route: requirements
keyword: IconMaterialRequirements
---

## Requirements

> In order to use this component in your application, you must follow these steps:

### Tailwind CSS

> **note**
> All of the components in this library use tailwind to render the UI. So make sure you have it configured on you project or adapt the code accordingly.

### Adding Google font

Insert the following script in your `index.html` or `angular.json` file.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

### Adding Font variation

Simply add this selector to your `style.scss` file. Adapt this settings to match desired styling. Check <https://fonts.google.com/icons> options for more information.

```css
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
```

### That's it 🎉

> **success**
> You can import the source code and make it yours right away 🎉
