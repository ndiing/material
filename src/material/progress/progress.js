/**
 * Class untuk mengelola indikator progres berbasis animasi.
 */
class Progress {
    /**
     * Inisialisasi properti untuk progres.
     */
    constructor() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.progressIndicator = null;
    }

    /**
     * Membuat dan menampilkan elemen indikator progres jika belum ada.
     * @private
     */
    render() {
        if (!this.progressIndicator) {
            this.progressIndicator = document.createElement("md-progress-indicator");
            this.progressIndicator.classList.add("md-progress");
            document.body.insertBefore(this.progressIndicator, document.body.nextElementSibling);
        }
    }

    /**
     * Memulai atau menambahkan durasi ke animasi progres.
     *
     * @param {number} newDuration - Durasi tambahan dalam milidetik.
     */
    start(newDuration) {
        this.duration += newDuration;
        if (this.startTime === null) {
            this.startTime = performance.now();
            this.render();
        }
        if (!this.requestId) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        }
    }

    /**
     * Mengupdate progres berdasarkan waktu yang telah berlalu.
     *
     * @private
     * @param {DOMHighResTimeStamp} currentTime - Waktu saat ini dalam milidetik.
     */
    step(currentTime) {
        if (!this.progressIndicator) return;
        let elapsed = currentTime - this.startTime;
        let progress = Math.min(elapsed / this.duration, 1);
        this.progressIndicator.max = this.duration;
        this.progressIndicator.value = elapsed;
        if (progress < 1) {
            this.requestId = requestAnimationFrame(this.step.bind(this));
        } else {
            this.reset();
        }
    }

    /**
     * Menghapus elemen indikator progres dari DOM.
     * @private
     */
    remove() {
        if (this.progressIndicator) {
            this.progressIndicator.remove();
            this.progressIndicator = null;
        }
    }

    /**
     * Mengatur ulang progres dan menghapus indikator.
     * @private
     */
    reset() {
        this.startTime = null;
        this.duration = 0;
        this.requestId = null;
        this.remove();
    }
}
export { Progress };
