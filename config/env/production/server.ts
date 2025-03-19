export default ({ env }) => ({
  proxy: true,
  url: env('APP_URL'), // Sets the public URL of the application.
  app: { 
    keys: env.array('APP_KEYS')
  },
  settings: {
    cors: {
      origin: ['*'], // Allow all origins (not recommended for production)
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  allowedHosts: [
    'starfish-app-ca2ju.ondigitalocean.app', // Add your DigitalOcean app URL here
  ],
});
