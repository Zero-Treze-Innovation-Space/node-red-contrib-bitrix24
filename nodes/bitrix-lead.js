module.exports = function (RED) {
  "use strict";  
  
  function BitrixLead(n) {
    RED.nodes.createNode(this, n)
    
    this.on("input", ((msg, send, done) => {
      send(msg)
      done()
    }))
  }
  RED.nodes.registerType("bitrix-lead", BitrixLead);
};
