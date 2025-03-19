export default ({ env }) => ({
  proxy: true,
  url: env('APP_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  allowedHosts: ['starfish-app-ca2ju.ondigitalocean.app']
});