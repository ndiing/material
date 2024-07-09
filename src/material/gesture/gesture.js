/**
 * MDGestureController manages gesture events like drag, resize, selection, taps, double taps, long presses, and swipes.
 * @fires MDGestureController#onDragStart - Event fired when drag starts.
 * @fires MDGestureController#onResizeStart - Event fired when resize starts.
 * @fires MDGestureController#onSelectionStart - Event fired when selection starts.
 * @fires MDGestureController#onLongPress - Event fired on long press.
 * @fires MDGestureController#onDrag - Event fired during drag.
 * @fires MDGestureController#onResize - Event fired during resize.
 * @fires MDGestureController#onSelection - Event fired during selection.
 * @fires MDGestureController#onTap - Event fired on tap.
 * @fires MDGestureController#onDoubleTap - Event fired on double tap.
 * @fires MDGestureController#onSwipeLeft - Event fired on swipe left.
 * @fires MDGestureController#onSwipeRight - Event fired on swipe right.
 * @fires MDGestureController#onSwipeTop - Event fired on swipe top.
 * @fires MDGestureController#onSwipeBottom - Event fired on swipe bottom.
 * @fires MDGestureController#onSelectionEnd - Event fired when selection ends.
 * @fires MDGestureController#onDragEnd - Event fired when drag ends.
 * @fires MDGestureController#onResizeEnd - Event fired when resize ends.
 */
class MDGestureController {
    /**
     * Creates an instance of MDGestureController.
     * @param {HTMLElement} host - The host element to attach gesture events to.
     * @param {Object} options - Options for configuring gesture behavior.
     * @property {string} [options.containerSelector] - Selector for the container element within the host.
     * @property {string} [options.dragHandleSelector] - Selector for the drag handle element within the container.
     * @property {string[]} [options.drag=["x", "y"]] - Directions in which dragging is allowed ('x', 'y', or both).
     * @property {boolean} [options.dragAfterLongPress=false] - Whether dragging should start after a long press.
     * @property {string[]} [options.resize=["n", "e", "s", "w", "ne", "se", "sw", "nw"]] - Directions in which resizing is allowed ('n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw').
     * @property {boolean} [options.resizeAfterLongPress=false] - Whether resizing should start after a long press.
     * @property {boolean} [options.selection=false] - Whether selection is enabled.
     * @property {boolean} [options.selectionAfterLongPress=false] - Whether selection should start after a long press.
     * @property {boolean} [options.updateStyle=false] - Whether to update the element style during gestures.
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            containerSelector: undefined,
            dragHandleSelector: undefined,
            drag: ["x", "y"],
            dragAfterLongPress: false,
            resize: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
            resizeAfterLongPress: false,
            selection: false,
            selectionAfterLongPress: false,
            updateStyle: false,
            ...options,
        };
    }

    /**
     * Emits a custom event with specified type and detail.
     * @param {string} type - The type of event to emit.
     * @param {Object} detail - Additional details to include with the event.
     * @private
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.container.dispatchEvent(event);
    }

    /**
     * Handles setup when the host element is connected to the DOM.
     * @private
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.containerSelector ? this.host.querySelector(this.options.containerSelector) : this.host;

        this.container.classList.add("md-gesture");

        if (this.options.drag.length) {
            this.dragHandle = this.options.dragHandleSelector ? this.container.querySelector(this.options.dragHandleSelector) : this.container;
            this.dragHandle.classList.add("md-draggable");
        }

        if (this.options.resize.length) {
            this.resizable = document.createElement("div");
            this.resizable.classList.add("md-resizable");

            for (const direction of this.options.resize) {
                const handle = document.createElement("div");
                handle.classList.add("md-resizable__handle");
                handle.classList.add("md-resizable__handle--" + direction);
                this.resizable.append(handle);
            }

            this.container.append(this.resizable);
        }

        this.handleGesturePointerdown = this.handleGesturePointerdown.bind(this);
        this.handleGesturePointermove = this.handleGesturePointermove.bind(this);
        this.handleGesturePointerup = this.handleGesturePointerup.bind(this);

        this.container.addEventListener("pointerdown", this.handleGesturePointerdown);
    }

    /**
     * Handles cleanup when the host element is disconnected from the DOM.
     * @private
     */
    async hostDisconnected() {
        await this.host.updateComplete;
    }

