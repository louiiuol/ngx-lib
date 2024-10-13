# IconComponent

Simple component to display an icon as SVG tag from an svg file located in  your `assets/icons` folder.

## Pre requirements

In order to use this component in your application, you must follow these steps:

### Create assets/icons folder

In this folder, you can add all SVG required for your UI. You can also creates sub-folders but be aware, you'll need to format name as `folderName/fileName`.

Note: With this component, you can control the fill of the SVG by adding some color of the component (works by inheritance).

### Import FileService

This service helps working with files in general but this component requires getSVG() method. Simply copy paste this service or get isolated method.

### That's it 🎉

You can now start importing this component in your application !

## Usage

Here is a snippet to demonstrate how you can use this component.

```html
<lib-icon name='home' />
```

### Inputs

| Input | Description | Required | Default value |
|:---------|:--------------------------|:---:|:---|
|`name`| Name of the material icon * (check <https://fonts.google.com/icons> for the list of available icons) | ✔️ | |
|`size`| Size of the icon (must include css unit)| ╳ | `1.5rem` |
|`color`| Color of the icon (accepts any valid CSS color value) | ╳ | `currentColor` |

- Ensure that the SVG files in the `assets/icons` folder are properly named and formatted.
- The `name` input should match the file name of the SVG without the `.svg` extension.

> By following these guidelines, you can effectively use the `lib-icon` component in your Angular application.
