import { TaskQueue } from "../core/task-queue.js";

class Snackbar {
    queue = new TaskQueue();

    constructor() {
        this.close = this.close.bind(this);
    }

    show({ supporting, actions = [], timeout = 5000 } = {}) {
        this.queue.add(
            () =>
                new Promise((resolve) => {
                    this.snackbar = document.createElement("md-snackbar");

                    const remove = () => {
                        this.snackbar.off("onSnackbarClosed", remove);
                        this.snackbar.remove();
                        resolve();
                    };
                    this.snackbar.on("onSnackbarClosed", remove);

                    this.snackbar.supporting = supporting;
                    this.snackbar.actions = actions.map((action) => {
                        const originalHandler = action.onButtonClick || action.onIconButtonClick;
                        const handlerWrapper = (event) => {
                            if (originalHandler) {
                                originalHandler(originalHandler);
                            }
                            this.close();
                        };
                        if (action.component === "button") {
                            return { ...action, onButtonClick: handlerWrapper };
                        }
                        if (action.component === "icon-button") {
                            return { ...action, onIconButtonClick: handlerWrapper };
                        }
                        return action;
                    });

                    document.body.append(this.snackbar);

                    this.snackbar.show();

                    this.timeout = window.setTimeout(this.close, timeout);
                }),
        );
    }

    close() {
        window.clearTimeout(this.timeout);
        this.snackbar.close();
    }
}

export default new Snackbar();
