const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class ContactModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
    }

    add({ payload }) {
        const method = "crm.contact.add"
        return this.httpClient.call({ method, payload })
    }

    list() {
        const method = "crm.contact.list"
        return this.httpClient.call({ method })
    }
}

module.exports = ContactModule