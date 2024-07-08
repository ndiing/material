# MDImageComponent
The `MDImageComponent` interface represents a `md-image` element in the DOM. Represents an image component.

## Inheritance
MDComponent

## Events
Listen to these events using `addEventListener()`, or by assigning an event listener to the `@onEventName` property of this interface.

name | desc
--- | ---
onImageNativeLoad | Fires when the native image element successfully loads an image.
onImageNativeError | Fires when the native image element encounters an error while loading an image.


## Instance properties
This interface also inherits properties from its parent, `MDComponent`. undefined

name | type | desc
--- | --- | ---
src | String | The URL of the image.
alt | String | The alternative text description of the image.
srcset | String | A list of one or more strings separated by commas indicating a set of possible images to use for different viewport sizes.
sizes | String | The sizes attribute specifies the sizes of the images for different viewport widths.
crossorigin | String | The CORS settings for the image element.
usemap | String | The name of the image map associated with the image element.
ismap | Boolean | Indicates that the image is a server-side image map.
width | Number | The displayed width of the image element.
height | Number | The displayed height of the image element.
referrerpolicy | String | The referrer policy for the image element.
decoding | String | The decoding hint for the image element.
loading | String | The lazy-loading strategy of the image element.
title | String | The title of the image.
longdesc | String | The URL to a detailed description of the image.
fetchpriority | String | The image loading priority.
ratio | String | The aspect ratio of the image container.
variant | String | The variant styles for the image. Currently supports "rounded".




