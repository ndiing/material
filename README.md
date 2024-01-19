## Classes

<dl>
<dt><a href="#MdBadgeComponent">MdBadgeComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for displaying a badge.</p>
</dd>
<dt><a href="#MdButtonComponent">MdButtonComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element representing a material design button.</p>
</dd>
<dt><a href="#MdCheckboxComponent">MdCheckboxComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Checkbox component for Material Design.</p>
</dd>
<dt><a href="#MdEmojiComponent">MdEmojiComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Represents the MdEmojiComponent custom element.</p>
</dd>
<dt><a href="#MdFabComponent">MdFabComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for a Material Design Floating Action Button (FAB).</p>
</dd>
<dt><a href="#MdIconButtonComponent">MdIconButtonComponent</a> ⇐ <code>LitElement</code></dt>
<dd></dd>
<dt><a href="#MdIconComponent">MdIconComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Represents an icon component.</p>
</dd>
<dt><a href="#MdImageComponent">MdImageComponent</a></dt>
<dd><p>Custom element representing an image with additional features.</p>
</dd>
<dt><a href="#MdListItemComponent">MdListItemComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p><code>MdListItemComponent</code> is a custom LitElement representing a list item.</p>
</dd>
<dt><a href="#MdListRowComponent">MdListRowComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p><code>MdListRowComponent</code> is a custom LitElement representing a list row.</p>
</dd>
<dt><a href="#MdListComponent">MdListComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p><code>MdListComponent</code> is a custom LitElement representing a list.</p>
</dd>
<dt><a href="#MdNavigation">MdNavigation</a></dt>
<dd><p>Represents a navigation utility.</p>
</dd>
<dt><a href="#MdRadioButtonComponent">MdRadioButtonComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for a radio button.</p>
</dd>
<dt><a href="#MdSegmentedButtonComponent">MdSegmentedButtonComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>Custom element for a segmented button.</p>
</dd>
<dt><a href="#MdStateController">MdStateController</a></dt>
<dd><p>Controller class for managing the state of an element.</p>
</dd>
<dt><a href="#MdSwitchComponent">MdSwitchComponent</a> ⇐ <code>LitElement</code></dt>
<dd><p>A custom switch component built using LitElement.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#md-emoji">md-emoji</a> : <code><a href="#MdEmojiComponent">MdEmojiComponent</a></code></dt>
<dd><p>A custom element for displaying emoji.</p>
</dd>
</dl>

<a name="MdBadgeComponent"></a>

