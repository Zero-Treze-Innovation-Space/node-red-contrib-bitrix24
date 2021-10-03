const BitrixContext = require("../lib/bitrix-context")
const modules = require("../lib/modules").crm

module.exports = function (RED) {
  "use strict";
  
  function BitrixCRM(n) {
    RED.nodes.createNode(this, n)
    
    // Getting config vars
    const authNode = RED.nodes.getNode(n.auth)
    const portalName = authNode.portalName
    const token = authNode.credentials.token
    const bx24Module = n.module
    const method = n.method
    const bx24 = new BitrixContext()
    bx24.setModule(new modules[bx24Module]({ portalName, token }))

    this.on("input", ((msg, send, done) => {
      this.status({})
      const { payload, query } = msg
      bx24[method]({ payload, query })
        .then(data => {
          msg.payload = data
          send(msg)
        })
        .catch(({ response }) => {
          const { status, statusText } = response
          const text = `[${status}] ${statusText}`
          this.status({ text, fill: "red", shape: "ring" })
        })
        .finally(() => done())
    }))
  }
  RED.nodes.registerType("bitrix crm", BitrixCRM);
};
