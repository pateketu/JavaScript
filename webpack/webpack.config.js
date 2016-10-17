var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: ['./app/app.js'],
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js',
        publicPath: '/js/'
    },
    cache: true,
    resolve: {
  root: [
             __dirname + '/app'
        ]
},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    devServer : {
    contentBase : __dirname
  }
};