export default ({env}) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
      providerOptions: {
        publicKey: env('IMAGEKIT_PUBLIC_KEY'),
        privateKey: env('IMAGEKIT_PRIVATE_KEY'),
        urlEndpoint: env('IMAGEKIT_URL_ENDPOINT'),

        // Optional
        params: {
            folder: env('IMAGEKIT_FOLDER'),
        }
      }
    }
  }
});