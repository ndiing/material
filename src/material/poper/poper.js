import { MDController } from "../base/controller";

class MDPoperController extends MDController {
    constructor(host, options = {}) {
        super(host, {
            // default options
            button: null,
            container: host,
            placement: "top",
            offset:0,
            ...options,
        });
    }

    hostConnected() {
        this.options.container.classList.add('md-poper')
    }

    hostDisconnected() {
        this.options.container.classList.remove('md-poper')
    }

    setPlacement() {
        const buttonRect = this.options.button.getBoundingClientRect();
        const containerRect = this.options.container.getBoundingClientRect();

        const placements = [
            { placement: "top-end", left: buttonRect.right - containerRect.width, top: buttonRect.top - containerRect.height -this.options.offset },
            { placement: "top", left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top - containerRect.height -this.options.offset },
            { placement: "top-start", left: buttonRect.left, top: buttonRect.top - containerRect.height -this.options.offset },

            { placement: "right-end", left: buttonRect.right+this.options.offset, top: buttonRect.bottom - containerRect.height },
            { placement: "right", left: buttonRect.right+this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2 },
            { placement: "right-start", left: buttonRect.right+this.options.offset, top: buttonRect.top },

            { placement: "bottom-start", left: buttonRect.left, top: buttonRect.bottom+this.options.offset },
            { placement: "bottom", left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom+this.options.offset },
            { placement: "bottom-end", left: buttonRect.right - containerRect.width, top: buttonRect.bottom+this.options.offset },

            { placement: "left-start", left: buttonRect.left - containerRect.width-this.options.offset, top: buttonRect.top },
            { placement: "left", left: buttonRect.left - containerRect.width-this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2 },
            { placement: "left-end", left: buttonRect.left - containerRect.width-this.options.offset, top: buttonRect.bottom - containerRect.height },
            
        ];

        // const { left, top } = placements[index%placements.length]

        const { left, top } = placements.find((placement) => {
            return placement.placement === this.options.placement;
        });

        this.options.container.style.setProperty("left", `${left}px`);
        this.options.container.style.setProperty("top", `${top}px`);
    }
}

export { MDPoperController };
