## Classes

<dl>
<dt><a href="#MDButtonComponent">MDButtonComponent</a></dt>
<dd><p>Custom button component extending MDComponent.</p>
</dd>
<dt><a href="#MDCDK">MDCDK</a></dt>
<dd><p>Represents a Custom Development Kit for MD Framework.</p>
</dd>
<dt><a href="#MDComponent">MDComponent</a></dt>
<dd><p>Represents a component for the MD framework.
Extends LitElement class.</p>
</dd>
<dt><a href="#MDOutletComponent">MDOutletComponent</a></dt>
<dd><p>Represents an outlet component to manage content rendering within a router.
Extends MDComponent class.</p>
</dd>
<dt><a href="#MDPopover">MDPopover</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Represents a popover functionality based on Material Design components.</p>
</dd>
<dt><a href="#MDRipple">MDRipple</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Represents a Material Design Ripple effect applied to an element.</p>
</dd>
<dt><a href="#MDRouter">MDRouter</a></dt>
<dd><p>Class representing a simple router.</p>
</dd>
<dt><a href="#MDStore">MDStore</a></dt>
<dd><p>Manages data filtering, sorting, and pagination via URL parameters.</p>
</dd>
<dt><a href="#MDVirtualScroll">MDVirtualScroll</a> ⇐ <code><a href="#MDCDK">MDCDK</a></code></dt>
<dd><p>Represents a virtual scrolling functionality using Material Design components.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#notNull">notNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given value is not undefined or null.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the given value is not empty.</p>
</dd>
<dt><a href="#parseNumber">parseNumber(value)</a> ⇒ <code>number</code></dt>
<dd><p>Attempts to parse the value into an integer.</p>
</dd>
<dt><a href="#toPascalCase">toPascalCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to PascalCase.</p>
</dd>
<dt><a href="#toCamelCase">toCamelCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to camelCase.</p>
</dd>
<dt><a href="#toSnakeCase">toSnakeCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to snake_case.</p>
</dd>
<dt><a href="#toKebabCase">toKebabCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to kebab-case.</p>
</dd>
<dt><a href="#toTitleCase">toTitleCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a string to Title Case.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Route">Route</a> : <code>Object</code></dt>
<dd><p>Represents a route object used in the routing system.</p>
</dd>
<dt><a href="#Scroll">Scroll</a> : <code>Object</code></dt>
<dd><p>Represents the details of the scroll event.</p>
</dd>
</dl>

<a name="MDButtonComponent"></a>

## MDButtonComponent
Custom button component extending MDComponent.

**Kind**: global class  
**Emits**: <code>event:button-click - Triggered when the button is clicked.</code>  

