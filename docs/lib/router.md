<a name="Router"></a>

## Router
Class representing a Router for handling routing in a web application.

**Kind**: global class  

* [Router](#Router)
    * [.detail](#Router.detail) ⇒ <code>Object</code>
    * [.addRoutes(routes, pattern, parent)](#Router.addRoutes) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getRoutes(route)](#Router.getRoutes) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.getQuery()](#Router.getQuery) ⇒ <code>Object</code>
    * [.getRoute()](#Router.getRoute) ⇒ <code>Object</code> \| <code>null</code>
    * [.getOutlet(route)](#Router.getOutlet) ⇒ <code>Promise.&lt;HTMLElement&gt;</code>
    * [.emit(type, detail)](#Router.emit)
    * [.handleNavigation(event)](#Router.handleNavigation)
    * [.navigate(url)](#Router.navigate)
    * [.requestNavigation(event)](#Router.requestNavigation)
    * [.init(routes)](#Router.init)

<a name="Router.detail"></a>

### Router.detail ⇒ <code>Object</code>
Get details of the current router state.

**Kind**: static property of [<code>Router</code>](#Router)  
**Returns**: <code>Object</code> - - Router details.  
<a name="Router.addRoutes"></a>

### Router.addRoutes(routes, pattern, parent) ⇒ <code>Array.&lt;Object&gt;</code>
Add routes to the router configuration.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Array.&lt;Object&gt;</code> - - Updated routes array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| routes | <code>Array.&lt;Object&gt;</code> |  | Array of route objects. |
| pattern | <code>string</code> |  | URL pattern for the routes. |
| parent | <code>Object</code> \| <code>null</code> | <code></code> | Parent route object. |

<a name="Router.getRoutes"></a>

### Router.getRoutes(route) ⇒ <code>Array.&lt;Object&gt;</code>
Get all routes starting from the provided route.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Array.&lt;Object&gt;</code> - - All routes from the provided route upwards.  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Object</code> | Route object. |

<a name="Router.getQuery"></a>

### Router.getQuery() ⇒ <code>Object</code>
Get query parameters from the URL.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Object</code> - - Query parameters object.  
<a name="Router.getRoute"></a>

### Router.getRoute() ⇒ <code>Object</code> \| <code>null</code>
Get the matching route based on the current URL.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Object</code> \| <code>null</code> - - Matching route object or null if not found.  
<a name="Router.getOutlet"></a>

### Router.getOutlet(route) ⇒ <code>Promise.&lt;HTMLElement&gt;</code>
Get the DOM outlet element for a route.

**Kind**: static method of [<code>Router</code>](#Router)  
**Returns**: <code>Promise.&lt;HTMLElement&gt;</code> - - Promise resolving to the outlet element.  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Object</code> | Route object. |

<a name="Router.emit"></a>

### Router.emit(type, detail)
Emit a custom event.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Event type. |
| detail | <code>any</code> | Event detail. |

<a name="Router.handleNavigation"></a>

### Router.handleNavigation(event)
Handle navigation events.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Navigation event. |

<a name="Router.navigate"></a>

### Router.navigate(url)
Navigate to a specified URL.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL to navigate to. |

<a name="Router.requestNavigation"></a>

### Router.requestNavigation(event)
Request navigation based on a triggered event.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | Click event triggering navigation. |

<a name="Router.init"></a>

### Router.init(routes)
Initialize the router with provided routes.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Array.&lt;Object&gt;</code> | Array of route objects. |

