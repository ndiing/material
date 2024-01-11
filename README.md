## Classes

<dl>
<dt><a href="#MDButtonComponent">MDButtonComponent</a></dt>
<dd><p>MDButtonComponent represents a button element with customizable appearance and ripple effect.</p>
</dd>
<dt><a href="#MDFabComponent">MDFabComponent</a></dt>
<dd><p>MDFabComponent represents a floating action button (FAB) element with customizable appearance and ripple effect.</p>
</dd>
<dt><a href="#MDCDK">MDCDK</a></dt>
<dd><p>MDCDK class for handling custom events and initialization.</p>
</dd>
<dt><a href="#MDComponent">MDComponent</a></dt>
<dd><p>Custom component based on LitElement.</p>
</dd>
<dt><a href="#MDRipple">MDRipple</a></dt>
<dd><p>MDRipple is a class that manages ripple effect functionality based on MDCDK.</p>
</dd>
<dt><a href="#MDRouter">MDRouter</a></dt>
<dd><p>MDRouter is a class for managing routing and navigation within the application.</p>
</dd>
<dt><a href="#MDIconButtonComponent">MDIconButtonComponent</a></dt>
<dd><p>MDIconButtonComponent represents an icon button element with customizable appearance and ripple effect.</p>
</dd>
<dt><a href="#MDSegmentedButtonComponent">MDSegmentedButtonComponent</a></dt>
<dd><p>MDSegmentedButtonComponent represents a segmented button element that renders multiple md-button elements.</p>
</dd>
</dl>

<a name="MDButtonComponent"></a>

## MDButtonComponent
MDButtonComponent represents a button element with customizable appearance and ripple effect.

**Kind**: global class  

