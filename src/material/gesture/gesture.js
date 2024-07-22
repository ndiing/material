

/**
 * {{desc}}
 * @fires MDGestureController#onDragStart - {{desc}}
 * @fires MDGestureController#onResizeStart - {{desc}}
 * @fires MDGestureController#onSelectionStart - {{desc}}
 * @fires MDGestureController#onLongPress - {{desc}}
 * @fires MDGestureController#onDrag - {{desc}}
 * @fires MDGestureController#onResize - {{desc}}
 * @fires MDGestureController#onSelection - {{desc}}
 * @fires MDGestureController#onTap - {{desc}}
 * @fires MDGestureController#onDoubleTap - {{desc}}
 * @fires MDGestureController#onSelectionEnd - {{desc}}
 * @fires MDGestureController#onDragEnd - {{desc}}
 * @fires MDGestureController#onResizeEnd - {{desc}}
 */
class MDGestureController {
    
    
    /**
     * {{desc}}
     * @param {Any} host - {{desc}}
     * @param {Any} options - {{desc}}
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            container: null,
            draggableHandle: null,
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
     * {{desc}}
     * @param {Any} type - {{desc}}
     * @param {Any} detail - {{desc}}
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
     * {{desc}}
     */
    async hostConnected() {
        await this.host.updateComplete;
        this.container = this.host;
        if (this.options.container) {
            if (typeof this.options.container === "string") {
                this.container = this.host.querySelector(this.options.container);
            } else {
                this.container = this.options.container;
            }
        }
        this.container.classList.add("md-gesture");
        this.draggableHandle = this.container;
        if (this.options.draggableHandle) {
            if (typeof this.options.draggableHandle === "string") {
                this.draggableHandle = this.host.querySelector(this.options.draggableHandle);
            } else {
                this.draggableHandle = this.options.draggableHandle;
            }
        }
        this.draggableHandle.classList.add("md-draggable");
        this.resizableContainer = document.createElement("div");
        this.resizableContainer.classList.add("md-resizable");
        for (const direction of this.options.resize) {
            const resizableHandle = document.createElement("div");
            resizableHandle.classList.add("md-resizable__handle");
            resizableHandle.classList.add(`md-resizable__handle--${direction}`);
            this.resizableContainer.append(resizableHandle);
        }
        this.container.append(this.resizableContainer);
        this.handleGesturePointerdown = this.handleGesturePointerdown.bind(this);
        this.handleGesturePointermove = this.handleGesturePointermove.bind(this);
        this.handleGesturePointerup = this.handleGesturePointerup.bind(this);
        this.container.addEventListener("pointerdown", this.handleGesturePointerdown);
    }
    
    
    /**
     * {{desc}}
     */
    async hostDisconnected() {
        await this.host.updateComplete;
        this.container.classList.remove("md-gesture");
        this.draggableHandle.classList.remove("md-draggable");
        this.draggableHandle.classList.remove("md-draggable--dragged");
        this.resizableContainer.remove();
        document.body.classList.remove("md-gesture--unselectable");
        this.container.removeEventListener("pointerdown", this.handleGesturePointerdown);
        window.removeEventListener("pointermove", this.handleGesturePointermove);
        window.removeEventListener("pointerup", this.handleGesturePointerup);
    }
    
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
     */
    handleGesturePointerdown(event) {
        if (event.button !== 0) {
            return;
        }
        let draggableHandle = this.container;
        if (this.options.draggableHandle) {
            draggableHandle = event.target.closest(this.options.draggableHandle);
        }
        let hasDraggableHandle = draggableHandle === this.draggableHandle;
        let resizableHandle = event.target.closest(".md-resizable__handle");
        let resizableDirection;
        if (resizableHandle) {
            resizableDirection = resizableHandle.classList.value.match(/--(\w+)$/)[1];
        }
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
        if (this.options.drag.length && !this.options.dragAfterLongPress && hasDraggableHandle && !resizableDirection) {
            this.drag = true;
            this.draggableHandle.classList.add("md-draggable--dragged");
            this.emit("onDragStart", event);
        }
        this.resize = false;
        if (this.options.resize.length && !this.options.resizeAfterLongPress && resizableDirection) {
            this.resize = resizableDirection;
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
            if (this.options.drag.length && this.options.dragAfterLongPress && hasDraggableHandle && !resizableDirection) {
                this.drag = true;
                this.draggableHandle.classList.add("md-draggable--dragged");
                this.emit("onDragStart", event);
            }
            if (this.options.resize.length && this.options.resizeAfterLongPress && resizableDirection) {
                this.resize = resizableDirection;
                this.emit("onResizeStart", event);
            }
            if (!this.drag && !this.resize && this.options.selectionAfterLongPress && this.options.selection) {
                this.selection = true;
                this.emit("onSelectionStart", event);
            }
        }, 300);
    }
    
    
    /**
     * {{desc}}
     * @param {Any} event - {{desc}}
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
     * {{desc}}
     * @param {Any} event - {{desc}}
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
            this.draggableHandle.classList.remove("md-draggable--dragged");
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
