/**
 * Kelas Movable memungkinkan elemen HTML untuk dipindahkan dan diubah ukurannya
 * dengan interaksi pointer (drag dan resize).
 *
 * @fires Movable#onMovablePointerdown - Dipicu saat pointer mulai melakukan interaksi.
 * @fires Movable#onMovablePointermove - Dipicu saat pointer bergerak selama interaksi.
 * @fires Movable#onMovablePointerup - Dipicu saat pointer dilepaskan setelah interaksi.
 */
class Movable {
    /**
     * Membuat instance Movable.
     * @param {HTMLElement} host - Elemen yang akan dibuat dapat dipindahkan dan diubah ukurannya.
     * @param {Object} [options={}] - Opsi konfigurasi.
     * @param {string[]} [options.axis=["x", "y"]] - Sumbu yang diizinkan untuk pergerakan.
     * @param {string[]} [options.handles=["n", "e", "s", "w", "nw", "ne", "sw", "se"]] - Handle untuk resize.
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
     * Menangani event pointerdown saat interaksi dimulai.
     * @private
     * @param {PointerEvent} event - Event pointerdown.
     */
    handlePointerdown(event) {
        this.handle = event.target.closest(".md-resizable__handle") && event.target.className.match(/--(\w+)/)[1];
        document.body.classList.add("md-user-select--none");
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
     * Menangani event pointermove saat elemen dipindahkan atau diubah ukurannya.
     * @private
     * @param {PointerEvent} event - Event pointermove.
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
     * Menangani event pointerup saat interaksi selesai.
     * @private
     * @param {PointerEvent} event - Event pointerup.
     */
    handlePointerup(event) {
        this.endX = this.currentX;
        this.endY = this.currentY;
        document.body.classList.remove("md-user-select--none");
        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
        this.emit("onMovablePointerup");
    }

    /**
     * Memicu event kustom untuk elemen host.
     * @private
     * @param {string} type - Nama event yang akan dipicu.
     * @param {Object} [detail] - Detail tambahan yang dikirimkan dalam event.
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
     * Menginisialisasi elemen dengan menambahkan handle untuk resize dan event listener.
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
     * Menghapus event listener dan elemen handle saat instance Movable dihancurkan.
     */
    destroy() {
        const resizable = this.host.querySelector(".md-resizable");
        if (resizable) {
            resizable.remove();
        }
        this.host.removeEventListener("pointerdown", this.handlePointerdown);
        this.handlePointerdown = null;
        this.handlePointermove = null;
        this.handlePointerup = null;
    }
}
export { Movable };
