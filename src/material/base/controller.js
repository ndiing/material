class MDController {
    constructor(host, options = {}) {
        this.host = host;
        this.options = options;
        host.addController(this);
    }

    hostConnected() {}

    hostUpdate() {}

    hostUpdated() {}
    
    hostDisconnected() {}
}

export { MDController };
