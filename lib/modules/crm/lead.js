const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class LeadModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
    }

    add({ payload }) {
        const method = "crm.lead.add"
        return this.httpClient.call({ method, payload })
    }

    list() {
        const method = "crm.lead.list"
        return this.httpClient.call({ method })
    }
}

module.exports = LeadModule