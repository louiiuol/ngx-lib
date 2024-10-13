Simple component to display an icon from material-symbols-outlined font.

* Refer to the material-symbols-outlined font for the list of available icons.
* <https://fonts.google.com/icons>

## Pre requirements

In order to use this component in your application, you must follow these steps:

### Adding Google font

Insert the following script in your `index.html` or `angular.json` file.

```html
<link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
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

You can now start importing this component in your application !

## Playground 🕹️

{{ NgDocActions.playground("IconMaterialPlayground") }}

<div id="end"></div>
