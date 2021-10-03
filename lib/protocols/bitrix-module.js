const createClient = require("../client")

class BitrixModuleProtocol {
    constructor({ portalName, token }) {
        this.httpClient = createClient({ portalName, token })
    }

    add() { throw new Error("Method not implemented yet") }
    remove() { throw new Error("Method not implemented yet") }
    update() { throw new Error("Method not implemented yet") }
    get() { throw new Error("Method not implemented yet") }
    list() { throw new Error("Method not implemented yet") }
}

module.exports = BitrixModuleProtocol