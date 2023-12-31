## Classes

<dl>
<dt><a href="#Router">Router</a></dt>
<dd><p>A simple router implementation for managing routes.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Route">Route</a> : <code>Object</code></dt>
<dd><p>Object representing a route configuration.</p>
</dd>
</dl>

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

<a name="Router.init"></a>

### Router.init(routes)
Initialize the router with provided routes.

**Kind**: static method of [<code>Router</code>](#Router)  

| Param | Type | Description |
| --- | --- | --- |
| routes | <code>Route.&lt;Array&gt;</code> | Array of route objects. |

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

