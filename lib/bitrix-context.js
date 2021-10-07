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

    delete({ id }) {
        return this.module.delete({ id })
    }

    fields() {
        return this.module.fields()
    }
}

module.exports = BitrixContext