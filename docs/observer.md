<a name="MDObserver"></a>

## MDObserver
Represents a media observer that watches changes in media queries.
Use this class to observe changes in media queries based on a provided list.

**Kind**: global class  

* [MDObserver](#MDObserver)
    * [new MDObserver([callback])](#new_MDObserver_new)
    * [.observe(list)](#MDObserver+observe)

<a name="new_MDObserver_new"></a>

### new MDObserver([callback])
Creates an instance of MDObserver.


| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | The callback function to be called on query change. |

<a name="MDObserver+observe"></a>

### mdObserver.observe(list)
Begins observing changes in media queries based on the provided list.

**Kind**: instance method of [<code>MDObserver</code>](#MDObserver)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array.&lt;{name: string, query: string}&gt;</code> | The list of media queries to observe. |

