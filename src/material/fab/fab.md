# MdFabComponent

`MdFabComponent` is a custom LitElement representing a Material Design Floating Action Button (FAB).

## Properties

-   **type** (_String_): The type of the button (default is "button").
-   **label** (_String_): The label text for the FAB.
-   **icon** (_String_): The icon content for the FAB.
-   **size** (_String_): The size of the FAB (`small`, `large`).
-   **extended** (_Boolean_): Reflects whether the FAB is in extended mode.

## Methods

-   **fabNative()**: Returns the native button element.

## Lifecycle Methods

-   **connectedCallback()**: Adds the "md-fab" class when the element is connected.
-   **disconnectedCallback()**: Removes the "md-fab" class when the element is disconnected.
-   **firstUpdated()**: Initializes the `MdStateController` and sets up the FAB button.
-   **updated(\_changedProperties)**: Updates the size and extended mode based on property changes.

## Usage

```html
<md-fab type="button" label="Click me" icon="icon-name" size="small" extended></md-fab>
```