## MdBadgeComponent ⇐ <code>LitElement</code>
Custom element for displaying a badge.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdBadgeComponent](#MdBadgeComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.createRenderRoot()](#MdBadgeComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdBadgeComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdBadgeComponent+connectedCallback)
        * [.disconnectedCallback()](#MdBadgeComponent+disconnectedCallback)
        * [.firstUpdated()](#MdBadgeComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdBadgeComponent+updated)
    * _static_
        * [.properties](#MdBadgeComponent.properties)

<a name="MdBadgeComponent+createRenderRoot"></a>

### mdBadgeComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to be the element itself.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Returns**: <code>this</code> - The current instance for chaining.  
<a name="MdBadgeComponent+render"></a>

### mdBadgeComponent.render() ⇒ <code>TemplateResult</code>
Renders the badge based on the label and limit.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template result.  
<a name="MdBadgeComponent+connectedCallback"></a>

### mdBadgeComponent.connectedCallback()
Adds the "md-badge" class when connected to the DOM.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+disconnectedCallback"></a>

### mdBadgeComponent.disconnectedCallback()
Removes the "md-badge" class when disconnected from the DOM.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+firstUpdated"></a>

### mdBadgeComponent.firstUpdated()
Lifecycle method called after the element's first update.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
<a name="MdBadgeComponent+updated"></a>

### mdBadgeComponent.updated(_changedProperties)
Lifecycle method called when the element is updated.

**Kind**: instance method of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdBadgeComponent.properties"></a>

### MdBadgeComponent.properties
Static properties for the component.

**Kind**: static property of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>number</code> | The label to be displayed on the badge. |
| limit | <code>number</code> | The limit for the badge label. |

<a name="MdButtonComponent"></a>

## MdButtonComponent ⇐ <code>LitElement</code>
Custom element representing a material design button.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdButtonComponent](#MdButtonComponent) ⇐ <code>LitElement</code>
    * [new MdButtonComponent()](#new_MdButtonComponent_new)
    * _instance_
        * [.buttonNative](#MdButtonComponent+buttonNative)
        * [.createRenderRoot()](#MdButtonComponent+createRenderRoot) ⇒ [<code>MdButtonComponent</code>](#MdButtonComponent)
        * [.render()](#MdButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdButtonComponent+updated)
    * _static_
        * [.properties](#MdButtonComponent.properties)

<a name="new_MdButtonComponent_new"></a>

### new MdButtonComponent()
Constructor for MdButtonComponent.

<a name="MdButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative
Gets the native button element inside the component.

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| buttonNative | <code>HTMLElement</code> | The native button element. |

<a name="MdButtonComponent+createRenderRoot"></a>

### mdButtonComponent.createRenderRoot() ⇒ [<code>MdButtonComponent</code>](#MdButtonComponent)
Overrides the default render root to be the element itself.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: [<code>MdButtonComponent</code>](#MdButtonComponent) - The instance of MdButtonComponent.  
<a name="MdButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the HTML template for the MdButtonComponent.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template for the component.  
<a name="MdButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback()
Adds "md-button" class to the element when connected to the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Removes "md-button" class when disconnected from the DOM.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated()
Initializes the MdStateController when the component is first updated.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  
<a name="MdButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Handles updates to the "ui" property and updates the component's class accordingly.

**Kind**: instance method of [<code>MdButtonComponent</code>](#MdButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MdButtonComponent.properties"></a>

### MdButtonComponent.properties
Properties for the MdButtonComponent.

**Kind**: static property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button (e.g., "button", "submit", "reset"). |
| label | <code>String</code> | The label text for the button. |
| icon | <code>String</code> | The icon content for the button. |
| ui | <code>String</code> | The UI style for the button ("elevated", "filled", "filled-tonal", "outlined"). |
| activated | <code>Boolean</code> | Reflects whether the button is activated or not. |

<a name="MdCheckboxComponent"></a>

## MdCheckboxComponent ⇐ <code>LitElement</code>
Checkbox component for Material Design.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdCheckboxComponent](#MdCheckboxComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.checkboxNative](#MdCheckboxComponent+checkboxNative)
        * [.checkboxTrack](#MdCheckboxComponent+checkboxTrack)
        * [.checkboxThumb](#MdCheckboxComponent+checkboxThumb)
        * [.render()](#MdCheckboxComponent+render) ⇒ <code>TemplateResult</code>
        * [.firstUpdated()](#MdCheckboxComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdCheckboxComponent+updated)
        * [.onCheckboxNativeInput(event)](#MdCheckboxComponent+onCheckboxNativeInput)
        * ["onCheckboxNativeInput"](#MdCheckboxComponent+event_onCheckboxNativeInput)
    * _static_
        * [.properties](#MdCheckboxComponent.properties)

<a name="MdCheckboxComponent+checkboxNative"></a>

### mdCheckboxComponent.checkboxNative
Returns the checkbox native element.

**Kind**: instance property of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| checkboxNative | <code>HTMLElement</code> | The checkbox native element. |

<a name="MdCheckboxComponent+checkboxTrack"></a>

### mdCheckboxComponent.checkboxTrack
Returns the checkbox track element.

**Kind**: instance property of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| checkboxTrack | <code>HTMLElement</code> | The checkbox track element. |

<a name="MdCheckboxComponent+checkboxThumb"></a>

### mdCheckboxComponent.checkboxThumb
Returns the checkbox thumb element.

**Kind**: instance property of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| checkboxThumb | <code>HTMLElement</code> | The checkbox thumb element. |

<a name="MdCheckboxComponent+render"></a>

### mdCheckboxComponent.render() ⇒ <code>TemplateResult</code>
Renders the checkbox component.

**Kind**: instance method of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template result.  
<a name="MdCheckboxComponent+firstUpdated"></a>

### mdCheckboxComponent.firstUpdated()
Called after the element's first update.

**Kind**: instance method of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
<a name="MdCheckboxComponent+updated"></a>

### mdCheckboxComponent.updated(_changedProperties)
Called when the element has been updated.

**Kind**: instance method of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The changed properties. |

<a name="MdCheckboxComponent+onCheckboxNativeInput"></a>

### mdCheckboxComponent.onCheckboxNativeInput(event)
Handles the input event on the checkbox native element.

**Kind**: instance method of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdCheckboxComponent+event_onCheckboxNativeInput"></a>

### "onCheckboxNativeInput"
Dispatched when the checkbox native input event occurs.

**Kind**: event emitted by [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail.event | <code>Event</code> | The original input event. |

<a name="MdCheckboxComponent.properties"></a>

### MdCheckboxComponent.properties
Static property definitions for the component.

**Kind**: static property of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the checkbox. |
| indeterminate | <code>Boolean</code> | Indicates whether the checkbox is in an indeterminate state. |
| checked | <code>Boolean</code> | Indicates whether the checkbox is checked. |

<a name="MdEmojiComponent"></a>

## MdEmojiComponent ⇐ <code>LitElement</code>
Represents the MdEmojiComponent custom element.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdEmojiComponent](#MdEmojiComponent) ⇐ <code>LitElement</code>
    * [new MdEmojiComponent()](#new_MdEmojiComponent_new)
    * _instance_
        * [.createRenderRoot()](#MdEmojiComponent+createRenderRoot) ⇒ <code>this</code>
        * [.connectedCallback()](#MdEmojiComponent+connectedCallback)
        * [.disconnectedCallback()](#MdEmojiComponent+disconnectedCallback)
        * [.firstUpdated()](#MdEmojiComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdEmojiComponent+updated)
        * [.dispatchCustomEvent()](#MdEmojiComponent+dispatchCustomEvent)
    * _static_
        * [.properties](#MdEmojiComponent.properties) ⇒ <code>Object</code>

<a name="new_MdEmojiComponent_new"></a>

### new MdEmojiComponent()
Constructs an instance of MdEmojiComponent.

<a name="MdEmojiComponent+createRenderRoot"></a>

### mdEmojiComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to be the component itself.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
**Returns**: <code>this</code> - The rendered root.  
<a name="MdEmojiComponent+connectedCallback"></a>

### mdEmojiComponent.connectedCallback()
Adds the "md-emoji" class when the component is connected.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
<a name="MdEmojiComponent+disconnectedCallback"></a>

### mdEmojiComponent.disconnectedCallback()
Removes the "md-emoji" class when the component is disconnected.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
<a name="MdEmojiComponent+firstUpdated"></a>

### mdEmojiComponent.firstUpdated()
Lifecycle callback invoked once when the element is first updated.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
<a name="MdEmojiComponent+updated"></a>

### mdEmojiComponent.updated(_changedProperties)
Lifecycle callback invoked whenever the element is updated.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The changed properties. |

<a name="MdEmojiComponent+dispatchCustomEvent"></a>

### mdEmojiComponent.dispatchCustomEvent()
Dispatches a custom event.

**Kind**: instance method of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
**Emits**: <code>MdEmojiComponent#event:customEvent</code>  
<a name="MdEmojiComponent.properties"></a>

### MdEmojiComponent.properties ⇒ <code>Object</code>
The properties for MdEmojiComponent.

**Kind**: static property of [<code>MdEmojiComponent</code>](#MdEmojiComponent)  
**Returns**: <code>Object</code> - The properties object.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| properties | <code>Object</code> | The properties object. |
| properties.exampleProperty | <code>string</code> | An example property. |

<a name="MdFabComponent"></a>

## MdFabComponent ⇐ <code>LitElement</code>
Custom element for a Material Design Floating Action Button (FAB).

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdFabComponent](#MdFabComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.fabNative](#MdFabComponent+fabNative) ⇒ <code>HTMLButtonElement</code>
        * [.firstUpdated()](#MdFabComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdFabComponent+updated)
        * ["custom-event"](#MdFabComponent+event_custom-event)
    * _static_
        * [.properties](#MdFabComponent.properties)

<a name="MdFabComponent+fabNative"></a>

### mdFabComponent.fabNative ⇒ <code>HTMLButtonElement</code>
Returns the native button element of the FAB.

**Kind**: instance property of [<code>MdFabComponent</code>](#MdFabComponent)  
**Returns**: <code>HTMLButtonElement</code> - The native button element.  
**Read only**: true  
<a name="MdFabComponent+firstUpdated"></a>

### mdFabComponent.firstUpdated()
Called after the element's first update. Initializes the state controller.

**Kind**: instance method of [<code>MdFabComponent</code>](#MdFabComponent)  
<a name="MdFabComponent+updated"></a>

### mdFabComponent.updated(_changedProperties)
Called when the element is updated. Handles size and extended property changes.

**Kind**: instance method of [<code>MdFabComponent</code>](#MdFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | Map of changed properties. |

<a name="MdFabComponent+event_custom-event"></a>

### "custom-event"
Dispatched when a specific event occurs.

**Kind**: event emitted by [<code>MdFabComponent</code>](#MdFabComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail | <code>String</code> | Event details. |

<a name="MdFabComponent.properties"></a>

### MdFabComponent.properties
**Kind**: static property of [<code>MdFabComponent</code>](#MdFabComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the button. |
| label | <code>String</code> | The label text for the FAB. |
| icon | <code>String</code> | The icon for the FAB. |
| size | <code>String</code> | The size of the FAB. Can be "small" or "large". |
| extended | <code>Boolean</code> | Indicates whether the FAB is in extended mode. |

<a name="MdIconButtonComponent"></a>

## MdIconButtonComponent ⇐ <code>LitElement</code>
**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdIconButtonComponent](#MdIconButtonComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.iconButtonNative](#MdIconButtonComponent+iconButtonNative) : <code>Element</code>
        * [.createRenderRoot()](#MdIconButtonComponent+createRenderRoot) ⇒ <code>Element</code>
        * [.render()](#MdIconButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdIconButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdIconButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdIconButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdIconButtonComponent+updated)
        * [.onIconButtonClick(event)](#MdIconButtonComponent+onIconButtonClick)
    * _static_
        * [.properties](#MdIconButtonComponent.properties)

<a name="MdIconButtonComponent+iconButtonNative"></a>

### mdIconButtonComponent.iconButtonNative : <code>Element</code>
Returns the native button element.

**Kind**: instance property of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
<a name="MdIconButtonComponent+createRenderRoot"></a>

### mdIconButtonComponent.createRenderRoot() ⇒ <code>Element</code>
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
**Returns**: <code>Element</code> - - The element to use as the render root.  
<a name="MdIconButtonComponent+render"></a>

### mdIconButtonComponent.render() ⇒ <code>TemplateResult</code>
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
**Returns**: <code>TemplateResult</code> - - The rendered HTML template.  
<a name="MdIconButtonComponent+connectedCallback"></a>

### mdIconButtonComponent.connectedCallback()
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
<a name="MdIconButtonComponent+disconnectedCallback"></a>

### mdIconButtonComponent.disconnectedCallback()
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
<a name="MdIconButtonComponent+firstUpdated"></a>

### mdIconButtonComponent.firstUpdated()
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
<a name="MdIconButtonComponent+updated"></a>

### mdIconButtonComponent.updated(_changedProperties)
**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | Map of changed properties. |

<a name="MdIconButtonComponent+onIconButtonClick"></a>

### mdIconButtonComponent.onIconButtonClick(event)
Handles the click event on the icon button.

**Kind**: instance method of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdIconButtonComponent.properties"></a>

### MdIconButtonComponent.properties
**Kind**: static property of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type of the button. |
| icon | <code>String</code> | Icon to be displayed inside the button. |
| ui | <code>String</code> | UI style of the button. |
| toggle | <code>Boolean</code> | Indicates whether the button is in toggle mode. |
| activated | <code>Boolean</code> | Indicates whether the button is activated (only applicable in toggle mode). |

<a name="MdIconComponent"></a>

## MdIconComponent ⇐ <code>LitElement</code>
Represents an icon component.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdIconComponent](#MdIconComponent) ⇐ <code>LitElement</code>
    * _instance_
        * [.createRenderRoot()](#MdIconComponent+createRenderRoot) ⇒ [<code>MdIconComponent</code>](#MdIconComponent)
        * [.connectedCallback()](#MdIconComponent+connectedCallback)
        * [.disconnectedCallback()](#MdIconComponent+disconnectedCallback)
        * [.firstUpdated()](#MdIconComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdIconComponent+updated)
        * [.dispatchCustomEvent()](#MdIconComponent+dispatchCustomEvent)
    * _static_
        * [.properties](#MdIconComponent.properties)

<a name="MdIconComponent+createRenderRoot"></a>

### mdIconComponent.createRenderRoot() ⇒ [<code>MdIconComponent</code>](#MdIconComponent)
Creates the render root for the element.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  
**Returns**: [<code>MdIconComponent</code>](#MdIconComponent) - - The render root.  
<a name="MdIconComponent+connectedCallback"></a>

### mdIconComponent.connectedCallback()
Connected callback. Adds "md-icon" class when connected.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  
<a name="MdIconComponent+disconnectedCallback"></a>

### mdIconComponent.disconnectedCallback()
Disconnected callback. Removes "md-icon" class when disconnected.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  
<a name="MdIconComponent+firstUpdated"></a>

### mdIconComponent.firstUpdated()
First updated callback.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  
<a name="MdIconComponent+updated"></a>

### mdIconComponent.updated(_changedProperties)
Updated callback.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | The changed properties. |

<a name="MdIconComponent+dispatchCustomEvent"></a>

### mdIconComponent.dispatchCustomEvent()
Dispatches a custom event.

**Kind**: instance method of [<code>MdIconComponent</code>](#MdIconComponent)  
**Emits**: <code>MdIconComponent#event:custom-event</code>  
<a name="MdIconComponent.properties"></a>

### MdIconComponent.properties
A static property that defines the properties for MdIconComponent.

**Kind**: static property of [<code>MdIconComponent</code>](#MdIconComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| properties | <code>Object</code> | The properties object. |

<a name="MdImageComponent"></a>

## MdImageComponent
Custom element representing an image with additional features.

**Kind**: global class  
**Emits**: <code>MdImageComponent#event:onImageNativeError</code>, <code>MdImageComponent#event:onImageNativeLoad</code>  

* [MdImageComponent](#MdImageComponent)
    * _instance_
        * [.createRenderRoot()](#MdImageComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdImageComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdImageComponent+connectedCallback)
        * [.disconnectedCallback()](#MdImageComponent+disconnectedCallback)
        * [.updated(_changedProperties)](#MdImageComponent+updated)
        * [.onImageNativeError(event)](#MdImageComponent+onImageNativeError)
        * [.onImageNativeLoad(event)](#MdImageComponent+onImageNativeLoad)
    * _static_
        * [.properties](#MdImageComponent.properties)

<a name="MdImageComponent+createRenderRoot"></a>

### mdImageComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default rendering behavior to create a render root.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
<a name="MdImageComponent+render"></a>

### mdImageComponent.render() ⇒ <code>TemplateResult</code>
Renders the image element based on the provided properties.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
<a name="MdImageComponent+connectedCallback"></a>

### mdImageComponent.connectedCallback()
Called when the element is added to the DOM.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
<a name="MdImageComponent+disconnectedCallback"></a>

### mdImageComponent.disconnectedCallback()
Called when the element is removed from the DOM.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
<a name="MdImageComponent+updated"></a>

### mdImageComponent.updated(_changedProperties)
Called after the element's DOM has been updated.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | Map of properties that have changed. |

<a name="MdImageComponent+onImageNativeError"></a>

### mdImageComponent.onImageNativeError(event)
Handles the 'error' event of the native image element.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
**Emits**: <code>MdImageComponent#event:onImageNativeError</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The error event. |

<a name="MdImageComponent+onImageNativeLoad"></a>

### mdImageComponent.onImageNativeLoad(event)
Handles the 'load' event of the native image element.

**Kind**: instance method of [<code>MdImageComponent</code>](#MdImageComponent)  
**Emits**: <code>MdImageComponent#event:onImageNativeLoad</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The load event. |

<a name="MdImageComponent.properties"></a>

### MdImageComponent.properties
Defines the properties of the MdImageComponent.

**Kind**: static property of [<code>MdImageComponent</code>](#MdImageComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| src | <code>String</code> | The source URL of the image. |
| alt | <code>String</code> | The alternative text for the image. |
| ratio | <code>String</code> | The aspect ratio of the image (default is '1/1'). |
| shape | <code>Boolean</code> | Indicates whether the image should have a circular shape. |

<a name="MdListItemComponent"></a>

## MdListItemComponent ⇐ <code>LitElement</code>
`MdListItemComponent` is a custom LitElement representing a list item.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdListItemComponent](#MdListItemComponent) ⇐ <code>LitElement</code>
    * _instance_
        * ["onListItemClick"](#MdListItemComponent+event_onListItemClick)
    * _static_
        * [.properties](#MdListItemComponent.properties)

<a name="MdListItemComponent+event_onListItemClick"></a>

### "onListItemClick"
Dispatched when a list item is clicked.

**Kind**: event emitted by [<code>MdListItemComponent</code>](#MdListItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |
| listItem | <code>HTMLElement</code> | The clicked list item. |

<a name="MdListItemComponent.properties"></a>

### MdListItemComponent.properties
**Kind**: static property of [<code>MdListItemComponent</code>](#MdListItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | The label for the list item. |
| supportingText | <code>String</code> | The supporting text for the list item. |
| leadingItems | <code>Array</code> | An array of leading items. |
| trailingItems | <code>Array</code> | An array of trailing items. |
| activated | <code>Boolean</code> | Indicates whether the list item is activated. |

<a name="MdListRowComponent"></a>

## MdListRowComponent ⇐ <code>LitElement</code>
`MdListRowComponent` is a custom LitElement representing a list row.

**Kind**: global class  
**Extends**: <code>LitElement</code>  
<a name="MdListComponent"></a>

## MdListComponent ⇐ <code>LitElement</code>
`MdListComponent` is a custom LitElement representing a list.

**Kind**: global class  
**Extends**: <code>LitElement</code>  
<a name="MdListComponent.properties"></a>

### MdListComponent.properties
**Kind**: static property of [<code>MdListComponent</code>](#MdListComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | An array of items to be displayed in the list. |
| ui | <code>String</code> | The UI style of the list ('one-line', 'two-line', 'three-line'). |
| type | <code>String</code> | The type of the list ('multi-select', etc.). |
| activatable | <code>Boolean</code> | Indicates whether list items are activatable. |

<a name="MdNavigation"></a>

## MdNavigation
Represents a navigation utility.

**Kind**: global class  

* [MdNavigation](#MdNavigation)
    * [.setEntries(entries, parent)](#MdNavigation.setEntries) ⇒ <code>Array</code>
    * [.getEntry()](#MdNavigation.getEntry) ⇒ <code>Object</code>
    * [.getEntries(entry)](#MdNavigation.getEntries) ⇒ <code>Array</code>
    * [.handlePopstate(event)](#MdNavigation.handlePopstate)
    * [.emit(type, detail)](#MdNavigation.emit)
    * [.navigate(url)](#MdNavigation.navigate)
    * [.handleClick(event)](#MdNavigation.handleClick)
    * [.load(entries)](#MdNavigation.load)

<a name="MdNavigation.setEntries"></a>

### MdNavigation.setEntries(entries, parent) ⇒ <code>Array</code>
Sets entries for navigation.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  
**Returns**: <code>Array</code> - - The modified array of entries.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entries | <code>Array</code> |  | An array of navigation entries. |
| parent | <code>Object</code> | <code></code> | The parent entry. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pattern | <code>Array</code> | The pattern generated based on the entry's path. |
| parent | <code>Object</code> | The parent entry. |

<a name="MdNavigation.getEntry"></a>

### MdNavigation.getEntry() ⇒ <code>Object</code>
Gets the current entry based on the path.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  
**Returns**: <code>Object</code> - - The current navigation entry.  
<a name="MdNavigation.getEntries"></a>

### MdNavigation.getEntries(entry) ⇒ <code>Array</code>
Gets all entries, including parent entries, for a given entry.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  
**Returns**: <code>Array</code> - - An array of all entries.  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>Object</code> | The entry to retrieve all entries for. |

<a name="MdNavigation.handlePopstate"></a>

### MdNavigation.handlePopstate(event)
Handles the popstate event.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  
**Emits**: <code>event:onCurrententrychange</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The popstate event. |

<a name="MdNavigation.emit"></a>

### MdNavigation.emit(type, detail)
Emits a custom event with the specified type and detail.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event. |
| detail | <code>Object</code> | Additional details for the event. |

<a name="MdNavigation.navigate"></a>

### MdNavigation.navigate(url)
Navigates to the specified URL using the pushState method.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to navigate to. |

<a name="MdNavigation.handleClick"></a>

### MdNavigation.handleClick(event)
Handles click events for navigation elements.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdNavigation.load"></a>

### MdNavigation.load(entries)
Loads navigation entries and sets up event listeners.

**Kind**: static method of [<code>MdNavigation</code>](#MdNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array</code> | An array of navigation entries. |

<a name="MdRadioButtonComponent"></a>

## MdRadioButtonComponent ⇐ <code>LitElement</code>
Custom element for a radio button.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdRadioButtonComponent](#MdRadioButtonComponent) ⇐ <code>LitElement</code>
    * [new MdRadioButtonComponent()](#new_MdRadioButtonComponent_new)
    * _instance_
        * [.radioButtonNative](#MdRadioButtonComponent+radioButtonNative) ⇒ <code>HTMLElement</code>
        * [.radioButtonTrack](#MdRadioButtonComponent+radioButtonTrack) ⇒ <code>HTMLElement</code>
        * [.radioButtonThumb](#MdRadioButtonComponent+radioButtonThumb) ⇒ <code>HTMLElement</code>
        * [.createRenderRoot()](#MdRadioButtonComponent+createRenderRoot) ⇒ [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)
        * [.render()](#MdRadioButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdRadioButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdRadioButtonComponent+disconnectedCallback)
        * [.firstUpdated()](#MdRadioButtonComponent+firstUpdated)
        * [.onRadioButtonNativeInput(event)](#MdRadioButtonComponent+onRadioButtonNativeInput)
        * ["onRadioButtonNativeInput"](#MdRadioButtonComponent+event_onRadioButtonNativeInput)
    * _static_
        * [.properties](#MdRadioButtonComponent.properties)

<a name="new_MdRadioButtonComponent_new"></a>

### new MdRadioButtonComponent()
Constructor for MdRadioButtonComponent.

<a name="MdRadioButtonComponent+radioButtonNative"></a>

### mdRadioButtonComponent.radioButtonNative ⇒ <code>HTMLElement</code>
Returns the native radio button element.

**Kind**: instance property of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Returns**: <code>HTMLElement</code> - The native radio button element.  
<a name="MdRadioButtonComponent+radioButtonTrack"></a>

### mdRadioButtonComponent.radioButtonTrack ⇒ <code>HTMLElement</code>
Returns the track element of the radio button.

**Kind**: instance property of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Returns**: <code>HTMLElement</code> - The track element.  
<a name="MdRadioButtonComponent+radioButtonThumb"></a>

### mdRadioButtonComponent.radioButtonThumb ⇒ <code>HTMLElement</code>
Returns the thumb element of the radio button.

**Kind**: instance property of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Returns**: <code>HTMLElement</code> - The thumb element.  
<a name="MdRadioButtonComponent+createRenderRoot"></a>

### mdRadioButtonComponent.createRenderRoot() ⇒ [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)
Overrides the default render root to use the element itself.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Returns**: [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent) - The current instance.  
<a name="MdRadioButtonComponent+render"></a>

### mdRadioButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the radio button element.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Returns**: <code>TemplateResult</code> - The HTML template result.  
<a name="MdRadioButtonComponent+connectedCallback"></a>

### mdRadioButtonComponent.connectedCallback()
Adds the "md-radio-button" class when the component is connected.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
<a name="MdRadioButtonComponent+disconnectedCallback"></a>

### mdRadioButtonComponent.disconnectedCallback()
Removes the "md-radio-button" class when the component is disconnected.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
<a name="MdRadioButtonComponent+firstUpdated"></a>

### mdRadioButtonComponent.firstUpdated()
Initializes the state controller after the first update.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
<a name="MdRadioButtonComponent+onRadioButtonNativeInput"></a>

### mdRadioButtonComponent.onRadioButtonNativeInput(event)
Handles the input event on the native radio button.

**Kind**: instance method of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdRadioButtonComponent+event_onRadioButtonNativeInput"></a>

### "onRadioButtonNativeInput"
Dispatched when the native radio button is input.

**Kind**: event emitted by [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail.event | <code>Event</code> | The input event. |

<a name="MdRadioButtonComponent.properties"></a>

### MdRadioButtonComponent.properties
Properties for the MdRadioButtonComponent.

**Kind**: static property of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name attribute for the radio button. |
| checked | <code>Boolean</code> | The checked attribute for the radio button. |

<a name="MdSegmentedButtonComponent"></a>

## MdSegmentedButtonComponent ⇐ <code>LitElement</code>
Custom element for a segmented button.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdSegmentedButtonComponent](#MdSegmentedButtonComponent) ⇐ <code>LitElement</code>
    * [new MdSegmentedButtonComponent()](#new_MdSegmentedButtonComponent_new)
    * _instance_
        * [.createRenderRoot()](#MdSegmentedButtonComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdSegmentedButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSegmentedButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MdSegmentedButtonComponent+disconnectedCallback)
        * [.onSegmentedButtonClick(event)](#MdSegmentedButtonComponent+onSegmentedButtonClick)
    * _static_
        * [.properties](#MdSegmentedButtonComponent.properties)

<a name="new_MdSegmentedButtonComponent_new"></a>

### new MdSegmentedButtonComponent()
Constructor for MdSegmentedButtonComponent.

<a name="MdSegmentedButtonComponent+createRenderRoot"></a>

### mdSegmentedButtonComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the default render root to be the component itself.

**Kind**: instance method of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
<a name="MdSegmentedButtonComponent+render"></a>

### mdSegmentedButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the segmented button based on the provided items.

**Kind**: instance method of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered HTML template.  
<a name="MdSegmentedButtonComponent+connectedCallback"></a>

### mdSegmentedButtonComponent.connectedCallback()
Adds the "md-segmented-button" class when connected to the DOM.

**Kind**: instance method of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
<a name="MdSegmentedButtonComponent+disconnectedCallback"></a>

### mdSegmentedButtonComponent.disconnectedCallback()
Removes the "md-segmented-button" class when disconnected from the DOM.

**Kind**: instance method of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
<a name="MdSegmentedButtonComponent+onSegmentedButtonClick"></a>

### mdSegmentedButtonComponent.onSegmentedButtonClick(event)
Handles the click event on a segmented button.

**Kind**: instance method of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MdSegmentedButtonComponent.properties"></a>

### MdSegmentedButtonComponent.properties
**Kind**: static property of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | An array of items for the segmented button. |
| type | <code>String</code> | The type of the segmented button (e.g., "single-select" or "multi-select"). |

<a name="MdStateController"></a>

## MdStateController
Controller class for managing the state of an element.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.container | <code>HTMLElement</code> | The container element for the state. |
| options.containment | <code>boolean</code> | Whether the state is contained. |
| options.fadeout | <code>boolean</code> \| <code>undefined</code> | Whether to apply fadeout effect. |
| options.inverted | <code>boolean</code> \| <code>undefined</code> | Whether the state is inverted. |
| options.button | <code>string</code> \| <code>undefined</code> | The button element selector. |
| options.size | <code>number</code> \| <code>undefined</code> | The size of the state. |


* [MdStateController](#MdStateController)
    * [new MdStateController(host, [options])](#new_MdStateController_new)
    * [.button](#MdStateController+button) : <code>HTMLElement</code>
    * [.layer](#MdStateController+layer) : <code>HTMLElement</code>
    * [.hostConnected()](#MdStateController+hostConnected)
    * [.handlePointerenter(event)](#MdStateController+handlePointerenter)
    * [.handlePointerleave(event)](#MdStateController+handlePointerleave)
    * [.handlePointerdown(event)](#MdStateController+handlePointerdown)
    * [.handlePointerup(event)](#MdStateController+handlePointerup)
    * [.handleFocus(event)](#MdStateController+handleFocus)
    * [.handleBlur(event)](#MdStateController+handleBlur)
    * [.hostDisconnected()](#MdStateController+hostDisconnected)
    * ["pointerenter"](#MdStateController+event_pointerenter)
    * ["pointerleave"](#MdStateController+event_pointerleave)
    * ["pointerdown"](#MdStateController+event_pointerdown)
    * ["pointerup"](#MdStateController+event_pointerup)
    * ["focus"](#MdStateController+event_focus)
    * ["blur"](#MdStateController+event_blur)

<a name="new_MdStateController_new"></a>

### new MdStateController(host, [options])
Creates an instance of MdStateController.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| host | <code>HTMLElement</code> |  | The host element. |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for the controller. |

<a name="MdStateController+button"></a>

### mdStateController.button : <code>HTMLElement</code>
The button element associated with the state.

**Kind**: instance property of [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+layer"></a>

### mdStateController.layer : <code>HTMLElement</code>
The layer element for the state.

**Kind**: instance property of [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+hostConnected"></a>

### mdStateController.hostConnected()
Callback when the host element is connected to the DOM.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+handlePointerenter"></a>

### mdStateController.handlePointerenter(event)
Event handler for pointer enter.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>pointerenter</code>](#MdStateController+event_pointerenter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>PointerEvent</code> | The pointer enter event. |

<a name="MdStateController+handlePointerleave"></a>

### mdStateController.handlePointerleave(event)
Event handler for pointer leave.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>pointerleave</code>](#MdStateController+event_pointerleave)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>PointerEvent</code> | The pointer leave event. |

<a name="MdStateController+handlePointerdown"></a>

### mdStateController.handlePointerdown(event)
Event handler for pointer down.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>pointerdown</code>](#MdStateController+event_pointerdown)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>PointerEvent</code> | The pointer down event. |

<a name="MdStateController+handlePointerup"></a>

### mdStateController.handlePointerup(event)
Event handler for pointer up.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>pointerup</code>](#MdStateController+event_pointerup)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>PointerEvent</code> | The pointer up event. |

<a name="MdStateController+handleFocus"></a>

### mdStateController.handleFocus(event)
Event handler for focus.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>focus</code>](#MdStateController+event_focus)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>FocusEvent</code> | The focus event. |

<a name="MdStateController+handleBlur"></a>

### mdStateController.handleBlur(event)
Event handler for blur.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
**Emits**: [<code>blur</code>](#MdStateController+event_blur)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>FocusEvent</code> | The blur event. |

<a name="MdStateController+hostDisconnected"></a>

### mdStateController.hostDisconnected()
Callback when the host element is disconnected from the DOM.

**Kind**: instance method of [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_pointerenter"></a>

### "pointerenter"
Event triggered when the pointer enters the state.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_pointerleave"></a>

### "pointerleave"
Event triggered when the pointer leaves the state.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_pointerdown"></a>

### "pointerdown"
Event triggered when the pointer is pressed down on the state.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_pointerup"></a>

### "pointerup"
Event triggered when the pointer is released.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_focus"></a>

### "focus"
Event triggered when the state gains focus.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdStateController+event_blur"></a>

### "blur"
Event triggered when the state loses focus.

**Kind**: event emitted by [<code>MdStateController</code>](#MdStateController)  
<a name="MdSwitchComponent"></a>

## MdSwitchComponent ⇐ <code>LitElement</code>
A custom switch component built using LitElement.

**Kind**: global class  
**Extends**: <code>LitElement</code>  

* [MdSwitchComponent](#MdSwitchComponent) ⇐ <code>LitElement</code>
    * [new MdSwitchComponent()](#new_MdSwitchComponent_new)
    * _instance_
        * [.switchNative](#MdSwitchComponent+switchNative) ⇒ <code>HTMLElement</code>
        * [.switchTrack](#MdSwitchComponent+switchTrack) ⇒ <code>HTMLElement</code>
        * [.switchThumb](#MdSwitchComponent+switchThumb) ⇒ <code>HTMLElement</code>
        * [.createRenderRoot()](#MdSwitchComponent+createRenderRoot) ⇒ <code>this</code>
        * [.render()](#MdSwitchComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MdSwitchComponent+connectedCallback)
        * [.disconnectedCallback()](#MdSwitchComponent+disconnectedCallback)
        * [.firstUpdated()](#MdSwitchComponent+firstUpdated)
        * [.updated(_changedProperties)](#MdSwitchComponent+updated)
        * [.onSwitchNativeInput(event)](#MdSwitchComponent+onSwitchNativeInput)
        * ["onSwitchNativeInput"](#MdSwitchComponent+event_onSwitchNativeInput)
    * _static_
        * [.properties](#MdSwitchComponent.properties)

<a name="new_MdSwitchComponent_new"></a>

### new MdSwitchComponent()
Constructor for MdSwitchComponent.

<a name="MdSwitchComponent+switchNative"></a>

### mdSwitchComponent.switchNative ⇒ <code>HTMLElement</code>
Returns the native switch element.

**Kind**: instance property of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Returns**: <code>HTMLElement</code> - The native switch element.  
<a name="MdSwitchComponent+switchTrack"></a>

### mdSwitchComponent.switchTrack ⇒ <code>HTMLElement</code>
Returns the switch track element.

**Kind**: instance property of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Returns**: <code>HTMLElement</code> - The switch track element.  
<a name="MdSwitchComponent+switchThumb"></a>

### mdSwitchComponent.switchThumb ⇒ <code>HTMLElement</code>
Returns the switch thumb element.

**Kind**: instance property of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Returns**: <code>HTMLElement</code> - The switch thumb element.  
<a name="MdSwitchComponent+createRenderRoot"></a>

### mdSwitchComponent.createRenderRoot() ⇒ <code>this</code>
Overrides LitElement's createRenderRoot method.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Returns**: <code>this</code> - The instance of the element.  
<a name="MdSwitchComponent+render"></a>

### mdSwitchComponent.render() ⇒ <code>TemplateResult</code>
Renders the switch component using LitElement's html template.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MdSwitchComponent+connectedCallback"></a>

### mdSwitchComponent.connectedCallback()
Lifecycle callback when the element is connected to the DOM.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
<a name="MdSwitchComponent+disconnectedCallback"></a>

### mdSwitchComponent.disconnectedCallback()
Lifecycle callback when the element is disconnected from the DOM.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
<a name="MdSwitchComponent+firstUpdated"></a>

### mdSwitchComponent.firstUpdated()
Lifecycle callback when the element is first updated.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
<a name="MdSwitchComponent+updated"></a>

### mdSwitchComponent.updated(_changedProperties)
Lifecycle callback when the element is updated.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MdSwitchComponent+onSwitchNativeInput"></a>

### mdSwitchComponent.onSwitchNativeInput(event)
Event handler for the native switch input event.

**Kind**: instance method of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MdSwitchComponent+event_onSwitchNativeInput"></a>

### "onSwitchNativeInput"
Fired when the native switch input event occurs.

**Kind**: event emitted by [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail.event | <code>Event</code> | The input event detail. |

<a name="MdSwitchComponent.properties"></a>

### MdSwitchComponent.properties
Static getter for defining properties of the element.

**Kind**: static property of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name attribute of the switch. |
| checked | <code>Boolean</code> | The checked state of the switch. |

<a name="md-emoji"></a>

## md-emoji : [<code>MdEmojiComponent</code>](#MdEmojiComponent)
A custom element for displaying emoji.

**Kind**: global typedef  
