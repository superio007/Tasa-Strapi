export default ({ env }) => ({
  proxy: true,
  url: env('APP_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  allowedHosts: ['i44gk44wc8sk0ww84c8sco4s.82.25.90.229.sslip.io']
});