class TaskQueue {
    constructor(options = {}) {
        this.queue = [];
        this.isProcessing = false;
        this.maxRetries = options.maxRetries || 0;
        this.retryDelay = options.retryDelay || 1000;
        this.timeout = options.timeout || 0;
    }

    add(task, options = {}) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                task,
                resolve,
                reject,
                retries: options.retries ?? this.maxRetries,
                timeout: options.timeout ?? this.timeout,
                attempts: 0,
            });
            this._process();
        });
    }

    async _process() {
        if (this.isProcessing || this.queue.length === 0) return;

        this.isProcessing = true;
        const item = this.queue.shift();

        try {
            let taskPromise = item.task();
            if (item.timeout > 0) {
                taskPromise = withTimeout(taskPromise, item.timeout);
            }

            const result = await taskPromise;
            item.resolve(result);
        } catch (error) {
            if (item.retries > 0 && item.attempts < item.retries) {
                item.attempts++;
                console.warn(`[TaskQueue] Retry ${item.attempts}/${item.retries} for task`);

                setTimeout(() => {
                    this.queue.unshift(item);
                    this._process();
                }, this.retryDelay);
            } else {
                item.reject(error);
            }
        } finally {
            if (!item.retries || item.attempts >= item.retries || !item.reject) {
                this.isProcessing = false;
                this._process();
            }
        }
    }

    async onIdle() {
        while (this.isProcessing || this.queue.length > 0) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }

    clear() {
        const pending = this.queue.length;
        this.queue = [];
        return pending;
    }

    get size() {
        return this.queue.length;
    }

    get isRunning() {
        return this.isProcessing;
    }
}

export { TaskQueue };
