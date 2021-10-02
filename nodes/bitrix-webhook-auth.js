module.exports = function (RED) {
  function BitrixWebhookAuth(config) {
    RED.nodes.createNode(this, config);
  }

  RED.nodes.registerType("bitrix-webhook-auth", BitrixWebhookAuth, {
    credentials: {
      password: {
        type: "password",
        required: true,
      },
    },
  });
};
