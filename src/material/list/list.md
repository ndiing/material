# MdListItemComponent

`MdListItemComponent` is a custom LitElement representing a material design list item.

## Properties

-   `label` (String): The label for the list item.
-   `supportingText` (String): Supporting text for additional information.
-   `badge` (String): Badge to be displayed on the list item.
-   `leadingItems` (Array): Leading items to be displayed before the label.
-   `trailingItems` (Array): Trailing items to be displayed after the label.
-   `activated` (Boolean): Reflects whether the list item is activated.

## Examples

### Basic Usage

```html
<md-list-item label="Item 1" supportingText="Additional information"></md-list-item>
```

### MdListRowComponent

MdListRowComponent

`MdListRowComponent` is a custom LitElement representing a row within a material design list.

## Properties

-   No specific properties are defined.

## Examples

### Basic Usage

```html
<md-list-row></md-list-row>
```

### MdListComponent

# MdListComponent

`MdListComponent` is a custom LitElement representing a material design list.

## Properties

-   `items` (Array): The array of items to be displayed in the list.
-   `ui` (String): The UI style for the list (one-line, two-line, three-line).
-   `type` (String): The type of list (single-select, multi-select).
-   `activatable` (Boolean): Reflects whether list items are activatable.

## Examples

### Basic Usage

```html
<md-list .items="${[{ label: 'Item 1' }, { label: 'Item 2' }]}"></md-list>
```
