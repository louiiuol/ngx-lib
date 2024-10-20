---
title: Requirements
route: requirements
keyword: IconRequirements
---

## Requirements

> In order to use this component in your application, you must follow these steps:

### Tailwind CSS

> **note**
> All of the components in this library use tailwind to render the UI. So make sure you have it configured on you project or adapt the code accordingly.

### Create assets/icons folder

In this folder, you can add all SVG required for your UI. You can also creates sub-folders but be aware, you'll need to format name as `folderName/fileName`.

> **Note**
> With this component, you can control the fill of the SVG by adding some color of the component (works by inheritance).

### Verify IconComponent input path() location

Make sure the path match your icons location. You can always change it when you call the icon, but you can also make the change globally by changing the default value.

### Import FileService

This service helps working with files in general but this component requires getSVG() method. Simply copy paste this service or get isolated method. Check Sources tab for more information.

### That's it 🎉

> **success**
> You can import the source code and make it yours right away 🎉
