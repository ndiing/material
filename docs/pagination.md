<a name="MDPaginationComponent"></a>

## MDPaginationComponent ⇐ <code>MDComponent</code>
A component for handling pagination in a list or table.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDPaginationComponent#event:onPaginationChange - Event fired when the pagination changes.</code>, <code>MDPaginationComponent#event:onPaginationLimitChange - Event fired when the pagination limit changes.</code>, <code>MDPaginationComponent#event:onPaginationFirstClick - Event fired when the first page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationPrevClick - Event fired when the previous page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationNextClick - Event fired when the next page button is clicked.</code>, <code>MDPaginationComponent#event:onPaginationLastClick - Event fired when the last page button is clicked.</code>  
**Tagname**: md-pagination  

* [MDPaginationComponent](#MDPaginationComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDPaginationComponent+properties)
    * [.options](#MDPaginationComponent+options)
    * [.pages](#MDPaginationComponent+pages)
    * [.start](#MDPaginationComponent+start)
    * [.end](#MDPaginationComponent+end)
    * [.numberStart](#MDPaginationComponent+numberStart)
    * [.numberEnd](#MDPaginationComponent+numberEnd)

<a name="MDPaginationComponent+properties"></a>

### mdPaginationComponent.properties
**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| total | <code>Number</code> | The total number of items. |
| page | <code>Number</code> | The current page number. |
| limit | <code>Number</code> | The number of items per page. |

<a name="MDPaginationComponent+options"></a>

### mdPaginationComponent.options
Options for the number of items per page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+pages"></a>

### mdPaginationComponent.pages
The total number of pages.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+start"></a>

### mdPaginationComponent.start
The starting index for the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+end"></a>

### mdPaginationComponent.end
The ending index for the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+numberStart"></a>

### mdPaginationComponent.numberStart
The starting item number for the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
<a name="MDPaginationComponent+numberEnd"></a>

### mdPaginationComponent.numberEnd
The ending item number for the current page.

**Kind**: instance property of [<code>MDPaginationComponent</code>](#MDPaginationComponent)  
