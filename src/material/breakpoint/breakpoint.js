class MDBreakpoint {
    constructor(callback = () => {}) {
        this.callback = callback;

        this.list = [
            { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
            { name: "medium", media: window.matchMedia("(min-width: 601px) and (max-width: 839px)") },
            { name: "compact", media: window.matchMedia("(max-width: 600px)") },
        ];
    }

    observe() {
        const item = this.list.find((item) => item.media.matches);

        const media = item.media;

        const callback = () => {
            media.removeEventListener("change", callback);
            this.observe();
        };

        media.addEventListener("change", callback);

        this.callback(item);
    }
}

export { MDBreakpoint };

// // Usage example
// const breakpoint = new MDBreakpoint(console.log)
// breakpoint.observe();
