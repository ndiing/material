## Classes

<dl>
<dt><a href="#MdComponent">MdComponent</a></dt>
<dd></dd>
<dt><a href="#MdLibrary">MdLibrary</a></dt>
<dd><p>MdLibrary class for handling events on a root element.</p>
</dd>
<dt><a href="#MdRipple">MdRipple</a> ⇐ <code><a href="#MdLibrary">MdLibrary</a></code></dt>
<dd><p>Class representing an MdRipple instance.</p>
</dd>
<dt><a href="#MdRouter">MdRouter</a></dt>
<dd><p>A simple router implementation for managing routes.</p>
</dd>
<dt><a href="#MdStore">MdStore</a></dt>
<dd><p>Represents a MdStore for managing and manipulating data.</p>
</dd>
<dt><a href="#MdVirtualScroll">MdVirtualScroll</a> ⇐ <code><a href="#MdLibrary">MdLibrary</a></code></dt>
<dd><p>Class representing a virtual scroll functionality that extends a MdLibrary.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#notNull">notNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the value is not null or undefined.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if the value is not null, undefined, or an empty string.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Route">Route</a> : <code>Object</code></dt>
<dd><p>Object representing a route configuration.</p>
</dd>
<dt><a href="#ScrollEventData">ScrollEventData</a> : <code>Object</code></dt>
<dd><p>Data emitted on the &#39;onScroll&#39; event.</p>
</dd>
</dl>

<a name="MdComponent"></a>