* [MDButtonComponent](#MDButtonComponent)
    * [new MDButtonComponent()](#new_MDButtonComponent_new)
    * _instance_
        * [.buttonNative](#MDButtonComponent+buttonNative) ⇒ <code>HTMLElement</code>
        * [.render()](#MDButtonComponent+render) ⇒ <code>HTMLElement</code>
        * [.connectedCallback()](#MDButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDButtonComponent+updated)
    * _static_
        * [.properties](#MDButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDButtonComponent_new"></a>

### new MDButtonComponent()
Constructor for MDButtonComponent setting default 'type' to "button".

<a name="MDButtonComponent+buttonNative"></a>

### mdButtonComponent.buttonNative ⇒ <code>HTMLElement</code>
Returns the native button element inside the MDButtonComponent.

**Kind**: instance property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>HTMLElement</code> - The native button element.  
<a name="MDButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>HTMLElement</code>
Renders the HTML template for the MDButtonComponent.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>HTMLElement</code> - A template result representing the rendered HTML.  
<a name="MDButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle method called when the element is added to the DOM.Initializes the component and attaches MDRipple effect to the button.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving when initialization is complete.  
<a name="MDButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Lifecycle method called when the element is removed from the DOM.Cleans up the component, removing added classes and destroying the ripple effect.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
<a name="MDButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated(_changedProperties)
Lifecycle method called after the first update of the element.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Lifecycle method called when properties are updated.Updates the appearance-related classes based on the 'appearance' property.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDButtonComponent.properties"></a>

### MDButtonComponent.properties ⇒ <code>Object</code>
Defines the properties and their types for MDButtonComponent.

**Kind**: static property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Object</code> - An object containing property definitions.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | The appearance/style of the button. |
| type | <code>String</code> | The type of the button element. |
| icon | <code>String</code> | The icon displayed in the button. |
| label | <code>String</code> | The label or text content of the button. |
| activated | <code>Boolean</code> | Reflects whether the button is activated or not. |

<a name="MDFabComponent"></a>

## MDFabComponent
MDFabComponent represents a floating action button (FAB) element with customizable appearance and ripple effect.

**Kind**: global class  

* [MDFabComponent](#MDFabComponent)
    * [new MDFabComponent()](#new_MDFabComponent_new)
    * _instance_
        * [.fabNative](#MDFabComponent+fabNative) ⇒ <code>HTMLElement</code>
        * [.render()](#MDFabComponent+render) ⇒ <code>HTMLElement</code>
        * [.connectedCallback()](#MDFabComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDFabComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDFabComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDFabComponent+updated)
    * _static_
        * [.properties](#MDFabComponent.properties) ⇒ <code>Object</code>

<a name="new_MDFabComponent_new"></a>

### new MDFabComponent()
Constructor for MDFabComponent setting default 'type' to "button".

<a name="MDFabComponent+fabNative"></a>

### mdFabComponent.fabNative ⇒ <code>HTMLElement</code>
Returns the native button element inside the MDFabComponent.

**Kind**: instance property of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>HTMLElement</code> - The native button element.  
<a name="MDFabComponent+render"></a>

### mdFabComponent.render() ⇒ <code>HTMLElement</code>
Renders the HTML template for the MDFabComponent.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>HTMLElement</code> - A template result representing the rendered HTML.  
<a name="MDFabComponent+connectedCallback"></a>

### mdFabComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle method called when the element is added to the DOM.Initializes the component and attaches MDRipple effect to the button.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving when initialization is complete.  
<a name="MDFabComponent+disconnectedCallback"></a>

### mdFabComponent.disconnectedCallback()
Lifecycle method called when the element is removed from the DOM.Cleans up the component, removing added classes and destroying the ripple effect.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
<a name="MDFabComponent+firstUpdated"></a>

### mdFabComponent.firstUpdated(_changedProperties)
Lifecycle method called after the first update of the element.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDFabComponent+updated"></a>

### mdFabComponent.updated(_changedProperties)
Lifecycle method called when properties are updated.Updates the size-related and appearance-related classes based on their respective properties.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDFabComponent.properties"></a>

### MDFabComponent.properties ⇒ <code>Object</code>
Defines the properties and their types for MDFabComponent.

**Kind**: static property of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>Object</code> - An object containing property definitions.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| size | <code>String</code> | The size of the FAB. Can be 'small' or 'large'. |
| appearance | <code>String</code> | The appearance/style of the FAB. Currently supports 'extended'. |
| type | <code>String</code> | The type of the button. |
| icon | <code>String</code> | The icon displayed in the FAB. |
| label | <code>String</code> | The label or text content of the FAB. |

<a name="MDCDK"></a>

## MDCDK
MDCDK class for handling custom events and initialization.

**Kind**: global class  

* [MDCDK](#MDCDK)
    * [new MDCDK(root, [options])](#new_MDCDK_new)
    * [.init()](#MDCDK+init)
    * [.destroy()](#MDCDK+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDCDK_new"></a>

### new MDCDK(root, [options])
Creates an instance of MDCDK.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | The root element for the MDCDK instance. |
| [options] | <code>Object</code> | <code>{}</code> | Optional configuration options for MDCDK. |

<a name="MDCDK+init"></a>

### mdcdK.init()
Initializes the MDCDK instance.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  
<a name="MDCDK+destroy"></a>

### mdcdK.destroy()
Destroys the MDCDK instance.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  
<a name="MDCDK+on"></a>

### mdcdK.on(type, listener)
Adds an event listener to the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function or object. |

<a name="MDCDK+off"></a>

### mdcdK.off(type, listener)
Removes an event listener from the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function or object. |

<a name="MDCDK+emit"></a>

### mdcdK.emit(type, detail)
Emits a custom event from the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event. |
| detail | <code>\*</code> | Any data to be sent as the event's `detail` property. |

<a name="MDComponent"></a>

## MDComponent
Custom component based on LitElement.

**Kind**: global class  

* [MDComponent](#MDComponent)
    * [.createRenderRoot()](#MDComponent+createRenderRoot) ⇒ <code>this</code>
    * [.on(type, listener)](#MDComponent+on)
    * [.off(type, listener)](#MDComponent+off)
    * [.emit(type, detail)](#MDComponent+emit)

<a name="MDComponent+createRenderRoot"></a>

### mdComponent.createRenderRoot() ⇒ <code>this</code>
Overrides the createRenderRoot method to return 'this'.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  
**Returns**: <code>this</code> - The current element instance.  
<a name="MDComponent+on"></a>

### mdComponent.on(type, listener)
Adds an event listener to the element.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>function</code> | The callback function to execute when the event is triggered. |

<a name="MDComponent+off"></a>

### mdComponent.off(type, listener)
Removes an event listener from the element.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>function</code> | The callback function previously registered. |

<a name="MDComponent+emit"></a>

### mdComponent.emit(type, detail)
Emits a custom event from the element.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event. |
| detail | <code>\*</code> | Any data to be sent as the event's `detail` property. |

<a name="MDRipple"></a>

## MDRipple
MDRipple is a class that manages ripple effect functionality based on MDCDK.

**Kind**: global class  

* [MDRipple](#MDRipple)
    * [.init()](#MDRipple+init)
    * [.destroy()](#MDRipple+destroy)

<a name="MDRipple+init"></a>

### mdRipple.init()
Initializes the ripple effect and sets up event listeners.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
<a name="MDRipple+destroy"></a>

### mdRipple.destroy()
Cleans up and removes the ripple effect and event listeners.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
<a name="MDRouter"></a>

## MDRouter
MDRouter is a class for managing routing and navigation within the application.

**Kind**: global class  
**Emits**: <code>MDRouter#event:popstate - When navigating through history.</code>, <code>MDRouter#event:onCurrententrychange - When the current entry changes.</code>, <code>MDRouter#event:onNavigate - When navigation begins.</code>, <code>MDRouter#event:onNavigateerror - When an error occurs during navigation.</code>, <code>MDRouter#event:onNavigatesuccess - When navigation is successful.</code>  

* [MDRouter](#MDRouter)
    * [.navigate(url)](#MDRouter.navigate)
    * [.init()](#MDRouter.init) : <code>Array.&lt;Object&gt;</code>

<a name="MDRouter.navigate"></a>

### MDRouter.navigate(url)
Navigates to a specified URL using HTML5 History API.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to navigate to. |

<a name="MDRouter.init"></a>

### MDRouter.init() : <code>Array.&lt;Object&gt;</code>
Initializes the router with provided routes.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path of the route. |
| component | <code>HTMLElement</code> | The component to render for the route. |
| children | <code>Array.&lt;Object&gt;</code> | Child routes. |
| load | <code>function</code> | Function to lazy-load the route component. |
| beforeLoad | <code>function</code> | Function to execute before loading the route component. |

<a name="MDIconButtonComponent"></a>

## MDIconButtonComponent
MDIconButtonComponent represents an icon button element with customizable appearance and ripple effect.

**Kind**: global class  
**Emits**: <code>MDIconButtonComponent#event:onIconButtonNativeClick - Fires when the native icon button is clicked.</code>  

* [MDIconButtonComponent](#MDIconButtonComponent)
    * [new MDIconButtonComponent()](#new_MDIconButtonComponent_new)
    * _instance_
        * [.iconButtonNative](#MDIconButtonComponent+iconButtonNative) ⇒ <code>HTMLElement</code>
        * [.render()](#MDIconButtonComponent+render) ⇒ <code>HTMLElement</code>
        * [.connectedCallback()](#MDIconButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDIconButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDIconButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDIconButtonComponent+updated)
        * [.handleIconButtonNativeClick(event)](#MDIconButtonComponent+handleIconButtonNativeClick)
        * ["onIconButtonNativeClick"](#MDIconButtonComponent+event_onIconButtonNativeClick)
    * _static_
        * [.properties](#MDIconButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDIconButtonComponent_new"></a>

### new MDIconButtonComponent()
Constructor for MDIconButtonComponent setting default 'type' to "button".

<a name="MDIconButtonComponent+iconButtonNative"></a>

### mdIconButtonComponent.iconButtonNative ⇒ <code>HTMLElement</code>
Returns the native icon button element inside the MDIconButtonComponent.

**Kind**: instance property of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>HTMLElement</code> - The native icon button element.  
<a name="MDIconButtonComponent+render"></a>

### mdIconButtonComponent.render() ⇒ <code>HTMLElement</code>
Renders the HTML template for the MDIconButtonComponent.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>HTMLElement</code> - A template result representing the rendered HTML.  
<a name="MDIconButtonComponent+connectedCallback"></a>

### mdIconButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle method called when the element is added to the DOM.Initializes the component and attaches MDRipple effect to the icon button.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise resolving when initialization is complete.  
<a name="MDIconButtonComponent+disconnectedCallback"></a>

### mdIconButtonComponent.disconnectedCallback()
Lifecycle method called when the element is removed from the DOM.Cleans up the component, removing added classes and destroying the ripple effect.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+firstUpdated"></a>

### mdIconButtonComponent.firstUpdated(_changedProperties)
Lifecycle method called after the first update of the element.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDIconButtonComponent+updated"></a>

### mdIconButtonComponent.updated(_changedProperties)
Lifecycle method called when properties are updated.Updates classes based on the 'appearance' and 'toggle' properties.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDIconButtonComponent+handleIconButtonNativeClick"></a>

### mdIconButtonComponent.handleIconButtonNativeClick(event)
Handles the click event on the native icon button element.Toggles activation if 'toggle' property is enabled and emits a custom event.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Emits**: [<code>onIconButtonNativeClick</code>](#MDIconButtonComponent+event_onIconButtonNativeClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event on the icon button. |

<a name="MDIconButtonComponent+event_onIconButtonNativeClick"></a>

### "onIconButtonNativeClick"
Event fired when the native icon button is clicked.

**Kind**: event emitted by [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent.properties"></a>

### MDIconButtonComponent.properties ⇒ <code>Object</code>
Defines the properties and their types for MDIconButtonComponent.

**Kind**: static property of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>Object</code> - An object containing property definitions.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | The appearance/style of the icon button. |
| type | <code>String</code> | The type of the button. |
| icon | <code>String</code> | The icon displayed in the button. |
| toggle | <code>Boolean</code> | Indicates if the icon button is toggleable. |
| activated | <code>Boolean</code> | Reflects whether the icon button is activated or not. |

<a name="MDSegmentedButtonComponent"></a>

## MDSegmentedButtonComponent
MDSegmentedButtonComponent represents a segmented button element that renders multiple md-button elements.

**Kind**: global class  
**Emits**: <code>MDSegmentedButtonComponent#event:onButtonClick - Fires when a button in the segmented button is clicked.</code>  

* [MDSegmentedButtonComponent](#MDSegmentedButtonComponent)
    * [new MDSegmentedButtonComponent()](#new_MDSegmentedButtonComponent_new)
    * _instance_
        * [.render()](#MDSegmentedButtonComponent+render) ⇒ <code>HTMLElement</code>
        * [.connectedCallback()](#MDSegmentedButtonComponent+connectedCallback)
        * [.disconnectedCallback()](#MDSegmentedButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDSegmentedButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDSegmentedButtonComponent+updated)
        * [.handleButtonClick(event)](#MDSegmentedButtonComponent+handleButtonClick)
        * ["onButtonClick"](#MDSegmentedButtonComponent+event_onButtonClick)
    * _static_
        * [.properties](#MDSegmentedButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDSegmentedButtonComponent_new"></a>

### new MDSegmentedButtonComponent()
Constructor for MDSegmentedButtonComponent setting default values for 'type' and 'data'.

<a name="MDSegmentedButtonComponent+render"></a>

### mdSegmentedButtonComponent.render() ⇒ <code>HTMLElement</code>
Renders the HTML template for the MDSegmentedButtonComponent using md-button elements.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>HTMLElement</code> - A template result representing the rendered HTML.  
<a name="MDSegmentedButtonComponent+connectedCallback"></a>

### mdSegmentedButtonComponent.connectedCallback()
Lifecycle method called when the element is added to the DOM.Adds the 'md-segmented-button' class to the component.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+disconnectedCallback"></a>

### mdSegmentedButtonComponent.disconnectedCallback()
Lifecycle method called when the element is removed from the DOM.Removes the 'md-segmented-button' class from the component.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+firstUpdated"></a>

### mdSegmentedButtonComponent.firstUpdated(_changedProperties)
Lifecycle method called after the first update of the element.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDSegmentedButtonComponent+updated"></a>

### mdSegmentedButtonComponent.updated(_changedProperties)
Lifecycle method called when properties are updated.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map.&lt;any, any&gt;</code> | A Map of properties that have changed. |

<a name="MDSegmentedButtonComponent+handleButtonClick"></a>

### mdSegmentedButtonComponent.handleButtonClick(event)
Handles the click event on a button in the segmented button.Toggles activation for multi-select or selects a single button for single-select.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event on the button. |

<a name="MDSegmentedButtonComponent+event_onButtonClick"></a>

### "onButtonClick"
Event fired when a button in the segmented button is clicked.

**Kind**: event emitted by [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The original click event. |
| button | <code>HTMLElement</code> | The button element that was clicked. |

<a name="MDSegmentedButtonComponent.properties"></a>

### MDSegmentedButtonComponent.properties ⇒ <code>Object</code>
Defines the properties and their types for MDSegmentedButtonComponent.

**Kind**: static property of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>Object</code> - An object containing property definitions.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of segmented button (single-select or multi-select). |
| data | <code>Array</code> | The data array to render buttons. |

