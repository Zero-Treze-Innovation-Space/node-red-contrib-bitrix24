const BitrixModuleProtocol = require("../../protocols/bitrix-module")

class ContactModule extends BitrixModuleProtocol {
    constructor(config) {
        super(config)
        this.methods = {
            add: "crm.contact.add",
            list: "crm.contact.list",
            delete: "crm.contact.delete"
        }
    }
}

module.exports = ContactModule