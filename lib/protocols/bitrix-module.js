const createClient = require("../client")

class BitrixModuleProtocol {
    constructor({ portalName, token }) {
        this.httpClient = createClient({ portalName, token })
        this.methods = {}
    }

    add({ payload }) { 
        return this.httpClient.call({ method: this.methods.add, payload })
    }

    list() {
        return this.httpClient.call({ method: this.methods.list })
    }
    
    delete({ id }) {
        return this.httpClient.call({ method: this.methods.delete, id }) 
    }

    fields() {
        return this.httpClient.call({ method: this.methods.fields })
    }

    remove() { throw new Error("Method not implemented yet") }
    update() { throw new Error("Method not implemented yet") }
    get() { throw new Error("Method not implemented yet") }
}

module.exports = BitrixModuleProtocol