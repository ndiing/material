<a name="MDAttributeObserver"></a>

## MDAttributeObserver
Represents an attribute observer that watches changes in a specific attribute of a DOM element.

**Kind**: global class  

* [MDAttributeObserver](#MDAttributeObserver)
    * [new MDAttributeObserver([callback])](#new_MDAttributeObserver_new)
    * [.observe(target, attributeName)](#MDAttributeObserver+observe)

<a name="new_MDAttributeObserver_new"></a>

### new MDAttributeObserver([callback])
Creates an instance of MDAttributeObserver.


| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | The callback function to be called on attribute change. |

<a name="MDAttributeObserver+observe"></a>

### mdAttributeObserver.observe(target, attributeName)
Begins observing changes in the specified attribute of the target DOM element.

**Kind**: instance method of [<code>MDAttributeObserver</code>](#MDAttributeObserver)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Element</code> | The DOM element to observe. |
| attributeName | <code>string</code> | The name of the attribute to observe changes. |

