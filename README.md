## Classes

<dl>
<dt><a href="#MDBadgeComponent">MDBadgeComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDBadge.</p>
</dd>
<dt><a href="#MDButtonComponent">MDButtonComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDButton.</p>
</dd>
<dt><a href="#MDCheckboxComponent">MDCheckboxComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDCheckbox.</p>
</dd>
<dt><a href="#MDEmojiComponent">MDEmojiComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDEmoji.</p>
</dd>
<dt><a href="#MDFabComponent">MDFabComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDFab.</p>
</dd>
<dt><a href="#MDNavigation">MDNavigation</a></dt>
<dd><p>MDNavigation class for managing client-side navigation.</p>
</dd>
<dt><a href="#MDState">MDState</a> ⇐ <code>MDCDK</code></dt>
<dd><p>Represents a stateful UI element with interactive behaviors.</p>
</dd>
<dt><a href="#MDIconButtonComponent">MDIconButtonComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDIconButton.</p>
</dd>
<dt><a href="#MDIconComponent">MDIconComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDIcon.</p>
</dd>
<dt><a href="#MDImageComponent">MDImageComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDImage.</p>
</dd>
<dt><a href="#MDListItemComponent">MDListItemComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDListItem.</p>
</dd>
<dt><a href="#MDListRowComponent">MDListRowComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDListRow.</p>
</dd>
<dt><a href="#MDListComponent">MDListComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDList.</p>
</dd>
<dt><a href="#MDRadioButtonComponent">MDRadioButtonComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDRadioButton.</p>
</dd>
<dt><a href="#MDSegmentedButtonComponent">MDSegmentedButtonComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDSegmentedButton.</p>
</dd>
<dt><a href="#MDSwitchComponent">MDSwitchComponent</a> ⇐ <code>MDComponent</code></dt>
<dd><p>Custom Lit web component representing an MDSwitch.</p>
</dd>
</dl>

<a name="MDBadgeComponent"></a>

## MDBadgeComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDBadge.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDBadgeComponent](#MDBadgeComponent) ⇐ <code>MDComponent</code>
    * [new MDBadgeComponent()](#new_MDBadgeComponent_new)
    * _instance_
        * [.render()](#MDBadgeComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDBadgeComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDBadgeComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDBadgeComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDBadgeComponent+updated)
    * _static_
        * [.properties](#MDBadgeComponent.properties) ⇒ <code>Object</code>

<a name="new_MDBadgeComponent_new"></a>

### new MDBadgeComponent()
Constructor for MDBadgeComponent.

<a name="MDBadgeComponent+render"></a>

### mdBadgeComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDBadgeComponent template using Lit.

**Kind**: instance method of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDBadgeComponent+connectedCallback"></a>

### mdBadgeComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDBadgeComponent+disconnectedCallback"></a>

### mdBadgeComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  
<a name="MDBadgeComponent+firstUpdated"></a>

### mdBadgeComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDBadgeComponent+updated"></a>

### mdBadgeComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDBadgeComponent.properties"></a>

### MDBadgeComponent.properties ⇒ <code>Object</code>
Properties for the MDBadgeComponent.

**Kind**: static property of [<code>MDBadgeComponent</code>](#MDBadgeComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| limit | <code>Number</code> | The maximum value for the badge label. |
| label | <code>Number</code> | The label for the badge. |

<a name="MDButtonComponent"></a>

## MDButtonComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDButton.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDButtonComponent](#MDButtonComponent) ⇐ <code>MDComponent</code>
    * [new MDButtonComponent()](#new_MDButtonComponent_new)
    * _instance_
        * [.render()](#MDButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDButtonComponent+updated)
    * _static_
        * [.properties](#MDButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDButtonComponent_new"></a>

### new MDButtonComponent()
Constructor for MDButtonComponent.

**Example**  
```js
// Example usage:// <md-button appearance="elevated" label="Label"></md-button>
```
<a name="MDButtonComponent+render"></a>

### mdButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDButtonComponent template using Lit.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDButtonComponent+connectedCallback"></a>

### mdButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDButtonComponent+disconnectedCallback"></a>

### mdButtonComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  
<a name="MDButtonComponent+firstUpdated"></a>

### mdButtonComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDButtonComponent+updated"></a>

### mdButtonComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDButtonComponent</code>](#MDButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDButtonComponent.properties"></a>

### MDButtonComponent.properties ⇒ <code>Object</code>
Properties for the MDButtonComponent.

**Kind**: static property of [<code>MDButtonComponent</code>](#MDButtonComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | The appearance style of the button ("elevated", "filled", "filled-tonal", "outlined"). |
| type | <code>String</code> | The type of the native button element ("button" by default). |
| icon | <code>String</code> | The icon for the button. |
| label | <code>String</code> | The label for the button. |
| activated | <code>Boolean</code> | A boolean reflecting the activated state of the button. |

<a name="MDCheckboxComponent"></a>

## MDCheckboxComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDCheckbox.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDCheckboxComponent](#MDCheckboxComponent) ⇐ <code>MDComponent</code>
    * [new MDCheckboxComponent()](#new_MDCheckboxComponent_new)
    * _instance_
        * [.render()](#MDCheckboxComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDCheckboxComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDCheckboxComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDCheckboxComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDCheckboxComponent+updated)
    * _static_
        * [.properties](#MDCheckboxComponent.properties) ⇒ <code>Object</code>

<a name="new_MDCheckboxComponent_new"></a>

### new MDCheckboxComponent()
Constructor for MDCheckboxComponent.

<a name="MDCheckboxComponent+render"></a>

### mdCheckboxComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDCheckboxComponent template using Lit.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDCheckboxComponent+connectedCallback"></a>

### mdCheckboxComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDCheckboxComponent+disconnectedCallback"></a>

### mdCheckboxComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
<a name="MDCheckboxComponent+firstUpdated"></a>

### mdCheckboxComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDCheckboxComponent+updated"></a>

### mdCheckboxComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDCheckboxComponent.properties"></a>

### MDCheckboxComponent.properties ⇒ <code>Object</code>
Properties for the MDCheckboxComponent.

**Kind**: static property of [<code>MDCheckboxComponent</code>](#MDCheckboxComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name attribute for the checkbox. |
| indeterminate | <code>Boolean</code> | A boolean indicating whether the checkbox is in an indeterminate state. |
| checked | <code>Boolean</code> | A boolean indicating whether the checkbox is checked. |

<a name="MDEmojiComponent"></a>

## MDEmojiComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDEmoji.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDEmojiComponent](#MDEmojiComponent) ⇐ <code>MDComponent</code>
    * [new MDEmojiComponent()](#new_MDEmojiComponent_new)
    * _instance_
        * [.render()](#MDEmojiComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDEmojiComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDEmojiComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDEmojiComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDEmojiComponent+updated)
    * _static_
        * [.properties](#MDEmojiComponent.properties) ⇒ <code>Object</code>

<a name="new_MDEmojiComponent_new"></a>

### new MDEmojiComponent()
Constructor for MDEmojiComponent.

**Example**  
```js
// Example usage:// <md-emoji>😀</md-emoji>
```
<a name="MDEmojiComponent+render"></a>

### mdEmojiComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDEmojiComponent template using Lit.

**Kind**: instance method of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDEmojiComponent+connectedCallback"></a>

### mdEmojiComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDEmojiComponent+disconnectedCallback"></a>

### mdEmojiComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  
<a name="MDEmojiComponent+firstUpdated"></a>

### mdEmojiComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDEmojiComponent+updated"></a>

### mdEmojiComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDEmojiComponent.properties"></a>

### MDEmojiComponent.properties ⇒ <code>Object</code>
Properties for the MDEmojiComponent.

**Kind**: static property of [<code>MDEmojiComponent</code>](#MDEmojiComponent)  
**Returns**: <code>Object</code> - Property configuration.  
<a name="MDFabComponent"></a>

## MDFabComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDFab.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDFabComponent](#MDFabComponent) ⇐ <code>MDComponent</code>
    * [new MDFabComponent()](#new_MDFabComponent_new)
    * _instance_
        * [.render()](#MDFabComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDFabComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDFabComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDFabComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDFabComponent+updated)
    * _static_
        * [.properties](#MDFabComponent.properties) ⇒ <code>Object</code>

<a name="new_MDFabComponent_new"></a>

### new MDFabComponent()
Constructor for MDFabComponent.

**Example**  
```js
// Example usage:// <md-fab size="small" icon="image"></md-fab>
```
<a name="MDFabComponent+render"></a>

### mdFabComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDFabComponent template using Lit.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDFabComponent+connectedCallback"></a>

### mdFabComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDFabComponent+disconnectedCallback"></a>

### mdFabComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  
<a name="MDFabComponent+firstUpdated"></a>

### mdFabComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDFabComponent+updated"></a>

### mdFabComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDFabComponent</code>](#MDFabComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDFabComponent.properties"></a>

### MDFabComponent.properties ⇒ <code>Object</code>
Properties for the MDFabComponent.

**Kind**: static property of [<code>MDFabComponent</code>](#MDFabComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | The appearance style of the fab ("extended"). |
| size | <code>String</code> | The size of the fab ("small" or "large"). |
| type | <code>String</code> | The type of the native button element ("button" by default). |
| icon | <code>String</code> | The icon for the fab. |
| label | <code>String</code> | The label for the fab. |

<a name="MDNavigation"></a>

## MDNavigation
MDNavigation class for managing client-side navigation.

**Kind**: global class  
**Emits**: <code>MDNavigation#event:onCurrententrychange</code>, <code>MDNavigation#event:onNavigate</code>, <code>MDNavigation#event:onNavigateerror</code>, <code>MDNavigation#event:onNavigatesuccess</code>  

* [MDNavigation](#MDNavigation)
    * [.navigate(url)](#MDNavigation.navigate) ⇒ <code>void</code>
    * [.load(entries)](#MDNavigation.load) ⇒ <code>void</code>

<a name="MDNavigation.navigate"></a>

### MDNavigation.navigate(url) ⇒ <code>void</code>
Navigates to the specified URL.

**Kind**: static method of [<code>MDNavigation</code>](#MDNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to navigate to. |

<a name="MDNavigation.load"></a>

### MDNavigation.load(entries) ⇒ <code>void</code>
Initializes the MDNavigation class with the provided entries.

**Kind**: static method of [<code>MDNavigation</code>](#MDNavigation)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array</code> | Array of navigation entries. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path for the navigation entry. |
| component | <code>Element</code> | The component associated with the navigation entry. |
| children | <code>Array.&lt;NavigationEntry&gt;</code> | An array of child navigation entries. |
| load | <code>function</code> | A function to load the component associated with the entry. |
| beforeLoad | <code>function</code> | A function called before loading the entry, with resolve and reject parameters. |

**Example**  
```js
MDNavigation.load([  {path:'',component:MainComponent,children:[      {path:'users',beforeLoad,load:() => import("./navigation/users.js").then(m=>m.default),children:[          {path:':_id',load:() => import("./navigation/user.js").then(m=>m.default),children:[]},      ]},      {path:'blogs',load:() => import("./navigation/blogs.js").then(m=>m.default),children:[          {path:':_id',load:() => import("./navigation/blog.js").then(m=>m.default),children:[]},      ]},  ]},  {path:'login',component:LoginComponent,children:[]},  {path:'*',component:ErrorComponent,children:[]},])
```
<a name="MDState"></a>

## MDState ⇐ <code>MDCDK</code>
Represents a stateful UI element with interactive behaviors.

**Kind**: global class  
**Extends**: <code>MDCDK</code>  

* [MDState](#MDState) ⇐ <code>MDCDK</code>
    * [.init()](#MDState+init)
    * [.destroy()](#MDState+destroy)

<a name="MDState+init"></a>

### mdState.init()
Initializes the MDState instance.

**Kind**: instance method of [<code>MDState</code>](#MDState)  
**Access**: public  
<a name="MDState+destroy"></a>

### mdState.destroy()
Destroys the MDState instance.

**Kind**: instance method of [<code>MDState</code>](#MDState)  
**Access**: public  
<a name="MDIconButtonComponent"></a>

## MDIconButtonComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDIconButton.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDIconButtonComponent#event:onIconButtonNativeClick</code>  

* [MDIconButtonComponent](#MDIconButtonComponent) ⇐ <code>MDComponent</code>
    * [new MDIconButtonComponent()](#new_MDIconButtonComponent_new)
    * _instance_
        * [.render()](#MDIconButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDIconButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDIconButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDIconButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDIconButtonComponent+updated)
        * [.handleIconButtonNativeClick(event)](#MDIconButtonComponent+handleIconButtonNativeClick)
    * _static_
        * [.properties](#MDIconButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDIconButtonComponent_new"></a>

### new MDIconButtonComponent()
Constructor for MDIconButtonComponent.

**Example**  
```js
// Example usage:// <md-icon-button appearance="filled" icon="image"></md-icon-button>
```
<a name="MDIconButtonComponent+render"></a>

### mdIconButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDIconButtonComponent template using Lit.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDIconButtonComponent+connectedCallback"></a>

### mdIconButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDIconButtonComponent+disconnectedCallback"></a>

### mdIconButtonComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+firstUpdated"></a>

### mdIconButtonComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDIconButtonComponent+updated"></a>

### mdIconButtonComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDIconButtonComponent+handleIconButtonNativeClick"></a>

### mdIconButtonComponent.handleIconButtonNativeClick(event)
Handles the click event on the native button element.Toggles the activated state and emits the 'onIconButtonNativeClick' event.

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Emits**: <code>MDIconButtonComponent#event:onIconButtonNativeClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MDIconButtonComponent.properties"></a>

### MDIconButtonComponent.properties ⇒ <code>Object</code>
Properties for the MDIconButtonComponent.

**Kind**: static property of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | The appearance style of the icon-button ("filled", "filled-tonal", "outlined"). |
| type | <code>String</code> | The type of the native button element ("button" by default). |
| icon | <code>String</code> | The icon for the icon-button. |
| toggle | <code>Boolean</code> | A boolean indicating whether the icon-button is toggleable. |
| activated | <code>Boolean</code> | A boolean reflecting the activated state of the icon-button. |

<a name="MDIconComponent"></a>

## MDIconComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDIcon.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDIconComponent](#MDIconComponent) ⇐ <code>MDComponent</code>
    * [new MDIconComponent()](#new_MDIconComponent_new)
    * _instance_
        * [.render()](#MDIconComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDIconComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDIconComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDIconComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDIconComponent+updated)
    * _static_
        * [.properties](#MDIconComponent.properties) ⇒ <code>Object</code>

<a name="new_MDIconComponent_new"></a>

### new MDIconComponent()
Constructor for MDIconComponent.

**Example**  
```js
// Example usage:// <md-icon>image</md-icon>
```
<a name="MDIconComponent+render"></a>

### mdIconComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDIconComponent template using Lit.

**Kind**: instance method of [<code>MDIconComponent</code>](#MDIconComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDIconComponent+connectedCallback"></a>

### mdIconComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDIconComponent</code>](#MDIconComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDIconComponent+disconnectedCallback"></a>

### mdIconComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDIconComponent</code>](#MDIconComponent)  
<a name="MDIconComponent+firstUpdated"></a>

### mdIconComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDIconComponent</code>](#MDIconComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDIconComponent+updated"></a>

### mdIconComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDIconComponent</code>](#MDIconComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDIconComponent.properties"></a>

### MDIconComponent.properties ⇒ <code>Object</code>
Properties for the MDIconComponent.

**Kind**: static property of [<code>MDIconComponent</code>](#MDIconComponent)  
**Returns**: <code>Object</code> - Property configuration.  
<a name="MDImageComponent"></a>

## MDImageComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDImage.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>event:{CustomEvent} ratio-change - Fired when the &#x60;ratio&#x60; property changes.</code>  

* [MDImageComponent](#MDImageComponent) ⇐ <code>MDComponent</code>
    * [new MDImageComponent()](#new_MDImageComponent_new)
    * _instance_
        * [.render()](#MDImageComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDImageComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDImageComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDImageComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDImageComponent+updated)
    * _static_
        * [.properties](#MDImageComponent.properties) ⇒ <code>Object</code>

<a name="new_MDImageComponent_new"></a>

### new MDImageComponent()
Constructor for MDImageComponent.

**Example**  
```js
// Example usage:// <md-image style="width:113.77777777777777px;" ratio="16/9" src="https://api.dicebear.com/7.x/icons/svg?seed=1&&scale=50"></md-image>
```
<a name="MDImageComponent+render"></a>

### mdImageComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDImageComponent template using Lit.

**Kind**: instance method of [<code>MDImageComponent</code>](#MDImageComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDImageComponent+connectedCallback"></a>

### mdImageComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDImageComponent</code>](#MDImageComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDImageComponent+disconnectedCallback"></a>

### mdImageComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDImageComponent</code>](#MDImageComponent)  
<a name="MDImageComponent+firstUpdated"></a>

### mdImageComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDImageComponent</code>](#MDImageComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDImageComponent+updated"></a>

### mdImageComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDImageComponent</code>](#MDImageComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDImageComponent.properties"></a>

### MDImageComponent.properties ⇒ <code>Object</code>
Properties for the MDImageComponent.

**Kind**: static property of [<code>MDImageComponent</code>](#MDImageComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| src | <code>String</code> | The source URL of the image. |
| alt | <code>String</code> | The alternative text for the image. |
| ratio | <code>String</code> | The aspect ratio of the image. For example, "16/9". |
| shape | <code>Boolean</code> | Indicates whether the image should be displayed in a circular shape. |

<a name="MDListItemComponent"></a>

## MDListItemComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDListItem.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDListItemComponent](#MDListItemComponent) ⇐ <code>MDComponent</code>
    * [new MDListItemComponent()](#new_MDListItemComponent_new)
    * _instance_
        * [.render()](#MDListItemComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDListItemComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDListItemComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDListItemComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDListItemComponent+updated)
    * _static_
        * [.properties](#MDListItemComponent.properties) ⇒ <code>Object</code>

<a name="new_MDListItemComponent_new"></a>

### new MDListItemComponent()
Constructor for MDListItemComponent.

<a name="MDListItemComponent+render"></a>

### mdListItemComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDListItemComponent template using Lit.

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDListItemComponent+connectedCallback"></a>

### mdListItemComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDListItemComponent+disconnectedCallback"></a>

### mdListItemComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
<a name="MDListItemComponent+firstUpdated"></a>

### mdListItemComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListItemComponent+updated"></a>

### mdListItemComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListItemComponent.properties"></a>

### MDListItemComponent.properties ⇒ <code>Object</code>
Properties for the MDListItemComponent.

**Kind**: static property of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>String</code> | The main label for the list item. |
| supportingText | <code>String</code> | Additional text to support the main label. |
| leadingItems | <code>Array</code> | An array of leading items (e.g., icons, avatars). |
| trailingItems | <code>Array</code> | An array of trailing items (e.g., icons, checkboxes). |
| activated | <code>Boolean</code> | A boolean reflecting the activated state of the list item. |

<a name="MDListRowComponent"></a>

## MDListRowComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDListRow.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDListRowComponent](#MDListRowComponent) ⇐ <code>MDComponent</code>
    * [new MDListRowComponent()](#new_MDListRowComponent_new)
    * _instance_
        * [.render()](#MDListRowComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDListRowComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDListRowComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDListRowComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDListRowComponent+updated)
    * _static_
        * [.properties](#MDListRowComponent.properties) ⇒ <code>Object</code>

<a name="new_MDListRowComponent_new"></a>

### new MDListRowComponent()
Constructor for MDListRowComponent.

<a name="MDListRowComponent+render"></a>

### mdListRowComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDListRowComponent template using Lit.

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDListRowComponent+connectedCallback"></a>

### mdListRowComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDListRowComponent+disconnectedCallback"></a>

### mdListRowComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
<a name="MDListRowComponent+firstUpdated"></a>

### mdListRowComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListRowComponent+updated"></a>

### mdListRowComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListRowComponent.properties"></a>

### MDListRowComponent.properties ⇒ <code>Object</code>
Properties for the MDListRowComponent.

**Kind**: static property of [<code>MDListRowComponent</code>](#MDListRowComponent)  
**Returns**: <code>Object</code> - Property configuration.  
<a name="MDListComponent"></a>

## MDListComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDList.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDListComponent](#MDListComponent) ⇐ <code>MDComponent</code>
    * [new MDListComponent()](#new_MDListComponent_new)
    * _instance_
        * [.render()](#MDListComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDListComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDListComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDListComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDListComponent+updated)
        * [.handleListItemClick(event)](#MDListComponent+handleListItemClick)
    * _static_
        * [.properties](#MDListComponent.properties) ⇒ <code>Object</code>

<a name="new_MDListComponent_new"></a>

### new MDListComponent()
Constructor for MDListComponent.

<a name="MDListComponent+render"></a>

### mdListComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDListComponent template using Lit.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDListComponent+connectedCallback"></a>

### mdListComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDListComponent+disconnectedCallback"></a>

### mdListComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+firstUpdated"></a>

### mdListComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListComponent+updated"></a>

### mdListComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDListComponent+handleListItemClick"></a>

### mdListComponent.handleListItemClick(event)
Handles the click event on a list item.

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
**Emits**: <code>MDListItemComponent#event:handleListItemClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MDListComponent.properties"></a>

### MDListComponent.properties ⇒ <code>Object</code>
Properties for the MDListComponent.

**Kind**: static property of [<code>MDListComponent</code>](#MDListComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | An array of items to be displayed in the list. |
| size | <code>String</code> | The size style of the list ("one-line", "two-line", "three-line"). |
| type | <code>String</code> | The type of the list ("single-select", "multi-select"). |
| activatable | <code>Boolean</code> | Indicates whether the list items are activatable. |

<a name="MDRadioButtonComponent"></a>

## MDRadioButtonComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDRadioButton.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDRadioButtonComponent](#MDRadioButtonComponent) ⇐ <code>MDComponent</code>
    * [new MDRadioButtonComponent()](#new_MDRadioButtonComponent_new)
    * _instance_
        * [.render()](#MDRadioButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDRadioButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDRadioButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDRadioButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDRadioButtonComponent+updated)
    * _static_
        * [.properties](#MDRadioButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDRadioButtonComponent_new"></a>

### new MDRadioButtonComponent()
Constructor for MDRadioButtonComponent.

<a name="MDRadioButtonComponent+render"></a>

### mdRadioButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDRadioButtonComponent template using Lit.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDRadioButtonComponent+connectedCallback"></a>

### mdRadioButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDRadioButtonComponent+disconnectedCallback"></a>

### mdRadioButtonComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
<a name="MDRadioButtonComponent+firstUpdated"></a>

### mdRadioButtonComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDRadioButtonComponent+updated"></a>

### mdRadioButtonComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDRadioButtonComponent.properties"></a>

### MDRadioButtonComponent.properties ⇒ <code>Object</code>
Properties for the MDRadioButtonComponent.

**Kind**: static property of [<code>MDRadioButtonComponent</code>](#MDRadioButtonComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name attribute for the radio-button. |
| checked | <code>Boolean</code> | A boolean indicating whether the radio-button is checked. |

<a name="MDSegmentedButtonComponent"></a>

## MDSegmentedButtonComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDSegmentedButton.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDSegmentedButtonComponent](#MDSegmentedButtonComponent) ⇐ <code>MDComponent</code>
    * [new MDSegmentedButtonComponent()](#new_MDSegmentedButtonComponent_new)
    * _instance_
        * [.render()](#MDSegmentedButtonComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDSegmentedButtonComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDSegmentedButtonComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDSegmentedButtonComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDSegmentedButtonComponent+updated)
        * [.handleSegmentedButtonClick(event)](#MDSegmentedButtonComponent+handleSegmentedButtonClick)
    * _static_
        * [.properties](#MDSegmentedButtonComponent.properties) ⇒ <code>Object</code>

<a name="new_MDSegmentedButtonComponent_new"></a>

### new MDSegmentedButtonComponent()
Constructor for MDSegmentedButtonComponent.

<a name="MDSegmentedButtonComponent+render"></a>

### mdSegmentedButtonComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDSegmentedButtonComponent template using Lit.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDSegmentedButtonComponent+connectedCallback"></a>

### mdSegmentedButtonComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDSegmentedButtonComponent+disconnectedCallback"></a>

### mdSegmentedButtonComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+firstUpdated"></a>

### mdSegmentedButtonComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDSegmentedButtonComponent+updated"></a>

### mdSegmentedButtonComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDSegmentedButtonComponent+handleSegmentedButtonClick"></a>

### mdSegmentedButtonComponent.handleSegmentedButtonClick(event)
Handles the click event on the segmented button.Toggles the activation state of the buttons based on the type ("single-select" or "multi-select").Emits the 'onSegmentedButtonClick' event.

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Emits**: <code>MDSegmentedButtonComponent#event:onSegmentedButtonClick</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MDSegmentedButtonComponent.properties"></a>

### MDSegmentedButtonComponent.properties ⇒ <code>Object</code>
Properties for the MDSegmentedButtonComponent.

**Kind**: static property of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of the native segmented-button element ("single-select" or "multi-select" by default). |
| items | <code>Array</code> | An array of items representing the buttons in the segmented button. Each item should be an object with properties like "type", "icon", "label", and "activated". |

<a name="MDSwitchComponent"></a>

## MDSwitchComponent ⇐ <code>MDComponent</code>
Custom Lit web component representing an MDSwitch.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  

* [MDSwitchComponent](#MDSwitchComponent) ⇐ <code>MDComponent</code>
    * [new MDSwitchComponent()](#new_MDSwitchComponent_new)
    * _instance_
        * [.render()](#MDSwitchComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDSwitchComponent+connectedCallback) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.disconnectedCallback()](#MDSwitchComponent+disconnectedCallback)
        * [.firstUpdated(_changedProperties)](#MDSwitchComponent+firstUpdated)
        * [.updated(_changedProperties)](#MDSwitchComponent+updated)
    * _static_
        * [.properties](#MDSwitchComponent.properties) ⇒ <code>Object</code>

<a name="new_MDSwitchComponent_new"></a>

### new MDSwitchComponent()
Constructor for MDSwitchComponent.

<a name="MDSwitchComponent+render"></a>

### mdSwitchComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDSwitchComponent template using Lit.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDSwitchComponent+connectedCallback"></a>

### mdSwitchComponent.connectedCallback() ⇒ <code>Promise.&lt;void&gt;</code>
Lifecycle callback called when the element is added to the DOM.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that resolves when rendering is complete.  
<a name="MDSwitchComponent+disconnectedCallback"></a>

### mdSwitchComponent.disconnectedCallback()
Lifecycle callback called when the element is removed from the DOM.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
<a name="MDSwitchComponent+firstUpdated"></a>

### mdSwitchComponent.firstUpdated(_changedProperties)
Lifecycle callback called after the first render and element is added to the DOM.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDSwitchComponent+updated"></a>

### mdSwitchComponent.updated(_changedProperties)
Lifecycle callback called when properties are updated.

**Kind**: instance method of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  

| Param | Type | Description |
| --- | --- | --- |
| _changedProperties | <code>Map</code> | A map of changed properties. |

<a name="MDSwitchComponent.properties"></a>

### MDSwitchComponent.properties ⇒ <code>Object</code>
Properties for the MDSwitchComponent.

**Kind**: static property of [<code>MDSwitchComponent</code>](#MDSwitchComponent)  
**Returns**: <code>Object</code> - Property configuration.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name attribute for the switch. |
| checked | <code>Boolean</code> | A boolean indicating whether the switch is checked. |

