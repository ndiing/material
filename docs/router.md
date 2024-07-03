<a name="MDRouter"></a>

## MDRouter
Router for managing client-side navigation and routing.

**Kind**: global class  
**Emits**: <code>MDRouter#event:onRouterCurrentEntryChange - Triggered when the current route changes.</code>, <code>MDRouter#event:onRouterNavigate - Triggered when navigating to a new route.</code>, <code>MDRouter#event:onRouterNavigateError - Triggered when an error occurs during navigation.</code>, <code>MDRouter#event:onRouterNavigateSuccess - Triggered when navigation to a route is successful.</code>  

* [MDRouter](#MDRouter)
    * [.path](#MDRouter.path)
    * [.query](#MDRouter.query)
    * [.getRoute()](#MDRouter.getRoute)
    * [.getRoutes()](#MDRouter.getRoutes)
    * [.getOutlet()](#MDRouter.getOutlet)
    * [.navigate(url)](#MDRouter.navigate)
    * [.init(routes)](#MDRouter.init)

<a name="MDRouter.path"></a>

### MDRouter.path
{{desc}}

**Kind**: static property of [<code>MDRouter</code>](#MDRouter)  
<a name="MDRouter.query"></a>

### MDRouter.query
{{desc}}

**Kind**: static property of [<code>MDRouter</code>](#MDRouter)  
<a name="MDRouter.getRoute"></a>

### MDRouter.getRoute()
{{desc}}

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
<a name="MDRouter.getRoutes"></a>

### MDRouter.getRoutes()
{{desc}}

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
<a name="MDRouter.getOutlet"></a>

### MDRouter.getOutlet()
{{desc}}

**Kind**: static method of [<code>MDRouter</code>](#MDRouter)  
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

