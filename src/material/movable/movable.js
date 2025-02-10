/**
 *
 * @fires onMovablePointerdown
 * @fires onMovablePointermove
 * @fires onMovablePointerup
 */
class Movable {
    /**
     *
     * @param {Any} [host]
     * @param {Any} [options={}]
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            axis: ["x", "y"],
            handles: ["n", "e", "s", "w", "nw", "ne", "sw", "se"],
            ...options,
        };
        this.init();
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handlePointerdown(event) {
        this.handle = event.target.closest(".md-resizable__handle") && event.target.className.match(/--(\w+)/)[1];
        document.body.classList.add("md-resizable--resize");
        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);
        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;
        this.emit("onMovablePointerdown");
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handlePointermove(event) {
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
        this.host.style.setProperty("position", "relative");
        this.host.style.setProperty("left", (this.currentX ?? 0) + "px");
        this.host.style.setProperty("top", (this.currentY ?? 0) + "px");
        this.host.style.setProperty("width", (this.currentWidth ?? this.startWidth) + "px");
        this.host.style.setProperty("height", (this.currentHeight ?? this.startHeight) + "px");
        this.emit("onMovablePointermove");
    }

    /**
     *
     * @private
     * @param {Any} [event]
     */
    handlePointerup(event) {
        this.endX = this.currentX;
        this.endY = this.currentY;
        document.body.classList.remove("md-resizable--resize");
        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
        this.emit("onMovablePointerup");
    }

    /**
     *
     * @private
     * @param {Any} [type]
     * @param {Any} [detail]
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     *
     */
    init() {
        let text = "";
        text += `<div class="md-resizable">`;
        for (const handle of this.options.handles) {
            text += `<div class="md-resizable__handle md-resizable__handle--${handle}"></div>`;
        }
        text += "</div>";
        this.host.insertAdjacentHTML("afterbegin", text);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.host.addEventListener("pointerdown", this.handlePointerdown);
    }

    /**
     *
     */
    destroy() {}
}
export { Movable };
