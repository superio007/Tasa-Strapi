export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  allowedHosts: ["bgsko4o4c0k0c0cokcwwwwok.82.25.90.229.sslip.io"],
});
