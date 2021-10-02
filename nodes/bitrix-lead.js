module.exports = function (RED) {
  "use strict";  
  
  function BitrixLead(n) {
    RED.nodes.createNode(this, n)
    
    // Getting config vars
    const authNode = RED.nodes.getNode(n.auth)
    const portalName = authNode.portalName
    const token = authNode.credentials.token
    
    this.on("input", ((msg, send, done) => {
      msg.payload = { portalName, token }
      send(msg)
      done()
    }))
  }
  RED.nodes.registerType("bitrix-lead", BitrixLead);
};
