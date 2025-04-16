export default ({ env }) => ({
  proxy: true,
  url: env('APP_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  allowedHosts: ['https://akgswo8ccs0kw8kckg8gg4c8.82.25.90.229.sslip.io/']
});