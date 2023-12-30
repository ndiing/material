## Classes

<dl>
<dt><a href="#Router">Router</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Route">Route</a> : <code>Object</code></dt>
<dd><p>Represents a route configuration object.</p>
</dd>
</dl>

<a name="Router"></a>

## Router
**Kind**: global class  
**Author**: Ridho Prasetya  

* [Router](#Router)
    * [new Router()](#new_Router_new)
    * _instance_
        * [.controller](#Router+controller) : <code>AbortController</code> \| <code>null</code>
    * _static_
        * [.navigate(url)](#Router.navigate)
        * [.init(routes)](#Router.init)

<a name="new_Router_new"></a>

### new Router()
This class manages route configurations and navigation within a web application.

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
| routes | <code>Array.&lt;Object&gt;</code> | Array of route objects. |

<a name="Route"></a>

## Route : <code>Object</code>
Represents a route configuration object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Represents the path of the route. |
| component | <code>HTMLElement</code> | Represents the component associated with the route. |
| load | <code>function</code> | Function to load the route's content. |
| beforeLoad | <code>function</code> | Function executed before loading the route's content. |
| children | [<code>Array.&lt;Route&gt;</code>](#Route) | Represents any child routes associated with this route. |
| redirect | <code>string</code> | Represents the redirect path if needed. |

