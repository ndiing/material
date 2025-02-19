class Gesture {
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            resizeHandles: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
            dragAxis: ["x", "y"],
            updateStyle: true,
            ...options,
        };
        this.init();
    }

    handleGestureStart(event) {
        window.addEventListener("pointermove", this.handleGestureMove);
        window.addEventListener("pointerup", this.handleGestureEnd);
        document.body.classList.add("md-gesture--start");
        this.resizeHandleElement = event.target.closest(".md-resizable__handle");
        this.resizeHandle = this.resizeHandleElement?.classList.value.match(/--(\w+)$/)[1];
        this.endX = this.endX || 0;
        this.endY = this.endY || 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;
        this.timeout = setTimeout(() => {
            this.emit("onLongPress");
            this.hold = true;
        }, 300);
    }

    handleGestureMove(event) {
        clearTimeout(this.timeout);
        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;
        this.changedX = currentX - this.endX;
        this.changedY = currentY - this.endY;

        if (this.resizeHandle) {
            if (this.resizeHandle === "e" || this.resizeHandle === "se" || this.resizeHandle === "ne") {
                this.currentWidth = this.startWidth + (currentX - this.endX);
            }

            if (this.resizeHandle === "w" || this.resizeHandle === "sw" || this.resizeHandle === "nw") {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - (currentX - this.endX);
            }

            if (this.resizeHandle === "s" || this.resizeHandle === "se" || this.resizeHandle === "sw") {
                this.currentHeight = this.startHeight + (currentY - this.endY);
            }

            if (this.resizeHandle === "n" || this.resizeHandle === "ne" || this.resizeHandle === "nw") {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - (currentY - this.endY);
            }
            this.resize = (this.resize && "onResize") || "onResizeStart";
            this.emit(this.resize);
        } else if (this.options.dragAxis?.length) {
            if (this.options.dragAxis.includes("x")) {
                this.currentX = currentX;
            }

            if (this.options.dragAxis.includes("y")) {
                this.currentY = currentY;
            }
            this.drag = (this.drag && "onDrag") || "onDragStart";
            this.emit(this.drag);
        }
        this.swipe = !this.resizeHandle && !this.drag && (this.changedX > 30 ? "onSwipeRight" : this.changedX < -30 ? "onSwipeLeft" : this.changedY > 30 ? "onSwipeBottom" : this.changedY < -30 ? "onSwipeTop" : undefined);

        if (this.options.updateStyle) {
            this.host.style.setProperty("position", "relative");
            this.host.style.setProperty("left", (this.currentX || 0) + "px");
            this.host.style.setProperty("top", (this.currentY || 0) + "px");
            this.host.style.setProperty("width", (this.currentWidth || this.startWidth) + "px");
            this.host.style.setProperty("height", (this.currentHeight || this.startHeight) + "px");
        }
    }

    handleGestureEnd(event) {
        clearTimeout(this.timeout);
        this.endX = this.currentX;
        this.endY = this.currentY;

        if (!this.swipe && !this.resize && !this.drag && !this.hold) {
            this.emit("onTap");
            this.lastTime = this.lastTime || 0;

            if (performance.now() - this.lastTime < 300) {
                this.emit("onDoubleTap");
            }
            this.lastTime = performance.now();
        }

        if (this.resize) {
            this.emit("onResizeEnd");
            this.resize = undefined;
        }

        if (this.drag) {
            this.emit("onDragEnd");
            this.drag = undefined;
        }

        if (this.swipe) {
            this.emit(this.swipe);
            this.swipe = undefined;
        }
        this.hold = undefined;
        document.body.classList.remove("md-gesture--start");
        window.removeEventListener("pointermove", this.handleGestureMove);
        window.removeEventListener("pointerup", this.handleGestureEnd);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    init() {
        this.host.classList.add("md-gesture");
        this.resizableElement = document.createElement("div");
        this.resizableElement.classList.add("md-resizable");
        this.options.resizeHandles.forEach((resizeHandle) => {
            const resizeHandleElement = document.createElement("div");
            resizeHandleElement.classList.add("md-resizable__handle", `md-resizable__handle--${resizeHandle}`);
            this.resizableElement.appendChild(resizeHandleElement);
        });
        this.host.prepend(this.resizableElement);
        this.handleGestureStart = this.handleGestureStart.bind(this);
        this.handleGestureMove = this.handleGestureMove.bind(this);
        this.handleGestureEnd = this.handleGestureEnd.bind(this);
        this.host.addEventListener("pointerdown", this.handleGestureStart);
    }

    destroy() {
        this.host.removeEventListener("pointerdown", this.handleGestureStart);
        this.resizableElement.remove();
        this.host.classList.remove("md-gesture");
    }
}
export { Gesture };
