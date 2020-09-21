# context-menu

The script allows you to combine custom and default context menus on the page. 
To set a custom context menu, you must set the attribute **date-context = true** in the parent wrapper element.

For example:
```html
<tr data-context='true'>
  <td>Cell 1</td><!--Click here to show custom context menu!-->
  <td>Cell 2</td><!--Click here to show custom context menu!-->
  <td>Cell 3</td><!--Click here to show custom context menu!-->
</tr>
```

## Requirements
It is necessary to create an html element with id="contextmenu"

## Dependence
jquery - library lattest version
