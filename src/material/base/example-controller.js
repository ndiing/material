import { MDController } from "../base/controller";

class MDExampleController extends MDController {
    constructor(host,options={}){
        super(host,{
            // default options
            ...options
        })
    }

    hostConnected() {
        // binding
        this.handleExampleClick = this.handleExampleClick.bind(this);

        // listen
        this.host.addEventListener("click", this.handleExampleClick);
    }

    hostDisconnected() {
        // unlisten
        this.host.removeEventListener("click", this.handleExampleClick);
    }

    handleExampleClick(event) {
        // emit
        this.host.emit("onExampleClick", { event });
    }
}

export { MDExampleController };
