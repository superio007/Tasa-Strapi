export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  allowedHosts: ['http://c4ws8s4404ww8ow8wosok004.82.25.90.229.sslip.io/']
});
