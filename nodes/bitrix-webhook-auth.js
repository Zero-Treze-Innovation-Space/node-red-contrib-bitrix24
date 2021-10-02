module.exports = function (RED) {
  function BitrixWebhookAuth(config) {
    RED.nodes.createNode(this, config);
    this.portalName = config.portalName
  }

  RED.nodes.registerType("bitrix-webhook-auth", BitrixWebhookAuth, {
    credentials: {
      token: {
        type: "password",
        required: true,
      },
    },
  });
};