## MdComponent
**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdComponent](#MdComponent)
    * [new MdComponent()](#new_MdComponent_new)
    * [.on(type, listener)](#MdComponent+on)
    * [.off(type, listener)](#MdComponent+off) ⇒ <code>void</code>
    * [.emit(type, detail)](#MdComponent+emit)

<a name="new_MdComponent_new"></a>

### new MdComponent()
Custom element providing additional functionality on top of LitElement.

<a name="MdComponent+on"></a>

### mdComponent.on(type, listener)
Attaches an event listener to the element.

**Kind**: instance method of [<code>MdComponent</code>](#MdComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>function</code> | The callback function to execute when the event occurs. |

<a name="MdComponent+off"></a>

### mdComponent.off(type, listener) ⇒ <code>void</code>
Removes an event listener from the element.

**Kind**: instance method of [<code>MdComponent</code>](#MdComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>function</code> | The callback function previously added. |

<a name="MdComponent+emit"></a>

### mdComponent.emit(type, detail)
Dispatches a custom event from the element with the given type and detail.

**Kind**: instance method of [<code>MdComponent</code>](#MdComponent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to dispatch. |
| detail | <code>\*</code> | Additional information to include with the event. |

<a name="MdLibrary"></a>

## MdLibrary
MdLibrary class for handling events on a root element.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdLibrary](#MdLibrary)
    * [new MdLibrary([root], [options])](#new_MdLibrary_new)
    * [.root](#MdLibrary+root) : <code>HTMLElement</code>
    * [.options](#MdLibrary+options) : <code>Object</code>
    * [.destroy()](#MdLibrary+destroy)

<a name="new_MdLibrary_new"></a>

### new MdLibrary([root], [options])
Creates an instance of MdLibrary.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [root] | <code>HTMLElement</code> | <code></code> | The root element to attach events to. |
| [options] | <code>Object</code> | <code>{}</code> | The options for the library. |

<a name="MdLibrary+root"></a>

### mdLibrary.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>MdLibrary</code>](#MdLibrary)  
<a name="MdLibrary+options"></a>

### mdLibrary.options : <code>Object</code>
Options for the library.

**Kind**: instance property of [<code>MdLibrary</code>](#MdLibrary)  
<a name="MdLibrary+destroy"></a>

### mdLibrary.destroy()
Cleans up and destroys the MdLibrary instance.

**Kind**: instance method of [<code>MdLibrary</code>](#MdLibrary)  
**Access**: public  
<a name="MdRipple"></a>

## MdRipple ⇐ [<code>MdLibrary</code>](#MdLibrary)
Class representing an MdRipple instance.

**Kind**: global class  
**Extends**: [<code>MdLibrary</code>](#MdLibrary)  
**Email**: ndiing.inc@gmail.com  
**Author**: Ridho Prasetya  

* [MdRipple](#MdRipple) ⇐ [<code>MdLibrary</code>](#MdLibrary)
    * [new MdRipple(root, [options])](#new_MdRipple_new)
    * [.root](#MdLibrary+root) : <code>HTMLElement</code>
    * [.options](#MdLibrary+options) : <code>Object</code>
    * [.init()](#MdRipple+init)
    * [.destory()](#MdRipple+destory)
    * [.destroy()](#MdLibrary+destroy)

<a name="new_MdRipple_new"></a>

### new MdRipple(root, [options])
Creates an MdRipple instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>HTMLElement</code> \| <code>null</code> |  | The root element for MdRipple. |
| [options] | <code>Object</code> |  | The options for MdRipple. |
| [options.bounded] | <code>boolean</code> | <code>true</code> | Indicates whether the ripple effect is bounded within the element. |
| [options.trigger] | <code>HTMLElement</code> \| <code>null</code> | <code></code> | The element that triggers the ripple effect.   If not provided, defaults to the root element. |
| [options.centered] | <code>boolean</code> | <code>false</code> | Indicates whether the ripple effect is centered around the pointer coordinates. |

<a name="MdLibrary+root"></a>

### mdRipple.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>MdRipple</code>](#MdRipple)  
**Overrides**: [<code>root</code>](#MdLibrary+root)  
<a name="MdLibrary+options"></a>

### mdRipple.options : <code>Object</code>
Options for the library.

**Kind**: instance property of [<code>MdRipple</code>](#MdRipple)  
**Overrides**: [<code>options</code>](#MdLibrary+options)  
<a name="MdRipple+init"></a>

### mdRipple.init()
Initializes MdRipple.

**Kind**: instance method of [<code>MdRipple</code>](#MdRipple)  
**Overrides**: <code>MdLibrary#init</code>  
<a name="MdRipple+destory"></a>

### mdRipple.destory()
Destroys MdRipple by removing event listeners.

**Kind**: instance method of [<code>MdRipple</code>](#MdRipple)  
<a name="MdLibrary+destroy"></a>

### mdRipple.destroy()
Cleans up and destroys the MdLibrary instance.

**Kind**: instance method of [<code>MdRipple</code>](#MdRipple)  
**Overrides**: [<code>destroy</code>](#MdLibrary+destroy)  
**Access**: public  
<a name="MdRouter"></a>

## MdRouter
A simple router implementation for managing routes.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdRouter](#MdRouter)
    * _instance_
        * [.controller](#MdRouter+controller) : <code>AbortController</code> \| <code>null</code>
    * _static_
        * [.navigate(url)](#MdRouter.navigate)
        * [.init(routes)](#MdRouter.init)

<a name="MdRouter+controller"></a>

### mdRouter.controller : <code>AbortController</code> \| <code>null</code>
Manages the control and abort functionality for ongoing operations.

**Kind**: instance property of [<code>MdRouter</code>](#MdRouter)  
<a name="MdRouter.navigate"></a>

### MdRouter.navigate(url)
Navigate to a specified URL.

**Kind**: static method of [<code>MdRouter</code>](#MdRouter)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to navigate to. |

**Example**  
```js
MdRouter.navigate('/users?age_gte=17')
```
<a name="MdRouter.init"></a>

### MdRouter.init(routes)
Initialize the router with provided routes.

**Kind**: static method of [<code>MdRouter</code>](#MdRouter)  
**Emits**: <code>window#event:onNavigationStart</code>, <code>window#event:onNavigation</code>, <code>window#event:onNavigationCancel</code>, <code>window#event:onNavigationEnd</code>  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Route.&lt;Array&gt;</code> | Array of route objects. |

**Example**  
```js
import { MdRouter } from "./lib/router.js";import AppMain from "./dev/main.js";import AppUsers from "./dev/users.js";import AppUser from "./dev/user.js";import AppError from "./dev/error.js";const beforeLoad = async (resolve, reject) => {    if (localStorage.isAuthenticated==="1") resolve()    else {        MdRouter.navigate("/login");        reject();    }};// prettier-ignoreMdRouter.init([    {path:'',title:'Welcome',component:AppMain,children:[        {path:'users',beforeLoad,title:'Users',component:AppUsers,children:[            {path:':_id',title:'User',component:AppUser,children:[]},        ]},        {path:'blogs',title:'Blogs',load:() => import("./dev/blogs.js").then(m=>m.default),children:[            {path:':_id',title:'Blog',load:() => import("./dev/blog.js").then(m=>m.default),children:[]},        ]},    ]},    {path:'/login',title:'Login',load:() => import("./dev/login.js").then(m=>m.default),children:[]},    {path:'*',title:'Error',component:AppError,children:[]},]);// window.addEventListener("onNavigationStart", console.log);// window.addEventListener("onNavigation", console.log);// window.addEventListener("onNavigationCancel", console.log);// window.addEventListener("onNavigationEnd", console.log);
```
<a name="MdStore"></a>

## MdStore
Represents a MdStore for managing and manipulating data.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdStore](#MdStore)
    * [new MdStore([docs])](#new_MdStore_new)
    * [.filter(name, value)](#MdStore+filter) ⇒ <code>void</code>
    * [.paginate(_page, _limit)](#MdStore+paginate) ⇒ <code>void</code>
    * [.sort(_sort, _order)](#MdStore+sort) ⇒ <code>void</code>
    * [.slice(_start, _end)](#MdStore+slice) ⇒ <code>void</code>
    * [.search(q)](#MdStore+search) ⇒ <code>void</code>
    * [.getAll()](#MdStore+getAll) ⇒ <code>Object</code>

<a name="new_MdStore_new"></a>

### new MdStore([docs])
Initializes the MdStore with an array of documents.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>Array</code> | <code>[]</code> | Array of documents. |

<a name="MdStore+filter"></a>

### mdStore.filter(name, value) ⇒ <code>void</code>
Modifies the URL search parameters by adding or deleting a specific parameter based on the provided name and value.If the name is falsy, it deletes parameters not included in the properties object.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the parameter to set or delete. |
| value | <code>string</code> | The value of the parameter. |

<a name="MdStore+paginate"></a>

### mdStore.paginate(_page, _limit) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_page" and "_limit" parameters based on provided values.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  

| Param | Type | Description |
| --- | --- | --- |
| _page | <code>number</code> | The page number. |
| _limit | <code>number</code> | The limit of items per page. |

<a name="MdStore+sort"></a>

### mdStore.sort(_sort, _order) ⇒ <code>void</code>
Modifies the URL search parameters to handle sorting by setting or deleting "_sort" and "_order" parameters.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  

| Param | Type | Description |
| --- | --- | --- |
| _sort | <code>string</code> | The field to sort by. |
| _order | <code>string</code> | The sorting order ("asc" for ascending, "desc" for descending). |

<a name="MdStore+slice"></a>

### mdStore.slice(_start, _end) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_start" and "_end" parameters based on provided values.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  

| Param | Type | Description |
| --- | --- | --- |
| _start | <code>number</code> | The starting index. |
| _end | <code>number</code> | The ending index. |

<a name="MdStore+search"></a>

### mdStore.search(q) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "q" parameter based on the provided search query.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | The search query string. |

<a name="MdStore+getAll"></a>

### mdStore.getAll() ⇒ <code>Object</code>
Retrieves filtered and paginated data based on URL parameters.

**Kind**: instance method of [<code>MdStore</code>](#MdStore)  
**Returns**: <code>Object</code> - - Object containing total count and filtered data.  
<a name="MdVirtualScroll"></a>

## MdVirtualScroll ⇐ [<code>MdLibrary</code>](#MdLibrary)
Class representing a virtual scroll functionality that extends a MdLibrary.

**Kind**: global class  
**Extends**: [<code>MdLibrary</code>](#MdLibrary)  
**Author**: Ridho Prasetya  

* [MdVirtualScroll](#MdVirtualScroll) ⇐ [<code>MdLibrary</code>](#MdLibrary)
    * [.root](#MdLibrary+root) : <code>HTMLElement</code>
    * [.options](#MdLibrary+options) : <code>Object</code>
    * [.init()](#MdVirtualScroll+init)
    * [.destroy()](#MdVirtualScroll+destroy)
    * [.handleScroll(event)](#MdVirtualScroll+handleScroll)

<a name="MdLibrary+root"></a>

### mdVirtualScroll.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>MdVirtualScroll</code>](#MdVirtualScroll)  
<a name="MdLibrary+options"></a>

### mdVirtualScroll.options : <code>Object</code>
Options for the library.

**Kind**: instance property of [<code>MdVirtualScroll</code>](#MdVirtualScroll)  
<a name="MdVirtualScroll+init"></a>

### mdVirtualScroll.init()
Initializes the virtual scroll by attaching the scroll event handler.

**Kind**: instance method of [<code>MdVirtualScroll</code>](#MdVirtualScroll)  
**Overrides**: <code>MdLibrary#init</code>  
<a name="MdVirtualScroll+destroy"></a>

### mdVirtualScroll.destroy()
Destroys the virtual scroll by removing the scroll event handler.

**Kind**: instance method of [<code>MdVirtualScroll</code>](#MdVirtualScroll)  
**Overrides**: [<code>destroy</code>](#MdLibrary+destroy)  
<a name="MdVirtualScroll+handleScroll"></a>

### mdVirtualScroll.handleScroll(event)
Handles the scroll event and emits 'onScroll' event with relevant scroll data.

**Kind**: instance method of [<code>MdVirtualScroll</code>](#MdVirtualScroll)  
**Emits**: <code>MdVirtualScroll#event:onScroll</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The scroll event. |

<a name="notNull"></a>

## notNull(value) ⇒ <code>boolean</code>
Checks if the value is not null or undefined.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Returns true if the value is not null or undefined, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>boolean</code>
Checks if the value is not null, undefined, or an empty string.

**Kind**: global function  
**Returns**: <code>boolean</code> - - Returns true if the value is not null, undefined, or an empty string, otherwise false.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="Route"></a>

## Route : <code>Object</code>
Object representing a route configuration.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The URL path for the route. |
| component | <code>HTMLElement</code> | The component associated with the route. |
| load | <code>function</code> | Asynchronous function that loads the component. |
| beforeLoad | <code>function</code> | Action(s) to execute before loading the route. |
| children | [<code>Array.&lt;Route&gt;</code>](#Route) | Child routes associated with this route. |
| redirect | <code>string</code> | Redirect path if this route is accessed. |
| title | <code>string</code> | Title associated with the route. |

<a name="ScrollEventData"></a>

## ScrollEventData : <code>Object</code>
Data emitted on the 'onScroll' event.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scrollbarHeight | <code>number</code> | Height of the scrollbar. |
| start | <code>number</code> | Starting index of the visible items. |
| limit | <code>number</code> | Number of items visible in the viewport. |
| translateY | <code>number</code> | Translation value based on scroll. |

