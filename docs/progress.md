# create

Creates a progress bar element and appends it to the document body.
Initializes the progress bar with maximum duration.







# reset

Resets animation variables and removes the progress bar element.







# observe

Recursive function that updates the progress of the animation.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `resolve` | (function) | Optional callback function to be called when animation completes. |


# start

Starts or resumes the animation for a specified duration.
If animation is already running, extends the total duration.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `duration` | (number) | The duration of the animation in milliseconds. |

#### Returns

| Type | Description |
|------|-------------|
| Promise | A promise that resolves when the animation completes. |

# pause

Pauses the currently running animation if any.







# resume

Resumes a paused animation.







# stop

Stops the current animation and resets animation variables.







