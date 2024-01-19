# MdImageComponent

`MdImageComponent` is a custom LitElement representing a material design image.

## Properties

-   `src` (String): The source URL of the image.
-   `alt` (String): The alternative text for the image.
-   `ratio` (String): The aspect ratio of the image. Default value is "1/1".
-   `shape` (Boolean): Whether to apply a circular shape to the image.

## Instance Methods

-   `onImageNativeError(event)`: Event handler for the `error` event of the native image element. Replaces the source with a placeholder image and dispatches a custom event named "onImageNativeError" with event details.
-   `onImageNativeLoad(event)`: Event handler for the `load` event of the native image element. Dispatches a custom event named "onImageNativeLoad" with event details.

## Events

-   `onImageNativeError`: Dispatched when an error occurs while loading the image. Includes event details.
-   `onImageNativeLoad`: Dispatched when the image has successfully loaded. Includes event details.

## Examples

### Basic Usage

```html
<md-image src="path/to/image.jpg" alt="Description of the image"></md-image>
```