    /**
     * Handles pointer down event for initiating gestures.
     * @param {PointerEvent} event - The pointer down event.
     * @private
     */
    handleGesturePointerdown(event) {
        if (event.button !== 0) {
            return;
        }

        const dragHandle = (this.options.dragHandleSelector ? event.target.closest(this.options.dragHandleSelector) : this.container) === this.dragHandle;
        const resizeDirection = event.target.closest(".md-resizable__handle")?.classList.value.match(/--(\w+)$/)[1];

        window.addEventListener("pointermove", this.handleGesturePointermove);
        window.addEventListener("pointerup", this.handleGesturePointerup);

        document.body.classList.add("md-gesture--unselectable");

        this.endX = this.endX || 0;
        this.endY = this.endY || 0;

        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;

        this.startWidth = this.container.clientWidth;
        this.startHeight = this.container.clientHeight;

        this.swipe = false;

        this.drag = false;
        this.dragged = false;
        if (!this.options.dragAfterLongPress && dragHandle && !resizeDirection) {
            this.drag = true;
            this.dragHandle.classList.add("md-draggable--drag");
            this.emit("onDragStart", event);
        }

        this.resize = false;
        if (!this.options.resizeAfterLongPress && resizeDirection) {
            this.resize = resizeDirection;
            this.emit("onResizeStart", event);
        }

        this.selection = false;
        if (!this.options.selectionAfterLongPress && this.options.selection) {
            this.selection = true;
            this.emit("onSelectionStart", event);
        }

        this.longPress = false;
        this.longPressTimeout = window.setTimeout(() => {
            this.longPress = true;
            this.emit("onLongPress", event);

            if (this.options.dragAfterLongPress && dragHandle && !resizeDirection) {
                this.drag = true;
                this.dragHandle.classList.add("md-draggable--drag");
                this.emit("onDragStart", event);
            }

            if (this.options.resizeAfterLongPress && resizeDirection) {
                this.resize = resizeDirection;
                this.emit("onResizeStart", event);
            }

            if (!this.drag && !this.resize && this.options.selectionAfterLongPress && this.options.selection) {
                this.selection = true;
                this.emit("onSelectionStart", event);
            }
        }, 300);
    }

    /**
     * Handles pointer move event for updating gestures.
     * @param {PointerEvent} event - The pointer move event.
     * @private
     */
    handleGesturePointermove(event) {
        window.clearTimeout(this.longPressTimeout);

        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;

        this.swipe = !this.drag && !this.resize && (currentX - this.endX < -30 ? "Left" : currentY - this.endY < -30 ? "Top" : currentX - this.endX > 30 ? "Right" : currentY - this.endY > 30 ? "Bottom" : "");

        if (this.drag) {
            this.dragged = true;
            if (this.options.drag.includes("x")) {
                this.currentX = currentX;
            }
            if (this.options.drag.includes("y")) {
                this.currentY = currentY;
            }

            this.emit("onDrag", event);
        }

        if (this.resize) {
            if (this.resize.includes("e")) {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }
            if (this.resize.includes("s")) {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }
            if (this.resize.includes("w")) {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - this.currentX + this.endX;
            }
            if (this.resize.includes("n")) {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - this.currentY + this.endY;
            }
            this.emit("onResize", event);
        }

        if (this.selection) {
            this.emit("onSelection", event);
        }

        if (this.options.updateStyle) {
            this.container.style.left = (this.currentX ?? 0) + "px";
            this.container.style.top = (this.currentY ?? 0) + "px";
            this.container.style.width = (this.currentWidth ?? this.startWidth) + "px";
            this.container.style.height = (this.currentHeight ?? this.startHeight) + "px";
        }
    }

    /**
     * Handles pointer up event for finalizing gestures.
     * @param {PointerEvent} event - The pointer up event.
     * @private
     */
    handleGesturePointerup(event) {
        window.clearTimeout(this.longPressTimeout);

        if (this.options.updateStyle) {
            this.endX = this.currentX;
            this.endY = this.currentY;
        }

        if (!this.longPress && !this.swipe && !this.dragged) {
            this.emit("onTap", event);
            if (performance.now() - this.lastTap < 300) {
                if (this.lastTap - this.lastDoubleTap !== 0) {
                    this.emit("onDoubleTap", event);
                }
                this.lastDoubleTap = performance.now();
            }
            this.lastTap = performance.now();
        }

        if (this.swipe && !this.selection) {
            this.emit("onSwipe" + this.swipe, event);
        }

        if (this.selection) {
            this.emit("onSelectionEnd", event);
        }

        if (this.drag) {
            this.dragHandle.classList.remove("md-draggable--drag");
            this.emit("onDragEnd", event);
        }

        if (this.resize) {
            this.emit("onResizeEnd", event);
        }

        document.body.classList.remove("md-gesture--unselectable");

        window.removeEventListener("pointermove", this.handleGesturePointermove);
        window.removeEventListener("pointerup", this.handleGesturePointerup);
    }
}

export { MDGestureController };
