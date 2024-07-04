<a name="MDPaginationComponent"></a>

## MDPaginationComponent ⇐ <code>MDComponent</code>
A web component for pagination control.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDPaginationComponent#event:onPaginationChange - Fired when the pagination changes.</code>, <code>MDPaginationComponent#event:onPaginationLimitChange - Fired when the pagination limit changes.</code>, <code>MDPaginationComponent#event:onPaginationFirstClick - Fired when the first page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationPrevClick - Fired when the previous page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationNextClick - Fired when the next page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationLastClick - Fired when the last page button is clicked.</code>  
**Tagname**: md-pagination  

* [MDPaginationComponent](#MDPaginationComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDPaginationComponent+properties)
    * [.pages](#MDPaginationComponent+pages) ⇒ <code>Number</code>
    * [.start](#MDPaginationComponent+start) ⇒ <code>Number</code>
    * [.end](#MDPaginationComponent+end) ⇒ <code>Number</code>
    * [.numberStart](#MDPaginationComponent+numberStart) ⇒ <code>Number</code>
    * [.numberEnd](#MDPaginationComponent+numberEnd) ⇒ <code>Number</code>

<a name="MDPaginationComponent+properties"></a>

### mdPaginationComponent.properties
**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| total | <code>Number</code> | The total number of items. |
| limit | <code>Number</code> | The number of items per page. |
| page | <code>Number</code> | The current page number. |

<a name="MDPaginationComponent+pages"></a>

### mdPaginationComponent.pages ⇒ <code>Number</code>
The total number of pages.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+start"></a>

### mdPaginationComponent.start ⇒ <code>Number</code>
The starting index of items on the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+end"></a>

### mdPaginationComponent.end ⇒ <code>Number</code>
The ending index of items on the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+numberStart"></a>

### mdPaginationComponent.numberStart ⇒ <code>Number</code>
The starting item number displayed on the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+numberEnd"></a>

### mdPaginationComponent.numberEnd ⇒ <code>Number</code>
The ending item number displayed on the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
