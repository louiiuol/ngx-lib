---
keyword: IconPage
---

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

- Ensure that the SVG files in the `assets/icons` folder are properly named and formatted.
- The `name` input should match the file name of the SVG without the `.svg` extension.

> By following these guidelines, you can effectively use the `lib-icon` component in your Angular application.

## Playground

{{ NgDocActions.playground("ButtonPlayground") }}

<div id="end"></div>
