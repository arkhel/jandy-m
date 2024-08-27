const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
         apiUrl : JSON.stringify(process.env.apiUrl),
         storageUrl: JSON.stringify(process.env.storageUrl),
         baseHref : JSON.stringify(process.env.baseHref),
         gtagId: JSON.stringify(process.env.gtagId),
         appInsightsKey: JSON.stringify(process.env.appInsightsKey)
       }
    })
  ]
};
