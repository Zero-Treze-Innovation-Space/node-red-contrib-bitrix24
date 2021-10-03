const createClient = require("./client")

class BitrixContext {
    constructor() {
        this.module = null
    }

    setModule(module) {
        this.module = module
    }

    add({ payload }) {
        return this.module.add({ payload })
    }

    list() {
        return this.module.list()
    }
}

module.exports = BitrixContext