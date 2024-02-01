
class MDBreakpoint {
    constructor(callback=() => {}) {
        this.callback=callback
        this.medias = [
            { name: "expanded", query: window.matchMedia("(min-width: 840px)") },
            { name: "medium", query: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
            { name: "compact", query: window.matchMedia("(max-width: 599px)") },
        ];
    }

    observe(){
        const media = this.medias.find((media) => media.query.matches);
        const callback = () => {
            media.query.removeEventListener("change", callback);
            this.observe();
        };
        media.query.addEventListener("change", callback);
        this.callback(media);
    }
}

export { MDBreakpoint };

// // Usage example
// const breakpoint=new MDBreakpoint(console.log)
// breakpoint.observe()
