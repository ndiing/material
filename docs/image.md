# MDImageComponent

The `MDImageComponent` interface represents a `<md-image>` element in the DOM.
MDImageComponent represents an image component that extends MDComponent.
This component supports various properties for image attributes and styling.



### Events

| Event | Description |
|-------|-------------|
| `MDImageComponent#event:onImageNativeLoad - Fires when the native image has loaded successfully.` | |
| `MDImageComponent#event:onImageNativeError - Fires when there is an error loading the native image.` | |




# properties


### Instance properties

| Name | Type | Description |
|------|------|-------------|
| `src` | (String) | The URL of the image. |
| `alt` | (String) | The alternate text for the image. |
| `srcset` | (String) | The image sourceset attribute. |
| `sizes` | (String) | The image sizes attribute. |
| `crossorigin` | (String) | The CORS attribute for the image. |
| `usemap` | (String) | The usemap attribute for image maps. |
| `ismap` | (Boolean) | Indicates if the image is part of an image map. |
| `width` | (Number) | The width of the image. |
| `height` | (Number) | The height of the image. |
| `referrerpolicy` | (String) | The referrer policy for the image. |
| `decoding` | (String) | The decoding hint for the image. |
| `loading` | (String) | The lazy-loading strategy for the image (&#x27;lazy&#x27;, &#x27;eager&#x27;, or &#x27;auto&#x27;). |
| `title` | (String) | The title attribute of the image. |
| `longdesc` | (String) | The long description URL for the image. |
| `fetchpriority` | (String) | The priority hint for fetching the image (&#x27;auto&#x27;, &#x27;high&#x27;, &#x27;low&#x27;, or &#x27;none&#x27;). |
| `ratio` | (String) | The aspect ratio of the image container (e.g., &#x27;16/9&#x27;, &#x27;1.5&#x27;, etc.). |
| `variant` | (String) | The variant style for the image (e.g., &#x27;rounded&#x27;). |






