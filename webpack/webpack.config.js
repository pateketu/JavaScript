var webpack = require('webpack');
var path = require('path');


module.exports = {
    context: __dirname,
    entry: {
        app: ['./app/app.js'],
        vendor: ['angular', 'kendo', 'angular-animate', 'angular-spinners', 'angular-kendo-window']
    },
    output: {
        path: __dirname,
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/async/[id].js',
        publicPath: '/'
    },
    cache: true,
    module: {
        loaders: [{
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            { test: /\.html$/, loader: 'ng-cache' }
        ],


    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        root: [
            __dirname + '/app'
        ],
        alias: {
            'myServices': path.resolve(__dirname, 'app/services')
        }
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "js/vendor.bundle.js"),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        })

    ],
    devServer: {
        contentBase: __dirname
    }
};