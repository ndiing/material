# MDComponent
MDComponent is a base class for all custom elements that extends LitElement. It provides additional utility methods for event handling and localization updates.

## Inheritance
LitElement


## Instance methods
This interface also inherits methods from its parent, `LitElement`.

name | params | desc
--- | --- | ---
on | type,listener | Adds an event listener to the component. The listener is automatically bound to the component's context.
once | type,listener | Adds an event listener to the component that will only be called once. The listener is automatically bound to the component's context and removed after the first call.
off | type,listener | Removes an event listener from the component.
emit | type,detail | Emits a custom event from the component.




