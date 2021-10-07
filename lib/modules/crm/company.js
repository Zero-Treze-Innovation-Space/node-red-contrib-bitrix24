const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class CompanyModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
        this.methods = {
            add: "crm.company.add",
            list: "crm.company.list",
            delete: "crm.company.delete",
            fields: "crm.company.fields"
        }
    }
}

module.exports = CompanyModule