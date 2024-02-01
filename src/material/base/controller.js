
class MDController {
    
    constructor(host, options = {}) {
        
        this.host = host;

        
        this.options = options;

        // Register the controller with the host element
        host.addController(this);
    }

    
    hostConnected() {}

    
    hostUpdate() {}

    
    hostUpdated() {}

    
    hostDisconnected() {}
}

export { MDController };
