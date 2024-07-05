<a name="MDRouter"></a>

## MDRouter
Router for managing client-side navigation and routing.

**Kind**: global class  
**Emits**: <code>MDRouter#event:onRouterCurrentEntryChange - Triggered when the current route changes.</code>, <code>MDRouter#event:onRouterNavigate - Triggered when navigating to a new route.</code>, <code>MDRouter#event:onRouterNavigateError - Triggered when an error occurs during navigation.</code>, <code>MDRouter#event:onRouterNavigateSuccess - Triggered when navigation to a route is successful.</code>  

* [MDRouter](#MDRouter)
    * [.path](#MDRouter.path) ⇒ <code>string</code>
    * [.query](#MDRouter.query) ⇒ <code>Object</code>
    * [.getRoute(path)](#MDRouter.getRoute) ⇒ <code>Object</code>
    * [.getRoutes(route)](#MDRouter.getRoutes) ⇒ <code>Array</code>
    * [.getOutlet(container, route)](#MDRouter.getOutlet) ⇒ <code>Promise.&lt;HTMLElement&gt;</code>
    * [.navigate(url)](#MDRouter.navigate)
    * [.init(routes)](#MDRouter.init)

<a name="MDRouter.path"></a>

### MDRouter.path ⇒ <code>string</code>
Gets the current path of the router.

**Kind**: static property of [<code>MDRouter</code>](#MDRouter)  
**Returns**: <code>string</code> - The current path.  
<a name="MDRouter.query"></a>

### MDRouter.query ⇒ <code>Object</code>
Gets the current query parameters as an object.

**Kind**: static property of [<code>MDRouter</code>](#MDRouter)  
**Returns**: <code>Object</code> - The current query parameters.  
<a name="MDRouter.getRoute"></a>

### MDRouter.getRoute(path) ⇒ <code>Object</code>
Finds and returns a route that matches the given path.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
**Returns**: <code>Object</code> - The matched route.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The path to match. |

<a name="MDRouter.getRoutes"></a>

### MDRouter.getRoutes(route) ⇒ <code>Array</code>
Gets all routes from the root to the specified route.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
**Returns**: <code>Array</code> - An array of routes.  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>Object</code> | The route to start from. |

<a name="MDRouter.getOutlet"></a>

### MDRouter.getOutlet(container, route) ⇒ <code>Promise.&lt;HTMLElement&gt;</code>
Finds and returns the outlet element for a given route.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
**Returns**: <code>Promise.&lt;HTMLElement&gt;</code> - A promise that resolves to the outlet element.  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>HTMLElement</code> | The container element to search within. |
| route | <code>Object</code> | The route to find the outlet for. |

<a name="MDRouter.navigate"></a>

### MDRouter.navigate(url)
Navigates to a new URL, updating browser history.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | URL to navigate to. |

<a name="MDRouter.init"></a>

### MDRouter.init(routes)
Initializes the router with provided route configurations.

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Array</code> | List of route configurations. |

