# MDComponent

Base class for Material Design components using LitElement.
This class extends LitElement and provides utility methods for event handling.

## Instance Methods
This interface also inherits methods from its parent, `LitElement`.

| Name | Parameters | Description |
| --- | --- | --- |
| on | `type`, `listener` | Attach an event listener to the component that automatically binds 'this' context. |
| once | `type`, `listener` | Attach an event listener that removes itself after its first invocation. |
| off | `type`, `listener` | Remove an event listener from the component. |
| emit | `type`, `detail` | Emit a custom event from the component. |

## Inheritance
`LitElement`

