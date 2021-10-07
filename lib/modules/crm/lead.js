const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class LeadModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
        this.methods = {
            add: "crm.lead.add",
            list: "crm.lead.list",
            delete: "crm.lead.delete"
        }
    }
}

module.exports = LeadModule