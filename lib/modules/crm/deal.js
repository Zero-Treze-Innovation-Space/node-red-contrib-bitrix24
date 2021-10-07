const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class DealModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
        this.methods = {
            add: "crm.deal.add",
            list: "crm.deal.list",
            delete: "crm.deal.delete"
        }
    }
}

module.exports = DealModule