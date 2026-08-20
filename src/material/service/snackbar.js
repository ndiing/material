import { TaskQueue } from "../core/task-queue.js";


/**
 * @class Snackbar
 */
class Snackbar {
    queue = new TaskQueue();

    constructor() {
        this.close = this.close.bind(this);
    }

    
    /**
     * 
     */
    show(params = {}) {
        const { supporting, actions = [], timeout = 5000 } = params;
        this.queue.add(
            () =>
                new Promise((resolve) => {
                    this.snackbar = document.createElement("md-snackbar");

                    const remove = () => {
                        this.snackbar.removeEventListener("after-close", remove);
                        this.snackbar.remove();
                        resolve();
                    };
                    this.snackbar.addEventListener("after-close", remove);

                    this.snackbar.supporting = supporting;
                    this.snackbar.actions = actions.map((action) => {
                        const originalHandler = action.click || action.click;
                        const handlerWrapper = (event) => {
                            if (originalHandler) {
                                originalHandler(originalHandler);
                            }
                            this.close();
                        };
                        if (action.component === "button") {
                            return { ...action, click: handlerWrapper };
                        }
                        if (action.component === "icon-button") {
                            return { ...action, click: handlerWrapper };
                        }
                        return action;
                    });

                    document.body.append(this.snackbar);

                    this.snackbar.show();

                    this.timeout = window.setTimeout(this.close, timeout);
                }),
        );
    }

    
    /**
     * 
     */
    close() {
        window.clearTimeout(this.timeout);
        this.snackbar.close();
    }
}

export default new Snackbar();
