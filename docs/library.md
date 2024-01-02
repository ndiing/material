## Classes

<dl>
<dt><a href="#MdElement">MdElement</a></dt>
<dd></dd>
<dt><a href="#Library">Library</a></dt>
<dd><p>Library class for handling events on a root element.</p>
</dd>
<dt><a href="#Router">Router</a></dt>
<dd><p>A simple router implementation for managing routes.</p>
</dd>
<dt><a href="#Store">Store</a></dt>
<dd><p>Represents a Store for managing and manipulating data.</p>
</dd>
<dt><a href="#VirtualScroll">VirtualScroll</a> ⇐ <code><a href="#Library">Library</a></code></dt>
<dd><p>Class representing a virtual scroll functionality that extends a Library.</p>
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

<a name="MdElement"></a>

## MdElement
**Kind**: global class  
**Author**: Ridho Prasetya  

* [MdElement](#MdElement)
    * [new MdElement()](#new_MdElement_new)
    * [.on(type, listener)](#MdElement+on)
    * [.off(type, listener)](#MdElement+off) ⇒ <code>void</code>
    * [.emit(type, detail)](#MdElement+emit)

<a name="new_MdElement_new"></a>

### new MdElement()
Custom element providing additional functionality on top of LitElement.

<a name="MdElement+on"></a>

### mdElement.on(type, listener)
Attaches an event listener to the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to listen for. |
| listener | <code>function</code> | The callback function to execute when the event occurs. |

<a name="MdElement+off"></a>

### mdElement.off(type, listener) ⇒ <code>void</code>
Removes an event listener from the element.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to remove the listener from. |
| listener | <code>function</code> | The callback function previously added. |

<a name="MdElement+emit"></a>

### mdElement.emit(type, detail)
Dispatches a custom event from the element with the given type and detail.

**Kind**: instance method of [<code>MdElement</code>](#MdElement)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of event to dispatch. |
| detail | <code>\*</code> | Additional information to include with the event. |

<a name="Library"></a>

## Library
Library class for handling events on a root element.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [Library](#Library)
    * [new Library([root], [options])](#new_Library_new)
    * [.root](#Library+root) : <code>HTMLElement</code>
    * [.options](#Library+options) : <code>Object</code>
    * [.destroy()](#Library+destroy)

<a name="new_Library_new"></a>

### new Library([root], [options])
Creates an instance of Library.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [root] | <code>HTMLElement</code> | <code></code> | The root element to attach events to. |
| [options] | <code>Object</code> | <code>{}</code> | The options for the library. |

<a name="Library+root"></a>

### library.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>Library</code>](#Library)  
<a name="Library+options"></a>

### library.options : <code>Object</code>
Options for the library.

**Kind**: instance property of [<code>Library</code>](#Library)  
<a name="Library+destroy"></a>

### library.destroy()
Cleans up and destroys the Library instance.

**Kind**: instance method of [<code>Library</code>](#Library)  
**Access**: public  
<a name="Router"></a>

## Router
A simple router implementation for managing routes.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [Router](#Router)
    * _instance_
        * [.controller](#Router+controller) : <code>AbortController</code> \| <code>null</code>
    * _static_
        * [.navigate(url)](#Router.navigate)
        * [.init(routes)](#Router.init)

<a name="Router+controller"></a>

### router.controller : <code>AbortController</code> \| <code>null</code>
Manages the control and abort functionality for ongoing operations.

**Kind**: instance property of [<code>Router</code>](#Router)  
<a name="Router.navigate"></a>

### Router.navigate(url)
Navigate to a specified URL.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to navigate to. |

**Example**  
```js
Router.navigate('/users?age_gte=17')
```
<a name="Router.init"></a>

### Router.init(routes)
Initialize the router with provided routes.

**Kind**: static method of [<code>Router</code>](#Router)  
**Emits**: <code>window#event:onNavigationStart</code>, <code>window#event:onNavigation</code>, <code>window#event:onNavigationCancel</code>, <code>window#event:onNavigationEnd</code>  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Route.&lt;Array&gt;</code> | Array of route objects. |

**Example**  
```js
import { Router } from "./lib/router.js";import AppMain from "./dev/main.js";import AppUsers from "./dev/users.js";import AppUser from "./dev/user.js";import AppError from "./dev/error.js";const beforeLoad = async (resolve, reject) => {    if (localStorage.isAuthenticated==="1") resolve()    else {        Router.navigate("/login");        reject();    }};// prettier-ignoreRouter.init([    {path:'',title:'Welcome',component:AppMain,children:[        {path:'users',beforeLoad,title:'Users',component:AppUsers,children:[            {path:':_id',title:'User',component:AppUser,children:[]},        ]},        {path:'blogs',title:'Blogs',load:() => import("./dev/blogs.js").then(m=>m.default),children:[            {path:':_id',title:'Blog',load:() => import("./dev/blog.js").then(m=>m.default),children:[]},        ]},    ]},    {path:'/login',title:'Login',load:() => import("./dev/login.js").then(m=>m.default),children:[]},    {path:'*',title:'Error',component:AppError,children:[]},]);// window.addEventListener("onNavigationStart", console.log);// window.addEventListener("onNavigation", console.log);// window.addEventListener("onNavigationCancel", console.log);// window.addEventListener("onNavigationEnd", console.log);
```
<a name="Store"></a>

## Store
Represents a Store for managing and manipulating data.

**Kind**: global class  
**Author**: Ridho Prasetya  

* [Store](#Store)
    * [new Store([docs])](#new_Store_new)
    * [.filter(name, value)](#Store+filter) ⇒ <code>void</code>
    * [.paginate(_page, _limit)](#Store+paginate) ⇒ <code>void</code>
    * [.sort(_sort, _order)](#Store+sort) ⇒ <code>void</code>
    * [.slice(_start, _end)](#Store+slice) ⇒ <code>void</code>
    * [.search(q)](#Store+search) ⇒ <code>void</code>
    * [.getAll()](#Store+getAll) ⇒ <code>Object</code>

<a name="new_Store_new"></a>

### new Store([docs])
Initializes the Store with an array of documents.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [docs] | <code>Array</code> | <code>[]</code> | Array of documents. |

<a name="Store+filter"></a>

### store.filter(name, value) ⇒ <code>void</code>
Modifies the URL search parameters by adding or deleting a specific parameter based on the provided name and value.If the name is falsy, it deletes parameters not included in the properties object.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the parameter to set or delete. |
| value | <code>string</code> | The value of the parameter. |

<a name="Store+paginate"></a>

### store.paginate(_page, _limit) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_page" and "_limit" parameters based on provided values.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _page | <code>number</code> | The page number. |
| _limit | <code>number</code> | The limit of items per page. |

<a name="Store+sort"></a>

### store.sort(_sort, _order) ⇒ <code>void</code>
Modifies the URL search parameters to handle sorting by setting or deleting "_sort" and "_order" parameters.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _sort | <code>string</code> | The field to sort by. |
| _order | <code>string</code> | The sorting order ("asc" for ascending, "desc" for descending). |

<a name="Store+slice"></a>

### store.slice(_start, _end) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "_start" and "_end" parameters based on provided values.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| _start | <code>number</code> | The starting index. |
| _end | <code>number</code> | The ending index. |

<a name="Store+search"></a>

### store.search(q) ⇒ <code>void</code>
Modifies the URL search parameters to set or delete the "q" parameter based on the provided search query.

**Kind**: instance method of [<code>Store</code>](#Store)  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | The search query string. |

<a name="Store+getAll"></a>

### store.getAll() ⇒ <code>Object</code>
Retrieves filtered and paginated data based on URL parameters.

**Kind**: instance method of [<code>Store</code>](#Store)  
**Returns**: <code>Object</code> - - Object containing total count and filtered data.  
<a name="VirtualScroll"></a>

## VirtualScroll ⇐ [<code>Library</code>](#Library)
Class representing a virtual scroll functionality that extends a Library.

**Kind**: global class  
**Extends**: [<code>Library</code>](#Library)  
**Author**: Ridho Prasetya  

* [VirtualScroll](#VirtualScroll) ⇐ [<code>Library</code>](#Library)
    * [.root](#Library+root) : <code>HTMLElement</code>
    * [.options](#Library+options) : <code>Object</code>
    * [.init()](#VirtualScroll+init)
    * [.destroy()](#VirtualScroll+destroy)
    * [.handleScroll(event)](#VirtualScroll+handleScroll)

<a name="Library+root"></a>

### virtualScroll.root : <code>HTMLElement</code>
The root element to attach events to.

**Kind**: instance property of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="Library+options"></a>

### virtualScroll.options : <code>Object</code>
Options for the library.

**Kind**: instance property of [<code>VirtualScroll</code>](#VirtualScroll)  
<a name="VirtualScroll+init"></a>

### virtualScroll.init()
Initializes the virtual scroll by attaching the scroll event handler.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
**Overrides**: <code>Library#init</code>  
<a name="VirtualScroll+destroy"></a>

### virtualScroll.destroy()
Destroys the virtual scroll by removing the scroll event handler.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
**Overrides**: [<code>destroy</code>](#Library+destroy)  
<a name="VirtualScroll+handleScroll"></a>

### virtualScroll.handleScroll(event)
Handles the scroll event and emits 'onScroll' event with relevant scroll data.

**Kind**: instance method of [<code>VirtualScroll</code>](#VirtualScroll)  
**Emits**: <code>VirtualScroll#event:onScroll</code>  

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

