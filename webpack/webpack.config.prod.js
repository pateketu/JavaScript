var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: ['./app/app.js'],
        vendor: ['angular', 'kendo', 'angular-animate']
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'js/app.bundle.[hash].js',
        publicPath: '/'
    },
    cache: true,
    module: {
        loaders: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.html$/,
                exclude: [path.resolve(__dirname, 'index.html'), path.resolve(__dirname, 'index.prod.html')],
                loader: 'ng-cache'
            }
        ]

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
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "js/vendor.bundle.[hash].js"),
        new ExtractTextPlugin("css/app.[hash].css"),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'index.html',
            template: __dirname + '/index.prod.html',
            inject: 'head'
        })
    ],
    devServer: {
        contentBase: __dirname
    }
};