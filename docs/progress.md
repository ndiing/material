## Functions

<dl>
<dt><a href="#start">start([duration])</a> ⇒ <code>Promise</code></dt>
<dd><p>Starts or resumes the animation for a specified duration.
If animation is already running, extends the total duration.</p>
</dd>
<dt><a href="#createProgressBar">createProgressBar()</a></dt>
<dd><p>Creates a progress bar element and appends it to the document body.
Initializes the progress bar with maximum duration.</p>
</dd>
<dt><a href="#pause">pause()</a></dt>
<dd><p>Pauses the currently running animation if any.</p>
</dd>
<dt><a href="#resume">resume()</a></dt>
<dd><p>Resumes a paused animation.</p>
</dd>
<dt><a href="#stop">stop()</a></dt>
<dd><p>Stops the current animation and resets animation variables.</p>
</dd>
<dt><a href="#resetAnimationVariables">resetAnimationVariables()</a></dt>
<dd><p>Resets animation variables and removes the progress bar element.</p>
</dd>
<dt><a href="#loop">loop([resolve])</a></dt>
<dd><p>Recursive function that updates the progress of the animation.</p>
</dd>
</dl>

<a name="start"></a>

## start([duration]) ⇒ <code>Promise</code>
Starts or resumes the animation for a specified duration.
If animation is already running, extends the total duration.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves when the animation completes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>number</code> | <code>10000</code> | The duration of the animation in milliseconds. |

<a name="createProgressBar"></a>

## createProgressBar()
Creates a progress bar element and appends it to the document body.
Initializes the progress bar with maximum duration.

**Kind**: global function  
<a name="pause"></a>

## pause()
Pauses the currently running animation if any.

**Kind**: global function  
<a name="resume"></a>

## resume()
Resumes a paused animation.

**Kind**: global function  
<a name="stop"></a>

## stop()
Stops the current animation and resets animation variables.

**Kind**: global function  
<a name="resetAnimationVariables"></a>

## resetAnimationVariables()
Resets animation variables and removes the progress bar element.

**Kind**: global function  
<a name="loop"></a>

## loop([resolve])
Recursive function that updates the progress of the animation.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [resolve] | <code>function</code> | Optional callback function to be called when animation completes. |

