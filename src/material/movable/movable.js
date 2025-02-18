/**
 * Movable class responsible for enabling drag-and-drop and resize functionality on elements.
 */
class Movable {
    /**
     * @typedef {Object
     * @property {Array<string>} [axis=["x", "y"]] - The axis along which the element can be moved.
     * @property {Array<string>} [handles=["n", "e", "s", "w", "nw", "ne", "sw", "se"]] - The resize handles.
     */
    /**
     * Creates an instance of the Movable class.
     * @param {HTMLElement} host - The host element.
     * @param {MovableOptions} [options={}] - Additional options for the movable element.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            axis: ["x", "y"],
            handles: ["n", "e", "s", "w", "nw", "ne", "sw", "se"],
            updateStyle: true,
            ...options,
        };
        this.init();
    }

    // /**
    //  * Handles the pointer down event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer down event.
    //  */
    handleMovableStart(event) {
        this.handle = event.target.closest(".md-resizable__handle") && event.target.className.match(/--(\w+)/)[1];
        document.body.classList.add("md-user-select--none");
        window.addEventListener("pointermove", this.handleMovableMove);
        window.addEventListener("pointerup", this.handleMovableEnd);
        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;
        /**
         * @event onMovableStart
         * @type {Object}
         * @property {Object} event
         * @property {Object} movable
         */
        this.emit("onMovableStart", { event, movable: this });
    }

    // /**
    //  * Handles the pointer move event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer move event.
    //  */
    handleMovableMove(event) {
        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;
        if (this.handle) {
            if (this.handle === "e" || this.handle === "ne" || this.handle === "se") {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }
            if (this.handle === "w" || this.handle === "sw" || this.handle === "nw") {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - currentX + this.endX;
            }
            if (this.handle === "s" || this.handle === "se" || this.handle === "sw") {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }
            if (this.handle === "n" || this.handle === "ne" || this.handle === "nw") {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - currentY + this.endY;
            }
        } else {
            if (this.options.axis.includes("x")) {
                this.currentX = currentX;
            }
            if (this.options.axis.includes("y")) {
                this.currentY = currentY;
            }
        }
        if (this.options.updateStyle) {
            this.host.style.setProperty("position", "relative");
            this.host.style.setProperty("left", (this.currentX ?? 0) + "px");
            this.host.style.setProperty("top", (this.currentY ?? 0) + "px");
            this.host.style.setProperty("min-width", (this.currentWidth ?? this.startWidth) + "px");
            this.host.style.setProperty("min-height", (this.currentHeight ?? this.startHeight) + "px");
        }
        /**
         * @event onMovableMove
         * @type {Object}
         * @property {Object} event
         * @property {Object} movable
         */
        this.emit("onMovableMove", { event, movable: this });
    }

    // /**
    //  * Handles the pointer up event for dragging and resizing.
    //  * @param {PointerEvent} event - The pointer up event.
    //  */
    handleMovableEnd(event) {
        this.endX = this.currentX;
        this.endY = this.currentY;
        document.body.classList.remove("md-user-select--none");
        window.removeEventListener("pointermove", this.handleMovableMove);
        window.removeEventListener("pointerup", this.handleMovableEnd);
        /**
         * @event onMovableEnd
         * @type {Object}
         * @property {Object} event
         * @property {Object} movable
         */
        this.emit("onMovableEnd", { event, movable: this });
    }

    // /**
    //  * Emits a custom event from the host element.
    //  * @param {string} type - The type of event to emit.
    //  * @param {Object} [detail] - The event detail.
    //  */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     * Initializes the movable functionality by adding resize handles and event listeners.
     */
    init() {
        let text = "";
        text += `<div class="md-resizable">`;
        for (const handle of this.options.handles) {
            text += `<div class="md-resizable__handle md-resizable__handle--${handle}"></div>`;
        }
        text += "</div>";
        this.host.insertAdjacentHTML("afterbegin", text);
        this.handleMovableStart = this.handleMovableStart.bind(this);
        this.handleMovableMove = this.handleMovableMove.bind(this);
        this.handleMovableEnd = this.handleMovableEnd.bind(this);
        this.host.addEventListener("pointerdown", this.handleMovableStart);
    }

    /**
     * Destroys the movable functionality by removing resize handles and event listeners.
     */
    destroy() {
        const resizable = this.host.querySelector(".md-resizable");
        if (resizable) {
            resizable.remove();
        }
        this.host.removeEventListener("pointerdown", this.handleMovableStart);
        this.handleMovableStart = null;
        this.handleMovableMove = null;
        this.handleMovableEnd = null;
    }
}
export { Movable };