* [MDButtonComponent](#MDButtonComponent)
    * [new MDButtonComponent()](#new_MDButtonComponent_new)
    * _instance_
        * [.native](#MDButtonComponent+native) ⇒ <code>HTMLElement</code>
        * [.render()](#MDButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDButtonComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDButtonComponent+firstUpdated)
        * [.updated(changedProperties)](#MDButtonComponent+updated)
    * _static_
        * [.properties](#MDButtonComponent.properties)

<a name="new_MDButtonComponent_new"></a>

### new MDButtonComponent()
Constructor for MDButtonComponent.

<a name="MDButtonComponent+native"></a>

### mdButtonComponent.native ⇒ <code>HTMLElement</code>
Retrieves the native button element.

**Kind**: instance property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>HTMLElement</code> - The native button element.  
<a name="MDButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDButtonComponent.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template result.  
<a name="MDButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle method called when the element is attached to the DOM.Initializes the button component and its ripple effect.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when initialization is complete.  
<a name="MDButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Lifecycle method called when the element is detached from the DOM.Performs cleanup or tasks when the button is removed.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
<a name="MDButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated(changedProperties)
Lifecycle method called when the element's properties have been updated for the first time.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MDButtonComponent+updated"></a>

### mdButtonComponent.updated(changedProperties)
Lifecycle method called when the element's properties have been updated.Updates button styles based on property changes.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MDButtonComponent.properties"></a>

### MDButtonComponent.properties
Properties for the MDButtonComponent.

**Kind**: static property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| icon | <code>string</code> | The icon displayed within the button. |
| label | <code>string</code> | The label or text displayed within the button. |
| type | <code>string</code> | The type of the button (e.g., "button", "submit", "reset"). |
| elevated | <code>boolean</code> | Determines whether the button has an elevated appearance. |
| filled | <code>boolean</code> | Determines whether the button has a filled appearance. |
| tonal | <code>boolean</code> | Determines whether the button has a tonal appearance. |
| outlined | <code>boolean</code> | Determines whether the button has an outlined appearance. |

<a name="MDCDK"></a>

## MDCDK
Represents a Custom Development Kit for MD Framework.

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
| root | <code>HTMLElement</code> |  | The root HTML element to bind events to. |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for MDCDK. |

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
Attaches an event listener to the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be called when the event occurs. |

<a name="MDCDK+off"></a>

### mdcdK.off(type, listener)
Removes an event listener from the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be removed. |

<a name="MDCDK+emit"></a>

### mdcdK.emit(type, detail)
Emits a custom event from the root element.

**Kind**: instance method of [<code>MDCDK</code>](#MDCDK)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event to be dispatched. |
| detail | <code>any</code> | Optional detail to be included in the event. |

<a name="MDComponent"></a>

## MDComponent
Represents a component for the MD framework.Extends LitElement class.

**Kind**: global class  

* [MDComponent](#MDComponent)
    * [.on(type, listener)](#MDComponent+on)
    * [.off(type, listener)](#MDComponent+off)
    * [.emit(type, detail)](#MDComponent+emit)

<a name="MDComponent+on"></a>

### mdComponent.on(type, listener)
Attaches an event listener to the component.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be called when the event occurs. |

<a name="MDComponent+off"></a>

### mdComponent.off(type, listener)
Removes an event listener from the component.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be removed. |

<a name="MDComponent+emit"></a>

### mdComponent.emit(type, detail)
Emits a custom event from the component.

**Kind**: instance method of [<code>MDComponent</code>](#MDComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event to be dispatched. |
| detail | <code>any</code> | Optional detail to be included in the event. |

<a name="MDOutletComponent"></a>

## MDOutletComponent
Represents an outlet component to manage content rendering within a router.Extends MDComponent class.

**Kind**: global class  
<a name="MDPopover"></a>

## MDPopover ⇐ [<code>MDCDK</code>](#MDCDK)
Represents a popover functionality based on Material Design components.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  

* [MDPopover](#MDPopover) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDPopover(root, [options])](#new_MDPopover_new)
    * [.init()](#MDPopover+init)
    * [.destroy()](#MDPopover+destroy)
    * [.setPlacement()](#MDPopover+setPlacement)
    * [.getPlacement(placement)](#MDPopover+getPlacement) ⇒ <code>Object</code>
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDPopover_new"></a>

### new MDPopover(root, [options])
Creates an instance of MDPopover.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | The root element for the popover. |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for the popover. |
| [options.placement] | <code>string</code> | <code>&quot;\&quot;bottom-start\&quot;&quot;</code> | The placement of the popover. |
| [options.offset] | <code>number</code> | <code>0</code> | The offset value for positioning the popover. |
| [options.shift] | <code>boolean</code> | <code>false</code> | Whether to shift the popover to stay within the viewport. |

<a name="MDPopover+init"></a>

### mdPopover.init()
Initializes the popover.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDPopover+destroy"></a>

### mdPopover.destroy()
Destroys the popover.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDPopover+setPlacement"></a>

### mdPopover.setPlacement()
Sets the placement of the popover based on the specified options.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
<a name="MDPopover+getPlacement"></a>

### mdPopover.getPlacement(placement) ⇒ <code>Object</code>
Calculates the placement of the popover based on the specified placement option.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Returns**: <code>Object</code> - Returns an object with left and top positions for the popover.  

| Param | Type | Description |
| --- | --- | --- |
| placement | <code>string</code> | The placement option for the popover. |

<a name="MDCDK+on"></a>

### mdPopover.on(type, listener)
Attaches an event listener to the root element.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be called when the event occurs. |

<a name="MDCDK+off"></a>

### mdPopover.off(type, listener)
Removes an event listener from the root element.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be removed. |

<a name="MDCDK+emit"></a>

### mdPopover.emit(type, detail)
Emits a custom event from the root element.

**Kind**: instance method of [<code>MDPopover</code>](#MDPopover)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event to be dispatched. |
| detail | <code>any</code> | Optional detail to be included in the event. |

<a name="MDRipple"></a>

## MDRipple ⇐ [<code>MDCDK</code>](#MDCDK)
Represents a Material Design Ripple effect applied to an element.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  

* [MDRipple](#MDRipple) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDRipple(root, [options])](#new_MDRipple_new)
    * [.init()](#MDRipple+init)
    * [.destroy()](#MDRipple+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDRipple_new"></a>

### new MDRipple(root, [options])
Creates an instance of MDRipple.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | The root element to apply the ripple effect. |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for the ripple effect. |
| [options.bounded] | <code>boolean</code> | <code>true</code> | Whether the ripple effect is bounded. |
| [options.centered] | <code>boolean</code> | <code>false</code> | Whether the ripple effect is centered. |
| [options.trigger] | <code>HTMLElement</code> |  | The element triggering the ripple effect. |

<a name="MDRipple+init"></a>

### mdRipple.init()
Initializes the ripple effect.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDRipple+destroy"></a>

### mdRipple.destroy()
Destroys the ripple effect and removes event listeners.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDCDK+on"></a>

### mdRipple.on(type, listener)
Attaches an event listener to the root element.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be called when the event occurs. |

<a name="MDCDK+off"></a>

### mdRipple.off(type, listener)
Removes an event listener from the root element.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be removed. |

<a name="MDCDK+emit"></a>

### mdRipple.emit(type, detail)
Emits a custom event from the root element.

**Kind**: instance method of [<code>MDRipple</code>](#MDRipple)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event to be dispatched. |
| detail | <code>any</code> | Optional detail to be included in the event. |

<a name="MDRouter"></a>

## MDRouter
Class representing a simple router.

**Kind**: global class  
**Emits**: <code>window#event:onCurrentEntryChange - Triggered when the current entry changes.</code>, <code>window#event:onNavigate - Triggered when navigation starts.</code>, <code>window#event:onNavigateError - Triggered when there&#x27;s an error during navigation.</code>, <code>window#event:onNavigateSuccess - Triggered when navigation is successful.</code>  

* [MDRouter](#MDRouter)
    * [.navigate(url)](#MDRouter.navigate)
    * [.init(routes)](#MDRouter.init)

<a name="MDRouter.navigate"></a>

### MDRouter.navigate(url)
Navigates to a specified URL.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to navigate to. |

<a name="MDRouter.init"></a>

### MDRouter.init(routes)
Initializes the router with provided routes.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| routes | [<code>Array.&lt;Route&gt;</code>](#Route) | An array of route objects representing the application routes. |

<a name="MDStore"></a>

## MDStore
Manages data filtering, sorting, and pagination via URL parameters.

**Kind**: global class  

* [MDStore](#MDStore)
    * [new MDStore([docs])](#new_MDStore_new)
    * [.filter(name, value, [operator])](#MDStore+filter)
    * [.paginate(_page, _limit)](#MDStore+paginate)
    * [.sort(_sort, _order)](#MDStore+sort)
    * [.slice(_start, _end)](#MDStore+slice)
    * [.search(q)](#MDStore+search)
    * [.getAll()](#MDStore+getAll) ⇒ <code>Object</code>

<a name="new_MDStore_new"></a>

### new MDStore([docs])
Constructs an MDStore instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | An array of documents. |

<a name="MDStore+filter"></a>

### mdStore.filter(name, value, [operator])
Filters the URL search parameters based on name, value, and operator.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | The name of the parameter. |
| value | <code>string</code> |  | The value of the parameter. |
| [operator] | <code>string</code> | <code>&quot;_eq&quot;</code> | The operator for filtering (default is '_eq' for equality). |

<a name="MDStore+paginate"></a>

### mdStore.paginate(_page, _limit)
Paginates the data by setting or deleting the '_page' and '_limit' URL search parameters.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _page | <code>number</code> | The page number. |
| _limit | <code>number</code> | The limit per page. |

<a name="MDStore+sort"></a>

### mdStore.sort(_sort, _order)
Sorts the data by setting or deleting the '_sort' and '_order' URL search parameters.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _sort | <code>string</code> | The field to sort by. |
| _order | <code>string</code> | The sorting order ('asc' or 'desc'). |

<a name="MDStore+slice"></a>

### mdStore.slice(_start, _end)
Slices the data by setting or deleting the '_start' and '_end' URL search parameters.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| _start | <code>number</code> | The starting index. |
| _end | <code>number</code> | The ending index. |

<a name="MDStore+search"></a>

### mdStore.search(q)
Searches data by setting or deleting the 'q' (query) URL search parameter.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | The search query. |

<a name="MDStore+getAll"></a>

### mdStore.getAll() ⇒ <code>Object</code>
Retrieves all data based on applied filters, sorting, and pagination.

**Kind**: instance method of [<code>MDStore</code>](#MDStore)  
**Returns**: <code>Object</code> - Returns an object containing total count and filtered data.  
<a name="MDVirtualScroll"></a>

## MDVirtualScroll ⇐ [<code>MDCDK</code>](#MDCDK)
Represents a virtual scrolling functionality using Material Design components.

**Kind**: global class  
**Extends**: [<code>MDCDK</code>](#MDCDK)  
**Emits**: <code>root#event:onScroll</code>  

* [MDVirtualScroll](#MDVirtualScroll) ⇐ [<code>MDCDK</code>](#MDCDK)
    * [new MDVirtualScroll(root, [options])](#new_MDVirtualScroll_new)
    * [.init()](#MDVirtualScroll+init)
    * [.destroy()](#MDVirtualScroll+destroy)
    * [.on(type, listener)](#MDCDK+on)
    * [.off(type, listener)](#MDCDK+off)
    * [.emit(type, detail)](#MDCDK+emit)

<a name="new_MDVirtualScroll_new"></a>

### new MDVirtualScroll(root, [options])
Creates an instance of MDVirtualScroll.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> |  | The root element to apply virtual scrolling. |
| [options] | <code>Object</code> | <code>{}</code> | Additional options for virtual scrolling. |
| [options.total] | <code>number</code> | <code>0</code> | Total number of items. |
| [options.contentHeight] | <code>number</code> | <code>48</code> | Height of each item. |
| [options.threshold] | <code>number</code> | <code>2</code> | Threshold for preloading items. |

<a name="MDVirtualScroll+init"></a>

### mdVirtualScroll.init()
Initializes the MDVirtualScroll instance.Binds the scroll event handler and sets up required parameters.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>init</code>](#MDCDK+init)  
<a name="MDVirtualScroll+destroy"></a>

### mdVirtualScroll.destroy()
Destroys the MDVirtualScroll instance.Removes the scroll event listener.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>destroy</code>](#MDCDK+destroy)  
<a name="MDCDK+on"></a>

### mdVirtualScroll.on(type, listener)
Attaches an event listener to the root element.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>on</code>](#MDCDK+on)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be called when the event occurs. |

<a name="MDCDK+off"></a>

### mdVirtualScroll.off(type, listener)
Removes an event listener from the root element.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>off</code>](#MDCDK+off)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>EventListenerOrEventListenerObject</code> | The event listener function to be removed. |

<a name="MDCDK+emit"></a>

### mdVirtualScroll.emit(type, detail)
Emits a custom event from the root element.

**Kind**: instance method of [<code>MDVirtualScroll</code>](#MDVirtualScroll)  
**Overrides**: [<code>emit</code>](#MDCDK+emit)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the custom event to be dispatched. |
| detail | <code>any</code> | Optional detail to be included in the event. |

<a name="notNull"></a>

## notNull(value) ⇒ <code>boolean</code>
Checks if the given value is not undefined or null.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if the value is not undefined or null, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>boolean</code>
Checks if the given value is not empty.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true if the value is not null, undefined, or an empty string, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="parseNumber"></a>

## parseNumber(value) ⇒ <code>number</code>
Attempts to parse the value into an integer.

**Kind**: global function  
**Returns**: <code>number</code> - Returns the parsed integer if successful, otherwise null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to parse. |

<a name="toPascalCase"></a>

## toPascalCase(string) ⇒ <code>string</code>
Converts a string to PascalCase.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the string converted to PascalCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to convert. |

<a name="toCamelCase"></a>

## toCamelCase(string) ⇒ <code>string</code>
Converts a string to camelCase.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the string converted to camelCase.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to convert. |

<a name="toSnakeCase"></a>

## toSnakeCase(string) ⇒ <code>string</code>
Converts a string to snake_case.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the string converted to snake_case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to convert. |

<a name="toKebabCase"></a>

## toKebabCase(string) ⇒ <code>string</code>
Converts a string to kebab-case.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the string converted to kebab-case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to convert. |

<a name="toTitleCase"></a>

## toTitleCase(string) ⇒ <code>string</code>
Converts a string to Title Case.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the string converted to Title Case.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to convert. |

<a name="Route"></a>

## Route : <code>Object</code>
Represents a route object used in the routing system.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path for the route. |
| component | <code>HTMLElement</code> | The HTML element associated with the route. |
| load | <code>Promise.&lt;Object&gt;</code> | A function that returns a Promise, typically used to dynamically import a module. |
| beforeLoad | <code>Promise.&lt;Object&gt;</code> | A function that runs before loading the route, typically used for resolving or rejecting promises. |
| children | [<code>Array.&lt;Route&gt;</code>](#Route) | An array containing child routes. |

<a name="Scroll"></a>

## Scroll : <code>Object</code>
Represents the details of the scroll event.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scrollbarHeight | <code>number</code> | Total height of the scrollable content. |
| start | <code>number</code> | Index of the first visible node in the viewport. |
| limit | <code>number</code> | Number of visible nodes in the viewport. |
| translateY | <code>number</code> | Offset of the first visible node from the top of the viewport. |

