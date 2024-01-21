# MdImageComponent

`MdImageComponent` is a custom LitElement representing a material design image.

An image component is a graphical element that serves to convey visual information within a digital interface or system. It is a fundamental building block in design, contributing to the overall aesthetics and user experience. This component may consist of various attributes, such as the image itself, dimensions, styling, and potentially interactive features.

## Usage

- Visual Content: The core of the image component is the visual content it presents. This content could be photographs, illustrations, icons, or any other form of graphical representation.

- Dimensions and Size: The image component has specific dimensions and size, determining its placement and how it fits into the overall layout of the interface.

- Styling and Design: The component may have associated styles and design elements, such as borders, shadows, or overlays, to enhance its visual appeal and integrate with the overall design scheme.

- Responsiveness: In modern web development, image components are often designed to be responsive, adapting to different screen sizes and devices for a seamless user experience.

- Accessibility: To ensure inclusivity, image components should be optimized for accessibility. This includes providing alternative text (alt text) for screen readers and considering color contrast for users with visual impairments.

- Interactivity (optional): Depending on the context, the image component may support interactive features, such as click actions, hover effects, or zoom functionalities.

- Integration with Content: In various applications, image components are integrated into larger content structures, like articles, product pages, or social media feeds.

There are 2 styles of Image:

1.  Image
2.  Image shape

## Properties

| Property | Type    | Default | Description                                     |
| -------- | ------- | ------- | ----------------------------------------------- |
| src      | String  |         | The source URL of the image.                    |
| alt      | String  |         | The alternative text for the image.             |
| ratio    | String  | "1/1"   | The aspect ratio of the image.                  |
| shape    | Boolean |         | If true, applies a circular shape to the image. |

## Instance Methods

- `onImageNativeError(event)`: Event handler for the `error` event of the native image element. Replaces the source with a placeholder image and dispatches a custom event named "onImageNativeError" with event details.
- `onImageNativeLoad(event)`: Event handler for the `load` event of the native image element. Dispatches a custom event named "onImageNativeLoad" with event details.

## Events

- `onImageNativeError`: Dispatched when an error occurs while loading the image. Includes event details.
- `onImageNativeLoad`: Dispatched when the image has successfully loaded. Includes event details.

## Examples

1. Image

```html
<md-image
  style="width:88px;"
  ratio="1/1"
  src="https://api.dicebear.com/7.x/icons/svg?seed=3&scale=50"
></md-image>
```

2. Image shape

```html
<md-image
  style="width:88px;"
  ratio="1/1"
  shape
  src="https://api.dicebear.com/7.x/icons/svg?seed=3&scale=50"
></md-image>
```
