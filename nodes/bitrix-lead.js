const createClient = require("../lib/client")
const createLeadService = require("../lib/services/lead-service");
const createStatusNotifier = require("../lib/status-notifier");

module.exports = function (RED) {
  "use strict";
  
  function BitrixLead(n) {
    RED.nodes.createNode(this, n)
    
    // Getting config vars
    const authNode = RED.nodes.getNode(n.auth)
    const portalName = authNode.portalName
    const token = authNode.credentials.token
    const method = n.method
    
    const client = createClient({ portalName, token })
    const leadService = createLeadService({ client })

    this.on("input", ((msg, send, done) => {
      this.status({})
      const { payload, query } = msg
      leadService[method]({ payload, query })
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
  RED.nodes.registerType("bitrix-lead", BitrixLead);
};
