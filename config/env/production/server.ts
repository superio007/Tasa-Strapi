export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  allowedHosts: ["http://y4ss8c404k44sokwoo4gwogs.82.25.90.229.sslip.io/"],
});
