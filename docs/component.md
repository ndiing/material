# MDComponent

Base class for a custom MDComponent extending LitElement.
Provides utility methods for event handling.







# on

Adds an event listener bound to the element instance.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | (string) | The type of event to listen for. |
| `listener` | (EventListenerOrEventListenerObject) | The listener function to call when the event occurs. |


# once

Adds a one-time event listener bound to the element instance.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | (string) | The type of event to listen for. |
| `listener` | (EventListenerOrEventListenerObject) | The listener function to call when the event occurs. |


# off

Removes an event listener from the element instance.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | (string) | The type of event to remove the listener from. |
| `listener` | (EventListenerOrEventListenerObject) | The listener function to remove. |


# emit

Dispatches a custom event from the element instance.





#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | (string) | The type of event to dispatch. |
| `detail` | (*) | Any data to pass along with the event. |


